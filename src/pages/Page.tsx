import React from "react";
import HeaderBar from "../components/HeaderBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Spline from "@splinetool/react-spline";

const Page: React.FC = () => {
  return (
    <div className="bg-background-base overflow-hidden" id="rootPage">
      <HeaderBar />
      <div className="w-screen h-screen overflow-hidden m-0 p-0">
        <Spline scene="src/assets/emoji.spline" />
      </div>

      <Hero />
      <Skills />
      <Projects />
    </div>
  );
};

export default Page;
