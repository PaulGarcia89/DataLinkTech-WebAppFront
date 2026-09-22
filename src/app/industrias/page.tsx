import Link from "next/link";
import { ArrowUpRight, Building2, Store, UtensilsCrossed } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { RestaurantSection } from "@/components/home/story-sections";
import { CTA } from "@/components/footer";
export const metadata = pageMetadata(
  "Tecnología para restaurantes y empresas en Miami",
  "Automatización, software, POS y redes para restaurantes, comercios y oficinas de Miami y South Florida.",
  "/industrias/",
);
export default function Industries() {
  return (
    <>
      <section className="container page-intro">
        <span className="eyebrow">INDUSTRIAS / MIAMI + SOUTH FLORIDA</span>
        <h1>
          Tu negocio tiene
          <br />
          su propio ritmo.
          <br />
          <em>Lo conectamos.</em>
        </h1>
        <p>
          Las herramientas cambian. El punto de partida es el mismo: entender
          cómo funciona tu operación.
        </p>
        <div className="industry-list">
          {[
            {
              name: "Restaurantes",
              copy: "Consultas, reservas, POS, Wi-Fi y experiencia del cliente.",
              Icon: UtensilsCrossed,
              href: "/industrias/restaurantes/",
            },
            {
              name: "Comercios y negocios locales",
              copy: "Atención, seguimiento de oportunidades y herramientas de operación.",
              Icon: Store,
              href: "/contacto/",
            },
            {
              name: "Oficinas y empresas en crecimiento",
              copy: "Procesos, información compartida, infraestructura y soporte.",
              Icon: Building2,
              href: "/contacto/",
            },
          ].map((s) => (
            <Link href={s.href} key={s.name}>
              <s.Icon size={26} />
              <div>
                <h2>{s.name}</h2>
                <p>{s.copy}</p>
              </div>
              <ArrowUpRight size={22} />
            </Link>
          ))}
        </div>
      </section>
      <RestaurantSection />
      <CTA />
    </>
  );
}
