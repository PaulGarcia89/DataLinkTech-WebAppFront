import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/content";
import { organizationSchema, pageMetadata, siteDescription } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";

import "./globals.css";
import "@/styles/editorial.css";

export const metadata: Metadata = {
  ...pageMetadata(
    "DataLink Tech Corp | Tecnología e IA para negocios que avanzan",
    siteDescription,
    "/",
  ),
  metadataBase: new URL(siteUrl),
  title: {
    default: "DataLink Tech Corp | Tecnología e IA para negocios que avanzan",
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
