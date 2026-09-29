import { BookingLink } from "@/components/booking-link";
import { CTA } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteUrl } from "@/lib/content";
import { Monitor, LayoutTemplate, Search, CalendarDays } from "lucide-react";
const title = "Diseño web para empresas en Miami y Florida";
const description =
  "Sitios web en español e inglés, adaptados al móvil y preparados para recibir consultas. Diseño, contenido, SEO técnico y conexiones con tus herramientas.";
export const metadata = pageMetadata(title, description, "/diseno-web/");
const features = [
  {
    title: "Estructura y contenido",
    text: "Organizamos servicios, sectores y preguntas para que el visitante encuentre lo que necesita. El alcance define quién prepara textos, fotografías y traducciones.",
    icon: LayoutTemplate,
  },
  {
    title: "Diseño adaptable",
    text: "Diseñamos para móvil y escritorio con navegación clara, contraste legible y formularios accesibles.",
    icon: Monitor,
  },
  {
    title: "SEO técnico y publicación",
    text: "Configuramos títulos, descripciones, enlaces de idioma, sitemap y datos estructurados coherentes con tu negocio. Revisamos indexabilidad; no prometemos posiciones.",
    icon: Search,
  },
  {
    title: "Consultas y reservas",
    text: "Conectamos formulario, teléfono, WhatsApp y calendario según tus cuentas. Acordamos qué eventos medir y qué servicios pueden generar costes recurrentes.",
    icon: CalendarDays,
  },
];
export default function WebDesign() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([{ name: "Diseño web", path: "/diseno-web/" }])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: title,
          description,
          url: new URL("/diseno-web/", siteUrl).href,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: "Florida",
        }}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">DISEÑO WEB / DATALINK</p>
          <h1>Una web que explica tu negocio y facilita el siguiente paso.</h1>
          <p className="lead">{description}</p>
          <BookingLink />
          <p className="coverage-note">
            Con base en Miami. Atención remota y visitas coordinadas a clientes
            en Florida; sin local abierto al público.
          </p>
        </div>
      </section>
      <section className="plane">
        <div className="container">
          <h2>Qué podemos incluir</h2>
          <div className="web-deliverables">
            {features.map(({ title, text, icon: Icon }) => (
              <article key={title}>
                <Icon aria-hidden="true" size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="plane plane-paper">
        <div className="container-narrow guide-article">
          <h2>Cómo definimos tu proyecto</h2>
          <p>
            Primero revisamos tu oferta, público, contenido y herramientas.
            Después acordamos páginas, idiomas, integraciones, revisiones y
            criterios de entrega.
          </p>
          <h3>¿Cuánto cuesta y cuánto tarda?</h3>
          <p>
            Depende del número de páginas, contenido disponible e integraciones.
            Tras revisar esos puntos preparamos una propuesta con precio, etapas
            y responsabilidades; no publicamos una tarifa que no corresponda a
            tu alcance.
          </p>
          <h3>¿Qué recibo al finalizar?</h3>
          <p>
            La entrega acordada incluye el sitio publicado, accesos bajo tu
            control, pruebas de formularios y enlaces, y una explicación de cómo
            actualizarlo. Hosting, dominio y mantenimiento se detallan por
            separado.
          </p>
          <h3>¿Podemos mejorar mi web actual?</h3>
          <p>
            Sí. Empezamos con una revisión de contenido, navegación, consultas y
            estado técnico para decidir qué conservar y qué rehacer.
          </p>
          <aside className="guide-answer">
            <h3>Preparar mi consulta</h3>
            <p>
              Trae tu dominio, tres servicios prioritarios, ejemplos de diseño y
              el contenido que ya tienes. No envíes contraseñas por el
              formulario.
            </p>
          </aside>
        </div>
      </section>
      <CTA />
    </>
  );
}
