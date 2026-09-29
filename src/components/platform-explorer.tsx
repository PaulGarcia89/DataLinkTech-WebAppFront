"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Check,
  BriefcaseBusiness,
  Users,
  FileCheck2,
  GraduationCap,
  ScanLine,
  UtensilsCrossed,
  Package,
  Building2,
} from "lucide-react";
import { platformModules } from "@/lib/platform-modules";
import styles from "@/styles/platform.module.css";

export const moduleIcons = {
  BriefcaseBusiness,
  Users,
  FileCheck2,
  GraduationCap,
  ScanLine,
  UtensilsCrossed,
  Package,
  Building2,
};

export function PlatformExplorer() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const item = platformModules[active];
  const Icon = moduleIcons[item.icon];
  return (
    <section
      className={styles.explorer}
      id="module-explorer"
      aria-labelledby="explorer-title"
    >
      <div className="container">
        <p className={styles.kicker}>PERSONAS + PROCESOS + RECURSOS</p>
        <h2 id="explorer-title">Una visión de conjunto.</h2>
        <p className={styles.intro}>
          Selecciona un módulo para conocer su propósito y recorrer un ejemplo
          de proceso.
        </p>
        <div className={styles.workspace}>
          <nav
            className={styles.rail}
            aria-label="Explorar módulos de la plataforma"
          >
            {platformModules.map((mod, index) => {
              const ModuleIcon = moduleIcons[mod.icon];
              return (
                <button
                  type="button"
                  key={mod.id}
                  aria-pressed={active === index}
                  aria-controls="module-detail"
                  onClick={() => {
                    setActive(index);
                    setStep(0);
                  }}
                >
                  <ModuleIcon size={20} aria-hidden="true" />
                  <span>{mod.name}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              );
            })}
          </nav>
          <div className={styles.detail} id="module-detail">
            <div className={styles.detailHeading}>
              <span className={styles.moduleIcon}>
                <Icon size={26} aria-hidden="true" />
              </span>
              <div>
                <span className={styles.status}>Vista conceptual</span>
                <h3>{item.name}</h3>
              </div>
            </div>
            <p>{item.summary}</p>
            <div className={styles.diagram}>
              <div className={styles.diagramLabel}>
                <span>DataLink</span>
                <span>Ejemplo de proceso</span>
              </div>
              <ol className={styles.steps} aria-label="Ejemplo de proceso">
                {item.stages.map((label, i) => (
                  <li
                    key={label}
                    data-state={
                      i < step ? "done" : i === step ? "active" : "pending"
                    }
                    aria-current={step === i ? "step" : undefined}
                  >
                    <span className={styles.stepMark}>
                      {i < step ? (
                        <Check size={18} aria-hidden="true" />
                      ) : (
                        `0${i + 1}`
                      )}
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ol>
              <div className={styles.walkthrough}>
                <p aria-live="polite" aria-atomic="true">
                  <span>Paso</span> {step + 1} / 4{" "}
                  <strong>{item.stages[step]}</strong>
                </p>
                <div className={styles.controls}>
                  <button
                    type="button"
                    aria-label="Paso anterior"
                    disabled={step === 0}
                    onClick={() => setStep(step - 1)}
                  >
                    <ArrowLeft size={19} />
                  </button>
                  <button
                    type="button"
                    aria-label="Reiniciar recorrido"
                    disabled={step === 0}
                    onClick={() => setStep(0)}
                  >
                    <RotateCcw size={18} />
                  </button>
                  <button
                    type="button"
                    aria-label="Siguiente paso"
                    disabled={step === 3}
                    onClick={() => setStep(step + 1)}
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </div>
            <p className={styles.note}>{item.note}</p>
          </div>
        </div>
        <p className={styles.disclaimer}>
          Representación ilustrativa. No es una captura del producto ni está
          conectada a datos reales.
        </p>
      </div>
    </section>
  );
}
