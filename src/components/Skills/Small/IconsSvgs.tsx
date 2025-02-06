import React from "react";

type TechStackProps = {
  svg?: string;
  alt?: string;
  icon?: React.ReactNode;
};

const TechStack: React.FC<TechStackProps> = React.memo(({ svg, alt, icon }) => {
  return (
    <div className="">
      {/* Render SVG if provided, else render React Icon */}
      {svg ? (
        <img
          src={svg}
          alt={alt}
          className="w-full h-full object-contain select-none"
        />
      ) : (
        <div className="w-full h-full object-contain select-none">
          {icon}
        </div>
      )}
    </div>
  );
});

export default TechStack;
