import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BrandLogo } from "./brand-logo";
import { services, contact } from "@/lib/content";
export function CTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="converging-network" aria-hidden="true">
          <svg viewBox="0 0 800 130">
            <path d="M0 15 Q300 15 400 95 M0 60 Q300 60 400 95 M0 115 Q300 115 400 95 M800 15 Q500 15 400 95 M800 60 Q500 60 400 95 M800 115 Q500 115 400 95" />
          </svg>
          <span>D</span>
        </div>
        <span className="eyebrow">CONECTEMOS LO QUE VIENE</span>
        <h2>
          El futuro de tu negocio
          <br />
          puede empezar <em>hoy.</em>
        </h2>
        <p>
          Evaluamos oportunidades para automatizar, conectar y mejorar la
          tecnología de tu negocio.
        </p>
        <div className="cta-actions">
          <Link className="button button-primary" href="/contacto/">
            Solicita tu evaluación tecnológica <ArrowUpRight size={18} />
          </Link>
          <a
            href={contact.whatsapp}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={19} /> Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <BrandLogo />
          <p>Tecnología que impulsa tu negocio.</p>
          <span className="footer-location">Miami · South Florida</span>
        </div>
        <div>
          <h3>Soluciones</h3>
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`}>
              {s.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>DataLink</h3>
          <Link href="/industrias/">Industrias</Link>
          <Link href="/industrias/restaurantes/">Restaurantes</Link>
          <Link href="/nosotros/">Nosotros</Link>
          <Link href="/contacto/">Contacto</Link>
        </div>
        <div>
          <h3>Hablemos</h3>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.tel}`}>{contact.phone}</a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp <ArrowUpRight size={13} />
          </a>
          <p>
            Ideas conectadas.
            <br />
            Negocios en crecimiento.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} DataLink Tech Corp</span>
        <span>DATOS → CONEXIÓN → INTELIGENCIA → CRECIMIENTO</span>
      </div>
    </footer>
  );
}
