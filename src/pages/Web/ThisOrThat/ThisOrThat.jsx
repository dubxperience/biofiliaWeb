import { useState } from "react";
import "./ThisOrThat.css";
import questions from "../../../data/game1.json";
import Swal from "sweetalert2";

export default function ThisOrThat() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [imageSrc, setImageSrc] = useState("/cacao/cacao-frente.png");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSelectOption = (option, index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentStep] = option;
    setAnswers(updatedAnswers);

    if (imageSrc === "/cacao/cacao-frente.png") {
      setImageSrc("/cacao/cacao-señalando.png");
      setIsFlipped(index === 1);
    } else {
      setIsFlipped(index === 1);
    }
  };

  const handleNext = async () => {
    const selectedOption = answers[currentStep];

    if (!selectedOption) return;

    await Swal.fire({
      position: "bottom-end",
      showConfirmButton: false,
      html: `
        <p>${selectedOption.feedback}</p>
        <img src="/cacao/cacao-feedback.png" class="cacao-modal-img" alt="Cacao feedback" />
      `,
      timerProgressBar: true,
      background: "#f8d693",
      color: "#020b06",
      backdrop: `rgba(0, 0, 0, 0.7)`,
      customClass: {
        popup: "swal-popup-custom",
        htmlContainer: "swal-html-custom",
      },
    });

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setImageSrc("/cacao/cacao-frente.png");
      setIsFlipped(false);
    }
  };

  const handleSubmit = async () => {
    console.log("Respuestas del usuario:", answers);
    const selectedOption = answers[currentStep];

    if (!selectedOption) return;

    await Swal.fire({
      position: "bottom-end",
      showConfirmButton: false,
      html: `
        <p>${selectedOption.feedback}</p>
        <img src="/cacao/cacao-feedback.png" class="cacao-modal-img" alt="Cacao feedback" />
      `,
      timerProgressBar: true,
      background: "#f8d693",
      color: "#020b06",
      backdrop: `rgba(0, 0, 0, 0.7)`,
      customClass: {
        popup: "swal-popup-custom",
        htmlContainer: "swal-html-custom",
      },
    });

    if (currentStep === questions.length - 1) {
      alert("Terminaste el juego");
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        {/* Barra de progreso */}
        <div className="progress-steps">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`progress-step ${
                index <= currentStep ? "active" : ""
              }`}
            ></div>
          ))}
        </div>

        {/* Pregunta actual */}
        <h3 className="question-text">{questions[currentStep].text}</h3>

        {/* Opciones */}
        <div className="options-grid">
          {questions[currentStep].options.map((option, index) => {
            const isSelected = answers[currentStep]?.text === option.text;
            return (
              <button
                key={index}
                onClick={() => handleSelectOption(option, index)}
                className={`option-button ${isSelected ? "selected" : ""}`}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        <div className="cacao-img">
          <img
            src={imageSrc}
            className={`cacao-character ${isFlipped ? "flipped" : ""}`}
            alt="Cacao"
          />
        </div>

        {/* Botones de navegación */}
        <div className="nav-buttons">
          {answers[currentStep] &&
            (currentStep < questions.length - 1 ? (
              <button onClick={handleNext} className="nav-button next">
                Continuar
              </button>
            ) : (
              <button onClick={handleSubmit} className="nav-button next">
                Terminar
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
