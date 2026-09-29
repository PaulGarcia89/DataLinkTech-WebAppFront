import { CommercialPreview } from "@/components/commercial-preview";
import { IndustrySolutionsHome } from "@/components/industry-solutions";
import { Hero } from "@/components/home/hero";
import { EditorialOverview } from "@/components/home/editorial-sections";
import { MethodSection } from "@/components/home/sections";
import { CTA } from "@/components/footer";
export default function Home() {
  return (
    <>
      <Hero />
      <EditorialOverview />
      <IndustrySolutionsHome />
      <CommercialPreview />
      <MethodSection />
      <CTA />
    </>
  );
}
