import Link from "next/link";
import { serviceScopes } from "@/lib/service-scope";
export function ServiceScope({ slug }: { slug: string }) {
  const scope = serviceScopes.find((item) => item.slug === slug);
  if (!scope) return null;
  const labels = [
    "Qué recibirás",
    "Qué necesitamos de ti",
    "Cómo lo implementamos",
    "Qué se define en la propuesta",
  ];
  return (
    <section className="plane plane-white">
      <div className="container">
        <p className="eyebrow">ANTES DE EMPEZAR</p>
        <h2 className="commercial-title">{scope.title}</h2>
        <div className="scope-grid">
          {scope.items.map((text, index) => (
            <div key={labels[index]}>
              <span className="mono">0{index + 1}</span>
              <h3>{labels[index]}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <p className="scope-note">
          Confirmamos entregables, plazos y costes contigo antes de iniciar el
          trabajo.
        </p>
        <Link href="/guias/">Guías para tu negocio →</Link>
      </div>
    </section>
  );
}
