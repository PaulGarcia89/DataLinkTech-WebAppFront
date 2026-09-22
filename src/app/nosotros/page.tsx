import { pageMetadata } from "@/lib/seo";
import { AboutSection, Results } from "@/components/home/story-sections";
import { DatalinkNetwork } from "@/components/network/datalink-network";
import { CTA } from "@/components/footer";
export const metadata = pageMetadata(
  "Nosotros — conectamos tecnología y negocio",
  "La visión de DataLink Tech Corp: conectar inteligencia artificial, software e infraestructura para negocios en Miami y South Florida.",
  "/nosotros/",
);
export default function About() {
  return (
    <>
      <section className="container about-hero">
        <div>
          <span className="eyebrow">SOMOS DATALINK TECH CORP</span>
          <h1>
            Las herramientas
            <br />
            son el comienzo.
            <br />
            <em>
              La conexión,
              <br />
              la diferencia.
            </em>
          </h1>
          <p>
            Creemos en una tecnología que tiene sentido para quien la usa.
            Conectamos la operación digital y física de empresas en Miami y
            South Florida, con IA y automatización como motor.
          </p>
        </div>
        <DatalinkNetwork />
      </section>
      <AboutSection />
      <Results />
      <CTA />
    </>
  );
}
