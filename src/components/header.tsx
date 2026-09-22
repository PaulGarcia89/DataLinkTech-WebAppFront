"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { navigation, services } from "@/lib/content";

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

        <nav className="nav-desktop" aria-label="Navegación principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              className="nav-link"
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn-signal btn-sm header-cta" href="/contacto/">
          Evaluación gratuita
          <ArrowUpRight size={16} />
        </Link>

        <button
          ref={toggle}
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav
        id="nav-mobile"
        className="nav-mobile"
        data-open={open ? "true" : "false"}
        aria-label="Navegación móvil"
      >
        {[{ href: "/", label: "Inicio" }, ...navigation].map((item) => (
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
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}/`}
            onClick={() => setOpen(false)}
          >
            {s.name}
            <ArrowUpRight size={18} />
          </Link>
        ))}
        <Link
          className="btn btn-signal"
          href="/contacto/"
          onClick={() => setOpen(false)}
        >
          Solicita tu evaluación
          <ArrowUpRight size={17} />
        </Link>
      </nav>
    </header>
  );
}
