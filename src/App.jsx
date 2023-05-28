import { useState } from "react";

import Hero from "./components/Hero";
import "./App.css";
import Main from "./CarDisplay/components/Main";
import AboutMe from "./components/AboutMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" ">
        <Hero />

        <AboutMe />
        <Main />
      </div>
    </>
  );
}

export default App;
