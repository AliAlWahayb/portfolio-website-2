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
                data-tooltip-content={
                  button.alt.charAt(0).toUpperCase() + button.alt.slice(1)
                }
                data-tooltip-place="top"
                key={index}
                className="absolute rounded-full bg-cover cursor-default border border-gray-400/50 p-0.5 transition-all duration-500"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="block size-18 transition-transform duration-50 rounded-full z-2 bg-card-base p-1"
                >
                  <img
                    src={button.svg}
                    alt={button.alt}
                    className="w-full h-full object-contain select-none"
                  />
                </motion.span>
              </button>
            );
          })}

          {/* Invisible Center Spacer */}
          <div className="absolute size-24 bg-transparent"></div>
        </motion.div>
      </div>
      <Tooltip
        id="SkillTooltip"
        offset={5}
        variant="light"
        place="top"
        delayShow={250}
        delayHide={250}
        noArrow={true}
        style={{
          background: "#fff",
          color: "#364153",
          fontWeight: "bold",
          borderRadius: "8px",
          zIndex: "9999",
        }}
      />
    </div>
  );
};

export default Card;
