import "./DatoB.css";
import { motion } from "framer-motion";

export default function DatoB({ title, text, image, fillColor }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="datob-container">
      <div className="datob-wrapper">
        <motion.div
          className="datob-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{title}</h2>
        </motion.div>

        <motion.div
          className="datob-img"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={image} alt={title} />
        </motion.div>

        <motion.div
          className="datob-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p>{text}</p>
        </motion.div>
      </div>

      <motion.svg
        variants={fadeUp}
        initial="hidden"
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 0.4,
          rotate: 20,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
        width="790"
        height="634"
        viewBox="0 0 790 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="b-polygon1"
      >
        <path
          d="M185.251 574.632L2.48598 350.619C0.0456285 347.628 -0.463944 343.508 1.17595 340.027L119.779 88.3013C120.801 86.1328 122.57 84.4071 124.764 83.4394L309.816 1.80115C311.536 1.04253 313.437 0.785292 315.3 1.05899L630.327 47.3384C633.328 47.7792 635.972 49.5566 637.516 52.1709L788.056 307.079C789.24 309.085 789.69 311.439 789.327 313.736L779.694 374.703C779.183 377.936 777.12 380.709 774.172 382.124L380.202 571.276C380.041 571.353 379.891 571.452 379.756 571.569L311.14 631.36C308.083 634.024 303.71 634.568 300.077 632.735L185.904 575.156C185.652 575.029 185.43 574.85 185.251 574.632Z"
          style={{ stroke: fillColor, strokeWidth: 4 }}
        />
      </motion.svg>

      <motion.svg
        variants={fadeUp}
        initial="hidden"
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 0.4,
          rotate: 20,
          transition: { duration: 0.6, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.3 }}
        width="790"
        height="634"
        viewBox="0 0 790 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="b-polygon2"
      >
        <path
          d="M185.251 574.632L2.48598 350.619C0.0456285 347.628 -0.463944 343.508 1.17595 340.027L119.779 88.3013C120.801 86.1328 122.57 84.4071 124.764 83.4394L309.816 1.80115C311.536 1.04253 313.437 0.785292 315.3 1.05899L630.327 47.3384C633.328 47.7792 635.972 49.5566 637.516 52.1709L788.056 307.079C789.24 309.085 789.69 311.439 789.327 313.736L779.694 374.703C779.183 377.936 777.12 380.709 774.172 382.124L380.202 571.276C380.041 571.353 379.891 571.452 379.756 571.569L311.14 631.36C308.083 634.024 303.71 634.568 300.077 632.735L185.904 575.156C185.652 575.029 185.43 574.85 185.251 574.632Z"
          style={{ stroke: fillColor, strokeWidth: 4 }}
        />
      </motion.svg>

      <motion.div
        className="cacao1-bg"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src="/cacao-svg.png" alt="cacao-opacity-icon" />
      </motion.div>
    </div>
  );
}
