"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cpu,
  MessageCircle,
  Pause,
  Play,
  RotateCcw,
} from "lucide-react";

const scenarios = [
  {
    label: "Restaurante",
    message: "¿Tienen disponibilidad mañana a las 8 para cuatro personas?",
    steps: [
      "Entiende la reserva",
      "Consulta disponibilidad",
      "Crea el contacto en CRM",
      "Prepara la reserva",
      "Confirma y programa seguimiento",
    ],
    details: [
      "Intención: reservar · Personas: 4 · Hora: 20:00",
      "Ejemplo: mesa disponible en el horario solicitado.",
      "Contacto de ejemplo asociado a la conversación.",
      "Reserva de demostración: mañana, 20:00, 4 personas.",
      "Confirmación preparada y recordatorio de ejemplo.",
    ],
    reply:
      "En este ejemplo hay una mesa para cuatro mañana a las 8. Tu confirmación y recordatorio quedarían preparados.",
  },
  {
    label: "Empresa de servicios",
    message: "Necesito automatizar las consultas que llegan por WhatsApp.",
    steps: [
      "Identifica la necesidad",
      "Clasifica la consulta",
      "Organiza el contacto en CRM",
      "Propone una consulta",
      "Prepara el seguimiento",
    ],
    details: [
      "Intención: automatización de atención al cliente.",
      "Ejemplo: oportunidad comercial para evaluación.",
      "Contexto y necesidad unidos en una ficha de ejemplo.",
      "Siguiente acción: acordar una consulta con el equipo.",
      "Mensaje de seguimiento listo para revisión.",
    ],
    reply:
      "Podemos empezar por tu flujo de consultas. En una integración real, el equipo recibiría el contexto para preparar la evaluación.",
  },
];
export function InteractiveDemo() {
  const [scenario, setScenario] = useState(0);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const visible = useInView(root, { amount: 0.2 });
  const reduced = useReducedMotion();
  const demo = scenarios[scenario];
  useEffect(() => {
    if (!running || !visible || reduced || step >= demo.steps.length - 1)
      return;
    let timer: ReturnType<typeof setTimeout>;
    const schedule = () => {
      clearTimeout(timer);
      if (!document.hidden)
        timer = setTimeout(() => setStep((s) => s + 1), 1100);
    };
    schedule();
    document.addEventListener("visibilitychange", schedule);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [running, visible, reduced, step, demo.steps.length]);
  const completed = step === demo.steps.length - 1;
  return (
    <div ref={root} className="demo-console">
      <div className="console-toolbar">
        <span>
          <i className="status-dot" /> DATALINK / AUTOMATION STUDIO
        </span>
        <span className="simulation-tag">SIMULACIÓN</span>
      </div>
      <div className="demo-options" aria-label="Escenario de demostración">
        {scenarios.map((s, i) => (
          <button
            key={s.label}
            type="button"
            aria-pressed={scenario === i}
            onClick={() => {
              setScenario(i);
              setStep(-1);
              setRunning(false);
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="demo-body">
        <div className="demo-chat">
          <span className="micro-label">
            <MessageCircle size={15} /> UNA CONSULTA ENTRA
          </span>
          <div className="chat-bubble">
            {demo.message}
            <span>Cliente de ejemplo · ahora</span>
          </div>
          <div className="chat-connector">
            <span />
            <Cpu size={24} />
            <span />
          </div>
          <div className={`agent-reply ${completed ? "complete" : ""}`}>
            <span className="micro-label">DATALINK AI</span>
            <p>
              {completed
                ? demo.reply
                : step < 0
                  ? "Una conversación puede activar todo un proceso. Inicia la demo para verlo."
                  : "Interpretando la consulta y conectando los siguientes pasos…"}
            </p>
          </div>
        </div>
        <div className="demo-flow">
          <span className="micro-label">EL TRABAJO QUE NO SE VE</span>
          <ol>
            {demo.steps.map((label, i) => (
              <li
                key={label}
                className={i <= step ? "step-done" : ""}
                aria-current={i === step ? "step" : undefined}
              >
                <span className="flow-number">
                  {i <= step ? <Check size={14} /> : `0${i + 1}`}
                </span>
                <div>
                  <strong>{label}</strong>
                  <p>
                    {i === step
                      ? demo.details[i]
                      : i < step
                        ? "Paso completado en la simulación"
                        : "Esperando la señal"}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="demo-controls">
        <button
          className="button button-primary"
          type="button"
          onClick={() => {
            if (completed) {
              setStep(-1);
              setRunning(true);
            } else if (reduced) {
              setStep((s) => Math.min(s + 1, demo.steps.length - 1));
            } else {
              setRunning(!running);
            }
          }}
        >
          {completed ? (
            <RotateCcw size={16} />
          ) : running && !reduced ? (
            <Pause size={16} />
          ) : (
            <Play size={16} />
          )}{" "}
          {completed
            ? "Repetir demo"
            : reduced
              ? "Avanzar un paso"
              : running
                ? "Pausar"
                : step < 0
                  ? "Ver la IA trabajar"
                  : "Continuar"}
        </button>
        <button
          className="button-plain"
          type="button"
          disabled={completed}
          onClick={() => {
            setRunning(false);
            setStep((s) => Math.min(s + 1, demo.steps.length - 1));
          }}
        >
          Siguiente paso <ChevronRight size={16} />
        </button>
        <button
          className="icon-button"
          type="button"
          aria-label="Reiniciar demostración"
          onClick={() => {
            setStep(-1);
            setRunning(false);
          }}
        >
          <RotateCcw size={17} />
        </button>
      </div>
      <p className="demo-disclaimer">
        Demostración interactiva. No crea reservas, guarda contactos ni envía
        mensajes.
      </p>
      <span className="sr-only" role="status">
        {step >= 0
          ? `Paso ${step + 1}: ${demo.steps[step]}. ${demo.details[step]}`
          : "Demo preparada."}
      </span>
    </div>
  );
}
export function AIWorkflow() {
  return (
    <div className="inline-workflow" aria-label="Flujo de automatización">
      {["Mensaje", "Agente IA", "CRM", "Acción", "Seguimiento"].map((s, i) => (
        <span key={s}>
          {s}
          {i < 4 && <ArrowRight size={16} />}
        </span>
      ))}
    </div>
  );
}
