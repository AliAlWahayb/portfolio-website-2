import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { useState, useEffect, useMemo } from "react";

const buttonData = [
  { name: "React", svg: "/assets/logos/TechStack/react-2.svg" },
  { name: "Docker", svg: "/assets/logos/TechStack/docker-4.svg" },
  { name: "Firebase", svg: "/assets/logos/TechStack/firebase-1.svg" },
  { name: "FastAPI", svg: "/assets/logos/TechStack/fastapi-1.svg" },
  { name: "TypeScript", svg: "/assets/logos/TechStack/typescript.svg" },
];

const RADIUS_DESKTOP = 240;
const RADIUS_MOBILE = 140;

const Ring = () => {
  const [radius, setRadius] = useState(RADIUS_DESKTOP);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? RADIUS_MOBILE : RADIUS_DESKTOP);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const buttons = useMemo(() => {
    return buttonData.map((button, index) => {
      const angle = (2 * Math.PI * index) / buttonData.length;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return (
        <button
          data-tooltip-id="SkillTooltip"
          data-tooltip-content={
            button.name.charAt(0).toUpperCase() + button.name.slice(1)
          }
          data-tooltip-place="top"
          key={button.name}
          className="absolute rounded-full bg-cover cursor-default 
                    border border-gray-400/50 p-0.5 transition-all duration-500"
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
            className="block size-14 sm:size-18 transition-transform 
                       duration-50 rounded-full z-2 bg-card-base p-1"
          >
            <img
              src={button.svg}
              alt={button.name}
              className="size-12 md:size-16 object-contain select-none"
              draggable="false"
            />
          </motion.span>
        </button>
      );
    });
  }, [radius]);

  return (
    <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative flex items-center justify-center 
                    size-70 sm:size-[240px] md:size-120 p-4 
                    border-2 border-dashed rounded-full border-gray-400/50"
        >
          {buttons}
          <div className="absolute size-16 sm:size-24 bg-transparent" />
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

export default Ring;