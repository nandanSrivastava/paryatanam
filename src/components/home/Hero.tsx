import { ArrowRight, ShieldCheck, Trees, Landmark } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { brandContent } from "@/lib/data";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-br from-black/75 via-black/60 to-[#0B3D2E]/65" />
      </div>

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-4 py-28 md:px-6">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
            Indo-Nepal Spiritual & Nature Journeys
          </p>
          <h1 className="mb-5 font-serif text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            <span className="block">Paryatanam</span>
            <span className="mt-2 block text-secondary">
              {brandContent.tagline}
            </span>
          </h1>
          <p className="mb-3 max-w-3xl text-base text-white/85 md:text-lg">
            {brandContent.intro}
          </p>
          <p className="mb-10 max-w-3xl text-base text-white/85 md:text-lg">
            {brandContent.journeyTitle}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="#featured-packages">
              <Button size="lg" className="w-full sm:w-auto px-9">
                Explore Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#why-paryatanam">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
              >
                Why Paryatanam
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <Landmark className="mb-2 h-5 w-5 text-secondary" />
            <p className="text-sm font-semibold text-white">
              Sacred Temple Trails
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <Trees className="mb-2 h-5 w-5 text-secondary" />
            <p className="text-sm font-semibold text-white">
              Jungle + Riverside Nature
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <ShieldCheck className="mb-2 h-5 w-5 text-secondary" />
            <p className="text-sm font-semibold text-white">
              Trusted Stay & Transport
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
