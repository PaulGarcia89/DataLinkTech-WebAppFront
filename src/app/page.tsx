import { Hero } from "@/components/home/hero";
import {
  ChainSection,
  MethodSection,
  PillarsSection,
  SectorsSection,
  ServicesGrid,
  Thesis,
} from "@/components/home/sections";
import { CTA } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Thesis />
      <ServicesGrid />
      <ChainSection />
      <SectorsSection />
      <MethodSection />
      <PillarsSection />
      <CTA />
    </>
  );
}
