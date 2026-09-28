import { searchContent } from "./search-content";
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
  const search = searchContent[path];
  title = search?.title ?? title;
  description = search?.description ?? description;
  return {
    title,
    description,
    robots:
      process.env.VERCEL_ENV === "preview"
        ? { index: false, follow: false }
        : {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large",
              "max-snippet": -1,
              "max-video-preview": -1,
            },
          },
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

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "DataLink Tech Corp",
  alternateName: ["DataLink Tech", "datalinkcorporation.com"],
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: ["es-US", "en-US"],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}
