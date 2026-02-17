import { ShieldCheck, Award, Heart, Headphones } from "lucide-react";
import { whyChooseParyatanam } from "@/lib/data";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Safe",
    description:
      "Your safety is our priority. We partner with verified guides and secure accommodations.",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description:
      "We offer the most competitive prices without compromising on quality or experience.",
  },
  {
    icon: Heart,
    title: "Curated Experiences",
    description:
      "Handpicked itineraries designed to create memories that last a lifetime.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-paryatanam"
      className="py-24 bg-primary text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-bold tracking-wider uppercase text-sm">
              Why Choose Paryatanam
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-6 leading-tight">
              Spiritual Depth, Nature Bliss, <br />
              <span className="text-secondary italic font-script">
                Comfortable Journey
              </span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
              Every itinerary is designed around Valmikinagar and nearby Nepal
              border experiences so you can enjoy temples, forests, and river
              landscapes with seamless logistics.
            </p>
            <ul className="space-y-3 text-white/90 text-sm">
              {whyChooseParyatanam.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-colors border border-white/5"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 text-secondary">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-serif mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
