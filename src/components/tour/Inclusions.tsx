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
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Inclusions */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-primary">
                Inclusions
              </h3>
            </div>
            <ul className="space-y-4">
              {inclusions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusions */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-red-700">
                Exclusions
              </h3>
            </div>
            <ul className="space-y-4">
              {exclusions.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {(stayDetails?.length || knowBeforeYouGo?.length || importantNote) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif font-bold text-primary mb-5">
              Stay Details
            </h3>
            {stayDetails?.length ? (
              <ul className="space-y-3">
                {stayDetails.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600">
                Stay details are applicable for the two-day package only.
              </p>
            )}

            {importantNote && (
              <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{importantNote}</span>
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-serif font-bold text-primary mb-5">
              Know Before You Go
            </h3>
            <ul className="space-y-3">
              {knowBeforeYouGo?.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-gray-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
