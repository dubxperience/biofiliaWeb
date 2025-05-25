import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FasesNavigation from "../Navigation/Navigation";
import StepNavigator from "../../../../components/StepsNavigator/StepsNavigator";
// Importamos las plantillas de los datos
import DatoA from "../../../../components/Templates/DatoA/DatoA";
import DatoB from "../../../../components/Templates/DatoB/DatoB";
import DatoC from "../../../../components/Templates/DatoC/DatoC";
import colombianaImg from "../../../../assets/fase7/colombiana.png";
import retosImg from "../../../../assets/fase7/retosactuales.png";
import rutasImg from "../../../../assets/fase7/rutasindigenas.png";
import "./Fase7.css";

export default function Fase7() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps - 1) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleNextPhase = () => {
    navigate("/web/mapgame");
  };

  return (
    <div className="fase-container">
      <FasesNavigation />
      <div className="fase-intro">
        <div className="banner-top"></div>
        {step === 0 && (
          <div className="fases fase7">
            <div className="fase-title">
              <h3>
                Colombia también es <br />y tierra de cacao.
              </h3>
            </div>
          </div>
        )}
        {step === 1 && (
          <DatoC
            title="Rutas indígenas"
            text="Hace miles de años, los pueblos indígenas compartían semillas y saberes. Así, el cacao viajó hasta la costa del Pacífico colombiano."
            image={rutasImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        {step === 2 && (
          <DatoB
            title="Cosecha colombiana"
            text="Hoy, regiones como Santander, Arauca, Huila y Nariño lideran su producción."
            image={colombianaImg}
            fillColor="var(--color-green-200)"
          />
        )}
        {step === 3 && (
          <DatoA
            title="Retos actuales"
            text="El cacao enfrenta retos como la deforestación, las enfermedades y el cambio climático."
            image={retosImg}
            fillColor="var(--color-green-400)"
          />
        )}
        <StepNavigator
          currentStep={step}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onLastNext={handleNextPhase}
          title="Fase 7: Cacao en Colombia"
        />
      </div>
    </div>
  );
}
