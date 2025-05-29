import "./UI.css";

export default function Button({ text, bgColor, textColor }) {
  return (
    <button
      className="btn-component"
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      <div>
        <span>{text}</span>
      </div>
    </button>
  );
}
