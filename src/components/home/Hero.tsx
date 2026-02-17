import {
  ArrowRight,
  ShieldCheck,
  Trees,
  Landmark,
  Sparkles,
  Search,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { floatingDestinations } from "@/lib/floatingDestinations";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      {/* Floating Destination Cards */}
      {floatingDestinations.map((destination, index) => (
        <div
          key={destination.name}
          className={`absolute ${destination.position} group cursor-pointer z-20`}
          style={{
            transform: "translateY(var(--navbar-height))",
          }}
        >
          <div
            className={`relative ${destination.size} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 border-2 border-white/30 ${
              index % 2 === 0 ? "animate-float" : "animate-float-delayed"
            }`}
            style={{
              animationDelay: destination.delay,
              animationDuration: index % 3 === 0 ? "8s" : "10s",
            }}
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Floating badge effect */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full shadow-lg animate-pulse" />
          </div>
        </div>
      ))}

      {/* Large decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Hero Content */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
              Indo-Nepal Spiritual Journeys
            </div>

            <h1 className="mb-4 sm:mb-6 font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900">
              <span className="block mb-2">Discover the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                Sacred & Wild
              </span>
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-script italic text-gray-700 mt-2">
                of Valmikinagar
              </span>
            </h1>

            <p className="mb-8 sm:mb-10 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              Experience temples, jungles, and riverside serenity in our curated
              Indo-Nepal border tours.
              <span className="hidden sm:inline">
                {" "}
                From spiritual darshan to thrilling safaris, every moment is
                crafted for wonder.
              </span>
            </p>
          </div>

          {/* Search Bar Section */}
          <div
            className="mb-12 sm:mb-16 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-luxury p-4 sm:p-6 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Destination
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Valmikinagar Circuit"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
                      defaultValue="Valmikinagar Circuit"
                    />
                  </div>
                </div>

                {/* Duration */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Package Type
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium appearance-none bg-white">
                      <option>1 Day Package</option>
                      <option>2 Day Package</option>
                      <option>Custom Package</option>
                    </select>
                  </div>
                </div>

                {/* Travelers */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Travelers
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium appearance-none bg-white">
                      <option>2-4 Travelers</option>
                      <option>5-8 Travelers</option>
                      <option>9+ Travelers</option>
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="mt-4 md:mt-0">
                  <Link href="#featured-packages">
                    <Button
                      size="lg"
                      className="w-full md:w-auto px-8 py-3.5 text-base font-bold shadow-luxury hover:shadow-xl hover:scale-105 active:scale-95 transition-all"
                    >
                      <Search className="mr-2 h-5 w-5" />
                      <span className="hidden sm:inline">Search Packages</span>
                      <span className="sm:hidden">Search</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="#featured-packages">
              <Button
                size="lg"
                className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg shadow-luxury hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all"
              >
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
            <Link href="#why-paryatanam">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg border-2 border-primary/30 text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all"
              >
                Why Choose Us
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fade-in"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Sacred Temples
              </h3>
              <p className="text-sm text-gray-600">
                Visit ancient ashrams and holy sites across the Indo-Nepal
                border
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                <Trees className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Wild Safaris
              </h3>
              <p className="text-sm text-gray-600">
                Explore dense forests and wildlife in Valmiki National Park
              </p>
            </div>

            <div className="group rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Trusted Travel
              </h3>
              <p className="text-sm text-gray-600">
                Comfortable stays and seamless transfers for worry-free journeys
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
