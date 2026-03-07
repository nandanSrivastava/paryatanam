"use client";
import { Button } from "@/components/ui/Button";
import {
  Calendar,
  User,
  CheckCircle2,
  Sparkles,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { TourPackage } from "@/lib/data";
import { cn } from "@/lib/utils";

interface BookingCardProps {
  tour: TourPackage;
}

export function BookingCard({ tour }: BookingCardProps) {
  const [packageType, setPackageType] = useState<"standard" | "value" | "premium" | "exclusive">("value");
  
  const packagePrices = tour.tierPrices || {
    exclusive: tour.price * 1.5,
    premium: tour.price * 1.2,
    value: tour.price,
    standard: tour.price * 0.9
  };

  const isFamily = tour.categoryId === "family-trip";
  const isSchool = tour.categoryId === "school-group";
  const divisor = isSchool ? 1 : (isFamily ? 6 : 2); 

  // If perPersonPrice is provided in data, use it for the primary display
  const adultPriceToDisplay = (packageType === "standard" || packageType === "value") && tour.perPersonPrice 
    ? tour.perPersonPrice 
    : Math.round(packagePrices[packageType] / divisor);

  const originalFullPrice = packagePrices[packageType] * 1.2;
  const discount = Math.round(((originalFullPrice - packagePrices[packageType]) / originalFullPrice) * 100);

  const [date, setDate] = useState<string>("");
  const [travellers, setTravellers] = useState<string>(isSchool ? "Min. 15 Persons" : (isFamily ? "6 Persons" : "2 Adults, 0 Children"));
  const today = new Date().toISOString().split("T")[0];

  const handleSendEnquiry = () => {
    const phone = "919288202060";
    const message = `Hi, I am doing Enquiry for ${tour.title} [${packageType.toUpperCase()} Package], with Travel Date: ${date || "Not specified"}, Travelers: ${travellers || "Not specified"} via: Paryatanam website`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-gray-100 overflow-hidden lg:sticky lg:top-24 hover:shadow-3xl transition-shadow duration-500">
      {/* Pricing Section */}
      <div className="p-5 sm:p-6 md:p-8 bg-gradient-primary text-white relative overflow-hidden">
        <div className="hidden sm:block absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <span className="flex items-center gap-1.5 text-xs sm:text-sm bg-gradient-secondary px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-primary font-bold shadow-lg">
              <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {discount}% OFF
            </span>
            <span className="text-white/70 line-through text-sm sm:text-base">
              ₹{Math.round(originalFullPrice / divisor).toLocaleString()}
            </span>
          </div>
          <div className="flex flex-wrap items-baseline gap-2 mb-2">
            <span className="text-3xl xs:text-4xl sm:text-5xl font-bold">
              ₹{Math.round(adultPriceToDisplay).toLocaleString()}
            </span>
            <span className="text-sm sm:text-base text-white/80">
              / per person
            </span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            {tour.minPeople}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="p-5 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
        
        {/* Package Type Selection */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 mb-3 tracking-wider">
            Type of Tour - Your Journey, Your Comfort
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { id: 'exclusive', label: 'Exclusive', sub: 'Elite Trip' },
              { id: 'premium', label: 'Premium', sub: 'High-quality experience' },
              { id: 'value', label: 'Value', sub: 'Better comfort' },
              { id: 'standard', label: 'Standard', sub: 'Budget travellers' },
            ].map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setPackageType(pkg.id as any)}
                className={cn(
                  "p-3 rounded-xl border-2 transition-all text-left flex flex-col gap-0.5",
                  packageType === pkg.id 
                    ? `border-primary bg-primary/5 shadow-inner` 
                    : "border-gray-100 hover:border-gray-300"
                )}
              >
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs font-bold uppercase", packageType === pkg.id ? "text-primary" : "text-gray-500")}>
                    {pkg.label}
                  </span>
                  {packageType === pkg.id && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                </div>
                <span className="text-sm font-bold text-gray-900">₹{packagePrices[pkg.id as keyof typeof packagePrices].toLocaleString()}</span>
                <span className="text-[10px] text-gray-500 font-medium">→ {pkg.sub}</span>
              </button>
            ))}
          </div>

          {/* Tier Details if any */}
          {tour.tierDetails && tour.tierDetails[packageType] && (
            <div className="mt-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Package Inclusions:</h4>
              <ul className="space-y-1.5">
                {tour.tierDetails[packageType].map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5 font-bold" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button className="w-full mt-3 p-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 transition-all text-left group">
             <div className="flex items-center justify-between">
               <span className="text-xs font-bold uppercase text-gray-500 group-hover:text-primary transition-colors">Customize Your Package</span>
               <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary transition-colors" />
             </div>
             <p className="text-[10px] text-gray-500 mt-0.5">Enter travel preferences for personalized itinerary</p>
          </button>
        </div>

        {/* Date Selector */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 mb-2.5 sm:mb-3 tracking-wider">
            Select Travel Date
          </label>
          <div className="border-2 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 cursor-pointer hover:border-primary active:border-primary hover:bg-primary/5 active:bg-primary/10 transition-all touch-manipulation">
            <div className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 rounded-lg sm:rounded-xl bg-secondary/20 flex items-center justify-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <input
              type="date"
              aria-label="Choose travel date"
              value={date}
              min={today}
              onChange={(e) => setDate(e.target.value)}
              className="w-full outline-none text-sm sm:text-base font-medium text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        {/* Guest Selector */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-600 mb-2.5 sm:mb-3 tracking-wider">
            Number of Travelers
          </label>
          <div className="border-2 border-gray-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-2.5 sm:gap-3 cursor-pointer hover:border-primary active:border-primary hover:bg-primary/5 active:bg-primary/10 transition-all touch-manipulation">
            <div className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 shrink-0 rounded-lg sm:rounded-xl bg-secondary/20 flex items-center justify-center">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <input
              type="number"
              placeholder="2 Adults, 0 Children"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="w-full outline-none text-sm sm:text-base font-medium text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        {/* Action Button */}
        <Button
          size="lg"
          className="w-full bg-gradient-secondary hover:bg-secondary/90 active:bg-secondary text-primary font-bold text-base sm:text-lg h-14 sm:h-16 shadow-luxury active:scale-[0.98] sm:hover:shadow-2xl sm:hover:scale-105 transition-all duration-300 touch-manipulation"
          onClick={handleSendEnquiry}
        >
          Send Enquiry
        </Button>

        <p className="text-center text-xs sm:text-sm text-gray-500 font-medium">
          No payment required now • Confirm over call
        </p>
      </div>

      {/* Trust Badges */}
      <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 pt-0">
        <hr className="border-gray-200 mb-5 sm:mb-6" />
        <div className="space-y-3 sm:space-y-4">
          {[
            { label: "Best Price Guarantee", icon: CheckCircle2 },
            { label: "Instant Confirmation", icon: CheckCircle2 },
            { label: "24/7 Customer Support", icon: CheckCircle2 },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-700 group hover:text-primary active:text-primary transition-colors"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-active:bg-primary/10 transition-colors">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
