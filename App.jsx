import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "./Components/nav";
import Land from "./Components/landing_page";
import Mrque from "./Components/marquee";
import About from "./Components/about";
import Play from "./Components/play";
import Cards from "./Components/cards";
import Flips from "./Components/flips";
import Presentation from "./Components/presentation";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div>
      <div className="w-full h-screen" >
        <Navbar />
        <Land />
        <Mrque />
        <About />
        <Play />
        <Cards />
        <Flips />
        <Presentation />
      </div>
    </div>
  );
}

export default App;
