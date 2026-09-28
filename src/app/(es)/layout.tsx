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
  title: {
    default: "Soluciones de IA, software y soporte IT en Miami | DataLink",
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
      </body>
    </html>
  );
}
