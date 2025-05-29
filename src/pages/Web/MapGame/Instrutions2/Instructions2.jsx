import { useState } from "react";
import MapGame from "../MapGame";
import "../../ThisOrThat/Instructions/Instructions.css";

export default function InstructionsMap() {
  const [step, setStep] = useState(1);

  if (step === 2) return <MapGame />;

  return (
    <section className="instruction-container">
      {step === 1 && (
        <div className="step step-2">
          <div className="step-2-content map-game-2">
            <h1>¡Bienvenido al juego!</h1>
            <h3>
              Mapa Interactivo: <br />
              <em>Lugares del cacao</em>
            </h3>

            <h5>¡Arrastra y suelta en los lugares correctos!</h5>

            <button className="button-next" onClick={() => setStep(2)}>
              Empezar a jugar
            </button>
          </div>
          <svg
            width="251"
            height="195"
            viewBox="0 0 251 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M194.786 176.983L248.447 110.37C250.924 107.295 251.359 103.05 249.558 99.5354L213.213 28.6181C212.121 26.4861 210.299 24.8173 208.08 23.9151L152.612 1.36727C150.916 0.67798 149.064 0.467309 147.257 0.758213L52.2047 16.0593C49.2397 16.5366 46.6462 18.3211 45.1409 20.9197L1.87476 95.6108C0.677625 97.6774 0.259674 100.104 0.696518 102.452L3.0564 115.137C3.65925 118.377 5.82009 121.112 8.83292 122.449L132.276 177.205C132.438 177.277 132.589 177.37 132.726 177.481L151.454 192.698C154.532 195.199 158.797 195.645 162.326 193.834L194.142 177.507C194.391 177.38 194.61 177.201 194.786 176.983Z"
              fill="#F8DFE7"
              fillOpacity="0.46"
            />
          </svg>
          <img className="groupSvg" src="/instructions/groupSvg.png" />
        </div>
      )}
    </section>
  );
}
