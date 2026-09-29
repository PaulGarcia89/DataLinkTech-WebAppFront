import { BookingLink } from "./booking-link";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, MessageCircle, Phone } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { brand, contact, sectors, services } from "@/lib/content";

import { businessProfile } from "@/i18n/business-profile";

export function CTA({
  title = (
    <>
      Conectemos lo que tu
      <br />
      negocio ya puede <em>hacer.</em>
    </>
  ),
  copy = "Revisamos tu operación, identificamos qué conviene automatizar o conectar primero y te proponemos un plan realista. Sin compromiso.",
}: {
  title?: React.ReactNode;
  copy?: string;
}) {
  return (
    <section className="cta">
      <div className="ambient-workstation" aria-hidden="true" />
      <div className="container">
        <div className="cta-converge" aria-hidden="true">
          <svg viewBox="0 0 560 90" role="presentation">
            <path d="M0 8 Q220 8 280 74 M0 40 Q220 40 280 74 M0 72 Q220 72 280 74 M560 8 Q340 8 280 74 M560 40 Q340 40 280 74 M560 72 Q340 72 280 74" />
            <circle cx="280" cy="76" r="5" />
          </svg>
        </div>

        <p className="eyebrow">EL SIGUIENTE PASO</p>
        <h2>{title}</h2>
        <p>{copy}</p>

        <div className="btn-row">
          <BookingLink className="btn btn-signal" />
          <a
            className="btn btn-line"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <BrandLogo />
            <p>{brand.descriptor}. Ideas conectadas a tu crecimiento.</p>
            <span className="mono">{contact.region}</span>
          </div>

          <div>
            <h3>Soluciones</h3>
            <div className="footer-col">
              <Link href="/plataforma/">Plataforma</Link>
              <Link href="/diseno-web/">Diseño web</Link>
              <Link href="/medicion-de-productividad/">
                Productividad con IA
              </Link>
              {services.map((s) => (
                <Link key={s.slug} href={`/${s.slug}/`}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3>DataLink</h3>
            <div className="footer-col">
              <Link href="/soluciones/">Soluciones</Link>
              <Link href="/industrias/">Industrias</Link>
              {sectors
                .filter(
                  (s) => s.slug === "warehouse" || s.slug === "restaurantes",
                )
                .map((s) => (
                  <Link key={s.slug} href={s.href}>
                    {s.name}
                  </Link>
                ))}
              <Link href="/nosotros/">Nosotros</Link>
              <Link href="/guias/">Guías</Link>
              <Link href="/contacto/">Contacto</Link>
            </div>
          </div>

          <div>
            <h3>Hablemos</h3>
            <div className="footer-col">
              <a href={`mailto:${contact.email}`}>
                <Mail size={15} />
                {contact.email}
              </a>
              <a href={`tel:${contact.tel}`}>
                <Phone size={15} />
                {contact.phone}
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} />
                WhatsApp
                <ArrowUpRight size={12} />
              </a>
              <a
                href={businessProfile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={15} aria-hidden="true" />
                Perfil en Google
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DataLink Tech Corp</span>
          <span>{brand.chainLabel}</span>
        </div>
      </div>
    </footer>
  );
}
