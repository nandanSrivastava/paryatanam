"use client";
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
  Gem,
  Binoculars,
  Zap,
  Home,
  Heart,
  Shield,
  Map,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { floatingDestinations } from "@/lib/floatingDestinations";
import { tourCategories } from "@/lib/data";
import React, { useRef, useState, useEffect } from "react";

const iconMap: { [key: string]: React.ReactNode } = {
  Gem: <Gem className="w-8 h-8 text-secondary" />,
  Trees: <Trees className="w-8 h-8 text-secondary" />,
  Binoculars: <Binoculars className="w-8 h-8 text-secondary" />,
  Zap: <Zap className="w-8 h-8 text-secondary" />,
  Home: <Home className="w-8 h-8 text-secondary" />,
  Users: <Users className="w-8 h-8 text-secondary" />,
  Heart: <Heart className="w-8 h-8 text-secondary" />,
  Shield: <Shield className="w-8 h-8 text-secondary" />,
  Map: <Map className="w-8 h-8 text-secondary" />,
  Compass: <Compass className="w-8 h-8 text-secondary" />,
};

function HeroCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScroll =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  const startAutoScroll = () => {
    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;

        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scroll("right");
        }
      }
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }
  };

  useEffect(() => {
    checkScroll();
    startAutoScroll();
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
      stopAutoScroll();
    };
  }, []);

  return (
    <div
      className="relative animate-fade-in"
      style={{ animationDelay: "0.9s" }}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      {/* Carousel */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2"
        style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
      >
        {tourCategories.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 w-60 sm:w-72 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all border border-emerald-200/50 flex flex-col items-center text-center hover:-translate-y-1"
          >
            <div className="mb-3 p-2 bg-white rounded-xl shadow-sm">
              {iconMap[category.icon]}
            </div>
            <h3 className="text-base font-bold text-primary mb-2">
              {category.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      {/* Floating Destination Cards (desktop & tablet only to keep mobile clean) */}
      <div className="hidden md:block absolute inset-x-0 top-0 h-[520px] sm:h-[640px] lg:h-[760px] pointer-events-none">
        <div className="relative w-full h-full">
          {floatingDestinations.map((destination, index) => (
            <div
              key={destination.name}
              className={`absolute ${destination.position} group cursor-pointer z-20 pointer-events-auto`}
              style={{
                transform: "translateY(var(--navbar-height))",
              }}
            >
              <div
                className={`relative ${destination.size} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-white/40 ${
                  index % 2 === 0 ? "animate-float" : "animate-float-delayed"
                }`}
                style={{
                  animationDelay: destination.delay,
                  animationDuration: index % 3 === 0 ? "12s" : "15s",
                }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                {/* Subtle floating indicator */}
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-secondary rounded-full shadow-md animate-pulse opacity-80" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-secondary/15 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 sm:px-6 md:px-8 pt-[var(--navbar-height)] pb-8 sm:pb-16 md:pb-24">
        <div className="max-w-3xl sm:max-w-6xl mx-auto text-center w-full">
          {/* Main Hero Content */}
          <div className="mb-10 sm:mb-10 md:mb-12 mt-4 sm:mt-4 animate-fade-in-up">
            <div className="mb-6 sm:mb-6 md:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary shadow-lg">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-secondary flex-shrink-0" />
              <span className="line-clamp-2 sm:line-clamp-1">
                India Nepal – One Journey, Endless Experiences
              </span>
            </div>

            <h1 className="mb-5 sm:mb-6 md:mb-6 font-serif text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <span className="block mb-2 sm:mb-2 font-serif font-anabae">
                Where Every Journey Becomes a Story.
              </span>
              <span className="block text-sm xs:text-base sm:text-xl md:text-3xl lg:text-4xl font-popins text-gray-700 mt-2 sm:mt-2">
                Explore rich traditions, hidden destinations,
              </span>
              <span className="block text-sm xs:text-base sm:text-xl md:text-3xl lg:text-4xl font-popins text-gray-700 mt-2 sm:mt-2">
                and unforgettable journeys.
              </span>
            </h1>

            <p className="mb-10 sm:mb-10 md:mb-12 max-w-3xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-medium px-1">
              Experience temples, jungles, and riverside serenity in our curated
              Indo-Nepal border tours.
              <span className="hidden sm:inline">
                {" "}
                From spiritual darshan to thrilling safaris, every moment is
                crafted for wonder.
              </span>
            </p>
          </div>
          {/* Quick Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 md:mb-16 animate-fade-in w-full px-1 sm:px-0"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="#featured-packages" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg shadow-luxury hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all"
              >
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </Button>
            </Link>
            <Link href="#why-paryatanam" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg border-2 border-primary/30 text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all"
              >
                Why Choose Us
              </Button>
            </Link>
          </div>

          {/* Feature Cards - Auto Scrolling Carousel */}
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
}
