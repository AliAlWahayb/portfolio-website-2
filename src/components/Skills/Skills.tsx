import React from "react";
import Ring from "./Ring";
import SkillsLoop from "./SkillsLoop";

const Skills: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full  overflow-y-hidden">
      <Ring />
      <SkillsLoop />
    </div>
  );
};

export default Skills;
