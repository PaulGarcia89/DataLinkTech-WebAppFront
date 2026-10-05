import Link from "next/link";

/**
 * Breadcrumb de navegación (WCAG: nav etiquetado + último paso con aria-current).
 * Se renderiza como lista ordenada semántica.
 */
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumb" aria-label="Ruta de navegación">
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.href ?? item.label}-${i}`}>
              {last || !item.href ? (
                <span aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
