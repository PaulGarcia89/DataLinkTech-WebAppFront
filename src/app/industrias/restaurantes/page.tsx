import { pageMetadata } from "@/lib/seo";
import { RestaurantDigitalTwin } from "@/components/industries/restaurant-digital-twin";
import { InteractiveDemo } from "@/components/demo/interactive-demo";
import { CTA } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { siteUrl } from "@/lib/content";
export const metadata = pageMetadata(
  "Tecnología y automatización para restaurantes en Miami",
  "Conecta atención con IA, reservas, POS, redes Wi-Fi, seguridad y seguimiento para tu restaurante en Miami y South Florida.",
  "/industrias/restaurantes/",
);
export default function Restaurants() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Tecnología para restaurantes",
          areaServed: ["Miami", "South Florida"],
          provider: { "@id": `${siteUrl}/#organization` },
          url: `${siteUrl}/industrias/restaurantes/`,
        }}
      />
      <section className="container page-intro">
        <span className="eyebrow">
          RESTAURANTES / DE LA PRIMERA CONSULTA A LA PRÓXIMA VISITA
        </span>
        <h1>
          Una gran experiencia
          <br />
          empieza con
          <br />
          <em>todo conectado.</em>
        </h1>
        <p>
          Atención digital y operación física bajo una misma visión. Diseñamos
          las conexiones que tu restaurante necesita, según sus sistemas y su
          forma de trabajar.
        </p>
      </section>
      <section className="container section section-topless">
        <RestaurantDigitalTwin />
      </section>
      <section className="section light-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">UNA RESERVA. TODO UN RECORRIDO.</span>
              <h2>
                Imagina la siguiente
                <br />
                <em>conversación.</em>
              </h2>
            </div>
            <p>
              Explora un ejemplo de flujo automatizado. La disponibilidad y los
              contactos mostrados son ficticios.
            </p>
          </div>
          <InteractiveDemo />
        </div>
      </section>
      <CTA />
    </>
  );
}
