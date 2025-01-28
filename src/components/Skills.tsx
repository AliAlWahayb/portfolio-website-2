import React from "react";
import Ring from "./Small/Ring";
import EmojiEyes from "./Small/Eyes";

const Skills: React.FC = () => {
  return (
    <div className="h-100 flex flex-col" id="rootTemplate">
      <Ring/>
      <EmojiEyes />
    </div>
  );
};

export default Skills;
