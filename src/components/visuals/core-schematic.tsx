"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { GlyphPaths, type GlyphName } from "@/components/icons";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getMotionSnapshot = () => window.matchMedia(REDUCED_MOTION).matches;

/** En el servidor asumimos movimiento reducido: nada se anima hasta hidratar. */
const getServerSnapshot = () => true;

const C = 310; // centro
const R_NODE = 218; // radio del anillo de nodos
const ANGLES = [-90, -30, 30, 90, 150, 210];

const NODES: { label: string; icon: GlyphName; full: string }[] = [
  { label: "IA", icon: "ai", full: "IA y Automatización" },
  { label: "MARKETING", icon: "growth", full: "Marketing Digital" },
  { label: "SOFTWARE", icon: "code", full: "Software a Medida" },
  { label: "REDES", icon: "network", full: "Redes e Infraestructura" },
  { label: "SEGURIDAD", icon: "shield", full: "Seguridad y Control" },
  { label: "SOPORTE", icon: "support", full: "Soporte IT" },
];

function point(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: C + radius * Math.cos(rad), y: C + radius * Math.sin(rad) };
}

export function CoreSchematic() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useSyncExternalStore(
    subscribeMotion,
    getMotionSnapshot,
    getServerSnapshot,
  );
  const motion = !reduced;

  useEffect(() => {
    if (reduced) return;

    let visible = true;
    let timer: ReturnType<typeof setInterval> | undefined;

    const start = () => {
      if (timer) return;
      timer = setInterval(() => setActive((i) => (i + 1) % NODES.length), 2200);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = undefined;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !document.hidden) start();
        else stop();
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);

    const onVisibility = () => {
      if (document.hidden || !visible) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduced]);

  return (
    <div className="core" ref={ref} aria-hidden="true">
      <svg viewBox="38 30 544 560" role="presentation">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d1ff" stopOpacity="0.32" />
            <stop offset="60%" stopColor="#0066ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Anillos de referencia */}
        <circle className="core-ring" cx={C} cy={C} r={R_NODE} />
        <circle
          className="core-ring-dashed core-ring-spin"
          cx={C}
          cy={C}
          r={152}
        />
        <circle className="core-ring" cx={C} cy={C} r={112} />

        {/* Radios */}
        {ANGLES.map((angle, i) => {
          const a = point(angle, 96);
          const b = point(angle, R_NODE);
          return (
            <line
              key={`spoke-${i}`}
              className="core-spoke"
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              opacity={active === i ? 0.95 : 0.4}
            />
          );
        })}

        {/* Pulsos de señal hacia el núcleo */}
        {motion &&
          ANGLES.map((angle, i) => {
            const from = point(angle, 168);
            const to = point(angle, 100);
            return (
              <rect
                key={`pulse-${i}`}
                className="core-pulse"
                x={from.x - 3}
                y={from.y - 3}
                width="6"
                height="6"
              >
                <animate
                  attributeName="x"
                  from={from.x - 3}
                  to={to.x - 3}
                  dur="2.4s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="y"
                  from={from.y - 3}
                  to={to.y - 3}
                  dur="2.4s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.15;0.7;1"
                  dur="2.4s"
                  begin={`${i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </rect>
            );
          })}

        {/* Núcleo */}
        <circle className="core-hub-glow" cx={C} cy={C} r={150} />
        <rect
          className="core-hub-plate"
          x={C - 88}
          y={C - 88}
          width="176"
          height="176"
          rx="26"
        />
        <g transform={`translate(${C}, ${C})`}>
          <text className="core-hub-label" textAnchor="middle" y="-4">
            DATALINK
          </text>
          <text className="core-hub-sub" textAnchor="middle" y="18">
            TECH CORP
          </text>
          <text
            className="core-hub-sub"
            textAnchor="middle"
            y="46"
            opacity="0.7"
          >
            NÚCLEO
          </text>
        </g>

        {/* Nodos de servicio */}
        {ANGLES.map((angle, i) => {
          const p = point(angle, R_NODE);
          const node = NODES[i];
          return (
            <g
              key={node.label}
              className={`core-node${active === i ? " is-live" : ""}`}
            >
              <rect x={p.x - 64} y={p.y - 46} width="128" height="92" rx="10" />
              <g
                className="core-icon"
                transform={`translate(${p.x - 12}, ${p.y - 30})`}
              >
                <GlyphPaths name={node.icon} />
              </g>
              <text textAnchor="middle" x={p.x} y={p.y + 30}>
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      <p className="core-caption">
        <span className="node-dot" />
        {NODES[active].full}
      </p>
    </div>
  );
}
