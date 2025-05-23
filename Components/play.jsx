import React, { useEffect, useState } from "react";

function play() {

  const [rotate,setrotate]= useState(0);

  useEffect((()=>{
    window.addEventListener("mousemove",(e)=>{
      let delX = e.clientX - window.innerWidth/2;
      let delY = e.clientY - window.innerHeight/2;

      let angle = Math.atan2(delY,delX) * 180/Math.PI;
      setrotate(angle - 180 );
    })

  }))

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full z-3 h-screen bg-[#d8d8d8]">
      <div className='h-full w-full relative bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-5">
          <div className=" h-32 bg-zinc-100 w-32 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full relative flex items-center justify-center">
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
              </div>
              <p className="text-white text-xs">PLAY</p>
            </div>
          </div>
          <div className=" h-32 bg-zinc-100 w-32 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-800 rounded-full relative flex items-center justify-center">
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className="line w-full h-3 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
              </div>

              <p className="text-white text-xs">PLAY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default play;
