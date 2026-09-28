import { AnalyticsConsent } from "@/components/analytics-consent";
import { ContactEvents } from "@/components/contact-events";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/content";
import {
  organizationSchema,
  websiteSchema,
  pageMetadata,
  siteDescription,
} from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";

import "@/app/globals.css";
import "@/styles/editorial.css";

export const metadata: Metadata = {
  ...pageMetadata(
    "DataLink Tech Corp | Tecnología e IA para negocios que avanzan",
    siteDescription,
    "/",
  ),
  metadataBase: new URL(siteUrl),
  applicationName: "DataLink Tech Corp",
  icons: {
    icon: [
      { url: "/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default: "DataLink Tech Corp | IA y soluciones IT en Miami",
    template: "%s | DataLink Tech Corp",
  },
};

export const viewport = {
  themeColor: "#f7f7f2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <ContactEvents />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
