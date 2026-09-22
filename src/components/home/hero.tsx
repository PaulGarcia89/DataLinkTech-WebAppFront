import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { DatalinkNetwork } from "@/components/network/datalink-network";
export function Hero() {
  return (
    <section className="hero-wrap">
      <div className="container hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> INTELIGENCIA APLICADA A TU NEGOCIO
          </p>
          <h1>
            Tecnología <span className="keep">e IA.</span>
            <br />
            Negocios que
            <br />
            <em>avanzan.</em>
          </h1>
          <p className="hero-description">
            Automatizamos procesos, desarrollamos software y conectamos la
            tecnología que impulsa el crecimiento de tu negocio.
          </p>
          <Link className="button button-primary" href="/contacto/">
            Transforma tu negocio <ArrowUpRight size={18} />
          </Link>
          <a className="hero-secondary" href="#demo">
            Descubre lo que podemos automatizar <ArrowDown size={15} />
          </a>
        </div>
        <DatalinkNetwork />
        <div className="hero-bottom">
          <span>MIAMI · SOUTH FLORIDA · CONECTADOS CONTIGO</span>
          <span>
            DATOS <i /> CONEXIÓN <i /> INTELIGENCIA <i /> CRECIMIENTO
          </span>
          <a href="#demo" aria-label="Descubrir la demo de IA">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
