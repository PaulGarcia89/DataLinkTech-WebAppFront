import { Hero } from "@/components/home/hero";
import {
  EditorialServices,
  EditorialOverview,
  VisionSection,
} from "@/components/home/editorial-sections";
import { MethodSection } from "@/components/home/sections";
import { CTA } from "@/components/footer";
export default function Home() {
  return (
    <>
      <Hero />
      <EditorialServices />
      <EditorialOverview />
      <VisionSection />
      <MethodSection />
      <CTA />
    </>
  );
}
