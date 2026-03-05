"use client";
import React, { useRef, useState, useEffect } from "react";
import { tourCategories } from "@/lib/data";
import {
  Gem,
  Trees,
  Binoculars,
  Zap,
  Home,
  Users,
  Heart,
  Shield,
  Map,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  Gem: <Gem className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Trees: <Trees className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Binoculars: (
    <Binoculars className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />
  ),
  Zap: <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Home: <Home className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Users: <Users className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Heart: <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Shield: <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Map: <Map className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
  Compass: <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-secondary" />,
};

export function TourCategories() {
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

        // If we've reached the end, reset to beginning
        if (scrollLeft >= scrollWidth - clientWidth - 10) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scroll("right");
        }
      }
    }, 5000); // Auto-scroll every 5 seconds
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

  const handleMouseEnter = () => {
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    startAutoScroll();
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary bg-secondary/10 px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4">
            Experience More
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            Tour Categories
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6 sm:mt-8 rounded-full" />
          <p className="mt-6 sm:mt-8 text-neutral-600 text-base md:text-lg max-w-2xl mx-auto">
            Choose your adventure and explore the diverse experiences we offer
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={() => {
                stopAutoScroll();
                scroll("left");
                setTimeout(startAutoScroll, 300);
              }}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 sm:p-3 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={() => {
                stopAutoScroll();
                scroll("right");
                setTimeout(startAutoScroll, 300);
              }}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 sm:p-3 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Carousel */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 px-2"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none" }}
          >
            {tourCategories.map((category) => (
              <div
                key={category.id}
                className="flex-shrink-0 w-72 sm:w-80 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-200/50 flex flex-col items-center text-center hover:-translate-y-1"
              >
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white rounded-2xl shadow-sm">
                  {iconMap[category.icon]}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator dots (optional) */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          <div className="inline-flex gap-1 bg-neutral-200 rounded-full p-1.5">
            <button
              onClick={() => {
                stopAutoScroll();
                scroll("left");
                setTimeout(startAutoScroll, 300);
              }}
              className="p-1.5 hover:bg-neutral-300 rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-600" />
            </button>
            <button
              onClick={() => {
                stopAutoScroll();
                scroll("right");
                setTimeout(startAutoScroll, 300);
              }}
              className="p-1.5 hover:bg-neutral-300 rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
