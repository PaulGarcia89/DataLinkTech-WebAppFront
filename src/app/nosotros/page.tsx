import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { contact, services } from "@/lib/content";
import { CoreSchematic } from "@/components/visuals/core-schematic";
import { Reveal } from "@/components/reveal";
import {
  MethodSection,
  PillarsSection,
  SectionHead,
} from "@/components/home/sections";
import { CTA } from "@/components/footer";

export const metadata = pageMetadata(
  "Nosotros — conectamos tecnología y negocio",
  "DataLink Tech Corp conecta IA, software, infraestructura, seguridad y soporte para negocios de Miami y South Florida, con un solo aliado tecnológico.",
  "/nosotros/",
);

const FIGURES = [
  {
    value: `${services.length} soluciones`,
    label: "Bajo un mismo criterio técnico y un solo interlocutor.",
  },
  {
    value: "Miami, FL",
    label: "Trabajo remoto y presencial en todo South Florida.",
  },
  {
    value: "ES · EN",
    label: "Atención en español e inglés, sin intermediarios.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-grid">
            <div>
              <p className="eyebrow">SOMOS DATALINK TECH CORP</p>
              <h1 style={{ marginTop: "var(--s-5)" }}>
                Las herramientas
                <br />
                son el comienzo.
                <br />
                <em>La conexión, la diferencia.</em>
              </h1>
              <p className="lead">
                Nacimos para ocupar un lugar que casi ningún proveedor ocupa: el
                de quien entiende el negocio completo y responde por toda su
                tecnología, de la red física a la inteligencia artificial.
              </p>
            </div>
            <CoreSchematic />
          </div>
        </div>
      </section>

      <section className="plane plane-paper plane-grid">
        <span className="plane-index">QUIÉNES SOMOS</span>
        <div className="container">
          <div className="thesis">
            <div className="about-statement">
              <p className="eyebrow">NUESTRA FORMA DE TRABAJAR</p>
              <h2>
                Tecnología que se
                <br />
                <em>puede explicar.</em>
              </h2>
            </div>
            <div className="thesis-aside">
              <p>
                DataLink Tech Corp es una empresa de tecnología con base en
                Miami, formada desde la ingeniería de sistemas, la
                administración de bases de datos y la analítica de información.
                Esa procedencia marca cómo trabajamos: antes de instalar algo,
                entendemos qué problema resuelve y qué datos produce.
              </p>
              <p>
                Acompañamos a restaurantes, comercios y empresas en crecimiento
                que ya no quieren coordinar cinco proveedores distintos para que
                su operación funcione. Cubrimos desde el cableado y las cámaras
                hasta el software propio y los asistentes de inteligencia
                artificial, con un mismo estándar y un solo responsable.
              </p>
              <p>
                No dejamos cajas negras. Cada implementación viene con la
                explicación de qué hace, por qué está ahí y cómo mantenerla,
                para que el negocio conserve su autonomía.
              </p>
            </div>
          </div>

          <Reveal className="about-figures">
            {FIGURES.map((f) => (
              <div className="about-figure" key={f.value}>
                <b>{f.value}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <PillarsSection />
      <MethodSection />

      <section className="plane plane-tight plane-deep">
        <div className="container">
          <SectionHead
            eyebrow="DÓNDE ESTAMOS"
            title={
              <>
                En Miami, <em>cerca de tu operación.</em>
              </>
            }
            lead={`Atendemos ${contact.region} de forma remota y presencial. Escríbenos y coordinamos una primera conversación sin compromiso.`}
          />
          <Link className="btn btn-line" href="/contacto/">
            Ver datos de contacto
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
