import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustryCarousel } from "./industry-carousel";
export function Hero() {
  return (
    <section className="editorial-hero container">
      <div className="editorial-intro">
        <div>
          <h1>
            Tecnología que trabaja
            <br className="desktop-break" /> con tu negocio.
          </h1>
          <p>
            Automatización, software e infraestructura para empresas en Miami.
          </p>
          <Link className="btn btn-primary" href="/contacto/">
            Hablemos de tu proyecto <ArrowRight size={19} />
          </Link>
        </div>
        <aside>
          <span>MIAMI, FL</span>
          <p>
            Personas.
            <br />
            Procesos.
            <br />
            Tecnología.
            <br />
            <strong>Todo conectado.</strong>
          </p>
        </aside>
      </div>
      <IndustryCarousel />
    </section>
  );
}
