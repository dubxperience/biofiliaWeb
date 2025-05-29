import "./Cover.css";
import { motion } from "framer-motion";

export default function Covers({ text1, text2, imgBg }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imgBack = {
    backgroundImage: `url(${imgBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="fases" style={imgBack}>
      <motion.div
        className="fase-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3>{text1}</h3>
        <h3>{text2}</h3>
      </motion.div>
    </div>
  );
}
