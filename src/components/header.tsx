"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";

const navigation = [
  { href: "/soluciones/", label: "Soluciones" },
  { href: "/ia-y-automatizacion/", label: "IA y Automatización" },
  { href: "/industrias/", label: "Industrias" },
  { href: "/nosotros/", label: "Nosotros" },
];

const mobileNavigation = [
  { href: "/", label: "Inicio" },
  ...navigation,
  { href: "/contacto/", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Close the menu whenever the route changes (derived state pattern:
  // compare against the last rendered path instead of setState in an effect).
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Basic focus trap: keep Tab cycling inside the open menu.
  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    if (!menu) return;
    const focusables = menu.querySelectorAll<HTMLElement>("a[href], button");
    focusables[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    menu.addEventListener("keydown", onKeyDown);
    return () => menu.removeEventListener("keydown", onKeyDown);
  }, [open]);

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
          {mobileNavigation.map((item) => (
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
        ref={menuRef}
        id="mobile-nav"
        className="mobile-nav"
        hidden={!open}
        aria-label="Navegación móvil"
      >
        {mobileNavigation.map((item) => (
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
