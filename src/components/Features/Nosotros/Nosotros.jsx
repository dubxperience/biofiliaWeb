import "./Nosotros.css";

export default function Nosotros() {
  return (
    <div className="feature-nosotros container">
      <div className="text-up">
        <h3>¿Qué es Bitácora del cacao?</h3>
        <p>
          Es una experiencia interactiva compuesta por tres fases: una máquina
          <br />
          arcade, una estación sensorial y una línea de tiempo digital. <br />
          Combinamos juego, ciencia y sensaciones para contar la historia del
          <br />
          cacao de forma cercana, entretenida y fácil de recordar.
        </p>
      </div>
      <div className="img">
        <img src="big/nosotrosImg.png" />
      </div>
      <div className="text-down">
        <p>
          <i>
            Esta propuesta es parte de Biofilia Viajera, una extensión
            itinerante
            <br />
            de la exposición{" "}
            <a href="https://www.alianzabiofilia.co/" target="_blank">
              Biofilia
            </a>
            , que busca llevar la divulgación científica
            <br />a distintos territorios del país.
          </i>
        </p>
      </div>
    </div>
  );
}
