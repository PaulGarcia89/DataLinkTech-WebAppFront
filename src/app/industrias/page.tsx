import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { sectors } from "@/lib/content";
import { Glyph } from "@/components/icons";
import { SectionHead } from "@/components/home/sections";
import { VenueMap } from "@/components/visuals/venue-map";
import { CTA } from "@/components/footer";

export const metadata = pageMetadata(
  "Tecnología para restaurantes y empresas en Miami",
  "Automatización, software, POS, redes y seguridad para restaurantes, comercios y oficinas de Miami y South Florida.",
  "/industrias/",
);

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">INDUSTRIAS / MIAMI + SOUTH FLORIDA</p>
          <h1 style={{ marginTop: "var(--s-5)" }}>
            Cada negocio tiene
            <br />
            su ritmo. <em>Lo conectamos.</em>
          </h1>
          <p className="lead">
            Las herramientas cambian según el sector. El punto de partida es
            siempre el mismo: entender cómo funciona tu operación un día normal.
          </p>

          <div className="industry-hero-list">
            {sectors.map((s) => (
              <Link href={s.href} key={s.slug}>
                <Glyph name={s.icon} size={26} />
                <div>
                  <h2>{s.name}</h2>
                  <p>{s.copy}</p>
                </div>
                <ArrowUpRight size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="plane plane-navy plane-grid">
        <span className="plane-index">PLANO / EL LOCAL CONECTADO</span>
        <div className="container">
          <SectionHead
            split
            eyebrow="TODO EN UN MISMO PLANO"
            title={
              <>
                Red, cobro, cámaras e IA
                <br />
                <em>no son proyectos aparte.</em>
              </>
            }
            lead="Este es el plano de un local conectado. Explora cada capa para ver cómo se apoyan entre sí, en el orden en que conviene construirlas."
          />
          <VenueMap />
        </div>
      </section>

      <CTA
        title={
          <>
            Cuéntanos cómo funciona
            <br />
            tu negocio <em>hoy.</em>
          </>
        }
        copy="Revisamos tu operación y te decimos con claridad qué conviene resolver primero y qué puede esperar."
      />
    </>
  );
}
