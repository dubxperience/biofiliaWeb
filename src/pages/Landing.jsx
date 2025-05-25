import "../styles/landing.css";
import Hero from "../components/Hero/Hero";
import Nosotros from "../components/Features/Nosotros/Nosotros";
import Experiencias from "../components/Features/Experiencias/Experiencias";

export default function Landing() {
  return (
    <div>
      <section className="hero" id="inicio">
        <Hero />
      </section>
      <section className="nosotros" id="nosotros">
        <Nosotros />
      </section>
      <section className="experiencias" id="experiencias">
        <Experiencias />
      </section>
    </div>
  );
}
