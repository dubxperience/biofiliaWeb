import "./PlayOne.css";
import { Link } from "react-router-dom";
import Button from "../../../../../components/UI/Button";
import { motion } from "framer-motion";

export default function PlayOne() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="play-one">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="instruction-intro-text"
      >
        <h3>
          ¿Quieres poner en acción
          <br /> lo que has aprendido?
        </h3>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="instruction-intro-links"
      >
        <Link to="/web/thisorthat">
          <Button
            text="Iniciar"
            bgColor="var(--color-mustard-700)"
            textColor="var(--color-beige-100)"
          />
        </Link>
        <Link to="/web/fases/fase4">
          <Button
            text="Omitir"
            bgColor="var(--color-mustard-400)"
            textColor="var(--color-beige-100)"
          />
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src="/instructions/ins-1.png" />
      </motion.div>

      <motion.svg
        variants={fadeUp}
        initial="hidden"
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 90,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        width="197"
        height="253"
        viewBox="0 0 197 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="polygonIns"
      >
        <path
          d="M21.2195 198.341L89.824 249.431C92.9911 251.789 97.2495 252.063 100.693 250.13L170.177 211.115C172.266 209.943 173.865 208.059 174.682 205.807L195.105 149.522C195.729 147.801 195.869 145.943 195.51 144.148L176.607 49.7459C176.017 46.8012 174.136 44.2775 171.482 42.872L95.2 2.47615C93.0894 1.35843 90.6484 1.03303 88.3187 1.5588L75.7332 4.39911C72.5181 5.1247 69.867 7.38793 68.646 10.4494L18.6208 135.885C18.5553 136.049 18.4684 136.204 18.3622 136.345L3.8684 155.638C1.48633 158.809 1.20316 163.088 3.14662 166.545L20.6706 197.717C20.8079 197.961 20.9949 198.174 21.2195 198.341Z"
          fill="#f8d693"
        />
      </motion.svg>

      <motion.svg
        variants={fadeUp}
        initial="hidden"
        whileInView={{
          opacity: 1,
          scale: 0.6,
          rotate: 105,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        width="197"
        height="253"
        viewBox="0 0 197 253"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="polygonIns-1"
      >
        <path
          d="M21.2195 198.341L89.824 249.431C92.9911 251.789 97.2495 252.063 100.693 250.13L170.177 211.115C172.266 209.943 173.865 208.059 174.682 205.807L195.105 149.522C195.729 147.801 195.869 145.943 195.51 144.148L176.607 49.7459C176.017 46.8012 174.136 44.2775 171.482 42.872L95.2 2.47615C93.0894 1.35843 90.6484 1.03303 88.3187 1.5588L75.7332 4.39911C72.5181 5.1247 69.867 7.38793 68.646 10.4494L18.6208 135.885C18.5553 136.049 18.4684 136.204 18.3622 136.345L3.8684 155.638C1.48633 158.809 1.20316 163.088 3.14662 166.545L20.6706 197.717C20.8079 197.961 20.9949 198.174 21.2195 198.341Z"
          stroke="#D8771B"
          strokeWidth="4"
        />
      </motion.svg>
    </section>
  );
}
