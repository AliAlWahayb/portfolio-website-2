import React from "react";
import Ring from "./Ring";
import SkillsLoop from "./SkillsLoop";
import Spline from "@splinetool/react-spline";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full pb-70">
      <p className="-mb-30 mx-auto mt-5 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-text-base sm:text-5xl">
        Tech Stack
      </p>
      <div className="relative flex items-center justify-center h-full w-full overflow-hidden z-2">
        <Ring />
        <Spline
          scene="/assets/emoji.spline"
          className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center "
        />
      </div>
      <div className="-mt-15 z-0">
        <p className="mb-10 mx-auto mt-5 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-secondary-text-base sm:text-5xl">
          Additional Technologies
        </p>
        <SkillsLoop />
      </div>
    </div>
  );
};

export default Skills;
