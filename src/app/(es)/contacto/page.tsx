import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { contact, method } from "@/lib/content";
import { Consultation } from "@/components/consultation";
import { ContactForm } from "@/components/contact-form";

import { businessProfile } from "@/i18n/business-profile";

export const metadata = pageMetadata(
  "Contacto",
  "Cuéntanos tu proyecto y exploremos juntos la solución tecnológica para tu negocio en Miami y South Florida.",
  "/contacto/",
);

export default function Contact() {
  return (
    <section
      className="page-hero"
      style={{ paddingBottom: "clamp(64px, 8vw, 120px)" }}
    >
      <div className="container contact-grid">
        <div className="contact-side">
          <p className="eyebrow">CONECTEMOS IDEAS</p>
          <h1>
            Todo empieza con
            <br />
            una <em>conversación.</em>
          </h1>
          <p className="lead">
            Cuéntanos qué necesitas resolver o qué te gustaría construir.
            Respondemos con una primera lectura de tu situación y el siguiente
            paso concreto.
          </p>

          <div className="contact-channels">
            <a href={`mailto:${contact.email}`}>
              <Mail size={19} />
              <span>
                <b>{contact.email}</b>
                <small>Correo</small>
              </span>
            </a>
            <a href={`tel:${contact.tel}`}>
              <Phone size={19} />
              <span>
                <b>{contact.phone}</b>
                <small>Teléfono</small>
              </span>
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} />
              <span>
                <b>Escribir por WhatsApp</b>
                <small>{contact.region}</small>
              </span>
            </a>
          </div>

          <Consultation />

          <ul className="rule-list" style={{ marginTop: "var(--s-4)" }}>
            {method.map((m) => (
              <li key={m.step}>
                <b>{m.step}</b>
                {m.title} — {m.copy}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
      <aside
        className="container google-profile"
        aria-labelledby="google-profile-title"
      >
        <div>
          <p className="eyebrow">CERCA DE TU NEGOCIO</p>
          <h2 id="google-profile-title">DataLink también en Google.</h2>
          <p>
            Consulta nuestra ficha, fotografías de instalaciones y experiencias
            compartidas por clientes.
          </p>
          <a
            className="btn btn-signal"
            href={businessProfile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver perfil en Google <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="google-profile-details">
          <p>
            <MapPin size={20} aria-hidden="true" />
            <span>
              Atención remota y visitas a las instalaciones del cliente en
              Florida. Sin local de atención al público.
            </span>
          </p>
          <p>
            <Clock3 size={20} aria-hidden="true" />
            <span>Todos los días, de 8 AM a 10 PM (hora de Miami).</span>
          </p>
          <div className="google-profile-review">
            <h3>¿Ya trabajaste con nosotros?</h3>
            <p>
              Comparte tu experiencia para ayudar a otros negocios a conocernos.
            </p>
            <a
              href={businessProfile.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribir una reseña <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
}
