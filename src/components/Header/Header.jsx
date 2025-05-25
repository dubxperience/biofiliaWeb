import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/">
          <img className="logo-nav" src="/cacao-logo.png" />
        </a>
        <ul>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">¿Qué es?</a>
          <a href="#experiencias">Experiencias</a>
          <a href="">Encuesta</a>
        </ul>
      </div>
    </nav>
  );
}
