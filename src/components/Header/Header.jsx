import "./Header.css";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/">
          <img className="logo-nav" src="/cacao-logo.png" />
        </a>
        <label className="hamburger">
          <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
          <svg viewBox="0 0 32 32">
            <path
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              className="line line-top-bottom"
            />
            <path d="M7 16 27 16" className="line" />
          </svg>
        </label>
        <ul className={isOpen ? "menu-open" : ""}>
          <a href="#inicio" onClick={toggleMenu}>
            Inicio
          </a>{" "}
          {/* Cierra el menú al hacer clic */}
          <a href="#nosotros" onClick={toggleMenu}>
            ¿Qué es?
          </a>
          <a href="#experiencias" onClick={toggleMenu}>
            Experiencias
          </a>
        </ul>
      </div>
    </nav>
  );
}
