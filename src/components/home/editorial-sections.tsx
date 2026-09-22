import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  ScanLine,
  ChartNoAxesCombined,
} from "lucide-react";
import { ServiceIllustration } from "@/components/visuals/service-illustration";
import { Glyph } from "@/components/icons";
import { services } from "@/lib/content";
export function EditorialServices() {
  return (
    <section
      className="container editorial-services"
      aria-label="Soluciones para tu negocio"
    >
      {[
        {
          n: "01",
          title: "Automatiza",
          copy: "Convierte tareas repetitivas en procesos conectados.",
          kind: "automate" as const,
          href: "/ia-y-automatizacion/",
          label: "DE MENSAJES A ACCIONES",
        },
        {
          n: "02",
          title: "Desarrolla",
          copy: "Software a la medida de tu forma de trabajar.",
          kind: "develop" as const,
          href: "/software-a-medida/",
          label: "DE IDEAS A HERRAMIENTAS",
        },
        {
          n: "03",
          title: "Conecta",
          copy: "Una base sólida para tu operación y tus equipos.",
          kind: "connect" as const,
          href: "/redes-e-infraestructura/",
          label: "DEL SISTEMA A TU NEGOCIO",
        },
      ].map((s) => (
        <Link key={s.n} href={s.href} className="editorial-service">
          <span className="editorial-number">{s.n}</span>
          <h2>{s.title}</h2>
          <p>{s.copy}</p>
          <ServiceIllustration kind={s.kind} />
          <span className="editorial-service-label">
            {s.label}
            <ArrowUpRight size={17} />
          </span>
        </Link>
      ))}
    </section>
  );
}
export function EditorialOverview() {
  return (
    <>
      <section className="editorial-band">
        <div className="container">
          <h2>
            Del problema a una
            <br />
            solución concreta.
          </h2>
          <p>Un aliado tecnológico para lo que viene.</p>
        </div>
      </section>
      <section className="container editorial-overview" id="servicios">
        <div>
          <span className="eyebrow eyebrow-plain">EL ECOSISTEMA DATALINK</span>
          <h2>
            Especialidades distintas.
            <br />
            Una misma visión.
          </h2>
          <p>
            Empezamos por lo que necesitas resolver. Diseñamos cada conexión
            alrededor de tus herramientas, tu equipo y tu operación.
          </p>
          <Link className="link-arrow" href="/soluciones/">
            Explora nuestras soluciones <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="editorial-icon-grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`}>
              <Glyph name={s.icon} size={34} />
              <span>{s.name}</span>
              <ArrowUpRight size={14} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
export function VisionSection() {
  return (
    <section className="editorial-vision">
      <div className="container">
        <div className="vision-copy">
          <span className="eyebrow eyebrow-plain">
            WAREHOUSE / VISIÓN ARTIFICIAL
          </span>
          <h2>
            Haz visible lo que ocurre
            <br />
            en tu operación.
          </h2>
          <p>
            Las cámaras pueden aportar información sobre el flujo de materiales,
            los tiempos de ciclo y el conteo de unidades. Diseñamos y validamos
            el análisis según tu proceso y las condiciones del almacén.
          </p>
          <Link href="/industrias/warehouse/" className="link-arrow">
            Explorar productividad con IA <ArrowUpRight size={17} />
          </Link>
        </div>
        <div
          className="vision-diagram"
          aria-label="Proceso: cámaras, visión artificial y métricas operativas"
        >
          {[
            { Icon: Camera, title: "Cámaras", copy: "Captura del proceso" },
            {
              Icon: ScanLine,
              title: "Visión con IA",
              copy: "Detección de eventos",
            },
            {
              Icon: ChartNoAxesCombined,
              title: "Productividad",
              copy: "Métricas operativas",
            },
          ].map((s, i) => (
            <div key={s.title}>
              <span>0{i + 1}</span>
              <s.Icon size={42} strokeWidth={1.2} />
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          ))}
          <small>
            Esquema ilustrativo. El alcance y las métricas se definen en cada
            proyecto.
          </small>
        </div>
      </div>
    </section>
  );
}
