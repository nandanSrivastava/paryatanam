import Image from "next/image"; // Note: Using regular img tag for now if domains not set, or next/image if configured
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    if (!images || images.length === 0) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            {/* Main Image - Takes up 2x2 on desktop */}
            <div className="md:col-span-2 md:row-span-2 relative group cursor-pointer">
                <img
                    src={images[0]}
                    alt="Main Tour Image"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Secondary Images */}
            {images.slice(1, 5).map((img, index) => (
                <div key={index} className="relative group cursor-pointer overflow-hidden">
                    <img
                        src={img}
                        alt={`Tour Image ${index + 2}`}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    {index === 3 && images.length > 5 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-lg">
                            +{images.length - 5} More
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
