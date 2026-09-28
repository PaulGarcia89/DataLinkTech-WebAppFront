"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import {
  allowAnalytics,
  analyticsPageView,
  consentKey,
  denyAnalytics,
} from "@/i18n/analytics";
export function AnalyticsConsent() {
  const [choice, setChoice] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    try { const value = localStorage.getItem(consentKey); return value === "granted" || value === "denied" ? value : null; } catch { return null; }
  });
  const ready = useSyncExternalStore(() => () => {}, () => true, () => false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (choice === "granted") {
      allowAnalytics();
      analyticsPageView(pathname);
    }
  }, [choice, pathname]);
  function choose(value: "granted" | "denied") {
    try {
      localStorage.setItem(consentKey, value);
    } catch {
      /* No storage required to use the website. */
    }
    if (value === "denied") denyAnalytics();
    if (value === "granted" && choice === "granted") allowAnalytics();
    setChoice(value);
    setOpen(false);
  }
  if (!ready) return null;
  return (
    <>
      <div className="analytics-preferences">
        <button type="button" onClick={() => setOpen(true)}>
          Preferencias de estadísticas
        </button>
      </div>
      {(choice === null || open) && (
        <section
          className="analytics-notice"
          aria-label="Preferencias de estadísticas"
        >
          <div>
            <strong>Ayúdanos a mejorar la web</strong>
            <p>
              Con tu permiso, Google Analytics utiliza cookies para medir
              visitas y contactos. No enviamos el contenido del formulario.
              Puedes rechazarlo y seguir usando la web.
            </p>
          </div>
          <div className="analytics-actions">
            <button type="button" onClick={() => choose("denied")}>
              Rechazar estadísticas
            </button>
            <button type="button" onClick={() => choose("granted")}>
              Aceptar estadísticas
            </button>
            {choice !== null && (
              <button type="button" onClick={() => setOpen(false)}>
                Cerrar
              </button>
            )}
          </div>
        </section>
      )}
    </>
  );
}
