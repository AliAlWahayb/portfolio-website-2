import { memo, useState, useEffect, useMemo } from "react";
import { Tooltip } from "react-tooltip";

const buttonData = [
  { name: "React", svg: "/assets/logos/TechStack/react-2.svg" },
  { name: "Docker", svg: "/assets/logos/TechStack/docker-4.svg" },
  { name: "Firebase", svg: "/assets/logos/TechStack/firebase-1.svg" },
  { name: "FastAPI", svg: "/assets/logos/TechStack/fastapi-1.svg" },
  { name: "TypeScript", svg: "/assets/logos/TechStack/typescript.svg" },
];

const RADIUS_DESKTOP = 240;
const RADIUS_MOBILE = 140;

const Ring = memo(() => {
  const [radius, setRadius] = useState(RADIUS_DESKTOP);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setRadius(window.innerWidth < 640 ? RADIUS_MOBILE : RADIUS_DESKTOP);
    };
    handleResize();
    
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const container = document.querySelector('#ring-container');
    if(container) observer.observe(container);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const buttons = useMemo(() => buttonData.map((button, index) => {
    const angle = (2 * Math.PI * index) / buttonData.length;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return (
      <button
        key={button.name}
        data-tooltip-id="SkillTooltip"
        data-tooltip-content={button.name}
        className="absolute rounded-full bg-cover cursor-default border border-gray-400/50 p-0.5 transition-transform duration-500"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        <div className="block size-14 sm:size-18 rounded-full z-2 bg-card-base p-1 animate-[spin-reverse_50s_linear_infinite]">
          <img
            src={button.svg}
            alt={button.name}
            className="size-12 md:size-16 object-contain select-none"
            draggable="false"
            loading="lazy"
          />
        </div>
      </button>
    );
  }), [radius]);

  return (
    <div id="ring-container" className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
      {isVisible && (
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative flex items-center justify-center size-70 sm:size-[240px] md:size-120 p-4 border-2 border-dashed rounded-full border-gray-400/50 animate-spin-slow">
            {buttons}
            <div className="absolute size-16 sm:size-24 bg-transparent" />
          </div>
        </div>
      )}
      <Tooltip
        id="SkillTooltip"
        offset={5}
        variant="light"
        place="top"
        className="!bg-white !text-[#364153] !font-bold !rounded-lg !z-[9999]"
      />
    </div>
  );
});

export default Ring;