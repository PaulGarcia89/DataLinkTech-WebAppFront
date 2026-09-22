import type { Metadata } from "next";
import { contact, siteUrl } from "./content";

export const siteDescription =
  "Soluciones de IA, automatización, marketing digital, software, infraestructura, seguridad y soporte IT para negocios en Miami y South Florida.";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "DataLink Tech Corp",
      locale: "es_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "DataLink Tech Corp — Tecnología que impulsa tu negocio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "DataLink Tech Corp",
  url: siteUrl,
  logo: `${siteUrl}/datalink-logo.png`,
  email: contact.email,
  telephone: contact.tel,
  description: siteDescription,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.tel,
    email: contact.email,
    contactType: "customer service",
    availableLanguage: ["Spanish"],
  },
};
