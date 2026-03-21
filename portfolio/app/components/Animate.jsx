import React from "react";
import { motion } from "framer-motion";

function FadeIn({ text }) {
  const arrText = text.split("");

  return (
    <div>
      {arrText.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}

export default FadeIn;
