"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";

const navigation = [
  { href: "/soluciones/", label: "Soluciones" },
  { href: "/ia-y-automatizacion/", label: "IA & Automatización" },
  { href: "/industrias/", label: "Industrias" },
  { href: "/nosotros/", label: "Nosotros" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <BrandLogo priority />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small header-cta" href="/contacto/">
          Hablemos <ArrowUpRight size={17} />
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        aria-label="Navegación móvil"
      >
        {[
          { href: "/", label: "Inicio" },
          ...navigation,
          { href: "/contacto/", label: "Contacto" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
            <ArrowUpRight size={18} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
