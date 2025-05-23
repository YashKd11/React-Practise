import React, { useState } from "react";
import { motion } from "framer-motion";

function card({ text, call, link }) {
  var [hover, state] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        state(true);
      }}
      onMouseLeave={() => {
        state(false);
      }}
      className="cards w-[49vw] h-[80vh] relative "
    >
      <div className={`absolute top-1/3 flex ${call === 0 ? "-right-20" : "-left-20"} overflow-hidden`}>
        {text.split("").map((item, index) => (
          <motion.span
            initial={{ y: 0 }}
            animate={hover ? { y: "0" } : { y: "100%" }}
            transition={{
              ease: [0.85, 0, 0.15, 1],
              duration: 0.3,
              delay: index * 0.05,
            }}
            className="text-[#cdea68] text-7xl relative font-bold z-10 inline-block translate-y-full tracking-tighter"
          >
            {item}
          </motion.span>
        ))}
      </div>
      <motion.img
        initial={{ scale: 1 }}
        animate={hover ? { scale: 0.95 } : { scale: 1 }}
        transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.8, delay: 0.1 }}
        className="w-full h-full object-cover rounded-lg m-1"
        src={link}
        alt=""
      />
    </div>
  );
}

export default card;
