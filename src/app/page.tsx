"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import React from "react";
import { CategoryBar } from "@/components/home/CategoryBar";
import { Destinations } from "@/components/home/Destinations";
import { FeaturedTours } from "@/components/home/FeaturedTours";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  const [activeCategory, setActiveCategory] = React.useState("explore");

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <Destinations />
      <CategoryBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <FeaturedTours activeCategory={activeCategory} />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
