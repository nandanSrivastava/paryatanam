import Link from "next/link";
import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { tourPackages } from "@/lib/data";

export function FeaturedTours() {
  return (
    <section id="featured-packages" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">
            Best Selling Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-2">
            Indo-Nepal Tour Packages
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourPackages.map((tour) => (
            <Link
              href={`/tours/${tour.slug}`}
              key={tour.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 block"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${tour.images[0]})` }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  {tour.rating}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium mb-3">
                  <MapPin className="w-4 h-4 text-secondary" />
                  {tour.location}
                  <span className="mx-1">•</span>
                  <Clock className="w-4 h-4 text-secondary" />
                  {tour.duration}
                </div>

                <h3 className="text-xl font-bold text-neutral-800 mb-2 font-serif group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                <p className="text-sm text-neutral-500 line-clamp-2">
                  {tour.subtitle}
                </p>

                <div className="flex items-end justify-between mt-6">
                  <div>
                    <span className="text-xs text-neutral-500 block mb-1">
                      Starting from
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      ₹{tour.price.toLocaleString()}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full hover:bg-primary hover:text-white border-primary/20"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href={`/tours/${tourPackages[0].slug}`}>
            <Button
              size="lg"
              variant="secondary"
              className="px-12 text-primary font-bold"
            >
              Enquire Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
