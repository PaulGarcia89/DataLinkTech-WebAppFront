"use client";
import { useId, useState } from "react";
import {
  Cpu,
  Database,
  Layers,
  Monitor,
  ShieldCheck,
  Wifi,
} from "lucide-react";
const layers = [
  {
    name: "IA",
    Icon: Cpu,
    title: "La atención empieza antes de llegar.",
    copy: "Una consulta desde WhatsApp o la web puede iniciar el flujo de reserva, preguntas frecuentes y seguimiento.",
    nodes: ["Cliente", "WhatsApp / Web", "Agente IA", "Reserva"],
  },
  {
    name: "Software",
    Icon: Layers,
    title: "Tu operación, en el mismo contexto.",
    copy: "Conecta reservas, pedidos y herramientas de gestión según las integraciones disponibles de cada sistema.",
    nodes: ["Reservas", "Pedidos", "CRM", "Seguimiento"],
  },
  {
    name: "Datos",
    Icon: Database,
    title: "Información que deja de estar aislada.",
    copy: "Organiza la información necesaria de clientes y operación, con permisos y uso definidos por tu negocio.",
    nodes: ["Consultas", "Preferencias", "Historial", "Visibilidad"],
  },
  {
    name: "Red",
    Icon: Wifi,
    title: "La conexión sostiene la experiencia.",
    copy: "Diseña la conectividad del local para separar invitados, operación y dispositivos de acuerdo con sus necesidades.",
    nodes: ["Internet", "Wi-Fi invitados", "Red operativa", "Equipos"],
  },
  {
    name: "Dispositivos",
    Icon: Monitor,
    title: "El punto donde lo digital se hace físico.",
    copy: "POS, terminales y dispositivos de trabajo forman la base para atender, registrar y coordinar la operación.",
    nodes: ["POS", "Terminal", "Cocina", "Operación"],
  },
  {
    name: "Seguridad",
    Icon: ShieldCheck,
    title: "Control sobre espacios y sistemas.",
    copy: "Planifica accesos, videovigilancia y respaldo como parte de una solución integral, con el alcance adecuado para tu local.",
    nodes: ["Accesos", "Cámaras", "Permisos", "Respaldo"],
  },
];
export function RestaurantDigitalTwin({
  initialLayer = 0,
}: {
  initialLayer?: number;
}) {
  const [active, setActive] = useState(initialLayer);
  const id = useId();
  const layer = layers[active];
  return (
    <div className="digital-twin">
      <div className="twin-visual">
        <div className="twin-top">
          <span>RESTAURANTE CONECTADO</span>
          <span>MODELO CONCEPTUAL</span>
        </div>
        <div className="floorplan" aria-hidden="true">
          <div className="floor-zone kitchen">
            COCINA
            <span />
            <span />
            <span />
          </div>
          <div className="floor-zone dining">
            SALA
            <div className="tables">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <i key={n} />
              ))}
            </div>
          </div>
          <div className="floor-zone reception">
            RECEPCIÓN
            <Monitor size={23} />
          </div>
          <div className="floor-spine">
            <span />
            <span />
            <span />
          </div>
          <span className="floor-node fn1">
            <layer.Icon size={22} />
          </span>
          <span className="floor-node fn2">
            <layer.Icon size={19} />
          </span>
          <span className="floor-node fn3">
            <layer.Icon size={19} />
          </span>
        </div>
        <div className="twin-flow">
          {layer.nodes.map((n, i) => (
            <span key={n}>
              <i>0{i + 1}</i>
              {n}
            </span>
          ))}
        </div>
      </div>
      <div className="twin-content">
        <div className="layer-tabs" aria-label="Capas del restaurante">
          {layers.map((l, i) => (
            <button
              key={l.name}
              type="button"
              aria-pressed={i === active}
              aria-controls={id}
              onClick={() => setActive(i)}
            >
              <l.Icon size={17} />
              {l.name}
            </button>
          ))}
        </div>
        <div id={id} aria-live="polite">
          <span className="eyebrow">CAPA 0{active + 1} / 06</span>
          <h3>{layer.title}</h3>
          <p>{layer.copy}</p>
        </div>
        <span className="micro-label">DIGITAL + FÍSICO. UN MISMO NEGOCIO.</span>
      </div>
    </div>
  );
}
