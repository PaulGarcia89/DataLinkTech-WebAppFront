"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Coffee,
  Factory,
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
    title: "Cafeterías",
    icon: Coffee,
    image: "/images/productivity-cafe.webp",
    href: "/industrias/restaurantes/",
    alt: "Vista elevada de una cafetería con zonas de preparación y entrega señaladas mediante gráficos ilustrativos.",
    problem: "Del café preparado al cliente atendido.",
    copy: "Observa el ritmo de preparación y los tiempos de espera para entender cuándo se acumulan los pedidos.",
    metrics: [
      "Bebidas por intervalo",
      "Tiempo de preparación",
      "Espera en la fila",
    ],
    detail: [
      "Definir las zonas de preparación, entrega y espera visibles en cámara.",
      "Detectar bebidas terminadas y movimientos entre estaciones, según la visibilidad.",
      "Comparar tiempos de preparación y longitud de fila por franja horaria.",
      "Revisar con el equipo dónde ajustar estaciones, turnos o la entrega.",
    ],
    deliverable:
      "Un panel de producción por estación y una lectura de los picos de demanda.",
  },
  {
    title: "Warehouse y logística",
    icon: Warehouse,
    image: "/images/warehouse.webp",
    href: "/industrias/warehouse/",
    alt: "Escenario ilustrativo de un almacén con cajas y zonas de trabajo señaladas.",
    problem: "¿Dónde se detiene el flujo de trabajo?",
    copy: "Relaciona el movimiento de unidades con los tiempos de ciclo para localizar acumulaciones en carga, empaque y despacho.",
    metrics: ["Unidades procesadas", "Tiempo de ciclo", "Acumulación por zona"],
    detail: [
      "Delimitar la zona de carga o empaque y el proceso que se quiere observar.",
      "Detectar el paso de unidades entre puntos definidos del almacén.",
      "Consultar conteos, tiempos de ciclo y acumulaciones por intervalo.",
      "Validar tendencias con el responsable y priorizar mejoras del flujo.",
    ],
    deliverable:
      "Un panel por proceso, un informe de tendencias y criterios de validación acordados.",
  },
  {
    title: "Restaurantes",
    icon: Utensils,
    image: "/images/restaurant.webp",
    href: "/industrias/restaurantes/",
    alt: "Escenario ilustrativo de la operación de un restaurante y su punto de venta.",
    problem: "Una operación más fluida, de cocina a salón.",
    copy: "Analiza la preparación, la entrega de pedidos y la ocupación de zonas para detectar esperas entre etapas.",
    metrics: [
      "Tiempo de entrega",
      "Ocupación por zona",
      "Pedidos por intervalo",
    ],
    detail: [
      "Definir las estaciones de preparación, entrega y las zonas del salón.",
      "Observar transiciones de pedidos y ocupación en las áreas visibles.",
      "Combinar eventos visuales con datos del POS cuando exista integración.",
      "Revisar demoras entre cocina y salón con el equipo del restaurante.",
    ],
    deliverable:
      "Una vista del flujo de pedidos y las franjas de mayor demanda, según las fuentes disponibles.",
  },
  {
    title: "Líneas de producción",
    icon: Factory,
    image: "/images/productivity-production.webp",
    href: "/ia-y-automatizacion/",
    alt: "Línea de empaque con cajas sobre una cinta transportadora y zonas de inspección ilustradas.",
    problem: "Cada etapa cuenta. Cada espera también.",
    copy: "Mide el paso de unidades y las pausas entre estaciones para entender la capacidad real del proceso.",
    metrics: [
      "Unidades por estación",
      "Duración de pausas",
      "Tiempo entre etapas",
    ],
    detail: [
      "Seleccionar estaciones y puntos de conteo a lo largo de la línea.",
      "Detectar unidades que cruzan cada punto y pausas visibles del flujo.",
      "Comparar intervalos de actividad, salida y acumulación entre estaciones.",
      "Contrastar los datos con producción y mantenimiento antes de ajustar el proceso.",
    ],
    deliverable:
      "Un seguimiento del ritmo de la línea y un reporte de pausas y acumulaciones.",
  },
];
const steps = ["Cámara", "Detección", "Indicadores", "Mejora"];
const icons = [Camera, ScanLine, ChartNoAxesCombined, ClipboardCheck];
export function Demonstrations() {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectPreference = () => {
      if (preference.matches) setPlaying(false);
    };
    respectPreference();
    preference.addEventListener("change", respectPreference);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );
    if (root.current) observer.observe(root.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", respectPreference);
    };
  }, []);
  const rotating = playing && visible && !hovered && !focused;
  useEffect(() => {
    if (!rotating) return;
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      clearTimeout(timer);
      if (!document.hidden)
        timer = setTimeout(
          () => setSelected((n) => (n + 1) % demos.length),
          8000,
        );
    };
    schedule();
    document.addEventListener("visibilitychange", schedule);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [rotating, selected]);
  const select = (index: number) =>
    setSelected((index + demos.length) % demos.length);
  const demo = demos[selected];
  return (
    <section
      ref={root}
      className="container demo-section"
      aria-labelledby="demo-heading"
      aria-roledescription="carrusel"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          select(selected + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <p className="eyebrow">VISIÓN ARTIFICIAL APLICADA</p>
      <h2 id="demo-heading">Medición de productividad</h2>
      <p className="demo-intro">
        Convierte lo que ocurre en tu operación en indicadores: conteos, tiempos
        y flujo de trabajo con cámaras e inteligencia artificial.
      </p>
      <p className="demo-footnote">
        Escenarios ilustrativos. No representan proyectos de clientes ni
        resultados medidos.
      </p>
      <div className="demo-switch" aria-label="Seleccionar demostración">
        {demos.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.title}
              type="button"
              aria-pressed={selected === index}
              aria-controls="demo-panel"
              onClick={() => select(index)}
            >
              <Icon size={20} aria-hidden="true" />
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="demo-controls">
        <span>
          {selected + 1} / {demos.length} · {demo.title}
        </span>
        <div>
          <button
            type="button"
            aria-label="Ejemplo anterior"
            aria-controls="demo-panel"
            onClick={() => select(selected - 1)}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => {
              setPlaying(!playing);
              if (!playing) setFocused(false);
            }}
          >
            {playing ? (
              <Pause size={17} aria-hidden="true" />
            ) : (
              <Play size={17} aria-hidden="true" />
            )}
            {playing ? "Pausar carrusel" : "Reproducir carrusel"}
          </button>
          <button
            type="button"
            aria-label="Ejemplo siguiente"
            aria-controls="demo-panel"
            onClick={() => select(selected + 1)}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div aria-live={rotating ? "off" : "polite"} aria-atomic="true">
        <div
          id="demo-panel"
          className="demo-panel"
          role="group"
          aria-roledescription="diapositiva"
          aria-label={demo.title}
        >
          <div className="demo-visual">
            {/* Existing illustrative assets are shown uncropped. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={demo.image}
              src={demo.image}
              alt={demo.alt}
              width={1536}
              height={1024}
              loading="lazy"
            />
            <span>ESCENARIO ILUSTRATIVO · NO ES UNA MEDICIÓN EN VIVO</span>
            <ul className="demo-metrics" aria-label="Indicadores posibles">
              {demo.metrics.map((metric) => (
                <li key={metric}>
                  <ChartNoAxesCombined size={18} aria-hidden="true" />
                  {metric}
                </li>
              ))}
            </ul>
          </div>
          <div className="demo-story">
            <h3>{demo.problem}</h3>
            <p>{demo.copy}</p>
            <ol className="demo-flow">
              {steps.map((step, index) => {
                const Icon = icons[index];
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
            <Link href="/medicion-de-productividad/">
              Explorar esta solución{" "}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <p className="demo-footnote">
        El alcance depende de tus sistemas y del proceso. En visión artificial,
        acordamos permisos, acceso y uso de imágenes; los indicadores requieren
        validación humana. Los ejemplos describen procesos y zonas, sin
        identificar personas ni asignar puntuaciones individuales de desempeño.
      </p>
    </section>
  );
}
