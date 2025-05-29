import "./Nosotros.css";

export default function Nosotros() {
  return (
    <div className="feature-nosotros container">
      <div className="text-up">
        <h3>¿Qué es Bitácora del cacao?</h3>
        <p className="text-desktop">
          Es una experiencia interactiva compuesta por tres fases: una máquina
          <br />
          arcade, una estación sensorial y una línea de tiempo digital. <br />
          Combinamos juego, ciencia y sensaciones para contar la historia del
          <br />
          cacao de forma cercana, entretenida y fácil de recordar.
        </p>
        <p className="text-mobile">
          Es una experiencia interactiva compuesta por tres fases: una máquina
          arcade, una estación sensorial y una línea de tiempo digital.
          Combinamos juego, ciencia y sensaciones para contar la historia del
          cacao de forma cercana, entretenida y fácil de recordar.
        </p>
      </div>
      <div className="img">
        <img src="big/nosotrosImg.png" />
      </div>
      <div className="text-down">
        <p className="text-desktop">
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
        <p className="text-mobile">
          <i>
            Esta propuesta es parte de Biofilia Viajera, una extensión
            itinerante de la exposición{" "}
            <a href="https://www.alianzabiofilia.co/" target="_blank">
              Biofilia
            </a>
            , que busca llevar la divulgación científica a distintos territorios
            del país.
          </i>
        </p>
      </div>
    </div>
  );
}
