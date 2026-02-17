import { AlertCircle, Check, Info, XCircle } from "lucide-react";
import { DayPlan } from "@/lib/data";

interface InclusionsProps {
  inclusions: string[];
  exclusions: string[];
  stayDetails?: string[];
  knowBeforeYouGo?: string[];
  importantNote?: string;
  itinerary?: DayPlan[];
}

export function Inclusions({
  inclusions,
  exclusions,
  stayDetails,
  knowBeforeYouGo,
  importantNote,
  itinerary,
}: InclusionsProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What's inside the package (day-wise) */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white shadow-lg">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">
                What's inside the package?
              </h3>
            </div>

            {itinerary?.map((day) => (
              <div key={day.day} className="mb-6">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
                  DAY {day.day} – {day.title}
                </h4>
                <ul className="space-y-3">
                  {day.inclusions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-gray-700 group hover:bg-primary/5 p-3 rounded-xl transition-all"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Fallback to generic inclusions if itinerary not provided */}
            {!itinerary?.length && (
              <ul className="space-y-4">
                {inclusions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-base text-gray-700 group hover:bg-primary/5 p-3 rounded-xl transition-all"
                  >
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Exclusions & Stay Details combined */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-white shadow-lg">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">
                Exclusions & Stay Details
              </h3>
            </div>

            {/* Stay details */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-neutral-700 mb-3">
                STAY (TWO-DAY PACKAGE)
              </h4>
              {stayDetails?.length ? (
                <ul className="space-y-3">
                  {stayDetails.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-gray-700 hover:bg-neutral-50 p-3 rounded-xl transition-all"
                    >
                      <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-gray-600">
                  Applicable for overnight packages.
                </p>
              )}
            </div>

            {/* Exclusions list */}
            <div>
              <h4 className="text-sm font-semibold text-red-700 mb-3">
                EXCLUSIONS
              </h4>
              <ul className="space-y-3">
                {exclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-700 hover:bg-red-50 p-3 rounded-xl transition-all"
                  >
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {importantNote && (
              <div className="mt-6 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-4 text-sm text-amber-900 flex items-start gap-3 shadow-sm">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
                <span className="leading-relaxed font-medium">
                  {importantNote}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {(knowBeforeYouGo?.length || !importantNote) && (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Info className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">
                Know Before You Go
              </h3>
            </div>
            <ul className="space-y-4">
              {knowBeforeYouGo?.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-gray-700 hover:bg-secondary/10 p-3 rounded-xl transition-all group"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-secondary to-primary mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
