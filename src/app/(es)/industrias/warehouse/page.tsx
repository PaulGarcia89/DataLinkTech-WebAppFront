import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { siteUrl } from "@/lib/content";
import { StructuredData } from "@/components/structured-data";
import { CTA } from "@/components/footer";
export const metadata = pageMetadata(
  "Visión artificial para warehouses en Miami",
  "Cámaras e inteligencia artificial para analizar flujo de materiales, tiempos de ciclo y conteo de unidades en almacenes.",
  "/industrias/warehouse/",
);
export default function Warehouse() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Visión artificial para operaciones de warehouse",
          url: `${siteUrl}/industrias/warehouse/`,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: ["Miami", "South Florida"],
        }}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">WAREHOUSE / VISIÓN CON IA</p>
          <h1 style={{ marginTop: 24 }}>
            Entiende el ritmo
            <br />
            de tu operación.
          </h1>
          <p className="lead">
            Transforma eventos visibles en información útil: movimiento de
            materiales, tiempos de proceso y unidades que pasan por cada
            estación.
          </p>
          <div className="btn-row">
            <Link className="btn btn-primary" href="/contacto/">
              Conversemos sobre tu almacén <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="container">
        <Image
          className="editorial-photo"
          src="/images/warehouse.webp"
          alt="Escenario ilustrativo de un almacén con cámaras y análisis visual de paquetes y zonas operativas"
          width={1074}
          height={346}
        />
        <p className="mono" style={{ marginTop: 12 }}>
          ESCENARIO ILUSTRATIVO · NO REPRESENTA UN SISTEMA INSTALADO
        </p>
        <div className="warehouse-details">
          {[
            [
              "Flujo de materiales",
              "Observa recorridos y acumulaciones para identificar dónde revisar el proceso.",
            ],
            [
              "Tiempos de ciclo",
              "Define eventos de inicio y final para medir la duración de una tarea operativa.",
            ],
            [
              "Conteo de unidades",
              "Evalúa el conteo de paquetes en zonas delimitadas, según la visibilidad y las condiciones del entorno.",
            ],
          ].map(([title, copy]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="plane plane-paper">
        <div className="container-narrow">
          <p className="eyebrow">PRIMERO VALIDAMOS EL PROCESO</p>
          <h2>
            Una prueba concreta.
            <br />
            Un alcance definido.
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            Revisamos las cámaras disponibles, iluminación, oclusiones y eventos
            que necesitas observar. Acordamos métricas, acceso y conservación de
            datos antes de validar la solución en una zona de trabajo. La
            precisión y la viabilidad dependen de esas condiciones; no se
            presuponen resultados.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
