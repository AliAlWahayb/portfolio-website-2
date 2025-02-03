import React from "react";

type TechStackProps = {
  svg?: string;
  alt?: string;
  icon?: React.ReactNode;
};

const TechStack: React.FC<TechStackProps> = (props) => {
  return (
    <div className="">
      {/* Render SVG if provided, else render React Icon */}
      {props.svg ? (
        <img
          src={props.svg}
          alt={props.alt}
          className="w-full h-full object-contain select-none"
        />
      ) : (
        <div className="w-full h-full object-contain select-none ">
          {props.icon}
        </div>
      )}
    </div>
  );
};

export default TechStack;
