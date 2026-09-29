"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Pause,
  Play,
  RotateCcw,
  Phone,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { assistantScenarios, sampleOpportunities } from "@/lib/commercial-demo";

export function CommercialDemo() {
  const [scenario, setScenario] = useState(0);
  const [visible, setVisible] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState(0);
  const conversation = assistantScenarios[scenario];
  const opportunity = sampleOpportunities[selected];

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (visible < conversation.turns.length) setVisible(visible + 1);
      if (visible + 1 >= conversation.turns.length) setPlaying(false);
    }, 2600);
    return () => window.clearTimeout(timer);
  }, [playing, visible, conversation]);

  useEffect(() => {
    function pauseWhenHidden() {
      if (document.hidden) setPlaying(false);
    }
    document.addEventListener("visibilitychange", pauseWhenHidden);
    return () =>
      document.removeEventListener("visibilitychange", pauseWhenHidden);
  }, []);

  return (
    <section
      className="commercial-demo plane"
      id="commercial-demo"
      aria-labelledby="commercial-demo-heading"
    >
      <div className="container">
        <p className="eyebrow">DE LA CONSULTA AL SEGUIMIENTO</p>
        <h2 id="commercial-demo-heading">
          Una conversación. Un siguiente paso claro.
        </h2>
        <p className="commercial-lead">
          Explora cómo un asistente podría orientar una consulta y cómo un panel
          ayudaría a darle seguimiento.
        </p>
        <p className="commercial-disclaimer">
          Demostraciones ilustrativas. No reciben llamadas ni guardan consultas
          reales.
        </p>
        <div className="assistant-example">
          <div className="assistant-heading">
            <div>
              <span className="mono">EJEMPLO DE CONVERSACIÓN</span>
              <h3>
                <Phone size={22} aria-hidden="true" />
                Asistente DataLink
              </h3>
            </div>
            <span className="demo-label">Simulación de atención</span>
          </div>
          <div className="scenario-switch" aria-label="Simulación de atención">
            {assistantScenarios.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-pressed={scenario === index}
                onClick={() => {
                  setScenario(index);
                  setVisible(1);
                  setPlaying(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div
            className={`voice-wave ${playing ? "is-playing" : ""}`}
            aria-hidden="true"
          >
            {Array.from({ length: 40 }, (_, i) => (
              <span
                key={i}
                style={{
                  height: `${8 + ((i * 17) % 37)}px`,
                  animationDelay: `${i * 37}ms`,
                }}
              />
            ))}
          </div>
          <ol
            className="conversation"
            aria-live="polite"
            aria-relevant="additions"
            aria-label="EJEMPLO DE CONVERSACIÓN"
          >
            {conversation.turns.slice(0, visible).map((line, index) => (
              <li
                key={`${conversation.id}-${index}`}
                className={index % 2 ? "assistant-line" : ""}
              >
                <span>{index % 2 ? "Asistente" : "Cliente"}</span>
                <p>{line}</p>
              </li>
            ))}
          </ol>
          <div className="conversation-controls">
            <button
              type="button"
              onClick={() => {
                if (playing) {
                  setPlaying(false);
                  return;
                }
                if (visible === conversation.turns.length) setVisible(1);
                setPlaying(true);
              }}
            >
              {playing ? (
                <Pause size={17} aria-hidden="true" />
              ) : (
                <Play size={17} aria-hidden="true" />
              )}
              {playing ? "Pausar ejemplo" : "Reproducir ejemplo"}
            </button>
            <button
              type="button"
              onClick={() => {
                setVisible(1);
                setPlaying(false);
              }}
            >
              <RotateCcw size={17} aria-hidden="true" />
              Reiniciar
            </button>
            <button
              type="button"
              onClick={() => {
                setVisible(conversation.turns.length);
                setPlaying(false);
              }}
            >
              Ver conversación completa
            </button>
          </div>
          <p className="demo-footnote">
            {visible === conversation.turns.length
              ? "El ejemplo ha terminado."
              : "Animación de texto, sin audio ni micrófono."}
          </p>
        </div>
        <div className="dashboard-intro">
          <h3>Un panel para dar continuidad.</h3>
          <p>
            Selecciona una oportunidad para ver su próxima acción también en la
            vista móvil.
          </p>
        </div>
        <div className="commercial-dashboard">
          <div className="dashboard-desktop">
            <div className="dashboard-toolbar">
              <span className="mono">DATALINK / CRM</span>
              <span className="demo-label">DATOS DE EJEMPLO</span>
            </div>
            <div className="dashboard-metrics">
              <div>
                <strong>3</strong>
                <span>Oportunidades abiertas</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Propuestas</span>
              </div>
              <div>
                <strong>1</strong>
                <span>Ganadas</span>
              </div>
            </div>
            <div className="opportunity-list">
              {sampleOpportunities.map((row, index) => (
                <button
                  type="button"
                  key={row.name}
                  aria-pressed={selected === index}
                  onClick={() => setSelected(index)}
                >
                  <span>{row.name}</span>
                  <span className={`stage-label stage-${index}`}>
                    {row.stage}
                  </span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              ))}
            </div>
            <div className="desktop-next" aria-live="polite">
              <span className="mono">Próxima acción</span>
              <p>{opportunity.next}</p>
            </div>
          </div>
          <div className="phone-preview" aria-label="Vista móvil">
            <div className="phone-speaker" aria-hidden="true" />
            <div className="phone-brand">
              <Smartphone size={18} aria-hidden="true" />
              DATALINK
            </div>
            <span className="mono">Vista móvil</span>
            <div className="phone-record" aria-live="polite">
              <small>Registro seleccionado</small>
              <h4>{opportunity.name}</h4>
              <span className={`stage-label stage-${selected}`}>
                {opportunity.stage}
              </span>
              <hr />
              <small>Próxima acción</small>
              <p>{opportunity.next}</p>
            </div>
            <span className="phone-caption">DATOS DE EJEMPLO</span>
          </div>
        </div>
        <p className="commercial-disclaimer">
          Estos cinco registros son ficticios; no representan clientes ni
          resultados de DataLink.
        </p>
        <div className="commercial-closing">
          <p>
            La atención de llamadas y la sincronización de datos requieren
            integraciones que se definen en cada proyecto.
          </p>
          <Link className="btn btn-signal" href="/contacto/">
            Consultar sobre esta solución
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
