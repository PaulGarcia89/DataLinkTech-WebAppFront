import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import {
  InteractiveDemo,
  AIWorkflow,
} from "@/components/demo/interactive-demo";
import { ServiceNetwork } from "@/components/solutions/service-network";
import { RestaurantDigitalTwin } from "@/components/industries/restaurant-digital-twin";
import { BeforeAfter } from "./before-after";

export function AISection() {
  return (
    <section id="demo" className="section light-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              01 / DE UNA CONSULTA A TODO UN PROCESO
            </span>
            <h2>
              Tu negocio.
              <br />
              <em>Más inteligente.</em>
            </h2>
          </div>
          <div>
            <p>
              Una respuesta es solo el comienzo. Mira cómo la IA puede conectar
              atención, reservas y seguimiento.
            </p>
            <AIWorkflow />
          </div>
        </div>
        <InteractiveDemo />
        <div className="ai-applications">
          <span>ATENCIÓN AL CLIENTE</span>
          <span>WHATSAPP</span>
          <span>RESERVAS</span>
          <span>DOCUMENTOS</span>
          <span>ASISTENTES IA</span>
          <span>ANALÍTICA</span>
        </div>
        <div className="comparison-intro">
          <span className="eyebrow">EL CAMBIO ESTÁ EN LAS CONEXIONES</span>
          <h3>
            Menos trabajo repetido.
            <br />
            Más espacio para avanzar.
          </h3>
        </div>
        <BeforeAfter />
      </div>
    </section>
  );
}
export function EcosystemSection() {
  return (
    <section className="section container" id="soluciones">
      <div className="section-heading">
        <div>
          <span className="eyebrow">02 / EL ECOSISTEMA DATALINK</span>
          <h2>
            Todo conectado.
            <br />
            <em>Nada por casualidad.</em>
          </h2>
        </div>
        <p>
          IA como motor. Software y marketing para avanzar. Infraestructura para
          sostenerlo.
        </p>
      </div>
      <ServiceNetwork />
    </section>
  );
}
export function RestaurantSection() {
  return (
    <section className="section restaurant-section" id="industrias">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / DEL MUNDO DIGITAL A TU LOCAL</span>
            <h2>
              La próxima conexión
              <br />
              <em>ocurre en tu negocio.</em>
            </h2>
          </div>
          <p>
            Desde la primera consulta hasta la próxima visita. Explora las capas
            de un restaurante conectado.
          </p>
        </div>
        <RestaurantDigitalTwin />
        <Link
          href="/industrias/restaurantes/"
          className="text-link restaurant-link"
        >
          Tecnología para restaurantes en Miami <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
export function Results() {
  return (
    <section className="section light-section">
      <div className="container results-layout">
        <div>
          <span className="eyebrow">05 / TECNOLOGÍA CON PROPÓSITO</span>
          <h2>
            Lo importante
            <br />
            no es la tecnología.
            <br />
            <em>Es lo que te permite.</em>
          </h2>
          <p>
            Definimos contigo qué mejorar y cómo comprobarlo. Cada solución
            empieza con un objetivo concreto.
          </p>
        </div>
        <ul className="results-list">
          {[
            "Menos trabajo manual",
            "Respuestas más ágiles",
            "Información conectada",
            "Mejor experiencia del cliente",
            "Más control de la operación",
            "Más tiempo para crecer",
          ].map((s, i) => (
            <li key={s}>
              <span>0{i + 1}</span>
              {s}
              <ArrowUpRight size={21} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export function AboutSection() {
  return (
    <section className="section container about-section" id="proceso">
      <div>
        <span className="eyebrow">06 / LA FORMA DATALINK</span>
        <h2>
          La tecnología suma.
          <br />
          <em>
            Conectarla multiplica
            <br />
            las posibilidades.
          </em>
        </h2>
        <p>
          Tu internet, marketing, software, POS y datos de clientes pueden
          trabajar juntos. Ese es nuestro punto de partida: entender el negocio
          y diseñar las conexiones que le faltan.
        </p>
        <Link href="/nosotros/" className="text-link">
          Conoce nuestra visión <ArrowUpRight size={18} />
        </Link>
      </div>
      <ol className="approach-list">
        {[
          [
            "Escuchamos",
            "Entendemos tus procesos, tus fricciones y lo que quieres lograr.",
          ],
          [
            "Conectamos",
            "Definimos las herramientas y el alcance que tu operación necesita.",
          ],
          [
            "Implementamos",
            "Construimos, probamos y acompañamos la puesta en marcha.",
          ],
          [
            "Evolucionamos",
            "Revisamos lo aprendido y planificamos las siguientes mejoras.",
          ],
        ].map(([title, copy], i) => (
          <li key={title}>
            <span>0{i + 1}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
            {i === 3 ? <Check size={20} /> : <ArrowRight size={20} />}
          </li>
        ))}
      </ol>
    </section>
  );
}
