import "../Onboarding.css";

export default function OnboardingStep1() {
  return (
    <div className="onboarding-step step-1">
      <div className="step-text">
        <h2>¡Explora el mundo del cacao!</h2>
        <p>
          Conoce cómo una semilla de la selva se volvió ritual, moneda,
          <br />
          chocolate… y parte de nuestra historia.
        </p>
      </div>
      <div className="step-img">
        <img src="/onboarding/step1.png" />
        <svg
          width="775"
          height="638"
          viewBox="0 0 775 638"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M550.044 600.048L770.074 412.507C773.012 410.003 774.253 406.041 773.265 402.323L701.806 133.388C701.19 131.071 699.76 129.055 697.776 127.709L530.396 14.1598C528.841 13.1047 527.017 12.5102 525.135 12.4448L206.919 1.38657C203.888 1.28122 200.967 2.55477 198.979 4.84924L5.10125 228.572C3.57531 230.333 2.7101 232.567 2.65457 234.892L1.18032 296.598C1.10214 299.87 2.63355 302.968 5.27977 304.89L358.867 561.73C359.011 561.835 359.141 561.959 359.253 562.099L416.013 633.241C418.542 636.412 422.746 637.732 426.65 636.582L549.308 600.447C549.578 600.367 549.829 600.231 550.044 600.048Z"
            stroke="#00C64C"
            strokeWidth="4"
          />
        </svg>
      </div>
    </div>
  );
}
