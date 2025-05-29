import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FasesNavigation from "../Navigation/Navigation";
import StepNavigator from "../../../../components/StepsNavigator/StepsNavigator";
// Importamos las plantillas de los datos
import Covers from "../../../../components/Templates/Covers/Cover";
import DatoB from "../../../../components/Templates/DatoB/DatoB";
import DatoA from "../../../../components/Templates/DatoA/DatoA";
import americaImg from "../../../../assets/fase4/deamerica.png";
import chocolateamericaImg from "../../../../assets/fase4/chocolateblanco.png";
import aclaracion1Img from "../../../../assets/fase4/aclaracion1.png";
import aclaracion2Img from "../../../../assets/fase4/aclaracion2.png";
import "./Fase4.css";

export default function Fase4() {
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
    navigate("/web/fases/fase5");
  };

  return (
    <div className="fase-container">
      <FasesNavigation />
      <div className="fase-intro">
        <div className="banner-top"></div>
        {step === 0 && (
          <Covers
            text1="El cacao cambió de"
            text2="continente y de sabor."
            imgBg="/covers/fase-4-cover.png"
          />
        )}
        {step === 1 && (
          <DatoB
            title="De América a Europa"
            text="En 1520, los españoles comienzan a llevar el cacao a Europa, donde al principio no fue bien recibido por su sabor amargo. Solo hasta que se mezcló con azúcar y se sirvió caliente, ganó popularidad."
            image={americaImg}
            fillColor="var(--color-green-200)"
          />
        )}
        {step === 2 && (
          <DatoA
            title="Para tener claro"
            text="El cacao es el fruto del árbol Theobroma cacao. El chocolate es el producto que obtiene al procesar sus semillas y mezclarlas con azúcar, leche y saborizantes"
            image={americaImg}
            fillColor="var(--color-green-400)"
          />
        )}
        {step === 3 && (
          <DatoB
            title="¿Sabías que el chocolate blanco no es chocolate?"
            text="El chocolate blanco no contiene cacao sólido, solo manteca de cacao, azúcar y leche. Por eso, técnicamente, no es considerado chocolate verdadero."
            image={chocolateamericaImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        <StepNavigator
          currentStep={step}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onLastNext={handleNextPhase}
          title="Fase 4: Expansión global"
        />
      </div>
    </div>
  );
}
