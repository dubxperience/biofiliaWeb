import "./StepsNavigator.css";

export default function StepNavigator({
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onLastNext,
  title,
}) {
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="step-navigator">
      {currentStep > 0 ? (
        <button className="fase-arrow left" onClick={onPrev}>
          ←
        </button>
      ) : (
        <span className="arrow-placeholder" />
      )}

      <div className="fase-dots">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <span
            key={index}
            className={`fase-dot ${index === currentStep ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <div className="current-fase-title">
        <h5>{title}</h5>
      </div>

      {isLastStep ? (
        <button className="fase-arrow last" onClick={onLastNext}>
          →
        </button>
      ) : (
        <button className="fase-arrow right" onClick={onNext}>
          →
        </button>
      )}
    </div>
  );
}
