import Link from "next/link";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Guías para tu negocio",
  "Guías prácticas para preparar tu proyecto de redes, cámaras e inteligencia artificial.",
  "/guias/",
);
export default function Guides() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">GUÍAS PRÁCTICAS</p>
        <h1>Decisiones tecnológicas mejor informadas.</h1>
        <p className="lead">
          Guías prácticas para preparar tu proyecto de redes, cámaras e
          inteligencia artificial.
        </p>
        <div className="guide-cards">
          {guides.map((g, i) => (
            <article key={g.slug}>
              <span className="mono">0{i + 1}</span>
              <h2>
                <Link href={g.href}>{g.title}</Link>
              </h2>
              <p>{g.description}</p>
              <Link href={g.href}>Leer guía →</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
