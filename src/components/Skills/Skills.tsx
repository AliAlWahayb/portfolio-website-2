import React from "react";
import Ring from "./Ring";
import SkillsLoop from "./SkillsLoop";
import Spline from "@splinetool/react-spline";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full pb-70">
      <div className="relative flex items-center justify-center h-full w-full overflow-hidden z-2">
        <Ring />
        <Spline
          scene="src/assets/emoji.spline"
          className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center "
        />
      </div>
      <div className="">
        <SkillsLoop />
      </div>
    </div>
  );
};

export default Skills;
