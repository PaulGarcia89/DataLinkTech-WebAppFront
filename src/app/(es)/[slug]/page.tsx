import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { method, services, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { Glyph } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHead } from "@/components/home/sections";
import { StructuredData } from "@/components/structured-data";
import { VenueMap } from "@/components/visuals/venue-map";
import { CTA } from "@/components/footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata(
    `${service.name} en Miami`,
    `${service.description} Para negocios en Miami y South Florida.`,
    `/${slug}/`,
  );
}

/** Capa del plano que conviene destacar en cada servicio físico. */
const VENUE_LAYER: Record<string, number> = {
  "redes-e-infraestructura": 0,
  "software-a-medida": 1,
  "seguridad-y-control": 2,
  "ia-y-automatizacion": 3,
  "soporte-it": 4,
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const layer = VENUE_LAYER[slug];

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: `${siteUrl}/${slug}/`,
          areaServed: ["Miami", "South Florida"],
          provider: { "@id": `${siteUrl}/#organization` },
        }}
      />

      {/* --- Portada del servicio --- */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Ruta de navegación">
            <Link href="/soluciones/">Soluciones</Link>
            <span aria-hidden="true">/</span>
            <b>{service.name}</b>
          </nav>

          <div className="page-hero-grid">
            <div>
              <p className="eyebrow">
                {service.index} · {service.tag}
              </p>
              <h1 style={{ marginTop: "var(--s-5)" }}>{service.name}</h1>
              <p className="lead">{service.description}</p>
              <div className="btn-row" style={{ marginTop: "var(--s-6)" }}>
                <Link className="btn btn-primary" href="/contacto/">
                  Conversemos sobre tu negocio
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            <div className="svc-hero-panel">
              <span className="mono">EL PUNTO DE PARTIDA</span>
              <h2>{service.promise}</h2>
              <ul>
                {service.capabilities.map((c) => (
                  <li key={c.title}>
                    <Check size={16} />
                    {c.title}
                  </li>
                ))}
              </ul>
              <span className="service-card__glyph">
                <Glyph name={service.icon} size={23} />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Qué incluye --- */}
      <section className="plane plane-paper plane-grid">
        <span className="plane-index">ALCANCE</span>
        <div className="container">
          <SectionHead
            split
            eyebrow="QUÉ INCLUYE"
            title={
              <>
                Tres frentes de trabajo
                <br />
                <em>en un mismo servicio.</em>
              </>
            }
            lead="Cada proyecto se ajusta al tamaño y al momento del negocio. Estos son los frentes que solemos cubrir."
          />
          <Reveal className="capabilities">
            {service.capabilities.map((c) => (
              <div className="cap" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- Qué cambia --- */}
      <section className="plane plane-deep plane-grid">
        <span className="plane-index">RESULTADO</span>
        <div className="container-narrow">
          <SectionHead
            eyebrow="QUÉ CAMBIA EN TU OPERACIÓN"
            title={
              <>
                Del día a día actual
                <br />
                <em>al que quieres tener.</em>
              </>
            }
          />
          <Reveal className="shifts">
            {service.shifts.map(([before, after]) => (
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

      {/* --- Dónde vive este servicio --- */}
      {layer !== undefined && (
        <section className="plane plane-navy plane-grid">
          <span className="plane-index">EN EL LOCAL</span>
          <div className="container">
            <SectionHead
              split
              eyebrow="DÓNDE VIVE ESTE SERVICIO"
              title={
                <>
                  Tu negocio, visto
                  <br />
                  <em>como un solo sistema.</em>
                </>
              }
              lead="Cada capa se planifica junto a las demás. Explora el plano para ver cómo encaja este servicio con el resto de la operación."
            />
            <VenueMap initialLayer={layer} />
          </div>
        </section>
      )}

      {/* --- Cómo empezamos --- */}
      <section className="plane plane-white plane-grid">
        <span className="plane-index">PROCESO</span>
        <div className="container">
          <SectionHead
            eyebrow="CÓMO EMPEZAMOS"
            title={
              <>
                Cuatro pasos, <em>sin sorpresas.</em>
              </>
            }
          />
        </div>
        <div className="container">
          <Reveal className="method">
            {method.map((m) => (
              <div className="method-step" key={m.step}>
                <b>{m.step}</b>
                <h3>{m.title}</h3>
                <p>{m.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* --- Otras soluciones --- */}
      <section className="plane plane-tight plane-deep">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: "var(--s-6)" }}>
            LAS SEIS SOLUCIONES
          </p>
          <nav className="svc-nav" aria-label="Otras soluciones">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}/`}
                aria-current={s.slug === slug ? "page" : undefined}
              >
                <span className="mono">{s.index}</span>
                <b>{s.name}</b>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <CTA />
    </>
  );
}
