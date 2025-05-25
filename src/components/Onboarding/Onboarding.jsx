import { useState } from "react";
import OnboardingStep1 from "./Step1/OnboardingStep1";
import OnboardingStep2 from "./Step2/OnboardingStep2";
import OnboardingStep3 from "./Step3/OnboardingStep3";
import "./Onboarding.css";

export default function Onboarding() {
  const [step, setStep] = useState(0);

  const steps = [<OnboardingStep1 />, <OnboardingStep2 />, <OnboardingStep3 />];

  return (
    <div className="onboarding-container">
      {steps[step]}

      <div className="onboarding-navigation">
        {/* Botón de retroceder (visible siempre, deshabilitado si step === 0) */}
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className={step === 0 ? "disabled" : ""}
        >
          ←
        </button>

        {/* Puntos indicadores */}
        <div className="onboarding-dots">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`dot ${i === step ? "active" : ""}`} />
          ))}
        </div>

        {/* Botón de avanzar (visible siempre, deshabilitado si es el último paso) */}
        <button
          onClick={() => setStep(step + 1)}
          disabled={step === steps.length - 1}
          className={step === steps.length - 1 ? "disabled" : ""}
        >
          →
        </button>
      </div>
    </div>
  );
}
