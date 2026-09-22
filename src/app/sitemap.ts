import type { MetadataRoute } from "next";
import { services, siteUrl } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    ...services.map((s) => s.slug),
    "nosotros",
    "contacto",
    "soluciones",
    "industrias",
    "industrias/restaurantes",
    "industrias/warehouse",
  ].flatMap((slug) => {
    const route = `/${slug}${slug ? "/" : ""}`;
    const languages = { es: `${siteUrl}${route}`, en: `${siteUrl}/en${route}` };
    return [languages.es, languages.en].map((url) => ({
      url,
      alternates: { languages },
    }));
  });
}
