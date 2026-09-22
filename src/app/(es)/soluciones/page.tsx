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

      <ServicesGrid />
      <ChainSection />
      <MethodSection />
      <PillarsSection />
      <CTA />
    </>
  );
}
