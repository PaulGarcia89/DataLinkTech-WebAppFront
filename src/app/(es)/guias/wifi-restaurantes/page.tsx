import { GuideArticle } from "@/components/guide-article";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "¿Cómo mejorar el Wi-Fi de un restaurante?",
  "Una revisión práctica de cobertura, dispositivos y separación de redes antes de comprar más equipos.",
  "/guias/wifi-restaurantes/",
);
export default function Page() {
  return <GuideArticle slug="wifi-restaurantes" />;
}
