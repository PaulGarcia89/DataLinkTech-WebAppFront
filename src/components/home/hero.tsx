import Link from "next/link";
import { BookingLink } from "../booking-link";
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
            DataLink Tech Corp: automatización, software e infraestructura para
            empresas en Miami.
          </p>
          <div className="btn-row">
            <BookingLink />
            <Link className="btn btn-line" href="/soluciones/">
              Explora nuestras soluciones
            </Link>
          </div>
          <p className="coverage-note">
            Con base en Miami. Atención remota y visitas coordinadas a clientes
            en Florida; sin local abierto al público.
          </p>
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
