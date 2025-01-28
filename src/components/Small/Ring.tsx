import React from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import Spline from "@splinetool/react-spline";

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

const radius = 140; // Radius of the circle

const Card = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center scale-125">
      {/* Fullscreen Spline Interaction Layer */}
      <div className="absolute inset-0 z-0 pointer-events-auto  ">
        <Spline scene="src/assets/emoji.spline" className="" />
      </div>

      <div className="relative z-10">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50"
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
                className="absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500"
                style={{
                  left: `calc(50% + ${x - 25}px)`,
                  top: `calc(50% + ${y - 25}px)`,
                }}
              >
                <motion.span
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="block w-[40px] h-[40px] transition-transform duration-50 rounded-full z-[2] bg-white p-1"
                >
                  <img src={button.svg} alt={button.alt} />
                </motion.span>
              </button>
            );
          })}

          {/* Invisible Center Spacer */}
          <div className="opacity-0 profile_item w-[200px] h-[200px] p-1 border-2 rounded-full"></div>
        </motion.div>

        {/* Center Button */}
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="ring-[25px] ring-white ring-inset profile_item w-[200px] h-[200px] p-1 border-2 rounded-full cursor-pointer">
            
          </button>
        </div>
      </div>
      <Tooltip id="SkillTooltip" offset={3} variant="light" />
    </div>
  );
};

export default Card;
