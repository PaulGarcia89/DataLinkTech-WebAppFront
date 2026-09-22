import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

export function GrowthEngine() {
  return (
    <div className="growth-engine">
      <div className="micro-label">DE LA ATENCIÓN A LA RELACIÓN</div>
      {[
        ["01", "Atracción", "Campañas + contenido"],
        ["02", "Conversación", "Consultas con intención"],
        ["03", "Inteligencia", "Clasificación + contexto"],
        ["04", "Continuidad", "CRM + seguimiento"],
      ].map(([n, title, copy], i) => (
        <div
          className="growth-stage"
          key={n}
          style={{ marginLeft: `${i * 6}%` }}
        >
          <span>{n}</span>
          <strong>
            {title}
            <small>{copy}</small>
          </strong>
          <ArrowDown size={18} />
        </div>
      ))}
      <p>Un recorrido conectado, no una colección de publicaciones.</p>
    </div>
  );
}
export function SoftwareProcess() {
  return (
    <div className="software-console">
      <div className="console-toolbar">
        <span>DATALINK / OPERATIONS</span>
        <SlidersHorizontal size={16} />
      </div>
      <div className="software-screen">
        <div className="software-sidebar" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="software-content">
          <div className="micro-label">
            INTERFAZ CONCEPTUAL · DATOS DE EJEMPLO
          </div>
          <p className="console-title">Tu operación, en orden.</p>
          {[
            ["Consulta de cliente", "Revisar contexto"],
            ["Reserva de ejemplo", "Confirmación preparada"],
            ["Seguimiento comercial", "Próxima acción definida"],
          ].map(([title, state]) => (
            <div className="operation-row" key={title}>
              <Check size={16} />
              <span>
                {title}
                <small>{state}</small>
              </span>
              <ChevronRight size={15} />
            </div>
          ))}
        </div>
      </div>
      <div className="software-lifecycle">
        Problema <span>→</span> Diseño <span>→</span> Desarrollo <span>→</span>{" "}
        Evolución
      </div>
    </div>
  );
}
export function GrowthSoftwareSection() {
  return (
    <section className="section container growth-software">
      <div className="section-heading">
        <div>
          <span className="eyebrow">04 / CONSTRUIR PARA CRECER</span>
          <h2>
            Más que herramientas.
            <br />
            <em>Una ventaja conectada.</em>
          </h2>
        </div>
      </div>
      <div className="editorial-pair">
        <article>
          <GrowthEngine />
          <span className="eyebrow">CRECIMIENTO DIGITAL</span>
          <h3>
            Cada oportunidad
            <br />
            merece un siguiente paso.
          </h3>
          <p>
            Conecta marketing, clasificación de consultas y seguimiento para dar
            continuidad a la relación con tus clientes.
          </p>
          <Link className="text-link" href="/marketing-digital/">
            Explorar marketing <ArrowUpRight size={17} />
          </Link>
        </article>
        <article>
          <SoftwareProcess />
          <span className="eyebrow">SOFTWARE A MEDIDA</span>
          <h3>
            Tu negocio no es genérico.
            <br />
            Tu software tampoco.
          </h3>
          <p>
            Diseñamos interfaces, aplicaciones e integraciones alrededor de tu
            forma de trabajar, con espacio para evolucionar.
          </p>
          <Link className="text-link" href="/software-a-medida/">
            Explorar desarrollo <ArrowUpRight size={17} />
          </Link>
        </article>
      </div>
    </section>
  );
}
