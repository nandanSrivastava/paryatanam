import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getTourBySlug } from "@/lib/data";
import { MapPin, Clock, Star, Users } from "lucide-react";
import { notFound } from "next/navigation";

import { ImageGallery } from "@/components/tour/ImageGallery";
import { TourOverview } from "@/components/tour/TourOverview";
import { BookingCard } from "@/components/tour/BookingCard";
import { Inclusions } from "@/components/tour/Inclusions";
import { Itinerary } from "@/components/tour/Itinerary";

export default function TourDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-primary text-white pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="absolute inset-0 pattern-dots opacity-5 sm:opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-4 sm:mb-6 font-medium">
            <span className="hover:text-white transition-colors cursor-pointer">
              Home
            </span>
            <span>/</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Tours
            </span>
            <span>/</span>
            <span className="text-secondary truncate">{tour.location}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
              {tour.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mb-6 sm:mb-8 leading-relaxed">
              {tour.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 md:gap-6">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full border border-white/20">
                <div className="bg-yellow-400 text-white text-xs sm:text-sm font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg flex items-center gap-1">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                  {tour.rating}
                </div>
                <span className="text-white/90 font-medium text-xs sm:text-sm md:text-base">
                  <span className="hidden xs:inline">
                    ({tour.reviews} Reviews)
                  </span>
                  <span className="xs:hidden">({tour.reviews})</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full border border-white/20">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0" />
                <span className="font-medium text-xs sm:text-sm md:text-base truncate">
                  {tour.location}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full border border-white/20">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0" />
                <span className="font-medium text-xs sm:text-sm md:text-base">
                  {tour.duration}
                </span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/15 backdrop-blur-sm px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full border border-white/20">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0" />
                <span className="font-medium text-xs sm:text-sm md:text-base">
                  {tour.minPeople}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 -mt-6 sm:-mt-10 pb-16 sm:pb-20 relative z-10">
        <ImageGallery images={tour.images} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mt-8 sm:mt-12">
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">
            <div id="overview">
              <TourOverview tour={tour} />
            </div>
            <div id="itinerary">
              <Itinerary days={tour.itinerary} />
            </div>
            <div id="inclusions">
              <Inclusions
                inclusions={tour.inclusions}
                exclusions={tour.exclusions}
                stayDetails={tour.stayDetails}
                knowBeforeYouGo={tour.knowBeforeYouGo}
                importantNote={tour.importantNote}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <BookingCard tour={tour} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
