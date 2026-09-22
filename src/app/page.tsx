import { Hero } from "@/components/home/hero";
import {
  AISection,
  EcosystemSection,
  RestaurantSection,
  Results,
  AboutSection,
} from "@/components/home/story-sections";
import { GrowthSoftwareSection } from "@/components/home/growth-software";
import { CTA } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AISection />
      <EcosystemSection />
      <RestaurantSection />
      <GrowthSoftwareSection />
      <Results />
      <AboutSection />
      <CTA />
    </>
  );
}
