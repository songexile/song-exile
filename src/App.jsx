import { useState } from "react";

import Hero from "./components/Hero";

import Main from "./CarDisplay/components/Main";
import AboutMe from "./components/AboutMe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" ">
        <Hero />

        <Main />
      </div>
    </>
  );
}

export default App;
