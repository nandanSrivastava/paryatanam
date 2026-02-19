import { User } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  // simple filled star SVG using currentColor so Tailwind text color applies
  function FilledStar(props: { className?: string }) {
    return (
      <svg
        aria-hidden
        focusable="false"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.169L12 18.896l-7.336 3.871 1.402-8.169L.132 9.211l8.2-1.193L12 .587z" />
      </svg>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-neutral-50 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm">
            What Our Guests Say
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-2">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-xl bg-white border border-neutral-200 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-sm text-primary">
                    {t.name}
                  </div>
                  <div className="text-xs text-neutral-500">
                    {t.location} • {t.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FilledStar key={i} className="h-4 w-4 text-amber-400" />
                ))}
              </div>

              <p className="text-sm text-neutral-700">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
