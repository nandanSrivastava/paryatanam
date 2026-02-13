import Link from "next/link";
import { ArrowRight } from "lucide-react";

const destinations = [
    {
        name: "Ladakh",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2070&auto=format&fit=crop",
        count: "25+ Tours",
        colSpan: "md:col-span-2 md:row-span-2",
    },
    {
        name: "Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop",
        count: "18+ Tours",
        colSpan: "md:col-span-1 md:row-span-1",
    },
    {
        name: "Rajasthan",
        image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
        count: "30+ Tours",
        colSpan: "md:col-span-1 md:row-span-1",
    },
    {
        name: "Bali",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop",
        count: "12+ Tours",
        colSpan: "md:col-span-1 md:row-span-1",
    },
    {
        name: "Dubai",
        image: "https://images.unsplash.com/photo-1512453979798-5ea904ac2294?q=80&w=2070&auto=format&fit=crop",
        count: "15+ Tours",
        colSpan: "md:col-span-1 md:row-span-1",
    },
];

export function DestinationsGrid() {
    return (
        <section className="py-20 bg-neutral-50 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-3">
                            Top Destinations
                        </h2>
                        <p className="text-neutral-600 max-w-lg">
                            Explore our most popular destinations, handpicked for their unique culture, stunning landscapes, and unforgettable experiences.
                        </p>
                    </div>
                    <Link
                        href="/destinations"
                        className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors mt-4 md:mt-0"
                    >
                        View All Destinations <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
                    {destinations.map((dest, index) => (
                        <Link
                            href={`/destinations/${dest.name.toLowerCase()}`}
                            key={dest.name}
                            className={`group relative overflow-hidden rounded-2xl block ${dest.colSpan}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${dest.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">
                                    {dest.count}
                                </span>
                                <h3 className="text-2xl font-serif font-bold group-hover:translate-x-2 transition-transform duration-300">
                                    {dest.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-secondary transition-colors"
                    >
                        View All Destinations <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
