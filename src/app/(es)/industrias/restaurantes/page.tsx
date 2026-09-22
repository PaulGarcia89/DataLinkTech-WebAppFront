import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { services, siteUrl } from "@/lib/content";
import { Glyph } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/home/sections";
import { StructuredData } from "@/components/structured-data";
import { VenueMap } from "@/components/visuals/venue-map";
import { CTA } from "@/components/footer";

export const metadata = pageMetadata(
  "Tecnología para restaurantes en Miami",
  "POS, redes y Wi-Fi, cámaras, reservas y asistentes de IA para restaurantes de Miami y South Florida, con un solo aliado tecnológico.",
  "/industrias/restaurantes/",
);

const SHIFTS: [string, string][] = [
  [
    "Mensajes sin responder fuera de hora",
    "Respuesta inmediata a consultas y reservas",
  ],
  [
    "Wi-Fi que se cae en hora pico",
    "Red dimensionada para salón, cocina y cobro",
  ],
  [
    "POS aislado del resto del negocio",
    "Ventas integradas con inventario e informes",
  ],
  ["Cámaras que nadie revisa", "Monitoreo con acceso remoto"],
  ["Un proveedor distinto por cada falla", "Un solo número al que llamar"],
];

const STACK = [
  "ia-y-automatizacion",
  "redes-e-infraestructura",
  "seguridad-y-control",
  "soporte-it",
];

export default function Restaurants() {
  const stack = STACK.map((slug) => services.find((s) => s.slug === slug)!);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tecnología para restaurantes",
          description:
            "POS, redes y Wi-Fi, videovigilancia, reservas y asistentes de IA para restaurantes en Miami y South Florida.",
          url: `${siteUrl}/industrias/restaurantes/`,
          areaServed: ["Miami", "South Florida"],
          provider: { "@id": `${siteUrl}/#organization` },
        }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Ruta de navegación">
            <Link href="/industrias/">Industrias</Link>
            <span aria-hidden="true">/</span>
            <b>Restaurantes</b>
          </nav>

          <h1>
            Un restaurante tiene
            <br />
            más tecnología de la
            <br />
            que <em>parece.</em>
          </h1>
          <p className="lead">
            Punto de venta, comandas, reservas, Wi-Fi de salón, cámaras, música,
            redes sociales y el teléfono que no deja de sonar. Cuando cada pieza
            depende de un proveedor distinto, el problema siempre es de otro.
          </p>
          <div className="btn-row" style={{ marginTop: "var(--s-6)" }}>
            <Link className="btn btn-primary" href="/contacto/">
              Hablemos de tu local
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="plane plane-navy plane-grid">
        <span className="plane-index">PLANO / TU LOCAL</span>
        <div className="container">
          <SectionHead
            split
            eyebrow="EL LOCAL CONECTADO"
            title={
              <>
                Capa por capa,
                <br />
                <em>en el orden correcto.</em>
              </>
            }
            lead="Primero la base física, después el cobro, luego la seguridad y por último la automatización. Explora cada capa del plano."
          />
          <VenueMap />
        </div>
      </section>

      <section className="plane plane-deep plane-grid">
        <span className="plane-index">RESULTADO</span>
        <div className="container-narrow">
          <SectionHead
            eyebrow="QUÉ CAMBIA EN EL SERVICIO"
            title={
              <>
                Menos interrupciones.
                <br />
                <em>Más mesas atendidas.</em>
              </>
            }
          />
          <Reveal className="shifts">
            {SHIFTS.map(([before, after]) => (
              <div className="shift-row" key={before}>
                <span>{before}</span>
                <span className="shift-arrow" aria-hidden="true">
                  <ArrowRight size={19} />
                </span>
                <span>{after}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="plane plane-paper plane-grid">
        <span className="plane-index">SOLUCIONES APLICADAS</span>
        <div className="container">
          <SectionHead
            split
            eyebrow="LO QUE SOLEMOS IMPLEMENTAR"
            title={
              <>
                Las soluciones que más
                <br />
                <em>pesan en hostelería.</em>
              </>
            }
            lead="Se implementan por etapas, empezando por lo que hoy detiene el servicio."
          />
          <Reveal className="services">
            {stack.map((s) => (
              <Link key={s.slug} href={`/${s.slug}/`} className="service-card">
                <div className="service-card__top">
                  <span className="service-card__index">{s.index}</span>
                  <span className="service-card__glyph">
                    <Glyph name={s.icon} size={23} />
                  </span>
                </div>
                <h3>{s.name}</h3>
                <p className="service-card__promise">{s.promise}</p>
                <p>{s.description}</p>
                <span className="service-card__cta">
                  Ver solución
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA
        title={
          <>
            Tu local, funcionando
            <br />
            como <em>un solo sistema.</em>
          </>
        }
        copy="Visitamos el local, revisamos lo que ya tienes instalado y proponemos un plan por etapas que no detiene el servicio."
      />
    </>
  );
}
