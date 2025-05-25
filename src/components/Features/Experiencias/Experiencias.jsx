import { Link } from "react-router";
import "./Experiencias.css";

export default function Experiencias() {
  const cards = [
    {
      title: "Arcade",
      bgImage: "/features/bg-arcade.jpg",
      link: "/arcade",
    },
    {
      title: "Tiendita",
      bgImage: "/features/bg-tiendita.jpg",
      link: "/tiendita",
    },
    {
      title: "Línea del tiempo",
      bgImage: "/features/bg-linea.jpg",
      link: "web/welcome",
    },
  ];

  return (
    <div className="feature-experiencias container">
      <div className="tv-container">
        <div className="tv-inner-container">
          <h4>Nuestra experiencias</h4>
          <div className="card-container">
            {cards.map((card, index) => (
              <div
                key={index}
                className="card"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              >
                <Link to={card.link}>{card.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Polygon outline */}
      <svg
        width="483"
        height="448"
        viewBox="0 0 483 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="polygon1"
      >
        <path
          d="M481.507 185.995L474.866 297.167C474.814 298.039 474.479 298.869 473.911 299.532L349.119 445.164C348.287 446.135 347.04 446.65 345.765 446.548L102.769 427.258C102.217 427.214 101.679 427.056 101.192 426.794L12.36 379.043C11.1063 378.369 10.3052 377.079 10.2562 375.657L0.916558 104.237C0.888238 103.414 1.11469 102.602 1.56503 101.913L66.4487 2.55254C67.2951 1.25642 68.8133 0.565022 70.3467 0.777417L372.24 42.5939C373.288 42.739 374.236 43.2932 374.876 44.1353L480.698 183.336C481.277 184.097 481.564 185.04 481.507 185.995Z"
          stroke="#FF99BB"
          strokeWidth="3"
        />
      </svg>
      {/* Polygon filled*/}
      <svg
        width="483"
        height="448"
        viewBox="0 0 483 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="polygon2"
      >
        <path
          d="M481.507 185.995L474.866 297.167C474.814 298.039 474.479 298.869 473.911 299.532L349.119 445.164C348.287 446.135 347.04 446.65 345.765 446.548L102.769 427.258C102.217 427.214 101.679 427.056 101.192 426.794L12.36 379.043C11.1063 378.369 10.3052 377.079 10.2562 375.657L0.916558 104.237C0.888238 103.414 1.11469 102.602 1.56503 101.913L66.4487 2.55254C67.2951 1.25642 68.8133 0.565022 70.3467 0.777417L372.24 42.5939C373.288 42.739 374.236 43.2932 374.876 44.1353L480.698 183.336C481.277 184.097 481.564 185.04 481.507 185.995Z"
          fill="#d8771b"
        />
      </svg>
    </div>
  );
}
