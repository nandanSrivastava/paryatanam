import Link from "next/link";
import { Star, Clock, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { tourPackages } from "@/lib/data";

export function FeaturedTours() {
  return (
    <section
      id="featured-packages"
      className="py-16 sm:py-20 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm bg-secondary/10 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-5">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Best Selling Packages</span>
            <span className="xs:hidden">Best Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mt-3 sm:mt-4 leading-tight px-4">
            Indo-Nepal Tour Packages
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6 sm:mt-8 rounded-full" />
          <p className="mt-4 sm:mt-6 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Handpicked experiences designed for spiritual seekers and nature
            lovers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {tourPackages.map((tour, index) => (
            <Link
              href={`/tours/${tour.slug}`}
              key={tour.id}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-500 active:scale-[0.98] sm:hover:-translate-y-3 border border-neutral-100 block touch-manipulation"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-active:scale-105 sm:group-hover:rotate-1"
                  style={{ backgroundImage: `url(${tour.images[0]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-primary shadow-elegant flex items-center gap-1 sm:gap-1.5 group-hover:scale-110 transition-transform">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  {tour.rating}
                </div>

                {/* Popular Badge */}
                {index === 0 && (
                  <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1 sm:gap-1.5">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                    POPULAR
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6 md:p-7">
                <div className="flex items-center gap-2 sm:gap-3 text-neutral-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 flex-wrap">
                  <div className="flex items-center gap-1 sm:gap-1.5 bg-neutral-50 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full whitespace-nowrap">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                    <span className="text-xs sm:text-sm">{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-1.5 bg-neutral-50 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full whitespace-nowrap">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
                    <span className="text-xs sm:text-sm">{tour.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-neutral-800 mb-2 sm:mb-3 font-serif group-hover:text-primary transition-colors leading-tight">
                  {tour.title}
                </h3>
                <p className="text-xs xs:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {tour.subtitle}
                </p>

                <div className="flex items-end justify-between mt-5 sm:mt-6 md:mt-7 pt-5 sm:pt-6 border-t border-neutral-100">
                  <div>
                    <span className="text-[10px] xs:text-xs text-neutral-500 block mb-1 sm:mb-1.5 uppercase tracking-wider font-semibold">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-1.5 sm:gap-2">
                      <span className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">
                        ₹{tour.price.toLocaleString()}
                      </span>
                      <span className="text-xs sm:text-sm text-neutral-400 line-through">
                        ₹{tour.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-primary hover:text-white border-primary/30 shadow-sm hover:shadow-md active:scale-95 sm:group-hover:scale-105 transition-all text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5"
                  >
                    <span className="hidden xs:inline">View Details</span>
                    <span className="xs:hidden">View</span>
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <Link href={`/tours/${tourPackages[0].slug}`}>
            <Button
              size="lg"
              variant="secondary"
              className="px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 text-primary font-bold text-sm sm:text-base touch-manipulation active:scale-95 sm:hover:scale-105 transition-all"
            >
              Enquire Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
