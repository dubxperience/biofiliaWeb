import { useState, useEffect } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./MapGame.css";
import mapa from "../../../assets/dragGame/2.jpg";
import cacao1 from "../../../assets/dragGame/dragObject01.png";
import QUESTIONS from "../../../data/game2.json";

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
    touchAction: "none",
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
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [placed, setPlaced] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

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
          Swal.fire({
            title: "Felicidades",
            text: "Has completado todo el recorrido digital de biofilia es momento de volver al inicio",
            showConfirmButton: false,
            background: "#f8d693",
            color: "#020b06",
            backdrop: `rgba(0, 0, 0, 0.7)`,
            customClass: {
              popup: "swal-popup-final-custom",
            },
            didClose: () => {
              navigate("/");
            },
          });
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
      }, 5000);

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

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
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
