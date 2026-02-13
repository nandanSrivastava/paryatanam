import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { exploreJapanTour } from "@/lib/data";
import { MapPin, Clock } from "lucide-react";

// Placeholder imports for components we'll build next
import { ImageGallery } from "@/components/tour/ImageGallery";
import { TourOverview } from "@/components/tour/TourOverview";
import { Itinerary } from "@/components/tour/Itinerary";
import { BookingCard } from "@/components/tour/BookingCard";
import { Inclusions } from "@/components/tour/Inclusions";

export default function TourDetailPage({ params }: { params: { slug: string } }) {
    // In a real app, fetch data based on params.slug
    const tour = exploreJapanTour;

    return (
        <main className="min-h-screen bg-[#FAFAFA]">
            <Navbar /> {/* We might need to adjust Navbar to force solid bg or handle scroll */}

            {/* Container with top padding for fixed navbar */}
            <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">

                {/* Breadcrumb / Title Section */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-medium">
                        <span>Home</span> / <span>Destinations</span> / <span>Japan</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        {tour.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                            <div className="bg-yellow-400 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                                ★ {tour.rating}
                            </div>
                            <span>({tour.reviews} Reviews)</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span>{tour.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span>{tour.duration}</span>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <ImageGallery images={tour.images} />

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

                    {/* Main Content - Left Column */}
                    <div className="lg:col-span-2 space-y-10">
                        <div id="overview">
                            <TourOverview tour={tour} />
                        </div>
                        <div id="itinerary">
                            <Itinerary days={tour.itinerary} />
                        </div>
                        <div id="inclusions">
                            <Inclusions inclusions={tour.inclusions} exclusions={tour.exclusions} />
                        </div>
                    </div>

                    {/* Sticky Sidebar - Right Column */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <BookingCard tour={tour} />
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </main>
    );
}
