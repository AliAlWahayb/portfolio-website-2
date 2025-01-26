import React from "react";
import HeaderBar from "../components/HeaderBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Page: React.FC = () => {
  return (
    <div className="bg-background-base overflow-hidden divide-y-8 divide-secondary-base" id="rootPage">
      <HeaderBar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Page;
