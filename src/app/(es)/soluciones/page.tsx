import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import {
  ChainSection,
  MethodSection,
  PillarsSection,
  ServicesGrid,
} from "@/components/home/sections";
import { CTA } from "@/components/footer";

export const metadata = pageMetadata(
  "Soluciones tecnológicas conectadas en Miami",
  "IA y automatización, marketing digital, software a medida, redes, seguridad y soporte IT para empresas de Miami y South Florida.",
  "/soluciones/",
);

export default function Solutions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">SOLUCIONES / DATALINK TECH CORP</p>
          <h1 style={{ marginTop: "var(--s-5)" }}>
            Seis soluciones.
            <br />
            Una sola <em>visión.</em>
          </h1>
          <p className="lead">
            Empieza por el reto que tienes hoy. Conectamos las capacidades
            necesarias para resolverlo y dejamos la base lista para lo que venga
            después.
          </p>
          <div className="btn-row" style={{ marginTop: "var(--s-6)" }}>
            <Link className="btn btn-primary" href="/contacto/">
              Solicita tu evaluación
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="container productivity-feature" aria-labelledby="productivity-feature-title">
        <div>
          <p className="eyebrow">CÁMARAS + INTELIGENCIA ARTIFICIAL</p>
          <h2 id="productivity-feature-title">Productividad con IA</h2>
          <p>Conoce los conteos, tiempos y flujos que puedes analizar en cafeterías, restaurantes, almacenes y líneas de producción.</p>
          <Link className="btn btn-primary" href="/medicion-de-productividad/">
            Ver cómo funciona <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="productivity-feature-metrics" aria-label="Indicadores del proceso">
          <p><strong>01</strong> Conteo de unidades</p>
          <p><strong>02</strong> Tiempos de ciclo</p>
          <p><strong>03</strong> Flujo por zonas</p>
        </div>
      </section>
      <ServicesGrid />
      <ChainSection />
      <MethodSection />
      <PillarsSection />
      <CTA />
    </>
  );
}
