import React from "react";
import HeaderBar from "../components/Header/HeaderBar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";

const Page: React.FC = () => {
  return (
    <div className="bg-background-base overflow-hidden" id="rootPage">
      <HeaderBar />

      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Page;
