import { bookingUrl } from "@/i18n/integrations";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function BookingLink({
  className = "btn btn-primary",
}: {
  className?: string;
}) {
  const url = bookingUrl();
  const content = (
    <>
      Reservar 30 minutos <ArrowUpRight size={18} aria-hidden="true" />
    </>
  );
  return url ? (
    <a
      className={className}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <Link className={className} href="/contacto/">
      {content}
    </Link>
  );
}
