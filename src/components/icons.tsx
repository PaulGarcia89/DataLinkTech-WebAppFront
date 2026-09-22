/**
 * Iconografía propia de DataLink.
 * Trazos de 1.6 sobre una retícula de 24, alineados al manual de marca.
 */

type GlyphName =
  | "ai"
  | "growth"
  | "code"
  | "network"
  | "shield"
  | "support"
  | "venue"
  | "store"
  | "office";

const paths: Record<GlyphName, React.ReactNode> = {
  // IA y Automatización — chip
  ai: (
    <>
      <rect x="7.5" y="7.5" width="9" height="9" rx="1.5" />
      <rect x="10.75" y="10.75" width="2.5" height="2.5" rx="0.5" />
      <path d="M10 7.5V4.5M14 7.5V4.5M10 19.5v-3M14 19.5v-3M7.5 10H4.5M7.5 14H4.5M19.5 10h-3M19.5 14h-3" />
    </>
  ),
  // Marketing Digital — crecimiento
  growth: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M6 20.5v-5M11 20.5v-9M16 20.5v-13" />
      <path d="M18.5 5.5h2.5V8" />
      <path d="M21 5.5 16 10.5l-2.5-2.5-4 4" />
    </>
  ),
  // Software a Medida — código
  code: (
    <>
      <path d="M8.5 8 4.5 12l4 4" />
      <path d="M15.5 8l4 4-4 4" />
      <path d="M13.2 5.5 10.8 18.5" />
    </>
  ),
  // Redes e Infraestructura — señal
  network: (
    <>
      <path d="M3.6 9.2a12.4 12.4 0 0 1 16.8 0" />
      <path d="M6.9 12.7a7.6 7.6 0 0 1 10.2 0" />
      <path d="M10.1 16.1a3 3 0 0 1 3.8 0" />
      <circle cx="12" cy="19.4" r="1.15" fill="currentColor" stroke="none" />
    </>
  ),
  // Seguridad y Control — escudo
  shield: (
    <>
      <path d="M12 3.2 19.5 6.4v5.1c0 4.3-3 7.3-7.5 8.6-4.5-1.3-7.5-4.3-7.5-8.6V6.4Z" />
      <path d="M9.2 12.1 11 13.9l3.8-3.8" />
    </>
  ),
  // Soporte IT — asistencia
  support: (
    <>
      <path d="M5 14.5v-2.2a7 7 0 0 1 14 0v2.2" />
      <rect x="2.9" y="13.4" width="3.4" height="5.4" rx="1.5" />
      <rect x="17.7" y="13.4" width="3.4" height="5.4" rx="1.5" />
      <path d="M19.4 18.8v.4a2.4 2.4 0 0 1-2.4 2.4h-2.6" />
    </>
  ),
  // Sectores
  venue: (
    <>
      <path d="M5.5 3v6.5a2.5 2.5 0 0 0 5 0V3" />
      <path d="M8 9.5V21" />
      <path d="M17.5 3c-1.7 1.3-2.5 3.2-2.5 5.6 0 1.7.8 2.9 2.5 3.2V21" />
      <path d="M17.5 3v9" />
    </>
  ),
  store: (
    <>
      <path d="M3.5 9.5h17V20a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1Z" />
      <path d="M3.5 9.5 5 3.5h14l1.5 6" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  office: (
    <>
      <path d="M4 21V4.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1V21" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" />
      <path d="M2.5 21h19" />
      <path d="M7.5 7.5h3M7.5 11.5h3M7.5 15.5h3M17 14h0M17 17.5h0" />
    </>
  ),
};

/**
 * Sólo los trazos, para incrustar dentro de otro SVG.
 * Evita el SVG anidado, que no escala de forma fiable.
 */
export function GlyphPaths({ name }: { name: GlyphName }) {
  return <>{paths[name]}</>;
}

export function Glyph({
  name,
  size = 24,
  className,
  ...rest
}: {
  name: GlyphName;
  size?: number;
  className?: string;
} & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export type { GlyphName };
