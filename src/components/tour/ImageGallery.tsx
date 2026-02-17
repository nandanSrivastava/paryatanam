interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 sm:gap-3 h-[300px] xs:h-[350px] sm:h-[400px] md:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-luxury">
      {/* Main Image - Takes up 2x2 on desktop, full width on mobile */}
      <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 relative group cursor-pointer overflow-hidden touch-manipulation">
        <img
          src={images[0]}
          alt="Main Tour Image"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/95 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-primary font-bold text-xs sm:text-sm shadow-lg opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          View Full Gallery
        </div>
      </div>

      {/* Secondary Images - Hidden on very small screens */}
      {images.slice(1, 5).map((img, index) => (
        <div
          key={index}
          className="hidden sm:block relative group cursor-pointer overflow-hidden touch-manipulation"
        >
          <img
            src={img}
            alt={`Tour Image ${index + 2}`}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
          {index === 3 && images.length > 5 && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-white font-bold transition-all duration-300 group-hover:bg-black/70 group-active:bg-black/80">
              <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">
                +{images.length - 5}
              </span>
              <span className="text-xs sm:text-sm uppercase tracking-wider">
                More Photos
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
