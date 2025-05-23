import React from "react";
import { motion } from "framer-motion";

function landing_page() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-200 h-screen pt-36 relative overflow-hidden">
      {["we create", "eye-opening", "presentations"].map((item, index) => {
        return (
          <div className="masker pl-4">
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial = {{width: "0"}}
                  animate = {{width: "10vw"}}
                  transition={{ease :[0.83, 0, 0.17, 1], duration: 1}}
                 className="h-[10%] w-[10%] bg-red-900 relative top-[3px] rounded-md overflow-hidden text-white ">
                  <img className="w-full h-full object-cover object-center " src="src\Components\pexels-pixabay-106144.jpg" alt="" />
                </motion.div>
              )}
              <h1 className="uppercase text-[#212121] text-8xl font-black tracking-tighter">
                {item}
              </h1>
            </div>
          </div>
        );
      })}

      <motion.button 
      initial={{right: -55}}
      animate = {{right: -40}}
      transition={{duration: .5}}
      className="absolute capitalize top-[16em] rotate-90 right-[-4.2em] border-none py-1 px-2 bg-[#e73c37] text-white text-xs font-bold">
        site of the day
      </motion.button>

      <div className="w-full mt-40 border-t-[1px] border-zinc-400 flex justify-between items-center">
        <h4 className="capitalize m-3 text-xs text-[#212121]">
          For public and private companies
        </h4>
        <h4 className="capitalize m-3 text-xs text-[#212121]">
          From the first pitch to IPO
        </h4>
        <button className="border-zinc-600 m-3 border-[1px] rounded-lg px-2 py-1 capitalize text-xs text-[#212121]">
          start the project
        </button>
      </div>
    </div>
  );
}

export default landing_page;
