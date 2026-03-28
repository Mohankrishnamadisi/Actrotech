import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AnimatedSection from "@/components/Common/AnimatedSection";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actrotech - Software Solutions Company",
  description: "Welcome to Actrotech, your partner in innovative software development and technology solutions.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <AnimatedSection from="up">
        <Hero />
      </AnimatedSection>
      <AnimatedSection from="left" delay={0.08}>
        <Features />
      </AnimatedSection>
      <AnimatedSection from="right" delay={0.16}>
        <Video />
      </AnimatedSection>
      <AnimatedSection from="scale" delay={0.24}>
        <Brands />
      </AnimatedSection>
      <AnimatedSection from="left" delay={0.32}>
        <AboutSectionOne />
      </AnimatedSection>
      <AnimatedSection from="right" delay={0.4}>
        <AboutSectionTwo />
      </AnimatedSection>
      <AnimatedSection from="left" delay={0.48}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection from="right" delay={0.56}>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection from="up" delay={0.64}>
        <Blog />
      </AnimatedSection>
      <AnimatedSection from="left" delay={0.72}>
        <Contact />
      </AnimatedSection>
    </>
  );
}
