import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-6xl lg:text-7xl">
                    <span className="block animate-fade-in-up">Discover the World with</span>
                    <span className="mt-2 block font-script text-secondary animate-fade-in-up delay-200">Paryatanam</span>
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl animate-fade-in-up delay-300">
                    Unforgettable journeys, curated just for you. Explore hidden gems and iconic landmarks with our expert guides.
                </p>

                {/* Search Bar - Thrillophilia Style */}
                <div className="w-full max-w-5xl rounded-full bg-white p-2 shadow-2xl animate-scale-up delay-500 hidden md:flex items-center justify-between pl-8">

                    {/* Destination Input */}
                    <div className="flex flex-1 flex-col justify-center border-r border-gray-200 pr-6 mr-6 py-2">
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-secondary stroke-[2.5]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">Destination</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Where to?"
                            className="w-full bg-transparent text-lg font-bold text-gray-800 placeholder-gray-300 focus:outline-none placeholder:font-medium"
                        />
                    </div>

                    {/* Date Input */}
                    <div className="flex flex-1 flex-col justify-center border-r border-gray-200 pr-6 mr-6 py-2">
                        <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4 text-secondary stroke-[2.5]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">Date</span>
                        </div>
                        <input
                            type="text" // In a real app, this would be a date picker
                            placeholder="Select Date"
                            className="w-full bg-transparent text-lg font-bold text-gray-800 placeholder-gray-300 focus:outline-none placeholder:font-medium"
                        />
                    </div>

                    {/* Guests Input */}
                    <div className="flex flex-1 flex-col justify-center py-2 mr-4">
                        <div className="flex items-center gap-2 mb-1">
                            <Users className="w-4 h-4 text-secondary stroke-[2.5]" />
                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">Guests</span>
                        </div>
                        <input
                            type="number"
                            placeholder="Add Guests"
                            className="w-full bg-transparent text-lg font-bold text-gray-800 placeholder-gray-300 focus:outline-none placeholder:font-medium"
                        />
                    </div>

                    {/* Search Button */}
                    <div className="p-1">
                        <Button size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-[#0B3D2E] hover:bg-[#082f23] text-white shadow-none transition-transform active:scale-95">
                            Search
                        </Button>
                    </div>
                </div>
                {/* Mobile Search Button (simpler) */}
                <div className="md:hidden w-full max-w-xs animate-scale-up delay-500">
                    <Button size="lg" className="w-full rounded-full flex items-center justify-center gap-2">
                        <Search className="w-5 h-5" />
                        Start Your Journey
                    </Button>
                </div>
            </div>
        </div>
    );
}
