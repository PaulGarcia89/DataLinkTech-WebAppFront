import Link from "next/link";
import {
  Camera,
  ScanLine,
  ChartNoAxesCombined,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { siteUrl } from "@/lib/content";
import { StructuredData } from "@/components/structured-data";
import { Consultation } from "@/components/consultation";

export const metadata = pageMetadata(
  "Medición de productividad con IA en Miami",
  "Analiza conteos, tiempos de ciclo y flujo de trabajo con cámaras e IA. Evaluación de viabilidad para cafeterías, almacenes y producción en Miami.",
  "/medicion-de-productividad/",
);
const questions = [
  [
    "¿Puedo usar mis cámaras actuales?",
    "Primero revisamos resolución, ángulo, iluminación, acceso al video y cobertura del proceso. Algunas instalaciones pueden aprovecharse; otras requieren ajustes o cámaras adicionales.",
  ],
  [
    "¿Qué se puede medir?",
    "Unidades que cruzan un punto, tiempos entre etapas, ocupación de zonas y pausas visibles. Cada indicador necesita una definición y validación con muestras del proceso real.",
  ],
  [
    "¿La cámara sabe qué pedido se está preparando?",
    "No necesariamente. Para relacionar eventos con pedidos específicos puede ser necesaria una integración con POS, ERP u otros registros. La cámara por sí sola no aporta todo el contexto.",
  ],
  [
    "¿Cómo se valida la precisión?",
    "Comparamos los eventos detectados con una revisión de referencia en condiciones representativas. Acordamos los criterios de aceptación antes de ampliar el alcance.",
  ],
  [
    "¿Cuánto cuesta y cuánto tarda?",
    "Depende de las cámaras, estaciones, integraciones y métricas. La evaluación inicial define un alcance y una propuesta; no hay un precio o plazo universal.",
  ],
];
export default function ProductivityPage() {
  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          {
            name: "Medición de productividad",
            path: "/medicion-de-productividad/",
          },
        ])}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Medición de productividad con inteligencia artificial",
          url: new URL("/medicion-de-productividad/", siteUrl).href,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: "Miami · South Florida",
        }}
      />
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">VISIÓN ARTIFICIAL PARA TU OPERACIÓN</p>
          <h1>Medición de productividad con IA.</h1>
          <p className="lead">
            Entiende dónde fluye el trabajo y dónde se acumula. Conectamos
            cámaras, eventos e indicadores para revisar tus procesos con datos.
          </p>
          <Link className="btn btn-primary" href="/contacto/">
            Solicitar evaluación de mi operación <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="container productivity-overview">
        <div>
          <h2>De una imagen a una decisión informada.</h2>
          <p>
            Definimos el proceso antes de elegir la tecnología. El objetivo es
            medir etapas y zonas con criterios claros, no extraer conclusiones
            sobre una persona a partir de una imagen.
          </p>
          <ul className="productivity-checks">
            <li>
              <Camera />
              Revisar cámaras y condiciones de captura.
            </li>
            <li>
              <ScanLine />
              Definir eventos y puntos de conteo.
            </li>
            <li>
              <ChartNoAxesCombined />
              Validar indicadores con tu equipo.
            </li>
          </ul>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/productivity-production.webp"
          alt="Escenario ilustrativo de análisis de una línea de empaque"
          width={1536}
          height={1024}
        />
      </section>
      <section
        className="container productivity-dashboard"
        aria-labelledby="sample-title"
      >
        <p className="eyebrow">PANEL DE EJEMPLO · DATOS FICTICIOS</p>
        <h2 id="sample-title">
          Una vista del proceso, no una promesa de resultados.
        </h2>
        <p>
          Simulación de una estación de empaque durante una hora. Estos valores
          son inventados para explicar el panel y no representan una instalación
          real.
        </p>
        <div className="sample-metrics">
          <article>
            <span>Unidades completadas</span>
            <strong>120</strong>
            <small>Conteo del intervalo simulado</small>
          </article>
          <article>
            <span>Ciclo medio</span>
            <strong>30 s</strong>
            <small>Ejemplo de tiempo por unidad</small>
          </article>
          <article>
            <span>Acumulación máxima</span>
            <strong>8</strong>
            <small>Unidades en espera en una zona</small>
          </article>
        </div>
        <table>
          <caption>Ejemplo de producción por intervalo de 15 minutos</caption>
          <thead>
            <tr>
              <th scope="col">Intervalo</th>
              <th scope="col">Unidades</th>
              <th scope="col">Visualización</th>
            </tr>
          </thead>
          <tbody>
            {[24, 36, 32, 28].map((value, index) => (
              <tr key={index}>
                <th scope="row">
                  {index * 15}–{(index + 1) * 15} min
                </th>
                <td>{value}</td>
                <td>
                  <div
                    className="sample-bar"
                    style={{ width: `${(value / 36) * 100}%` }}
                    aria-hidden="true"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="container productivity-overview">
        <div>
          <p className="eyebrow">ANTES DE IMPLEMENTAR</p>
          <h2>Qué necesitamos revisar contigo.</h2>
          <ul className="productivity-checks">
            {[
              "Proceso y estaciones que quieres medir.",
              "Cámaras disponibles, red y acceso autorizado al video.",
              "Indicadores prioritarios y registros para contrastarlos.",
              "Permisos, acceso a imágenes y tiempo de conservación.",
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="productivity-deliverables">
          <h3>Qué incluye una propuesta.</h3>
          <p>
            Alcance del piloto, fuentes de datos, indicadores, criterios de
            validación, necesidades de integración y presupuesto. Si las
            condiciones no permiten medir lo que necesitas, lo explicamos antes
            de avanzar.
          </p>
          <p>
            Las decisiones operativas requieren contexto y revisión humana. No
            presentamos esta solución como reconocimiento facial ni como una
            puntuación automática de empleados.
          </p>
        </div>
      </section>
      <section className="container faq-section">
        <p className="eyebrow">PREGUNTAS ANTES DE EMPEZAR</p>
        <h2>Respuestas para evaluar tu proyecto.</h2>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="container productivity-booking">
        <Consultation />
      </section>
    </>
  );
}
