import { AlertCircle, Check, Info, XCircle } from "lucide-react";

interface InclusionsProps {
  inclusions: string[];
  exclusions: string[];
  stayDetails?: string[];
  knowBeforeYouGo?: string[];
  importantNote?: string;
}

export function Inclusions({
  inclusions,
  exclusions,
  stayDetails,
  knowBeforeYouGo,
  importantNote,
}: InclusionsProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Inclusions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">
                Inclusions
              </h3>
            </div>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base text-gray-700 group hover:bg-green-50 p-3 rounded-xl transition-all"
                >
                  <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-red-700">
                Exclusions
              </h3>
            </div>
            <ul className="space-y-4">
              {exclusions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base text-gray-700 group hover:bg-red-50 p-3 rounded-xl transition-all"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {(stayDetails?.length || knowBeforeYouGo?.length || importantNote) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                <Info className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">
                Stay Details
              </h3>
            </div>
            {stayDetails?.length ? (
              <ul className="space-y-4">
                {stayDetails.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-gray-700 hover:bg-blue-50 p-3 rounded-xl transition-all group"
                  >
                    <Info className="w-5 h-5 text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-base text-gray-600 leading-relaxed">
                Stay details are applicable for the two-day package only.
              </p>
            )}

            {importantNote && (
              <div className="mt-8 rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-base text-amber-900 flex items-start gap-3 shadow-sm">
                <AlertCircle className="w-6 h-6 mt-0.5 shrink-0" />
                <span className="leading-relaxed font-medium">
                  {importantNote}
                </span>
              </div>
            )}
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-luxury border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
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
                  className="flex items-start gap-3 text-base text-gray-700 hover:bg-purple-50 p-3 rounded-xl transition-all group"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
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
