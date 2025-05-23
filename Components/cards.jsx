import React, { useState } from "react";
import Card from "./card";

function cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full pt-7 bg-zinc-200 text-zinc-900"
    >
      <div className="w-full min-h-3 text-2xl px-5 pb-5 tracking-tighter border-b-[0.5px] border-zinc-500">
        Featured Projects
      </div>

      <div className="flex gap-2 h-screen justify-center mt-5">
        <Card text = "FYDE" call = {0} link="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"/>
        <Card text = "VISA" call = {1} link="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"/>
       </div> 
    </div>
  );
}

export default cards;
