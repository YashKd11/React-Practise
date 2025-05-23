import React from "react";
import { motion } from "framer-motion";

function marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="w-full py-5 bg-[#004d43] rounded-tl-xl rounded-tr-xl">
      <div className="text-white border-t-[0.5px] border-b-[0.5px] border-zinc-600 whitespace-nowrap flex overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='mt-2 text-[18vw] uppercase font-black leading-none -tracking-[1vw] font-["gilroy"] pr-5'
        >
          we are ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='mt-2 text-[18vw] uppercase font-black leading-none -tracking-[1vw] font-["gilroy"] pr-5'
        >
          we are ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='mt-2 text-[18vw] uppercase font-black leading-none -tracking-[1vw] font-["gilroy"] pr-5'
        >
          we are ochi{" "}
        </motion.h1>
      </div>
    </div>
  );
}

export default marquee;
