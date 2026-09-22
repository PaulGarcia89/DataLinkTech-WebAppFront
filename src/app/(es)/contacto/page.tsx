import { Mail, MessageCircle, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { contact, method } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

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
    </section>
  );
}
