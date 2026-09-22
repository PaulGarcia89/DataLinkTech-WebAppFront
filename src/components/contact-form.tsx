"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { contact, services } from "@/lib/content";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || contact.email;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const d = new FormData(event.currentTarget);
    const text = `Nombre: ${d.get("name")}\nCorreo: ${d.get("email")}\nEmpresa: ${d.get("company")}\nInterés: ${d.get("service")}\n\n${d.get("message")}`;

    if (email) {
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(
        `Consulta web: ${d.get("service")}`,
      )}&body=${encodeURIComponent(text)}`;
      setStatus(
        "Se solicitó abrir tu aplicación de correo. Revisa el mensaje y envíalo desde allí; el sitio no lo ha enviado.",
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setStatus(
        "Consulta copiada. Aún no se ha enviado: el canal de contacto está pendiente de configuración.",
      );
    } catch {
      setStatus(
        "No fue posible copiar. Puedes seleccionar y guardar el texto de tu consulta.",
      );
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <h2>Cuéntanos tu proyecto</h2>
      <p className="form-note">Los campos marcados con * son obligatorios.</p>

      <div className="form-row">
        <label>
          Nombre *
          <input
            name="name"
            required
            autoComplete="name"
            maxLength={100}
            placeholder="Tu nombre"
          />
        </label>
        <label>
          Correo electrónico *
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            maxLength={200}
            placeholder="tu@empresa.com"
          />
        </label>
      </div>

      <label>
        Empresa
        <input
          name="company"
          autoComplete="organization"
          maxLength={150}
          placeholder="Nombre de tu empresa"
        />
      </label>

      <label>
        ¿En qué podemos ayudarte? *
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Selecciona una solución
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Quiero orientación para mi proyecto</option>
        </select>
      </label>

      <label>
        Cuéntanos tu idea *
        <textarea
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={5000}
          placeholder="¿Qué reto tienes hoy y qué te gustaría lograr?"
        />
      </label>

      <p className="form-note">
        {email
          ? "Prepararemos el mensaje en tu aplicación de correo para que lo revises y lo envíes tú."
          : "El canal de contacto está en preparación. Por ahora puedes redactar y copiar tu consulta; no se enviará."}
      </p>

      <button className="btn btn-signal" type="submit">
        {email ? "Preparar correo" : "Copiar mi consulta"}
        {email ? <ArrowUpRight size={18} /> : <Copy size={17} />}
      </button>

      {status && (
        <p className="form-status" role="status">
          <Check size={17} />
          {status}
        </p>
      )}
    </form>
  );
}
