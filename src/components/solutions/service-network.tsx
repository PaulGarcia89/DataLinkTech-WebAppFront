"use client";
import Link from "next/link";
import { useId, useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Cpu,
  Headset,
  Network,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { services } from "@/lib/content";
const icons = [Cpu, TrendingUp, Braces, Network, ShieldCheck, Headset];
const outcomes = [
  [
    "Tu equipo repite tareas que podrían conectarse.",
    "Más tiempo para atender lo que requiere criterio humano.",
  ],
  [
    "La captación y el seguimiento trabajan por separado.",
    "Una visión más clara del recorrido de cada oportunidad.",
  ],
  [
    "Tus herramientas te obligan a adaptar tu forma de trabajar.",
    "Software que acompaña tus procesos y su evolución.",
  ],
  [
    "Los sistemas digitales necesitan una base física fiable.",
    "Conectividad y recursos organizados para tu operación.",
  ],
  [
    "La información y los accesos necesitan control.",
    "Mayor visibilidad sobre sistemas, espacios y permisos.",
  ],
  [
    "Las incidencias interrumpen el trabajo cotidiano.",
    "Un punto de apoyo para mantener tu tecnología operativa.",
  ],
];
export function ServiceNetwork() {
  const [active, setActive] = useState(0);
  const id = useId();
  const s = services[active];
  return (
    <div className="service-explorer">
      <div className="service-selector">
        <div className="service-root">
          <span className="status-dot" /> DATALINK
          <span>UN ECOSISTEMA. MUCHAS POSIBILIDADES.</span>
        </div>
        <div className="service-branches">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <button
                key={service.slug}
                className={active === i ? "selected" : ""}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-controls={id}
              >
                <span className="branch-index">0{i + 1}</span>
                <Icon size={21} />
                <span>
                  {service.name}
                  {i === 0 && <small>EL MOTOR DE TODO</small>}
                </span>
                <ArrowUpRight size={17} />
              </button>
            );
          })}
        </div>
      </div>
      <div id={id} className="service-panel" aria-live="polite">
        <span className="eyebrow">{s.tag}</span>
        <h3>{s.short}</h3>
        <dl>
          <dt>EL RETO</dt>
          <dd>{outcomes[active][0]}</dd>
          <dt>LA CONEXIÓN DATALINK</dt>
          <dd>{s.description}</dd>
          <dt>EL OBJETIVO</dt>
          <dd>{outcomes[active][1]}</dd>
        </dl>
        <Link href={`/${s.slug}/`} className="text-link">
          Explorar {s.name.toLowerCase()} <ArrowUpRight size={18} />
        </Link>
      </div>
    </div>
  );
}
