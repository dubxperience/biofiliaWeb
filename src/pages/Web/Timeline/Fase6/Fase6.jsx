import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FasesNavigation from "../Navigation/Navigation";
import StepNavigator from "../../../../components/StepsNavigator/StepsNavigator";
// Importamos las plantillas de los datos
import DatoA from "../../../../components/Templates/DatoA/DatoA";
import DatoC from "../../../../components/Templates/DatoC/DatoC";
import criolloImg from "../../../../assets/fase6/criollo.png";
import forasteroImg from "../../../../assets/fase6/forastero.png";
import trinitarioImg from "../../../../assets/fase6/trinitario.png";
import fermentacionImg from "../../../../assets/fase6/fermentacion.png";
import diversidadImg from "../../../../assets/fase6/diversidad.png";
import "./Fase6.css";

export default function Fase6() {
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
    navigate("/web/fases/fase7");
  };

  return (
    <div className="fase-container">
      <FasesNavigation />
      <div className="fase-intro">
        <div className="banner-top"></div>
        {step === 0 && (
          <div className="fases fase6">
            <div className="fase-title">
              <h3>
                Hay un cacao para cada gusto, <br />y cada región.
              </h3>
            </div>
          </div>
        )}
        {step === 1 && (
          <DatoA
            title="Diversidad en la selva"
            text="A finales del siglo XX, científicos confirman que la mayor diversidad genética del cacao está en la Amazonía."
            image={diversidadImg}
            fillColor="var(--color-green-400)"
          />
        )}
        {step === 2 && (
          <DatoC
            title="Tipos de cacao"
            text="En 1777, en Barcelona, se inició la producción mecánica de chocolate, marcando el paso de la elaboración artesanal a la industrial."
            image={forasteroImg}
            fillColor="var(--color-pink-300)"
          />
        )}
        {step === 3 && (
          <DatoA
            title="¿Sabías que la fermentación define el sabor?"
            text="Durante varios días, el cacao se fermenta para formar los compuestos que dan sabor al chocolate. Como cada región tiene técnicas distintas, existe una gran diversidad de sabores."
            image={fermentacionImg}
            fillColor="var(--color-green-400)"
          />
        )}
        <StepNavigator
          currentStep={step}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onLastNext={handleNextPhase}
          title="Fase 6: Diversidad genética"
        />
      </div>
    </div>
  );
}
