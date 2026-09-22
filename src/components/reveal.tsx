"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Revela su contenido al entrar en pantalla.
 * Sin JavaScript o con movimiento reducido el contenido permanece visible.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node) return;

    // Lo que ya está en pantalla al cargar no se oculta: evita parpadeos.
    const box = node.getBoundingClientRect();
    if (box.top < window.innerHeight * 0.92) return;

    setShown(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — ref polimórfico sobre un conjunto acotado de etiquetas
      ref={ref}
      className={`reveal ${className}`.trim()}
      data-shown={shown ? "true" : "false"}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
