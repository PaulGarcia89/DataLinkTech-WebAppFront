import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Glyph } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { chain, method, pillars, sectors, services } from "@/lib/content";

/* ---------- Encabezado de sección reutilizable ---------- */

export function SectionHead({
  eyebrow,
  title,
  lead,
  split = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  split?: boolean;
}) {
  return (
    <div className={`section-head${split ? " section-head-split" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 style={{ marginTop: "var(--s-4)" }}>{title}</h2>
      </div>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}

/* ---------- 01 · La tesis ---------- */

export function Thesis() {
  return (
    <section className="plane plane-paper plane-grid">
      <span className="plane-index">PLANO 01 / DIAGNÓSTICO</span>
      <div className="container">
        <Reveal className="thesis">
          <div>
            <p className="eyebrow">POR QUÉ EXISTE DATALINK</p>
            <h2 style={{ marginTop: "var(--s-5)" }}>
              La tecnología de tu negocio
              <br />
              no está rota.
              <br />
              <em>Está desconectada.</em>
            </h2>
          </div>
          <div className="thesis-aside">
            <p>
              Un proveedor instaló las cámaras, otro montó la red, alguien más
              hizo la página y el punto de venta llegó con el local. Cada pieza
              funciona por su cuenta y nadie ve el conjunto.
            </p>
            <p>
              DataLink existe para ocupar ese lugar: el aliado que entiende la
              operación completa y hace que las partes trabajen como una sola.
            </p>
            <ul className="rule-list">
              <li>
                <b>01</b>
                Un interlocutor para todo lo tecnológico, no cinco proveedores.
              </li>
              <li>
                <b>02</b>
                Decisiones con criterio de ingeniería y de datos.
              </li>
              <li>
                <b>03</b>
                Cada mejora deja documentación y autonomía, no dependencia.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 02 · Los seis servicios ---------- */

export function ServicesGrid() {
  return (
    <section className="plane plane-deep plane-grid" id="servicios">
      <span className="plane-index">PLANO 02 / SOLUCIONES</span>
      <div className="container">
        <SectionHead
          split
          eyebrow="LAS SEIS SOLUCIONES"
          title={
            <>
              Todo lo que tu negocio
              <br />
              necesita, <em>en un solo lugar.</em>
            </>
          }
          lead="Cada servicio resuelve por sí solo. Juntos hacen algo que ningún proveedor aislado puede: conectar toda tu operación bajo un mismo criterio."
        />

        <Reveal className="services">
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`} className="service-card">
              <div className="service-card__top">
                <span className="service-card__index">{s.index}</span>
                <span className="service-card__glyph">
                  <Glyph name={s.icon} size={23} />
                </span>
              </div>
              <h3>{s.name}</h3>
              <p className="service-card__promise">{s.promise}</p>
              <p>{s.description}</p>
              <ul className="service-card__items">
                {s.capabilities.map((c) => (
                  <li key={c.title}>{c.title}</li>
                ))}
              </ul>
              <span className="service-card__cta">
                Ver solución
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 03 · La cadena de valor ---------- */

export function ChainSection() {
  return (
    <section className="plane plane-navy plane-grid">
      <span className="plane-index">PLANO 03 / MÉTODO DE VALOR</span>
      <div className="container">
        <SectionHead
          split
          eyebrow="CÓMO SE CONECTA"
          title={
            <>
              De datos sueltos a
              <br />
              <em>crecimiento medible.</em>
            </>
          }
          lead="Es el recorrido que sigue cualquier proyecto en DataLink, sin importar por qué servicio empiece."
        />

        <Reveal className="chain">
          {chain.map((c, i) => (
            <div className="chain-step" key={c.key}>
              <span className="mono">FASE 0{i + 1}</span>
              <h3>{c.label}</h3>
              <p>{c.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 04 · Sectores ---------- */

export function SectorsSection() {
  return (
    <section className="plane plane-paper plane-grid">
      <span className="plane-index">PLANO 04 / SECTORES</span>
      <div className="container">
        <SectionHead
          split
          eyebrow="DÓNDE TRABAJAMOS"
          title={
            <>
              Tu sector tiene su ritmo.
              <br />
              <em>Empezamos por entenderlo.</em>
            </>
          }
          lead="Las herramientas cambian según el negocio. El punto de partida siempre es el mismo: cómo funciona tu operación un día normal."
        />

        <Reveal className="sectors">
          {sectors.map((s) => (
            <Link key={s.slug} href={s.href} className="sector">
              <span className="sector__glyph">
                <Glyph name={s.icon} size={22} />
              </span>
              <h3>{s.name}</h3>
              <p>{s.copy}</p>
              <div className="sector__points">
                {s.points.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
              <span className="sector__cta">
                Ver más
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 05 · Método de trabajo ---------- */

export function MethodSection() {
  return (
    <section className="plane plane-deep plane-grid">
      <span className="plane-index">PLANO 05 / CÓMO TRABAJAMOS</span>
      <div className="container">
        <SectionHead
          split
          eyebrow="EL PROCESO"
          title={
            <>
              Cuatro pasos.
              <br />
              <em>Sin sorpresas.</em>
            </>
          }
          lead="Un orden de trabajo claro, en etapas que no detienen tu operación mientras se implementan."
        />
      </div>
      <Reveal className="container">
        <div className="method">
          {method.map((m) => (
            <div className="method-step" key={m.step}>
              <b>{m.step}</b>
              <h3>{m.title}</h3>
              <p>{m.copy}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- 06 · Por qué DataLink ---------- */

export function PillarsSection() {
  return (
    <section className="plane plane-white plane-grid">
      <span className="plane-index">PLANO 06 / CRITERIO</span>
      <div className="container">
        <SectionHead
          split
          eyebrow="POR QUÉ DATALINK"
          title={
            <>
              Lo que cambia cuando
              <br />
              hay <em>un solo responsable.</em>
            </>
          }
          lead="No vendemos equipos sueltos ni horas de instalación. Acompañamos la tecnología del negocio con una visión completa."
        />
        <Reveal className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </Reveal>
        <div style={{ marginTop: "var(--s-8)" }}>
          <Link className="link-arrow" href="/nosotros/">
            Conoce cómo trabajamos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
