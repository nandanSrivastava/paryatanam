"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
      {/* Header Info */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-[110]">
        <div className="text-white/80 text-sm sm:text-base font-medium">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 p-2 sm:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-[110] active:scale-95"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 p-2 sm:p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-[110] active:scale-95"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Image Container */}
      <div 
        className="relative w-full h-full p-4 sm:p-12 flex items-center justify-center select-none"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-none"
        />
      </div>

      {/* Thumbnail Strip (Optional but nice) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2 overflow-x-auto max-w-2xl px-4 py-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 no-scrollbar">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {}} // Could add goToIndex if needed
            className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
              idx === currentIndex ? "border-secondary scale-110" : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" alt={`Thumb ${idx + 1}`} />
          </button>
        ))}
      </div>
    </div>,
    document.body
  );
}
