"use client";
import { useId, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import {
  ArrowUpRight,
  AudioLines,
  Braces,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const nodes = [
  {
    name: "DATOS",
    label: "Todo comienza con una señal.",
    description: "Mensajes, consultas e información de tu operación.",
    x: 13,
    y: 27,
    Icon: Database,
  },
  {
    name: "IA",
    label: "La información cobra sentido.",
    description: "Interpretar intenciones para orientar el siguiente paso.",
    x: 49,
    y: 12,
    Icon: Cpu,
  },
  {
    name: "AUTOMATIZACIÓN",
    label: "Una decisión se convierte en acción.",
    description: "Conectar tareas, herramientas y seguimiento.",
    x: 84,
    y: 31,
    Icon: Workflow,
  },
  {
    name: "SOFTWARE",
    label: "Cada herramienta trabaja contigo.",
    description: "Aplicaciones que se adaptan a tus procesos.",
    x: 82,
    y: 72,
    Icon: Braces,
  },
  {
    name: "INFRAESTRUCTURA",
    label: "El negocio físico también se conecta.",
    description: "Redes, dispositivos y POS como base de la operación.",
    x: 45,
    y: 87,
    Icon: Network,
  },
  {
    name: "SEGURIDAD",
    label: "Control en cada conexión.",
    description: "Accesos, respaldo y visibilidad de tus sistemas.",
    x: 12,
    y: 67,
    Icon: ShieldCheck,
  },
];
export function DatalinkNetwork() {
  const [active, setActive] = useState(1);
  const reduced = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 65, damping: 25 });
  const y = useSpring(my, { stiffness: 65, damping: 25 });
  return (
    <div
      className="network-experience"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left - r.width / 2) * 0.018);
        my.set((e.clientY - r.top - r.height / 2) * 0.018);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="network-caption">
        <span>
          <i className="status-dot" /> DATALINK NETWORK
        </span>
        <span>
          EXPLORA LAS CONEXIONES <ArrowUpRight size={12} />
        </span>
      </div>
      <motion.div
        className="network-stage"
        style={{ x: reduced ? 0 : x, y: reduced ? 0 : y }}
      >
        <svg
          className="network-paths"
          viewBox="0 0 600 480"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={id}>
              <stop stopColor="#0066ff" />
              <stop offset="1" stopColor="#00d1ff" />
            </linearGradient>
          </defs>
          <path
            d="M 35 285 L 292 80 L 567 223 L 310 430 Z M 35 252 L 292 47 L 567 190 L 310 397 Z"
            className="network-plane"
          />
          {nodes.map((n, i) => (
            <g key={n.name}>
              <path
                d={`M ${n.x * 6} ${n.y * 4.8} Q 300 ${n.y * 4.8} 300 240`}
                className={active === i ? "wire wire-active" : "wire"}
              />
              {active === i && (
                <path
                  key={`signal-${i}`}
                  d={`M ${n.x * 6} ${n.y * 4.8} Q 300 ${n.y * 4.8} 300 240`}
                  className="wire-signal"
                  stroke={`url(#${id})`}
                />
              )}
            </g>
          ))}
        </svg>
        <div className="network-core" aria-hidden="true">
          <span className="core-glyph">
            D<span />
          </span>
          <strong>DATALINK</strong>
          <small>INTELLIGENCE CORE</small>
        </div>
        {nodes.map((n, i) => (
          <button
            key={n.name}
            type="button"
            className={`data-node ${active === i ? "selected" : ""}`}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            aria-controls="network-description"
          >
            <n.Icon size={20} strokeWidth={1.4} />
            <span>{n.name}</span>
          </button>
        ))}
      </motion.div>
      <div
        className="network-description"
        id="network-description"
        aria-live="polite"
      >
        <AudioLines size={24} />
        <div>
          <strong>{nodes[active].label}</strong>
          <p>{nodes[active].description}</p>
        </div>
        <span className="network-index">0{active + 1}/06</span>
      </div>
    </div>
  );
}
