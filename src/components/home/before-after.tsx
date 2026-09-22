"use client";
import { useId, useState } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";
const comparisons = [
  ["Consultas en canales separados", "Conversaciones con contexto"],
  ["Tareas copiadas a mano", "Acciones conectadas"],
  ["Seguimiento que depende de la memoria", "Próximos pasos organizados"],
  ["Datos repartidos entre herramientas", "Información más visible"],
];
export function BeforeAfter() {
  const [value, setValue] = useState(65);
  const id = useId();
  return (
    <div className="comparison">
      <div className="comparison-heading">
        <button
          type="button"
          aria-pressed={value === 0}
          onClick={() => setValue(0)}
        >
          ANTES DE DATALINK
        </button>
        <ArrowRight size={20} />
        <button
          type="button"
          aria-pressed={value === 100}
          onClick={() => setValue(100)}
        >
          CON DATALINK
        </button>
      </div>
      <div className="comparison-meter" aria-hidden="true">
        <span style={{ width: `${value}%` }} />
      </div>
      <label className="sr-only" htmlFor={id}>
        Comparar procesos: mueve hacia la derecha para ver el sistema conectado
      </label>
      <input
        id={id}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-valuetext={
          value < 50
            ? "Vista de procesos manuales"
            : "Vista de procesos conectados"
        }
      />
      <div className="comparison-columns">
        {[0, 1].map((side) => (
          <ul
            key={side}
            className={(value < 50 ? 0 : 1) === side ? "emphasized" : ""}
          >
            {comparisons.map((pair) => (
              <li key={pair[side]}>
                {side ? <Check size={17} /> : <Minus size={17} />}
                <span>{pair[side]}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
      <p>El mismo negocio. Una forma más conectada de trabajar.</p>
    </div>
  );
}
