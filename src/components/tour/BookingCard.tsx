import { Button } from "@/components/ui/Button";
import { Calendar, User, CheckCircle2 } from "lucide-react";
import { TourPackage } from "@/lib/data";

interface BookingCardProps {
  tour: TourPackage;
}

export function BookingCard({ tour }: BookingCardProps) {
  const discount = Math.round(
    ((tour.originalPrice - tour.price) / tour.originalPrice) * 100,
  );

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
      {/* Pricing Section */}
      <div className="p-6 bg-[#0B3D2E] text-white">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm bg-white/20 px-2 py-0.5 rounded text-white font-medium">
            {discount}% OFF
          </span>
          <span className="text-gray-300 line-through text-sm">
            ₹{tour.originalPrice.toLocaleString()}
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">
            ₹{tour.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-300">/ per adult</span>
        </div>
        <p className="text-xs text-gray-300 mt-2">{tour.minPeople}</p>
      </div>

      {/* Booking Form */}
      <div className="p-6 space-y-6">
        {/* Date Selector */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
            Select Travel Date
          </label>
          <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-primary transition-colors">
            <Calendar className="w-5 h-5 text-secondary" />
            <input
              type="text"
              placeholder="Choose Date"
              className="w-full outline-none text-sm font-medium text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Guest Selector */}
        <div>
          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
            Travelers
          </label>
          <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-primary transition-colors">
            <User className="w-5 h-5 text-secondary" />
            <input
              type="number"
              placeholder="2 Adults, 0 Children"
              className="w-full outline-none text-sm font-medium text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Action Button */}
        <Button
          size="lg"
          className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14"
        >
          Send Enquiry
        </Button>

        <p className="text-center text-xs text-gray-400">
          No payment required now • Confirm over call
        </p>
      </div>

      {/* Trust Badges */}
      <div className="px-6 pb-6 pt-0">
        <hr className="border-gray-100 mb-4" />
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>24/7 Customer Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
