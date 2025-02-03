import HeaderBar from "../components/Header/HeaderBar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import TimeLine from "../components/TimeLine/TimeLine";
import React from "react";
import useMouse from "@react-hook/mouse-position";
import CustomCursor from "../components/Misc/CustomCursor";


// Page Component
const Page: React.FC = () => {
  const ref = React.useRef(null)
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  return (
    <div
      ref={ref}
      className="bg-background-base overflow-hidden cursor-follow relative"
      id="rootPage"
    >
      {(mouse.x || mouse.y) && <CustomCursor x={mouse.x ?? 0} y={mouse.y ?? 0} />}
      <HeaderBar />
      <div className="min-h-screen">
        <Hero />
      </div>
      <div className="min-h-screen">
        <Skills />
      </div>
      <div className="min-h-screen mb-25">
        <Projects />
      </div>
      <div className="min-h-screen mb-25">
        <TimeLine />
      </div>
    </div>
  );
};

export default Page;
