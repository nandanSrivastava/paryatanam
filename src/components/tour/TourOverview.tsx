import { Check } from "lucide-react";
import { TourPackage } from "@/lib/data";

interface TourOverviewProps {
  tour: TourPackage;
}

export function TourOverview({ tour }: TourOverviewProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
      <h2 className="text-2xl font-serif font-bold text-primary mb-6">
        Highlights
      </h2>
      <ul className="grid grid-cols-1 gap-4 mb-8">
        {tour.highlights.map((highlight: string, index: number) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700 leading-relaxed"
          >
            <div className="mt-1 min-w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
              <Check className="w-3 h-3 stroke-3" />
            </div>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <hr className="border-gray-100 my-8" />

      <h2 className="text-2xl font-serif font-bold text-primary mb-4">
        About the Tour
      </h2>
      <p className="text-gray-600 leading-7">{tour.description}</p>
    </div>
  );
}
