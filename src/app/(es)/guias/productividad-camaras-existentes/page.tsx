import { GuideArticle } from "@/components/guide-article";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "¿Puedo medir productividad con mis cámaras actuales?",
  "Qué comprobar antes de reutilizar cámaras para contar unidades, medir tiempos y observar el flujo de trabajo.",
  "/guias/productividad-camaras-existentes/",
);
export default function Page() {
  return <GuideArticle slug="productividad-camaras-existentes" />;
}
