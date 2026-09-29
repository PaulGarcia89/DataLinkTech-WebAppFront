import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Utensils,
  Warehouse,
  Store,
  Building2,
} from "lucide-react";
import { industrySolutions } from "@/lib/industry-solutions";
const icons = {
  restaurant: Utensils,
  warehouse: Warehouse,
  store: Store,
  office: Building2,
};
export function IndustrySolutions({
  expanded = false,
}: {
  expanded?: boolean;
}) {
  return (
    <div className="sector-cards">
      {industrySolutions.map((sector, index) => {
        const Icon = icons[sector.icon];
        const titleId = `sector-${sector.slug}-title`;
        return (
          <article
            className="sector-card"
            key={sector.slug}
            id={expanded ? sector.slug : undefined}
            aria-labelledby={titleId}
          >
            <div className="sector-card-top">
              <span className="sector-icon">
                <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="mono">0{index + 1}</span>
            </div>
            {expanded ? (
              <h2 id={titleId}>{sector.title}</h2>
            ) : (
              <h3 id={titleId}>{sector.title}</h3>
            )}
            <p className="sector-intro">{sector.description}</p>
            <ul className="sector-links">
              {sector.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span>{link.label}</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            {expanded && (
              <div className="sector-detail">
                <h3>Cómo lo abordamos</h3>
                <p>{sector.detail}</p>
                <h3>Qué preparar para empezar</h3>
                <p>{sector.requirements}</p>
              </div>
            )}
            <Link
              className="sector-cta"
              href={
                expanded && sector.href.includes("#")
                  ? "/contacto/"
                  : sector.href
              }
            >
              {expanded && sector.href.includes("#")
                ? "Consultar sobre este sector"
                : sector.cta}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </article>
        );
      })}
    </div>
  );
}
export function IndustrySolutionsHome() {
  return (
    <section
      className="plane plane-white sector-section"
      aria-labelledby="industry-solutions-heading"
    >
      <div className="container">
        <p className="eyebrow">SOLUCIONES POR SECTOR</p>
        <h2 id="industry-solutions-heading" className="sector-section-title">
          Soluciones para tu tipo de negocio.
        </h2>
        <p className="sector-section-lead">
          Encuentra tu sector y explora cómo podemos conectar sus procesos,
          equipos y atención al cliente.
        </p>
        <IndustrySolutions />
      </div>
    </section>
  );
}
