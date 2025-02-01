import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";


const buttonData = [
  { svg: "src/assets/arrow.svg", alt: "arrow" },
  { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  { svg: "src/assets/tailwind.svg", alt: "tailwind" },
];

const radius = 240; // Adjusted radius for better centering

const Card = () => {
  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">


      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="relative flex items-center justify-center size-120 p-4 border-2 border-dashed rounded-full border-gray-400/50"
        >
          {/* Render Buttons Dynamically */}
          {buttonData.map((button, index) => {
            const angle = (2 * Math.PI * index) / buttonData.length;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <button
                data-tooltip-id="SkillTooltip"
                data-tooltip-content={button.alt}
                data-tooltip-place="top"
                key={index}
                className="absolute rounded-full bg-cover cursor-default border border-gray-400/50 p-0.5 transition-all duration-500"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="block size-18 transition-transform duration-50 rounded-full z-2 bg-white p-1"
                >
                  <img src={button.svg} alt={button.alt} className="w-full h-full object-contain select-none"  />
                </motion.span>
              </button>
            );
          })}

          {/* Invisible Center Spacer */}
          <div className="absolute size-24 bg-transparent"></div>
        </motion.div>
      </div>
      <Tooltip id="SkillTooltip" offset={3} variant="light" />
    </div>
  );
};

export default Card;
