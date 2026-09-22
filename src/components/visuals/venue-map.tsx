"use client";

import { useState } from "react";
import { Glyph, type GlyphName } from "@/components/icons";

type Item = { x: number; y: number; label: string };

type Layer = {
  id: string;
  name: string;
  icon: GlyphName;
  caption: string;
  items: Item[];
};

const LAYERS: Layer[] = [
  {
    id: "red",
    name: "Redes e Infraestructura",
    icon: "network",
    caption:
      "Primero la base: puntos de acceso ubicados según el uso real del local, cableado hacia el rack y una red separada para el equipo, los equipos de cobro y los invitados.",
    items: [
      { x: 132, y: 96, label: "AP salón" },
      { x: 336, y: 92, label: "AP cocina" },
      { x: 300, y: 222, label: "AP terraza" },
      { x: 66, y: 232, label: "Rack / switch" },
    ],
  },
  {
    id: "pos",
    name: "Sistemas POS",
    icon: "code",
    caption:
      "Los puntos de venta y las impresoras de comanda dejan de ser islas: comparten red, se integran con el inventario y envían la información a un solo lugar.",
    items: [
      { x: 118, y: 156, label: "POS salón" },
      { x: 344, y: 158, label: "POS barra" },
      { x: 332, y: 52, label: "Impresora cocina" },
    ],
  },
  {
    id: "seguridad",
    name: "Seguridad y Control",
    icon: "shield",
    caption:
      "Cámaras en accesos, caja y almacén, con acceso remoto. El control de acceso define quién entra al local y quién entra a los sistemas.",
    items: [
      { x: 38, y: 38, label: "Cámara salón" },
      { x: 402, y: 38, label: "Cámara cocina" },
      { x: 402, y: 242, label: "Cámara acceso" },
      { x: 158, y: 242, label: "Control de acceso" },
    ],
  },
  {
    id: "ia",
    name: "IA y Automatización",
    icon: "ai",
    caption:
      "Sobre esa base conectada entra la IA: responde consultas y reservas fuera de hora, registra el pedido y avisa al equipo sin que nadie tenga que copiar datos.",
    items: [
      { x: 230, y: 118, label: "Asistente de IA" },
      { x: 230, y: 208, label: "Reservas y mensajes" },
    ],
  },
  {
    id: "soporte",
    name: "Soporte IT",
    icon: "support",
    caption:
      "Y detrás, un punto de contacto que mantiene los equipos, revisa la red y responde cuando algo se detiene en plena operación.",
    items: [
      { x: 74, y: 208, label: "Estación de trabajo" },
      { x: 114, y: 232, label: "Respaldos" },
    ],
  },
];

const ZONES = [
  { x: 40, y: 42, label: "Salón" },
  { x: 268, y: 42, label: "Cocina" },
  { x: 40, y: 200, label: "Oficina" },
  { x: 170, y: 200, label: "Entrada / Terraza" },
];

export function VenueMap({ initialLayer = 0 }: { initialLayer?: number }) {
  const [active, setActive] = useState(initialLayer);
  const layer = LAYERS[active];

  return (
    <div className="venue">
      <div
        className="venue-layers"
        role="group"
        aria-label="Capas del local conectado"
      >
        {LAYERS.map((l, i) => (
          <button
            key={l.id}
            type="button"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <Glyph name={l.icon} size={19} />
            {l.name}
          </button>
        ))}
      </div>

      <div>
        <div className="venue-stage">
          <svg
            viewBox="0 0 440 280"
            role="img"
            aria-label={`Plano del local: capa ${layer.name}`}
          >
            {/* Planta */}
            <rect
              className="venue-fill"
              x="20"
              y="20"
              width="400"
              height="240"
              rx="4"
            />
            <rect
              className="venue-room"
              x="20"
              y="20"
              width="400"
              height="240"
              rx="4"
            />
            <line className="venue-room" x1="250" y1="20" x2="250" y2="180" />
            <line className="venue-room" x1="20" y1="180" x2="420" y2="180" />
            <line className="venue-room" x1="150" y1="180" x2="150" y2="260" />

            {ZONES.map((z) => (
              <text key={z.label} className="venue-label" x={z.x} y={z.y}>
                {z.label}
              </text>
            ))}

            {/* Elementos de la capa activa */}
            {LAYERS.map((l, i) => (
              <g
                key={l.id}
                className="venue-item"
                data-on={i === active ? "true" : "false"}
              >
                {l.items.map((item, k) => (
                  <g key={item.label}>
                    {k > 0 && (
                      <line
                        x1={l.items[k - 1].x}
                        y1={l.items[k - 1].y}
                        x2={item.x}
                        y2={item.y}
                      />
                    )}
                    <circle className="halo" cx={item.x} cy={item.y} r="11" />
                    <circle cx={item.x} cy={item.y} r="3.6" />
                    <text
                      className="venue-label"
                      x={item.x + 14}
                      y={item.y + 3}
                      style={{ fill: "currentColor" }}
                    >
                      {item.label}
                    </text>
                  </g>
                ))}
              </g>
            ))}
          </svg>
        </div>
        <p className="venue-caption" role="status">
          {layer.caption}
        </p>
      </div>
    </div>
  );
}
