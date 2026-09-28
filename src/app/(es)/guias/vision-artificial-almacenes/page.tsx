import { GuideArticle } from "@/components/guide-article";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "¿Qué necesita un almacén para implementar visión artificial?",
  "Cómo definir un piloto de conteo y tiempos de proceso con objetivos, muestras y criterios de validación.",
  "/guias/vision-artificial-almacenes/",
);
export default function Page() {
  return <GuideArticle slug="vision-artificial-almacenes" />;
}
