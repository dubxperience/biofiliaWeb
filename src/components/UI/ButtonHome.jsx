import "./UI.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function ButtonHome() {
  return (
    <Link to="/">
      <button className="house-btn">
        <FontAwesomeIcon icon={faHouse} />
      </button>
    </Link>
  );
}
