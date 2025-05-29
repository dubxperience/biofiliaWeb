import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Navigation.css";

const fases = [
  { id: 1, label: "Fase 1", path: "/web/fases/fase1" },
  { id: 2, label: "Fase 2", path: "/web/fases/fase2" },
  { id: 3, label: "Fase 3", path: "/web/fases/fase3" },
  { id: 4, label: "Fase 4", path: "/web/fases/fase4" },
  { id: 5, label: "Fase 5", path: "/web/fases/fase5" },
  { id: 6, label: "Fase 6", path: "/web/fases/fase6" },
  { id: 7, label: "Fase 7", path: "/web/fases/fase7" },
];

export default function FasesNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  useEffect(() => {
    const currentIndex = fases.findIndex((f) => f.path === location.pathname);
    const percentage = ((currentIndex + 1) / fases.length) * 80;

    document.documentElement.style.setProperty(
      "--progress-height",
      `${percentage}%`
    );
  }, [location]);

  const goTo = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* FAB para mobile */}
      <div className="fab-menu">
        {/* Overlay */}
        {isOpen && (
          <div className="fab-overlay" onClick={() => setIsOpen(false)} />
        )}

        {/* FAB principal */}
        <button className="fab" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>

        {/* Acciones */}
        <div className={`fab-actions ${isOpen ? "open" : ""}`}>
          {fases.map((fase) => (
            <button
              key={fase.id}
              onClick={() => goTo(fase.path)}
              className={`fab-action-btn ${
                currentPath === fase.path ? "active" : ""
              }`}
            >
              {fase.label}
              <span>{fase.id}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline para desktop */}
      <div className="timeline-container">
        <div className="timeline-line" />
        <div className="timeline">
          {fases.map((fase, index) => {
            const faseIndex = fases.findIndex((f) => f.path === fase.path);
            const currentIndex = fases.findIndex((f) => f.path === currentPath);
            const isPast = faseIndex < currentIndex;
            const isActive = fase.path === currentPath;

            return (
              <div
                key={fase.id}
                className={`timeline-item ${isActive ? "active" : ""} ${
                  isPast ? "past" : ""
                }`}
                onClick={() => goTo(fase.path)}
              >
                <span className="label">{fase.label}</span>
                <span className="bullet">{fase.id}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
