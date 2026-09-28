"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  Database,
  CalendarDays,
  Camera,
  ScanLine,
  ChartNoAxesCombined,
  ClipboardCheck,
  Utensils,
  Warehouse,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const demos = [
  {
    title: "Warehouse y logística",
    icon: Warehouse,
    image: "/images/warehouse.webp",
    href: "/industrias/warehouse/",
    problem: "¿Dónde se detiene el flujo de trabajo?",
    copy: "Una demostración de cómo convertir actividad visible en información para revisar una operación.",
    steps: ["Cámara", "Detección", "Indicadores", "Informe"],
    detail: [
      "Delimitar una zona de carga y el proceso que se quiere observar.",
      "Identificar el paso de unidades y los momentos de actividad en esa zona.",
      "Consultar conteo de unidades y tiempos de ciclo por intervalo.",
      "Revisar tendencias con el responsable de la operación antes de tomar decisiones.",
    ],
    deliverable:
      "Un panel por proceso, un informe de tendencias y criterios de validación acordados.",
  },
  {
    title: "Restaurantes",
    icon: Utensils,
    image: "/images/restaurant.webp",
    href: "/industrias/restaurantes/",
    problem: "¿Tus herramientas trabajan por separado?",
    copy: "Un ejemplo de cómo conectar una consulta, una reserva y el seguimiento del equipo.",
    steps: ["Consulta", "Registro", "Coordinación", "Seguimiento"],
    detail: [
      "El cliente consulta por un canal de atención del restaurante.",
      "La solicitud se registra con los datos necesarios y su estado.",
      "El equipo revisa disponibilidad y confirma la reserva.",
      "El negocio consulta solicitudes pendientes y confirmadas en un solo lugar.",
    ],
    deliverable:
      "Un flujo de atención conectado, un registro de solicitudes y una guía para el equipo.",
  },
];
const icons = [
  [Camera, ScanLine, ChartNoAxesCombined, ClipboardCheck],
  [MessageCircle, Database, CalendarDays, ClipboardCheck],
];
export function Demonstrations() {
  const [selected, setSelected] = useState(0);
  const demo = demos[selected];
  return (
    <section className="container demo-section" aria-labelledby="demo-heading">
      <p className="eyebrow">DE LA IDEA AL PROCESO</p>
      <h2 id="demo-heading">Así podría funcionar en tu negocio.</h2>
      <p className="demo-intro">
        Escenarios ilustrativos. No representan proyectos de clientes ni
        resultados medidos.
      </p>
      <div className="demo-switch" aria-label="Seleccionar demostración">
        {demos.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.href}
              type="button"
              aria-pressed={selected === index}
              aria-controls="demo-panel"
              onClick={() => setSelected(index)}
            >
              <Icon size={20} aria-hidden="true" />
              {item.title}
            </button>
          );
        })}
      </div>
      <div id="demo-panel" className="demo-panel">
        <div className="demo-visual">
          {/* Existing illustrative assets are shown uncropped. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={demo.image}
            alt={demo.title}
            width={1536}
            height={1024}
            loading="lazy"
          />
          <span>DEMOSTRACIÓN ILUSTRATIVA</span>
        </div>
        <div className="demo-story">
          <h3>{demo.problem}</h3>
          <p>{demo.copy}</p>
          <ol className="demo-flow">
            {demo.steps.map((step, index) => {
              const Icon = icons[selected][index];
              return (
                <li key={step}>
                  <div className="demo-step">
                    <Icon size={22} aria-hidden="true" />
                    <span>{step}</span>
                    {index < 3 && <ArrowRight size={16} aria-hidden="true" />}
                  </div>
                  <p>{demo.detail[index]}</p>
                </li>
              );
            })}
          </ol>
          <div className="demo-delivery">
            <strong>Qué entregaríamos</strong>
            <p>{demo.deliverable}</p>
          </div>
          <Link href={demo.href}>
            Explorar esta solución <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <p className="demo-footnote">
        El alcance depende de tus sistemas y del proceso. En visión artificial,
        acordamos permisos, acceso y uso de imágenes; los indicadores requieren
        validación humana.
      </p>
    </section>
  );
}
