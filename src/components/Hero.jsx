import React, { useEffect } from "react";
import { Gradient } from "../assets/Gradient";
import meImage from "../assets/me.jpg"; // Import the image

function Hero() {
  const gradient = new Gradient();
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div className="relative">
      {/* Nav Bar */}
      <div className="w-screen h-8 windows-xp-blue"></div>
      <canvas
        id="gradient-canvas"
        className="absolute w-screen h-screen"
        data-transition-in
      ></canvas>
    </div>
  );
}

export default Hero;
