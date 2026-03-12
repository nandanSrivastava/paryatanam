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
  GraduationCap,
  Globe,
  Camera,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  TrendingUp,
  Phone,
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
  GraduationCap: <GraduationCap className="w-8 h-8 text-secondary" />,
  Globe: <Globe className="w-8 h-8 text-secondary" />,
  Camera: <Camera className="w-8 h-8 text-secondary" />,
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
            className="flex-shrink-0 w-60 sm:w-72 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all border border-emerald-200/50 flex flex-col items-center text-center hover:-translate-y-1"
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
    <div className="relative min-h-0 sm:min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10">
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

      <div className="relative z-10 container mx-auto flex flex-col justify-start sm:justify-center px-4 sm:px-6 md:px-8 pt-20 xs:pt-28 sm:pt-[calc(var(--navbar-height)+2rem)] md:pt-[calc(var(--navbar-height)+2rem)] pb-2 sm:pb-16 md:pb-24 min-h-0 sm:min-h-screen">
        <div className="max-w-3xl sm:max-w-6xl mx-auto text-center w-full">
          {/* Main Hero Content */}
          <div className="mb-6 sm:mb-10 md:mb-12 animate-fade-in-up">
            <div className="mb-3 sm:mb-6 md:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 sm:px-4 sm:py-1.5 text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] text-primary shadow-md hover:shadow-lg transition-all duration-300">
              <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-secondary flex-shrink-0" />
              <span className="line-clamp-1">
                India Nepal – One Journey, Endless Experiences
              </span>
            </div>

            <h1 className="mb-4 sm:mb-6 md:mb-6 font-serif text-base xs:text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              <span className="block mb-1 sm:mb-2 font-serif font-anabae">
                Where Every Journey Becomes a Story.
              </span>
              <span className="block text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl font-popins text-gray-700 mt-1 sm:mt-2">
                Explore rich traditions, hidden destinations,
              </span>
              <span className="block text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl font-popins text-gray-700 mt-1 sm:mt-2">
                and unforgettable journeys.
              </span>
            </h1>

            {/* <p className="mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-medium px-2 opacity-90">
              Experience temples, jungles, and riverside serenity in our curated
              Indo-Nepal border tours.
            </p> */}
          </div>
          {/* Quick Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-12 md:mb-16 animate-fade-in w-full px-4 sm:px-0"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="#featured-packages" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base shadow-luxury hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all"
              >
                View All Packages
                <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Link href="#why-choose-us" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-xs sm:text-sm md:text-base border-2 border-primary/30 text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-all"
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
