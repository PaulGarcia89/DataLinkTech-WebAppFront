import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services, siteUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { CTA } from "@/components/footer";
import {
  AIWorkflow,
  InteractiveDemo,
} from "@/components/demo/interactive-demo";
import {
  GrowthEngine,
  SoftwareProcess,
} from "@/components/home/growth-software";
import { RestaurantDigitalTwin } from "@/components/industries/restaurant-digital-twin";

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
  const s = services.find((s) => s.slug === slug);
  if (!s) return {};
  return pageMetadata(
    `${s.name} en Miami`,
    `${s.description} Para negocios en Miami y South Florida.`,
    `/${slug}/`,
  );
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const ai = slug === "ia-y-automatizacion";
  const marketing = slug === "marketing-digital";
  const software = slug === "software-a-medida";
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.description,
          url: `${siteUrl}/${slug}/`,
          areaServed: ["Miami", "South Florida"],
          provider: { "@id": `${siteUrl}/#organization` },
        }}
      />
      <section className="container service-hero">
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link href="/soluciones/">Soluciones</Link>
          <span>/</span>
          <span>{s.name}</span>
        </nav>
        <div className="service-hero-grid">
          <div>
            <span className="eyebrow">{s.tag} / MIAMI + SOUTH FLORIDA</span>
            <h1>
              {s.name}
              <br />
              <em>con propósito.</em>
            </h1>
            <p>{s.description}</p>
            <Link href="/contacto/" className="button button-primary">
              Conversemos sobre tu negocio <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="service-hero-aside">
            <span className="micro-label">EL PUNTO DE PARTIDA</span>
            <h2>{s.short}</h2>
            <ul>
              {s.items.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {ai ? (
        <section className="section light-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">DE LA INTENCIÓN A LA ACCIÓN</span>
                <h2>
                  La IA se entiende mejor
                  <br />
                  <em>cuando la ves trabajar.</em>
                </h2>
              </div>
              <AIWorkflow />
            </div>
            <InteractiveDemo />
            <div className="service-usecases">
              <h3>Más allá de responder mensajes.</h3>
              <p>
                Asistentes para el equipo, procesamiento de documentos,
                clasificación de consultas, automatización de citas y analítica
                del negocio. Empezamos por un proceso concreto y validamos qué
                integración tiene sentido.
              </p>
            </div>
          </div>
        </section>
      ) : marketing || software ? (
        <section className="section light-section">
          <div className="container detail-editorial">
            <div>
              <span className="eyebrow">
                {marketing
                  ? "CRECIMIENTO CON CONTINUIDAD"
                  : "CONSTRUIR ALREDEDOR DE TU NEGOCIO"}
              </span>
              <h2>
                {marketing
                  ? "De la primera visita a una relación."
                  : "Cada proceso merece una buena interfaz."}
              </h2>
              <p>
                {marketing
                  ? "Definimos estrategia, canales, contenido y seguimiento. El objetivo es conectar cada etapa del recorrido comercial y poder evaluar qué mejorar."
                  : "Comprendemos el problema, diseñamos la arquitectura y construimos una interfaz que el equipo pueda usar. Validamos, desplegamos y dejamos una base para evolucionar."}
              </p>
            </div>
            {marketing ? <GrowthEngine /> : <SoftwareProcess />}
          </div>
        </section>
      ) : (
        <section className="section restaurant-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">LA BASE DEL NEGOCIO CONECTADO</span>
                <h2>
                  Tecnología física.
                  <br />
                  <em>Visión integral.</em>
                </h2>
              </div>
              <p>
                {slug === "soporte-it"
                  ? "Diagnóstico, mantenimiento y acompañamiento para resolver incidencias y planificar mejoras."
                  : slug === "seguridad-y-control"
                    ? "Accesos, cámaras y respaldo se planifican junto al resto de tu operación."
                    : "Conectividad, dispositivos y sistemas necesitan una base diseñada para trabajar juntos."}
              </p>
            </div>
            <RestaurantDigitalTwin
              initialLayer={
                slug === "seguridad-y-control"
                  ? 5
                  : slug === "soporte-it"
                    ? 4
                    : 3
              }
            />
          </div>
        </section>
      )}
      <section className="section container delivery-section">
        <span className="eyebrow">CÓMO EMPEZAMOS</span>
        <div className="delivery-steps">
          {[
            [
              "01",
              "Entender",
              "Revisamos tu situación y los sistemas que ya utilizas.",
            ],
            [
              "02",
              "Definir",
              "Acordamos objetivos, prioridades y un alcance realista.",
            ],
            [
              "03",
              "Conectar",
              "Implementamos, validamos y acompañamos el cambio.",
            ],
          ].map(([n, t, p]) => (
            <div key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
