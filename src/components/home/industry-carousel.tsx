"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
const slides = [
  {
    name: "Restaurante",
    width: 749,
    height: 377,
    src: "/images/restaurant.webp",
    alt: "Restaurante con una persona utilizando un terminal de punto de venta junto a la barra.",
    caption: "Atención, reservas y operación conectadas",
    href: "/industrias/restaurantes/",
  },
  {
    name: "Warehouse",
    width: 1074,
    height: 346,
    src: "/images/warehouse.webp",
    alt: "Almacén con cámaras, estaciones de empaque y anotaciones de visión artificial sobre paquetes y zonas de trabajo.",
    caption: "Visión con IA · Productividad operativa",
    href: "/industrias/warehouse/",
  },
];
export function IndustryCarousel() {
  const [active, setActive] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);
  const select = (n: number) => setActive((n + slides.length) % slides.length);
  return (
    <section
      className="industry-carousel"
      aria-label="Aplicaciones de DataLink por industria"
      aria-roledescription="carrusel"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
          e.preventDefault();
          select(active + (e.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <div
        className="carousel-stage"
        onTouchStart={(e) => {
          start.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }}
        onTouchEnd={(e) => {
          if (!start.current) return;
          const dx = e.changedTouches[0].clientX - start.current.x;
          const dy = e.changedTouches[0].clientY - start.current.y;
          if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy))
            select(active + (dx < 0 ? 1 : -1));
          start.current = null;
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            id={`industry-slide-${i}`}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de 2: ${slide.name}`}
            hidden={active !== i}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              sizes="(max-width: 767px) 100vw, 1320px"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>
      <div className="carousel-bottom">
        <div className="carousel-caption" aria-live="polite" aria-atomic="true">
          <Link href={slides[active].href}>
            {slides[active].caption} <ArrowRight size={15} />
          </Link>
          <small>ESCENARIO ILUSTRATIVO</small>
        </div>
        <div className="carousel-controls">
          <button
            type="button"
            aria-label="Imagen anterior"
            onClick={() => select(active - 1)}
          >
            <ArrowLeft size={19} />
          </button>
          <div className="carousel-selectors">
            {slides.map((s, i) => (
              <button
                type="button"
                key={s.name}
                aria-pressed={i === active}
                aria-controls={`industry-slide-${i}`}
                onClick={() => select(i)}
              >
                <small>0{i + 1}</small>
                {s.name}
                <span />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Imagen siguiente"
            onClick={() => select(active + 1)}
          >
            <ArrowRight size={19} />
          </button>
          <span className="carousel-count" aria-hidden="true">
            {active + 1} / 2
          </span>
        </div>
      </div>
    </section>
  );
}
