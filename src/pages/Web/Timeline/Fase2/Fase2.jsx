import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FasesNavigation from "../Navigation/Navigation";
import StepNavigator from "../../../../components/StepsNavigator/StepsNavigator";
// Importamos las plantillas de los datos
import Covers from "../../../../components/Templates/Covers/Cover";
import DatoA from "../../../../components/Templates/DatoA/DatoA";
import DatoB from "../../../../components/Templates/DatoB/DatoB";
import DatoC from "../../../../components/Templates/DatoC/DatoC";
import OrigenImg from "../../../../assets/fase2/origenamazonico.png";
import sabiasQueImg from "../../../../assets/fase2/sabiasque.png";
import esparceImg from "../../../../assets/fase2/cacaoesparce.png";
import "./Fase2.css";

export default function Fase2() {
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
    navigate("/web/fases/fase3");
  };

  return (
    <div className="fase-container">
      <FasesNavigation />
      <div className="fase-intro">
        <div className="banner-top"></div>
        {step === 0 && (
          <Covers
            text1="Todo empezó con una semilla"
            text2="en la profundidad de la selva."
            imgBg="/covers/fase-2-cover.png"
          />
        )}
        {step === 1 && (
          <DatoA
            title="Los orígenes amazónicos del cacao"
            text="Hace más de 5.000 años, el cacao comenzó su historia en la Alta
                  Amazonía, en una región, entre lo que hoy es Colombia, Ecuador y
                  Brasil."
            image={OrigenImg}
            fillColor="var(--color-green-200)"
          />
        )}
        {step === 2 && (
          <DatoC
            title="El cacao se esparce"
            text="Aves, animales y pueblos nómadas ayudaron a esparcir las semillas por
                  toda América. Así llegó a Centroamérica, donde comenzó su domesticación."
            image={esparceImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        {step === 3 && (
          <DatoB
            title="¿Sabías qué?"
            text="El nombre científico del cacao es Theobroma cacao, que significa
                “alimento de los dioses”"
            image={sabiasQueImg}
            fillColor="var(--color-green-200)"
          />
        )}
        <StepNavigator
          currentStep={step}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onLastNext={handleNextPhase}
          title="Fase 2: Origen del cacao"
        />
      </div>
    </div>
  );
}
