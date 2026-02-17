import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Destinations } from "@/components/home/Destinations";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Destinations />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
