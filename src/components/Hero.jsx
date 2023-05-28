import React, { useEffect } from "react";
import { Gradient } from "../assets/Gradient";
import meImage from "../assets/me.jpg"; // Import the image

function Hero() {
  const gradient = new Gradient();
  useEffect(() => {
    gradient.initGradient("#gradient-canvas");
  }, []);

  // Create your instance

  // Call `initGradient` with the selector to your canvas

  return (
    <div>
      {/* Nav Bar */}
      <div className="w-full h-8 windows-xp-blue"></div>
      <div className="relative ">
        <canvas
          id="gradient-canvas"
          className="flex items-center justify-center"
          data-transition-in
        ></canvas>
        <p className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl flex items-center justify-center">
          <div className=" bg-white h-1/2 sm:h-48 w-full sm:w-1/3 mx-16 p-8  text-black flex items-center justify-center y2k-shadow4">
            <div className="text-center mx-8">
              <p>
                Hey! I'm <span className="text-blue-500"> Otis</span>
              </p>
              <p>
                <br /> This is my personal space on the internet. Here you will
                learn about me and my projects.
              </p>
            </div>
          </div>
        </p>
      </div>
    </div>
  );
}

export default Hero;
