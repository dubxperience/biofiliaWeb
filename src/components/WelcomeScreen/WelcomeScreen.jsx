import { useNavigate } from "react-router-dom";
import "./WelcomeScreen.css";

export default function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="welcome-screen">
      <div className="banner-top-welcome"></div>
      <div className="welcome-holder">
        <div className="welcome-text">
          <div>
            <h1>
              ¡EMPEZAMOS EL
              <br /> VIAJE!
            </h1>
            <h4>Bitácora del cacao</h4>
          </div>
          <div className="button-holder">
            <button onClick={() => navigate("/web/onboarding")}>
              Empezar recorrido
            </button>
          </div>
        </div>
        <img src="/onboarding/w1.png" className="img1" />
        <img src="/onboarding/w3.png" className="img2" />
        <img src="/onboarding/w2.png" className="img3" />
      </div>
    </div>
  );
}
