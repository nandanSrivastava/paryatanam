"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Heart, 
  Users, 
  GraduationCap, 
  Globe, 
  Compass, 
  Zap, 
  Mountain, 
  Camera,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  isTrending?: boolean;
}

const categories: Category[] = [
  {
    id: "explore",
    name: "Explore All",
    icon: <Compass className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "couple-trip",
    name: "Couple Trip",
    icon: <Heart className="w-5 h-5" strokeWidth={1.5} />,
    isTrending: true,
  },
  {
    id: "family-trip",
    name: "Family Trip",
    icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "school-group",
    name: "School Group",
    icon: <GraduationCap className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "indo-nepal",
    name: "Indo Nepal",
    icon: <Globe className="w-5 h-5" strokeWidth={1.5} />,
    isTrending: true,
  },
  {
    id: "adventure",
    name: "Adventure",
    icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
    isTrending: true,
  },
  {
    id: "nature",
    name: "Nature",
    icon: <Mountain className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    id: "sightseeing",
    name: "Sightseeing",
    icon: <Camera className="w-5 h-5" strokeWidth={1.5} />,
  },
];

export function CategoryBar({ 
  activeCategory, 
  onCategoryChange 
}: { 
  activeCategory: string, 
  onCategoryChange: (id: string) => void 
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    window.addEventListener("resize", checkScroll);
    return () => {
      if (scrollContainer) scrollContainer.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-100 pt-4 md:pt-5">
      <div className="container mx-auto px-4 md:px-6 relative group">
        
        {/* Left Arrow - desktop visible only when needed */}
        {showLeftArrow && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center hover:bg-neutral-50 hover:scale-105 active:scale-95 transition-all text-neutral-600"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Categories List */}
        <div
          ref={scrollRef}
          className="flex items-center md:justify-center gap-10 md:gap-16 overflow-x-auto no-scrollbar scroll-smooth pt-7 pb-3 md:pt-8 md:pb-4 px-1"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex flex-col items-center gap-2 transition-all duration-300 relative group/item shrink-0 pb-2",
                activeCategory === category.id 
                  ? "text-primary border-b-[3px] border-primary" 
                  : "text-neutral-500 hover:text-neutral-900 border-b-[3px] border-transparent"
              )}
            >
              {/* Icon Container with Badge */}
              <div className="relative">
                <div className={cn(
                  "transition-all duration-300 transform rounded-xl group-hover/item:scale-110",
                  activeCategory === category.id ? "text-primary scale-110" : "opacity-70 group-hover/item:opacity-100"
                )}>
                  {category.icon}
                </div>
                
                {category.isTrending && (
                  <div className="absolute -top-5 -left-1 md:-left-2">
                    <div className="bg-orange-500 text-white text-[8px] md:text-[9px] font-bold px-1.5 py-0.5 rounded-md shadow-md flex items-center gap-0.5 border border-white whitespace-nowrap">
                      <TrendingUp className="w-2 h-2 md:w-2.5 md:h-2.5" />
                      TRENDING
                    </div>
                  </div>
                )}
              </div>

              {/* Label */}
              <span className={cn(
                "text-[14px] md:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors",
                activeCategory === category.id ? "text-primary" : "text-neutral-600"
              )}>
                {category.name}
              </span>
            </button>
          ))}
        </div>

        {/* Right Arrow - desktop visible only when needed */}
        {showRightArrow && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center hover:bg-neutral-50 hover:scale-105 active:scale-95 transition-all text-neutral-600"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
