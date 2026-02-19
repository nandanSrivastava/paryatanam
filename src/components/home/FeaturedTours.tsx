import Link from "next/link";
import { Star, Clock, MapPin, Sparkles, TrendingUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { tourPackages } from "@/lib/data";

export function FeaturedTours() {
  return (
    <section
      id="featured-packages"
      className="py-16 sm:py-20 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden"
    >
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

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
          {tourPackages.map((tour, index) => {
            const savingsAmount = tour.originalPrice - tour.price;

            return (
              <Link
                href={`/tours/${tour.slug}`}
                key={tour.id}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out active:scale-[0.98] sm:hover:-translate-y-2 border border-neutral-100 block touch-manipulation"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-56 xs:h-64 sm:h-72 md:h-80 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${tour.images[0]})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 group-hover:from-black/70 transition-all duration-300" />

                  {/* Popular Badge */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-gradient-secondary text-primary px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      POPULAR
                    </div>
                  )}

                  {/* Review Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold text-primary shadow-md">
                    <Star className="w-3.5 h-3.5 fill-secondary text-secondary inline mr-1" />
                    {tour.reviews}
                  </div>

                  {/* Duration at bottom of image */}
                  <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                    {tour.duration}
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-7">
                  {/* Star Rating with Reviews */}
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                    <span className="text-sm font-bold text-primary">
                      {tour.rating}
                    </span>
                    <span className="text-sm text-neutral-500">
                      ({tour.reviews})
                    </span>
                  </div>

                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-neutral-800 mb-2 sm:mb-3 font-serif group-hover:text-primary transition-colors duration-300 leading-tight">
                    {tour.title}
                  </h3>

                  {/* Location with bullet formatting */}
                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs sm:text-sm font-semibold mb-3">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    <span>
                      {tour.location} • {tour.duration}
                    </span>
                  </div>

                  <p className="text-xs xs:text-sm text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                    {tour.subtitle}
                  </p>

                  {/* Pricing Section */}
                  <div className="space-y-3 mb-5">
                    {/* Original Price with Strike-through */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-neutral-400 line-through">
                        INR {tour.originalPrice.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                        SAVE INR {savingsAmount.toLocaleString()}
                      </span>
                    </div>

                    {/* Current Price */}
                    <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-primary">
                      INR {tour.price.toLocaleString()}
                      <span className="text-sm font-normal text-neutral-500 ml-1">
                        /Adult
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 flex-shrink-0"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      Request Callback
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
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
