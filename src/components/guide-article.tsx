import Link from "next/link";
import { guides } from "@/lib/guides";
import { siteUrl } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
export function GuideArticle({ slug }: { slug: string }) {
  const guide = guides.find((g) => g.slug === slug)!;
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Guías", path: "/guias/" },
          { name: guide.title, path: guide.href },
        ])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          url: new URL(guide.href, siteUrl).href,
          author: { "@id": `${siteUrl}/#organization` },
          publisher: { "@id": `${siteUrl}/#organization` },
        }}
      />
      <article className="page-hero">
        <div className="container-narrow guide-article">
          <Link href="/guias/">← Guías</Link>
          <p className="eyebrow">GUÍAS PRÁCTICAS</p>
          <h1>{guide.title}</h1>
          <p className="lead">{guide.description}</p>
          <p className="mono">
            Preparadas por DataLink Tech Corp · Septiembre de 2026
          </p>
          <aside className="guide-answer">
            <h2>Respuesta breve</h2>
            <p>{guide.answer}</p>
          </aside>
          {guide.sections.map((section, i) => (
            <section key={section.title}>
              <span className="mono">0{i + 1}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <section>
            <h2>Antes de solicitar una evaluación</h2>
            {guide.questions.map((item) => (
              <div key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </section>
          <p className="guide-source">
            Referencia técnica:{" "}
            <a href={guide.source} target="_blank" rel="noopener noreferrer">
              {guide.sourceLabel}
            </a>
          </p>
          <div className="btn-row">
            <Link className="btn btn-signal" href="/contacto/">
              Consultar sobre mi proyecto
            </Link>
            <Link className="btn btn-line" href={guide.service}>
              Explorar el servicio relacionado
            </Link>
          </div>
          <h2>Otras guías</h2>
          <div className="guide-related">
            {guides
              .filter((g) => g.slug !== slug)
              .map((g) => (
                <Link key={g.slug} href={g.href}>
                  {g.title} →
                </Link>
              ))}
          </div>
        </div>
      </article>
    </>
  );
}
