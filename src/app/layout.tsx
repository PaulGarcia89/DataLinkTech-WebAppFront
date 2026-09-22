import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/content";
import { organizationSchema, pageMetadata, siteDescription } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import localFont from "next/font/local";
const heading = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/poppins/files/poppins-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-heading",
  display: "optional",
  preload: true,
});
const body = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/montserrat/files/montserrat-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  preload: false,
});
import "./globals.css";
export const metadata: Metadata = {
  ...pageMetadata(
    "DataLink Tech Corp | Tecnología que impulsa tu negocio",
    siteDescription,
    "/",
  ),
  metadataBase: new URL(siteUrl),
  title: {
    default: "DataLink Tech Corp | Tecnología que impulsa tu negocio",
    template: "%s | DataLink Tech Corp",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable}`}>
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
