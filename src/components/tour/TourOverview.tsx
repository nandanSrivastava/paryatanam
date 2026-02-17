import { Check, Sparkles } from "lucide-react";
import { TourPackage } from "@/lib/data";

interface TourOverviewProps {
  tour: TourPackage;
}

export function TourOverview({ tour }: TourOverviewProps) {
  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-neutral-100 hover:shadow-2xl transition-shadow duration-500">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-primary">
          Tour Highlights
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-5 mb-10">
        {tour.highlights.map((highlight: string, index: number) => (
          <li
            key={index}
            className="flex items-start gap-4 text-gray-700 leading-relaxed group hover:bg-primary/5 p-4 rounded-2xl transition-all duration-300"
          >
            <div className="mt-0.5 min-w-7 h-7 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <span className="text-base group-hover:text-primary transition-colors">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      <hr className="border-neutral-200 my-10" />

      <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
        About the Tour
      </h2>
      <p className="text-gray-600 leading-8 text-lg">{tour.description}</p>
    </div>
  );
}
