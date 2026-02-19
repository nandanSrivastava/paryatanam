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
      className="py-12 sm:py-16 md:py-20 bg-gradient-primary text-white relative overflow-hidden"
    >
      {/* Subtle decorative elements */}
      <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="hidden lg:block absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />
      <div className="absolute inset-0 pattern-dots opacity-5" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-secondary font-semibold tracking-wider uppercase text-xs bg-secondary/20 px-4 py-2 rounded-full mb-4">
                Why Choose Paryatanam
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
                Spiritual Depth,
                <br />
                <span className="text-secondary italic font-script text-2xl sm:text-3xl lg:text-4xl">
                  Nature & Comfort
                </span>
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-lg">
                Experience Valmikinagar's temples, forests, and river landscapes
                with expertly crafted itineraries and seamless logistics.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-secondary" />
                What Makes Us Special
              </h3>
              <ul className="space-y-3 text-white/90">
                {whyChooseParyatanam.map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary group-hover:scale-125 transition-transform" />
                    <span className="text-sm leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md p-5 lg:p-6 rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div
                  className={`w-11 h-11 lg:w-12 lg:h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  <feature.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-semibold font-serif mb-2 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
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
