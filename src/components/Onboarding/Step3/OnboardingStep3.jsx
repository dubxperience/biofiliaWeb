import { Link } from "react-router-dom";
import "../Onboarding.css";

export default function OnboardingStep3() {
  return (
    <div className="onboarding-step step-3">
      <h2>¿Listo para comenzar?</h2>
      <Link to="/web/fases/fase1">
        <button>Empezar</button>
      </Link>
    </div>
  );
}
