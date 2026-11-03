import Link from "next/link";
import { BookingLink } from "../booking-link";
import { IndustryCarousel } from "./industry-carousel";
import {
  ArrowRight,
  ChartNoAxesCombined,
  Database,
  Network,
  Settings2,
} from "lucide-react";

const operationalSteps = [
  {
    index: "01",
    title: "Capturar",
    copy: "Integra datos de cámaras, equipos y sistemas de operación.",
    icon: Database,
  },
  {
    index: "02",
    title: "Conectar",
    copy: "Unifica información en una infraestructura segura y confiable.",
    icon: Network,
  },
  {
    index: "03",
    title: "Decidir",
    copy: "Convierte datos en información útil para la operación.",
    icon: ChartNoAxesCombined,
  },
  {
    index: "04",
    title: "Ejecutar",
    copy: "Activa mejoras con procesos y equipos alineados.",
    icon: Settings2,
  },
] as const;

export function Hero() {
  return (
    <>
      <section className="operations-hero" aria-labelledby="home-heading">
        <div className="container operations-hero-grid">
          <div className="operations-hero-copy">
            <p className="operations-kicker">TECNOLOGÍA QUE CONECTA OPERACIONES</p>
            <h1 id="home-heading">
              De datos dispersos a <em>operaciones conectadas.</em>
            </h1>
            <p className="operations-lead">
              Conectamos software, equipos, cámaras, redes y procesos para que
              tu negocio opere con más claridad, seguridad y capacidad de crecer.
            </p>
            <div className="operations-actions">
              <Link className="btn btn-primary" href="/plataforma/">
                Explorar la plataforma <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <BookingLink className="btn btn-hero-secondary" />
            </div>
          </div>

          <div className="operations-hero-art" aria-label="Flujo de una operación conectada">
            <div className="operations-art-image operations-art-image-main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/productivity-production.webp" alt="Línea de producción conectada" />
            </div>
            <div className="operations-art-image operations-art-image-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/warehouse.webp" alt="Operación de warehouse" />
            </div>
            <div className="operations-art-glow" aria-hidden="true" />
            <ol className="operations-flow" aria-label="Cómo conectamos tu operación">
              {operationalSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <li key={step.title}>
                    <span className="operations-flow-index">{step.index}</span>
                    <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                    <div>
                      <h2>{step.title}</h2>
                      <p>{step.copy}</p>
                    </div>
                    {index < operationalSteps.length - 1 ? (
                      <ArrowRight className="operations-flow-arrow" size={18} aria-hidden="true" />
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="platform-preview" aria-labelledby="platform-preview-heading">
        <div className="container">
          <div className="platform-preview-intro">
            <p className="eyebrow">NUESTRA PLATAFORMA</p>
            <h2 id="platform-preview-heading">Una base tecnológica<br />para operaciones reales.</h2>
            <p>Integramos datos, software, infraestructura e inteligencia para que todas las partes de tu operación trabajen de forma coordinada.</p>
            <Link className="link-arrow" href="/plataforma/">Conocer la plataforma <ArrowRight size={17} /></Link>
          </div>
          <div className="platform-preview-cards">
            {[
              ["/images/restaurant.webp", "Datos y analítica", "Cámaras, sensores y sistemas de operación en una misma vista."],
              ["/images/warehouse.webp", "Infraestructura confiable", "Redes, seguridad y entornos escalables para operar sin interrupciones."],
              ["/images/productivity-cafe.webp", "Productividad con IA", "Visibilidad operativa para tomar decisiones y ejecutar mejoras."],
            ].map(([image, title, copy], index) => (
              <article key={title} className="platform-preview-card">
                <span className="platform-card-index">0{index + 1}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="" loading="lazy" />
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container home-industries" aria-label="Escenarios por industria">
        <IndustryCarousel />
      </section>
    </>
  );
}
