import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Skills from "../components/Skills";
import SectionCapsule from "../components/Utils-Components/SectionCapsule";
import Projects from "../components/Projects";
import Hireme from "../components/Hireme";
import Footer from "../components/Footer";

const Layout = () => {
  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const hireRef = useRef(null);
  return (
    <section className="w-screen h-screen overflow-auto bg-slate-100 pt-10 ">
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        hireRef={hireRef}
        topRef={topRef}
      />
      <div className="mt-10">
        <div className="w-full flex justify-center p-2 " ref={topRef}>
          <HeroSection />
        </div>
        <SectionCapsule>
          <About refer={aboutRef} />
        </SectionCapsule>
        <SectionCapsule>
          <Skills refer={skillsRef} />
        </SectionCapsule>
        <SectionCapsule>
          <Projects refer={projectsRef} />
        </SectionCapsule>
        <SectionCapsule>
          <Hireme refer={hireRef} />
        </SectionCapsule>
        <SectionCapsule>
          <Footer />
        </SectionCapsule>
      </div>
    </section>
  );
};

export default Layout;
