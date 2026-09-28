import { CalendarDays, ArrowUpRight } from "lucide-react";
import { bookingUrl } from "@/i18n/integrations";
import { contact } from "@/lib/content";

export function Consultation() {
  const booking = bookingUrl();
  const message =
    "Hola, quiero coordinar una consulta con DataLink Tech Corp. Mi negocio necesita ayuda con: ";
  return (
    <section className="consultation-card" aria-labelledby="consultation-title">
      <CalendarDays size={24} aria-hidden="true" />
      <h2 id="consultation-title">Conversemos sobre tu proyecto</h2>
      <p>
        {booking
          ? "Reserva 30 minutos por teléfono, SMS o WhatsApp. Todos los días de 8:00 a. m. a 10:00 p. m., hora de Miami. Elige tu canal de contacto al reservar."
          : "Cuéntanos qué necesitas y qué horarios te convienen. Confirmaremos contigo la fecha y la modalidad de la consulta."}
      </p>
      <a
        className="btn btn-primary"
        href={
          booking ?? `${contact.whatsapp}?text=${encodeURIComponent(message)}`
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        {booking ? "Elegir fecha y hora" : "Coordinar consulta por WhatsApp"}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      <small>
        {booking
          ? "El calendario se abre en una nueva pestaña."
          : "La consulta queda agendada cuando confirmemos el horario por WhatsApp."}
      </small>
    </section>
  );
}
