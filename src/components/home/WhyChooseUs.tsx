import { ShieldCheck, Award, Heart, Headphones, Check } from "lucide-react";
import { whyChooseParyatanam } from "@/lib/data";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted & Safe",
    description:
      "Your safety is our priority. We partner with verified guides and secure accommodations.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Award,
    title: "Best Price Guarantee",
    description:
      "We offer the most competitive prices without compromising on quality or experience.",
    color: "from-secondary to-primary",
  },
  {
    icon: Heart,
    title: "Curated Experiences",
    description:
      "Handpicked itineraries designed to create memories that last a lifetime.",
    color: "from-primary/90 to-secondary",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you.",
    color: "from-primary to-secondary/80",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-paryatanam"
      className="py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-primary text-white relative overflow-hidden"
    >
      {/* Decorative elements - Hidden on small screens */}
      <div className="hidden md:block absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 pattern-dots opacity-5 sm:opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block text-secondary font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-xs sm:text-sm bg-secondary/20 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-6">
                Why Choose Paryatanam
              </span>
              <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-6 sm:mb-8">
                Spiritual Depth,
                <br />
                Nature Bliss,
                <br />
                <span className="text-secondary italic font-script text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
                  Comfortable Journey
                </span>
              </h2>
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Every itinerary is designed around Valmikinagar and nearby Nepal
                border experiences so you can enjoy temples, forests, and river
                landscapes with seamless logistics.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20">
              <h3 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-secondary" />
                What Makes Us Special
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-white/90">
                {whyChooseParyatanam.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 sm:gap-3 group"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-secondary group-hover:scale-150 transition-transform" />
                    <span className="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:bg-white/20 transition-all duration-500 border border-white/10 hover:border-white/30 active:scale-[0.98] sm:hover:-translate-y-2 hover:shadow-2xl touch-manipulation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <feature.icon className="w-6 h-6 sm:w-7 sm:w-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold font-serif mb-3 sm:mb-4 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
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
