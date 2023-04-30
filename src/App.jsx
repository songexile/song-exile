import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" ">
        <Hero />
      </div>
    </>
  );
}

export default App;
