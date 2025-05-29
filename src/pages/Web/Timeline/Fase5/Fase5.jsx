import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FasesNavigation from "../Navigation/Navigation";
import StepNavigator from "../../../../components/StepsNavigator/StepsNavigator";
// Importamos las plantillas de los datos
import Covers from "../../../../components/Templates/Covers/Cover";
import DatoB from "../../../../components/Templates/DatoB/DatoB";
import DatoC from "../../../../components/Templates/DatoC/DatoC";
import chocoModernoImg from "../../../../assets/fase5/chocolatemoderno.png";
import maquinaImg from "../../../../assets/fase5/maquina.png";
import sabiasque5Img from "../../../../assets/fase5/sabiasque5.png";
import "./Fase5.css";

export default function Fase5() {
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
    navigate("/web/fases/fase6");
  };

  return (
    <div className="fase-container">
      <FasesNavigation />
      <div className="fase-intro">
        <div className="banner-top"></div>
        {step === 0 && (
          <Covers
            text1="Del taller artesanala"
            text2="a la fábrica."
            imgBg="/covers/fase-5-cover.png"
          />
        )}
        {step === 1 && (
          <DatoC
            title="Llega la máquina"
            text="En 1777, en Barcelona, se inició la producción mecánica de chocolate, marcando el paso de la elaboración artesanal a la industrial."
            image={maquinaImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        {step === 2 && (
          <DatoB
            title="¿Sabías que?"
            text="A inicios del siglo XIX, Venezuela producía más del 50% del cacao mundial. Se exportaba a Francia, España e Italia."
            image={sabiasque5Img}
            fillColor="var(--color-green-200)"
          />
        )}
        {step === 3 && (
          <DatoC
            title="Chocolate moderno"
            text="A finales del siglo XIX, los suizos crearon el primer chocolate con leche, dando origen a la industria moderna."
            image={chocoModernoImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        <StepNavigator
          currentStep={step}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onLastNext={handleNextPhase}
          title="Fase 5: Industrialización"
        />
      </div>
    </div>
  );
}
