import Link from "next/link";
import {
  ArrowUpRight,
  MessageCircle,
  Headphones,
  CalendarCheck,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
export function CommercialPreview() {
  const steps = [
    { label: "Consulta", icon: MessageCircle },
    { label: "Asistente", icon: Headphones },
    { label: "Evaluación o cita", icon: CalendarCheck },
    { label: "Seguimiento comercial", icon: ClipboardList },
  ];
  return (
    <section className="commercial-preview plane">
      <div className="ambient-workstation" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow">DE LA CONSULTA AL SEGUIMIENTO</p>
        <div className="commercial-preview-grid">
          <div>
            <h2>De la primera consulta al seguimiento.</h2>
            <p>
              Explora un ejemplo de asistente y un panel comercial conectado con
              el siguiente paso de cada consulta.
            </p>
            <Link
              className="btn btn-signal"
              href="/ia-y-automatizacion/#commercial-demo"
            >
              Ver demostraciones interactivas
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div>
            <ol className="commercial-flow">
              {steps.map(({ label, icon: Icon }, i) => (
                <li key={label}>
                  <Icon size={24} aria-hidden="true" />
                  <span>{label}</span>
                  {i < 3 && <ArrowRight size={16} aria-hidden="true" />}
                </li>
              ))}
            </ol>
            <p className="commercial-disclaimer">Ejemplo ilustrativo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
