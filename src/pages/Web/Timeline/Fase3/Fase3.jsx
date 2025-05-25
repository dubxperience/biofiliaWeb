import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FasesNavigation from "../Navigation/Navigation";
import StepNavigator from "../../../../components/StepsNavigator/StepsNavigator";
import PlayOne from "./PlayGameOne/PlayOne";
// Importamos las plantillas de los datos
import DatoB from "../../../../components/Templates/DatoB/DatoB";
import DatoC from "../../../../components/Templates/DatoC/DatoC";
import mayasImg from "../../../../assets/fase3/mayas.png";
import monedaImg from "../../../../assets/fase3/moneda.png";
import xocolatlImg from "../../../../assets/fase3/xocolati.png";
import "./Fase3.css";

export default function Fase3() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const totalSteps = 5;

  const handleNext = () => {
    if (step < totalSteps - 1) setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleNextPhase = () => {
    navigate("/web/fases/fase4");
  };

  return (
    <div className="fase-container">
      <FasesNavigation />
      <div className="fase-intro">
        <div className="banner-top"></div>
        {step === 0 && (
          <div className="fases fase3">
            <div className="fase-title">
              <h3>
                El cacao fue ritual, <br /> tributo y poder.
              </h3>
            </div>
          </div>
        )}
        {step === 1 && (
          <DatoC
            title="La moneda de los aztecas"
            text="Los aztecas, desde 1325, convirtieron al cacao en una moneda oficial, un tributo al imperio, y un símbolo de poder."
            image={monedaImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        {step === 2 && (
          <DatoB
            title="Xocolatl sagrado"
            text="El emperador Moctezuma II bebía xocolatl, una mezcla espesa y amarga, servida en copas de oro, reservada solo para nobles y guerreros."
            image={xocolatlImg}
            fillColor="var(--color-green-200)"
          />
        )}
        {step === 3 && (
          <DatoC
            title="Los Mayas.."
            text="Lo cultivaban y lo consideraban sagrado por ser un regalo divino del dios Quetzalcóatl."
            image={mayasImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        {step === 4 && <PlayOne />}
        <StepNavigator
          currentStep={step}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onLastNext={handleNextPhase}
          title="Fase 3: cacao ancestral"
        />
      </div>
    </div>
  );
}
