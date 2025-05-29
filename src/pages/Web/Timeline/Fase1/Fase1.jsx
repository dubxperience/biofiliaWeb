import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FasesNavigation from "../Navigation/Navigation";
import StepNavigator from "../../../../components/StepsNavigator/StepsNavigator";
import Covers from "../../../../components/Templates/Covers/Cover";
import DatoA from "../../../../components/Templates/DatoA/DatoA";
import domesticacionImg from "../../../../assets/fase1/domesticacion.png";
import DatoB from "../../../../components/Templates/DatoB/DatoB";
import usoCacaoImg from "../../../../assets/fase1/usosdelcacao.png";
import "./Fase1.css";

export default function Fase1() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps - 1) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleNextPhase = () => {
    navigate("/web/fases/fase2");
  };

  return (
    <div className="fase-container">
      <FasesNavigation />
      <div className="fase-intro">
        <div className="banner-top"></div>
        {step === 0 && (
          <Covers
            text1="Las plantas que conoces"
            text2="no siempre fueron así."
            imgBg="/covers/fase-1-cover.png"
          />
        )}
        {step === 1 && (
          <DatoA
            title="Domesticación"
            text="Las plantas domesticadas han sido modificadas por los humanos a través de la selección para que sean más útiles y productivas."
            image={domesticacionImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        {step === 2 && (
          <DatoB
            title="Uso del cacao"
            text="El cacao no solo se come. Se usa en cosmética, medicina natural y es parte de la historia y economía de Colombia."
            image={usoCacaoImg}
            fillColor="var(--color-green-200)"
          />
        )}
        <StepNavigator
          currentStep={step}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onLastNext={handleNextPhase}
          title="Fase 1: Domesticación"
        />
      </div>
    </div>
  );
}
