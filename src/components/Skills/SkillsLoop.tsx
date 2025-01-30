import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Card from "./Small/Card";

const RectangularMotionCards: React.FC = () => {
  const cards = [
    { svg: "src/assets/arrow.svg", alt: "arrow" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [moveX, setMoveX] = useState(1150);
  const moveY = 150;
  const duration = cards.length * 2;
  const delay = duration / cards.length;
  const marginX = 100;

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setMoveX(containerRef.current.clientWidth - marginX * 2);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const pathVariants = (index: number) => ({
    x: [marginX, moveX, moveX, marginX, marginX],
    y: [0, 0, moveY, moveY, 0],
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: ["linear", "anticipate", "linear", "anticipate"],
      delay: index * delay,
      times: [0, 0.45, 0.5, 0.95, 1],
    },
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full border border-gray-300 p-4"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          animate={pathVariants(index)}
          className="absolute z-10"
        >
          <Card
            svg={card.svg}
            alt={card.alt}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default RectangularMotionCards;
