import { Fragment } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { CoreSchematic } from "@/components/visuals/core-schematic";
import { chain, contact, services } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">TECNOLOGÍA E IA PARA NEGOCIOS QUE AVANZAN</p>

            <h1>
              <span>Seis frentes.</span>
              <span>Un solo</span>
              <span className="signal">aliado técnico.</span>
            </h1>

            <p className="hero-lead">
              Automatización con IA, software a medida, marketing, redes,
              seguridad y soporte. Todo lo que tu negocio necesita para operar
              conectado, con un mismo equipo detrás.
            </p>

            <div className="hero-services">
              {services.map((s) => (
                <span key={s.slug}>{s.name}</span>
              ))}
            </div>

            <div className="btn-row">
              <Link className="btn btn-primary" href="/contacto/">
                Solicita tu evaluación
                <ArrowUpRight size={18} />
              </Link>
              <a className="link-arrow" href="#servicios">
                Ver las seis soluciones
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          <CoreSchematic />
        </div>

        <div className="hero-meta">
          <span>
            <strong>{contact.region}</strong> · Atención en español e inglés
          </span>
          <span className="hero-meta-chain">
            {chain.map((c, i) => (
              <Fragment key={c.key}>
                {i > 0 && <i aria-hidden="true" />}
                {c.label}
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
