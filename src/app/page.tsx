import Image from "next/image";
import Link from "next/link";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HeroSection from "@/components/HeroSection";
import HeroSection2 from "@/components/HeroSection2";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroSection2 />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
