import styles from "@/styles/contact-cta.module.css";
import { BookingLink } from "./booking-link";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  MessageCircle,
  Phone,
  Clock3,
  AudioLines,
  Route,
  ListChecks,
} from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { brand, contact, sectors, services } from "@/lib/content";

import { businessProfile } from "@/i18n/business-profile";

export function CTA({
  title = <>Hablemos de lo que tu negocio necesita.</>,
  copy = "Revisamos tu operación, identificamos qué conviene automatizar o conectar primero y te proponemos un plan realista. Sin compromiso.",
}: {
  title?: React.ReactNode;
  copy?: string;
}) {
  return (
    <section
      className={styles.section}
      id="consulta"
      aria-label="Conversemos sobre tu proyecto"
    >
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              EL SIGUIENTE PASO
            </p>
            <h2>{title}</h2>
            <p className={styles.description}>{copy}</p>
            <div className={styles.actions}>
              <BookingLink className={styles.primary} />
              <a
                className={styles.secondary}
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Escribir por WhatsApp
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <p className={styles.reassurance}>
              Sin compromiso · En español o inglés
            </p>
          </div>
          <aside className={styles.agenda}>
            <div className={styles.agendaTop}>
              <span className={styles.agendaLabel}>TU PRIMERA CONSULTA</span>
              <span className={styles.duration}>
                <Clock3 size={15} aria-hidden="true" />
                30 min
              </span>
            </div>
            <h3>
              Una conversación.
              <br />
              Un punto de partida.
            </h3>
            <ol>
              <li>
                <AudioLines size={20} aria-hidden="true" />
                <div>
                  <strong>Escuchamos tu reto</strong>
                  <p>Qué necesitas resolver y cómo trabajas hoy.</p>
                </div>
              </li>
              <li>
                <Route size={20} aria-hidden="true" />
                <div>
                  <strong>Conectamos las piezas</strong>
                  <p>Tus herramientas, tu equipo y tus prioridades.</p>
                </div>
              </li>
              <li>
                <ListChecks size={20} aria-hidden="true" />
                <div>
                  <strong>Definimos el siguiente paso</strong>
                  <p>Un alcance inicial para avanzar con claridad.</p>
                </div>
              </li>
            </ol>
          </aside>
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
