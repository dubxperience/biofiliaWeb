import { useState, useEffect } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  closestCenter,
} from "@dnd-kit/core";
import Swal from "sweetalert2";
import "./MapGame.css";
import mapa from "../../../assets/dragGame/mapa.jpg";
import cacao from "../../../assets/dragGame/dragObject.png";
import cacao1 from "../../../assets/dragGame/dragObject01.png";
import { div } from "motion/react-client";

// Lista de preguntas
const QUESTIONS = [
  {
    pregunta: "¿En qué continente nació el cacao?",
    respuestaCorrecta: "america",
    mensajeExito:
      "¡Muy bien! América es la cuna del cacao, donde comenzó su historia hace miles de años, en medio de la selva.",
    mensajeError: "Ups, intenta de nuevo.",
  },
  {
    pregunta: "¿A qué lugar viajó el cacao?",
    respuestaCorrecta: "europa",
    mensajeExito:
      "¡Exacto! En el siglo XVI, el cacao cruzó el océano hasta Europa, donde cambió su sabor y su historia.",
    mensajeError: "¡Oh no! Vuelve a intentarlo.",
  },
  {
    pregunta: "Dónde se cultivo principalmente el cacao: Criollo",
    respuestaCorrecta: "america",
    mensajeExito:
      "¡Bien hecho! El criollo es típico de América. Tiene un sabor delicado y es muy valorado por expertos.",
    mensajeError: "Ups, esa no es la respuesta. Intenta otra vez.",
  },
  {
    pregunta: "Dónde se cultivo principalmente el cacao: Forastero",
    respuestaCorrecta: "africa",
    mensajeExito:
      "¡¡Correcto! África cultiva principalmente cacao forastero, resistente y el más producido en el mundo.",
    mensajeError: "No es ahí. Prueba de nuevo.",
  },
  {
    pregunta: "Dónde se cultivo principalmente el cacao: Trinitario",
    respuestaCorrecta: "asia",
    mensajeExito:
      "¡Diste en el punto! El trinitario, mezcla de criollo y forastero, se cultiva sobre todo en Asia.",
    mensajeError: "Casi, pero no. Sigue intentando.",
  },
];

const CONTINENTES = ["america", "africa", "asia", "europa", "oceania"];

function DroppableZone({ id, children }) {
  const { isOver, setNodeRef } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`dropzone ${id} ${isOver ? "hovered" : ""}`}
    >
      {children}
    </div>
  );
}

function DraggableItem({ id }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <img
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      src={cacao1}
      alt="cacao"
      className="draggable"
      style={style}
    />
  );
}

export default function MapGame() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleDragEnd = (event) => {
    const { over } = event;
    if (!over) return;

    if (over.id === currentQuestion.respuestaCorrecta) {
      Swal.fire({
        position: "bottom-end",
        showConfirmButton: false,
        html: `
        <p>${currentQuestion.mensajeExito}</p>
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
      }).then(() => {
        const nextIndex = currentQuestionIndex + 1;

        if (nextIndex < QUESTIONS.length) {
          setCurrentQuestionIndex(nextIndex);
          setPlaced(false);
        } else {
          Swal.fire(
            "¡Completado!",
            "Has respondido correctamente todas las preguntas",
            "success"
          );
        }
      });
      setPlaced(true);
    } else {
      Swal.fire({
        position: "bottom-end",
        showConfirmButton: false,
        html: `
        <p>${currentQuestion.mensajeError}</p>
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
    }
  };

  useEffect(() => {
    if (window.innerWidth < 920) {
      setShowOverlay(true);
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="game-container">
      <div className="game-question">
        <h3>{currentQuestion.pregunta}</h3>
      </div>

      <div className="draggable-container"></div>

      <div className="mapgame-dots">
        {QUESTIONS.map((_, index) => (
          <span
            key={index}
            className={`mapgame-dot ${
              index === currentQuestionIndex ? "active" : ""
            }`}
          ></span>
        ))}
      </div>

      {showOverlay && (
        <div className="mapgame-overlay">
          <div className="mapgame-overlay-content">
            <p>Para mayor comodidad, gira el celular.</p>
          </div>
        </div>
      )}

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="map-wrapper">
          <img src={mapa} alt="mapa" className="mapa" />

          {CONTINENTES.map((id) => (
            <DroppableZone key={id} id={id} />
          ))}

          {!placed && <DraggableItem id="cacao" />}
        </div>
      </DndContext>
    </div>
  );
}
