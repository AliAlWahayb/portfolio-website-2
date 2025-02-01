import React from "react";
import HeaderBar from "../components/Header/HeaderBar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

const Page: React.FC = () => {
  return (
    <div className="bg-background-base overflow-hidden" id="rootPage">
      <HeaderBar />
      <div className="min-h-screen">
        <Hero />
      </div>
      <div className="min-h-screen">
        <Skills />
      </div>
      <div className="min-h-screen">
        <Projects />
      </div>
    </div>
  );
};

export default Page;
