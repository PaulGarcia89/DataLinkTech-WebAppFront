"use client";

import { usePathname } from "next/navigation";
import { languagePaths } from "./paths";
import { Languages } from "lucide-react";

export function LanguageSwitch({ locale }: { locale: "es" | "en" }) {
  const pathname = usePathname();
  const paths = languagePaths(pathname);
  const href = locale === "es" ? paths.en : paths.es;
  return (
    <a
      className="language-switch"
      href={href}
      hrefLang={locale === "es" ? "en" : "es"}
      lang={locale === "es" ? "en" : "es"}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
    >
      <Languages size={17} aria-hidden="true" />
      <span>{locale === "es" ? "English" : "Español"}</span>
    </a>
  );
}
