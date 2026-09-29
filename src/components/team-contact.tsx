import Link from "next/link";
import { ArrowUpRight, Languages, MapPin, Phone } from "lucide-react";

export function TeamContact() {
  return (
    <section className="container team-contact" aria-labelledby="team-heading">
      <div>
        <p className="eyebrow">HABLEMOS DIRECTAMENTE</p>
        <h2 id="team-heading">Una conversación con nombre propio.</h2>
        <p>
          Cuéntanos cómo funciona tu negocio, qué te está frenando y qué quieres
          mejorar. La primera consulta sirve para entender tu situación y
          acordar el siguiente paso.
        </p>
      </div>
      <article className="team-person">
        <div className="team-initials" aria-hidden="true">
          PG
        </div>
        <div>
          <h3>Paul Garcia</h3>
          <p>Contacto de DataLink Tech Corp</p>
        </div>
        <ul>
          <li>
            <MapPin size={18} aria-hidden="true" />
            Miami · Florida
          </li>
          <li>
            <Languages size={18} aria-hidden="true" />
            Atención en español e inglés
          </li>
          <li>
            <Phone size={18} aria-hidden="true" />
            Teléfono, SMS o WhatsApp
          </li>
        </ul>
        <Link href="/contacto/" className="btn btn-primary">
          Conversar sobre mi proyecto{" "}
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </article>
    </section>
  );
}
