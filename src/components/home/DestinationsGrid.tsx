import { Landmark, Trees, Waves, Camera } from "lucide-react";
import { brandContent } from "@/lib/data";

const circuitHighlights = [
  {
    icon: Landmark,
    title: "Spiritual & Cultural Visits",
    description:
      "Maa Nardevi Temple, Jatashankar Dham, Kawaleshwar Dham, Valmiki Ashram Dham, Triveni Dham, and Gajendra Moksha Dham.",
  },
  {
    icon: Trees,
    title: "Jungle Safari Experience",
    description:
      "Witness Valmiki forest flora and wildlife in a guided safari through eco-sensitive landscapes.",
  },
  {
    icon: Waves,
    title: "Riverside Peace",
    description:
      "Enjoy Gandak river views, fresh breeze, sunset walks, and relaxing natural surroundings.",
  },
  {
    icon: Camera,
    title: "Scenic Bridges & Viewpoints",
    description:
      "Visit Hanging Bridge and Kawaleshwar Jhula for panoramic nature views and photography moments.",
  },
];

export function DestinationsGrid() {
  return (
    <section className="py-20 bg-neutral-50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-secondary">
            Indo-Nepal Tour Packages
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold text-primary md:text-5xl">
            Valmikinagar – Nepal Border Circuit
          </h2>
          <p className="mt-5 text-neutral-600 md:text-lg">
            {brandContent.journeyDescription}
          </p>
          <p className="mt-3 text-neutral-600 md:text-lg">
            {brandContent.journeyDescription2}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {circuitHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <item.icon className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 text-xl font-serif font-bold text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
