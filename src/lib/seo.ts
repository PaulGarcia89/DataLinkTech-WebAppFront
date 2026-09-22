import { languagePaths } from "@/i18n/paths";
import type { Metadata } from "next";
import { contact, siteUrl } from "./content";

export const siteDescription =
  "IA y automatización, marketing digital, software a medida, redes, seguridad y soporte IT para negocios de Miami y South Florida. Un solo aliado tecnológico.";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path, languages: languagePaths(path) },
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
          alt: "DataLink Tech Corp — Tecnología e IA para negocios que avanzan",
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
  image: `${siteUrl}/opengraph-image.png`,
  email: contact.email,
  telephone: contact.tel,
  description: siteDescription,
  areaServed: ["Miami", "South Florida"],
  slogan: "Tecnología que impulsa tu negocio",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: contact.tel,
    email: contact.email,
    contactType: "customer service",
    availableLanguage: ["Spanish", "English"],
  },
};
