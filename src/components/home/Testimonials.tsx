import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import { tourPackages } from "@/lib/data";

export function Testimonials() {
  const oneDayTour = tourPackages.find(
    (tour) => tour.id === "valmikinagar-one-day",
  );
  const twoDayTour = tourPackages.find(
    (tour) => tour.id === "valmikinagar-nepal-two-day",
  );

  return (
    <section
      id="know-before-you-go"
      className="py-20 bg-neutral-50 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">
            Tour Information
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-2">
            Know Before You Go
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-serif font-bold text-primary">
              What’s inside the package?
            </h3>
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Day 1 – Valmikinagar Experience
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {oneDayTour?.itinerary?.[0]?.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Day 2 – Nepal Border Exploration
                </p>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {twoDayTour?.itinerary?.[1]?.inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm">
            <h3 className="mb-5 text-2xl font-serif font-bold text-primary">
              Exclusions & Stay Details
            </h3>
            <div className="mb-5">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                Stay (Two-Day Package)
              </p>
              <ul className="space-y-2 text-sm text-neutral-700">
                {twoDayTour?.stayDetails?.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mb-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              Exclusions
            </p>
            <ul className="space-y-2 text-sm text-neutral-700">
              {twoDayTour?.exclusions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl sm:rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6 mb-6 sm:mb-8">
          <p className="flex items-start gap-2 text-sm text-amber-900">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{twoDayTour?.importantNote}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="rounded-xl sm:rounded-2xl bg-white border border-neutral-200 p-5 sm:p-6 md:p-7 shadow-sm">
            <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-serif font-bold text-primary">
              Know Before You Go
            </h4>
            <ul className="space-y-2 text-sm text-neutral-700">
              {twoDayTour?.knowBeforeYouGo.map((note) => (
                <li key={note} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl sm:rounded-2xl bg-primary p-5 sm:p-6 md:p-7 text-white shadow-sm">
            <h4 className="mb-3 sm:mb-4 text-lg sm:text-xl font-serif font-bold">
              Additional Information
            </h4>
            <p className="text-sm leading-6 sm:leading-7 text-white/90">
              Discover the spiritual and natural charm of Valmikinagar and the
              nearby Nepal border region, where sacred temples, lush forests,
              and peaceful river landscapes create a truly enriching experience.
              Along with spiritual exploration, enjoy jungle safari, hanging
              bridge walks, and a calming riverside stroll along the Gandak
              River.
            </p>
            <p className="mt-3 text-sm leading-6 sm:leading-7 text-white/90">
              This short but memorable journey blends devotion, nature, and
              relaxation with trusted transport, planned sightseeing, and
              comfortable stay options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
