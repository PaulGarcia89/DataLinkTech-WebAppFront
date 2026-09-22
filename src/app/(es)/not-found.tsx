import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container notfound">
      <p className="eyebrow">ERROR 404 / ENLACE NO ENCONTRADO</p>
      <h1>
        Esta conexión
        <br />
        <em>no existe.</em>
      </h1>
      <p className="lead" style={{ textAlign: "center" }}>
        La página que buscas cambió de lugar o nunca estuvo aquí. Volvamos al
        punto de partida.
      </p>
      <Link className="btn btn-primary" href="/">
        Ir al inicio
        <ArrowUpRight size={18} />
      </Link>
    </section>
  );
}
