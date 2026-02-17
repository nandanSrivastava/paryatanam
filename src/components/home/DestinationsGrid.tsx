import { Landmark, Trees, Waves, Camera } from "lucide-react";
import { brandContent } from "@/lib/data";

const circuitHighlights = [
  {
    icon: Landmark,
    title: "Spiritual & Cultural Visits",
    description:
      "Maa Nardevi Temple, Jatashankar Dham, Kawaleshwar Dham, Valmiki Ashram Dham, Triveni Dham, and Gajendra Moksha Dham.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Trees,
    title: "Jungle Safari Experience",
    description:
      "Witness Valmiki forest flora and wildlife in a guided safari through eco-sensitive landscapes.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Waves,
    title: "Riverside Peace",
    description:
      "Enjoy Gandak river views, fresh breeze, sunset walks, and relaxing natural surroundings.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Camera,
    title: "Scenic Bridges & Viewpoints",
    description:
      "Visit Hanging Bridge and Kawaleshwar Jhula for panoramic nature views and photography moments.",
    gradient: "from-purple-500 to-pink-500",
  },
];

export function DestinationsGrid() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-neutral-50 to-white px-4 md:px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30 sm:opacity-40" />

      {/* Decorative Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="mx-auto mb-12 sm:mb-14 md:mb-16 max-w-4xl text-center">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary bg-secondary/10 px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4">
            Indo-Nepal Tour Packages
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight px-4">
            Valmikinagar – Nepal Border Circuit
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6 sm:mt-8 rounded-full" />
          <p className="mt-6 sm:mt-8 text-neutral-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            {brandContent.journeyDescription}
          </p>
          <p className="mt-3 sm:mt-4 text-neutral-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            {brandContent.journeyDescription2}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {circuitHighlights.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-2xl sm:rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 active:scale-[0.98] sm:hover:-translate-y-2 overflow-hidden relative touch-manipulation"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div
                className={`mb-4 sm:mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg group-hover:scale-110 transition-all duration-300`}
              >
                <item.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </div>
              <h3 className="mb-2 sm:mb-3 text-lg xs:text-xl sm:text-2xl font-serif font-bold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${item.gradient} transition-all duration-300">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base leading-7 sm:leading-8 text-neutral-600 group-hover:text-neutral-700 transition-colors">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
