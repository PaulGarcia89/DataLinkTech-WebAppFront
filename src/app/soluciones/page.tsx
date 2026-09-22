import { pageMetadata } from "@/lib/seo";
import { EcosystemSection } from "@/components/home/story-sections";
import { CTA } from "@/components/footer";
export const metadata = pageMetadata(
  "Soluciones tecnológicas conectadas en Miami",
  "IA, automatización, software, marketing e infraestructura conectados para empresas en Miami y South Florida.",
  "/soluciones/",
);
export default function Solutions() {
  return (
    <>
      <div className="container page-intro">
        <span className="eyebrow">SOLUCIONES / DATALINK</span>
        <h1>
          Una visión integral.
          <br />
          <em>Tu siguiente ventaja.</em>
        </h1>
        <p>
          Empieza por el reto de tu negocio. Conectamos las capacidades
          necesarias para resolverlo.
        </p>
      </div>
      <EcosystemSection />
      <CTA />
    </>
  );
}
