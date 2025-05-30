import "./DatoC.css";
import { motion } from "framer-motion";

export default function DatoC({ title, text, image, fillColor }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="datoc-container">
      <div className="datoc-wrapper">
        <motion.div
          className="datoc-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>{title}</h2>
        </motion.div>

        <motion.div
          className="datoc-img"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={image} alt={title} />
        </motion.div>

        <motion.div
          className="datoc-content"
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
        className="c-polygon1"
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
        width="483"
        height="448"
        viewBox="0 0 483 448"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="c-polygon2"
      >
        <path
          d="M481.507 185.995L474.866 297.167C474.814 298.039 474.479 298.869 473.911 299.532L349.119 445.164C348.287 446.135 347.04 446.65 345.765 446.548L102.769 427.258C102.217 427.214 101.679 427.056 101.192 426.794L12.36 379.043C11.1063 378.369 10.3052 377.079 10.2562 375.657L0.916558 104.237C0.888238 103.414 1.11469 102.602 1.56503 101.913L66.4487 2.55254C67.2951 1.25642 68.8133 0.565022 70.3467 0.777417L372.24 42.5939C373.288 42.739 374.236 43.2932 374.876 44.1353L480.698 183.336C481.277 184.097 481.564 185.04 481.507 185.995Z"
          style={{ fill: fillColor, strokeWidth: 4 }}
        />
      </motion.svg>
    </div>
  );
}
