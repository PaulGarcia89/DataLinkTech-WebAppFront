import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  FileCheck2,
  GraduationCap,
  ScanLine,
  UtensilsCrossed,
  Package,
  Building2,
} from "lucide-react";
import { BookingLink } from "@/components/booking-link";
import { CTA } from "@/components/footer";
import { PlatformExplorer } from "@/components/platform-explorer";
import { StructuredData } from "@/components/structured-data";
import { platformModules } from "@/lib/platform-modules";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import styles from "@/styles/platform.module.css";

export const metadata = pageMetadata(
  "Módulos para conectar personas y operación",
  "Explora los módulos de gestión de DataLink: reclutamiento, personal, capacitación, productividad, inventarios y empresas. Solicita una demostración.",
  "/plataforma/",
);
const icons = {
  BriefcaseBusiness,
  Users,
  FileCheck2,
  GraduationCap,
  ScanLine,
  UtensilsCrossed,
  Package,
  Building2,
};

export default function PlatformPage() {
  return (
    <div className={styles.page}>
      <StructuredData
        data={breadcrumbSchema([{ name: "Plataforma", path: "/plataforma/" }])}
      />
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className={styles.kicker}>PLATAFORMA / DATALINK</p>
            <h1>
              Tu operación.
              <br />
              <em>Cada módulo en su lugar.</em>
            </h1>
            <p className={styles.intro}>
              Personas, procesos y recursos en una propuesta modular. Explora
              las áreas que necesitas y conversemos sobre su implementación.
            </p>
            <div className="btn-row">
              <BookingLink />
              <a className={styles.heroLink} href="#modulos">
                Explorar los módulos <ArrowDown size={18} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.heroNote}>
              Conoce los módulos en una consulta de 30 minutos.
            </p>
          </div>
          <div className={styles.constellation}>
            <div className={styles.core}>
              <span>DATALINK</span>
              <small>PERSONAS + PROCESOS + RECURSOS</small>
            </div>
            <div className={styles.orbitModules}>
              {platformModules.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <a key={item.id} href={`#${item.id}`}>
                    <Icon size={23} aria-hidden="true" />
                    <span>{item.name}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <PlatformExplorer />
      <section
        className={`container ${styles.catalog}`}
        id="modulos"
        aria-labelledby="catalog-title"
      >
        <p className={styles.kicker}>ELIGE TU PUNTO DE PARTIDA</p>
        <h2 id="catalog-title">Ocho módulos. Distintas necesidades.</h2>
        <p className={styles.intro}>
          Revisamos contigo el alcance, los permisos y las integraciones antes
          de definir la implementación.
        </p>
        <div className={styles.cards}>
          {platformModules.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.id} id={item.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className={styles.note}>{item.note}</p>
                <BookingLink className={styles.cardLink} />
              </article>
            );
          })}
        </div>
      </section>
      <section className={styles.implementation}>
        <div className="container">
          <p className={styles.kicker}>IMPLEMENTACIÓN CON CONTEXTO</p>
          <h2>Primero tu proceso. Después la configuración.</h2>
          <div className={styles.process}>
            <div>
              <h3>1. Conocer tu operación</h3>
              <p>Revisamos tus herramientas, equipos y prioridades.</p>
            </div>
            <div>
              <h3>2. Definir los módulos</h3>
              <p>Acordamos funciones, accesos, datos e integraciones.</p>
            </div>
            <div>
              <h3>3. Validar el recorrido</h3>
              <p>Comprobamos el flujo acordado antes de ponerlo en uso.</p>
            </div>
          </div>
          <div className={styles.faq}>
            <h2>Antes de empezar</h2>
            <details>
              <summary>¿Puedo empezar con un solo módulo?</summary>
              <p>
                Podemos definir un alcance inicial por área. La propuesta debe
                confirmar dependencias, módulos habilitados y configuración
                necesaria.
              </p>
            </details>
            <details>
              <summary>¿Estas vistas muestran mi información?</summary>
              <p>
                No. Son esquemas explicativos con contenido ilustrativo. Esta
                página comercial no accede a cuentas, cámaras ni datos del SaaS.
              </p>
            </details>
            <details>
              <summary>¿Qué se necesita para implementarlo?</summary>
              <p>
                Revisamos procesos, usuarios, permisos, información disponible e
                integraciones. La disponibilidad y el alcance final se confirman
                en la propuesta.
              </p>
            </details>
          </div>
          <Link className="link-arrow" href="/contacto/">
            Contacto <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <CTA
        title="¿Qué módulo necesita tu negocio?"
        copy="Reserva una conversación para revisar tus procesos y preparar una demostración centrada en tus necesidades."
      />
    </div>
  );
}
