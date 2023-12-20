import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./compontes/navbar";
import HeroSection from "./compontes/hero";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </div>
  );
}
export default App;
