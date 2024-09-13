import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";

const App = () => {
  return (
    <section className="w-screen h-screen overflow-auto bg-slate-100 ">
      <Navbar />
      <div className="w-full flex justify-center p-2 mt-10 mobile:mt-20">
        <HeroSection />
      </div>
      <div className="w-full flex justify-center p-2">
        <About />
      </div>
      <div className="w-full flex justify-center p-2">
        <Skills />
      </div>
    </section>
  );
};

export default App;
