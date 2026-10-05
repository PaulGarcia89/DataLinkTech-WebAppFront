import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/breadcrumbs";
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
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Soluciones" },
          ]}
        />
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
      <EcosystemSection eyebrow="ECOSISTEMA / CAPACIDADES" id="ecosistema" />
      <CTA />
    </>
  );
}
