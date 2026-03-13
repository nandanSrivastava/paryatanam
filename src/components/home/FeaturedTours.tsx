"use client";
import Link from "next/link";
import { Star, Clock, MapPin, Sparkles, TrendingUp, Phone, Compass } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CallbackModal } from "@/components/ui/Modal";
import React, { useState } from "react";
import { tourPackages } from "@/lib/data";

export function FeaturedTours({ activeCategory = "explore" }: { activeCategory?: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter tours based on activeCategory
  const filteredTours = activeCategory === "explore" 
    ? tourPackages 
    : tourPackages.filter(tour => tour.categoryId === activeCategory);
  
  // Note: Since IDs are like "romantic-couple-escape" and category is "couple-trip", 
  // we might need more robust matching. But for now, let's use the actual data mapping.
  // Actually, tourPackages don't have a category field. Let's filter by current logic.

  return (
    <>
      <section
        id="featured-packages"
        className="py-4 sm:py-8 md:py-10 px-6 md:px-14 bg-white relative overflow-hidden"
      >
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-4 sm:mb-6">
            <div className="inline-flex items-center gap-2 text-secondary font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[10px] sm:text-xs bg-secondary/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mb-1 sm:mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">
                {activeCategory === "explore" ? "Best Selling Packages" : `${activeCategory.replace("-", " ")} Packages`}
              </span>
              <span className="xs:hidden">Best Packages</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-primary mt-1 sm:mt-2 leading-tight px-4 capitalize">
              {activeCategory === "explore" ? "Indo-Nepal Tour Packages" : `${activeCategory.replace("-", " ")} Experiences`}
            </h2>
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6 sm:mt-8 rounded-full" />
            <p className="mt-4 sm:mt-6 text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Handpicked experiences designed for spiritual seekers and nature
              lovers
            </p>
          </div>

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {filteredTours.map((tour, index) => {
                const savingsAmount = tour.originalPrice - tour.price;

                return (
                  <Link
                    href={`/tours/${tour.slug}`}
                    key={tour.id}
                    className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out active:scale-[0.98] sm:hover:-translate-y-2 border border-neutral-100 flex flex-col h-full touch-manipulation animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
                      <img
                        src={tour.images[0]}
                        alt={tour.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 group-hover:from-black/70 transition-all duration-300" />

                      {/* Popular Badge */}
                      {(index === 0 || tour.rating >= 4.9) && (
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
                      {/* <div className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                        {tour.duration}
                      </div> */}
                    </div>

                    <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                      {/* Star Rating with Reviews */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                          <span className="text-xs font-bold text-primary">
                            {tour.rating}
                          </span>
                          <span className="text-xs text-neutral-500">
                            ({tour.reviews})
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-neutral-500 text-[10px] sm:text-xs font-semibold">
                          <Clock className="w-3 h-3 text-secondary shrink-0" />
                          <span>{tour.duration}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-neutral-800 font-serif group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2 min-h-[2.5rem]">
                        {tour.title}
                      </h3>

                      <p className="text-sm xs:text-base text-neutral-600 line-clamp-2 leading-relaxed mb-3">
                        {tour.subtitle}
                      </p>

                      {/* Pricing Section */}
                      <div className="space-y-2 mb-4 mt-auto">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs text-neutral-400 line-through">
                            INR {tour.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                            SAVE INR {savingsAmount.toLocaleString()}
                          </span>
                        </div>

                        <div className="text-lg xs:text-xl sm:text-2xl font-bold text-primary">
                          INR {(tour.perPersonPrice || tour.price).toLocaleString()}
                          <span className="text-xs font-normal text-neutral-500 ml-1">
                            /{tour.perPersonPrice ? 'Person' : 'Package'}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                           type="button"
                           onClick={(e) => {
                             e.stopPropagation();
                             e.preventDefault();
                             window.location.href = "tel:+919288202060";
                           }}
                           aria-label="Call +91 9288202060"
                           className="inline-flex items-center justify-center rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 flex-shrink-0 h-9 w-9 p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-1"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </button>
                        <Button
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setIsModalOpen(true);
                          }}
                          className="flex-1 h-9 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
                        >
                          Request Callback
                        </Button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-dashed border-neutral-300">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Compass className="w-10 h-10 text-neutral-300 animate-pulse" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">No Packages Found</h3>
              <p className="text-neutral-600 max-w-md mx-auto">
                We couldn't find any packages in the "{activeCategory.replace("-", " ")}" category yet. 
                Please try exploring our other amazing destinations!
              </p>
              <Button 
                variant="outline" 
                className="mt-8 border-primary/30 text-primary hover:bg-primary hover:text-white"
                onClick={() => window.location.reload()}
              >
                Back to All Packages
              </Button>
            </div>
          )}
          <hr className="mx-auto mt-10 border-neutral-200" />

          {/* <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Link href={`/tours/${tourPackages[0].slug}`}>
              <Button
                size="lg"
                variant="primary"
                className="px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 text-remodia text-white font-bold text-sm sm:text-base touch-manipulation active:scale-95 sm:hover:scale-105 transition-all shadow-xl"
              >
                Enquire Now
              </Button>
            </Link>
          </div> */}
        </div>
      </section>
      {/* Callback Modal (form moved into the modal component) */}
      <CallbackModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
