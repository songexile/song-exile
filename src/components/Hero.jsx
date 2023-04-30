import React from "react";
import { Gradient } from "../assets/Gradient";
import meImage from "../assets/me.jpg"; // Import the image

function Hero() {
  // Create your instance
  const gradient = new Gradient();

  // Call `initGradient` with the selector to your canvas
  gradient.initGradient("#gradient-canvas");

  return (
    <div>
      {/* Nav Bar */}
      <div className="w-screen h-16 windows-xp-blue"></div>
      <div className="relative ">
        <canvas
          id="gradient-canvas"
          className="flex items-center justify-center"
          data-transition-in
        ></canvas>
        <p className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl flex items-center justify-center">
          <div className="bg-white h-48 w-2/3 rounded-xl text-black flex items-center justify-center y2k-shadow4">
            <div className="text-center">
              <p>
                Hey! I'm <span className="text-blue-500"> Otis</span>
              </p>
              <p>
                <br />
                Welcome to my website, let's begin this experience!
              </p>
            </div>
          </div>
        </p>
      </div>
      <div className="h-screen w-screen bg-[#0078d7] flex items-center justify-center flex-col sm:flex-row ">
        <div className=" w-full sm:w-1/2 h-full flex items-center justify-center">
          I am a computer science student from New Zealand
        </div>
        <div className=" w-full sm:w-1/2 h-full flex items-center justify-center">
          <img
            src={meImage} // Use the imported image
            alt="me"
            className="h-64 w-64 object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
