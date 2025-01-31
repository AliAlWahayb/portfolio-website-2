import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Card from "./Small/Card";

const RectangularMotionCards: React.FC = () => {
  // Define a smaller set of unique card data to avoid repetition
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
  ].reverse();


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
    x: [marginX * (index + 1), moveX, moveX, marginX, marginX, marginX * (index + 1) ],
    y: [0, 0, moveY, moveY, 0, 0],
    transition: {
      repeat: Infinity,
      duration: duration,
      ease: "linear",
      delay: (cards.length - 1 - index) * delay,
      times: [0, 0.25, 0.30, 0.70, 0.75, 1],
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
          style={{ position: "absolute" }}
        >
          <Card svg={card.svg} alt={card.alt} />
        </motion.div>
      ))}
    </div>
  );
};

export default RectangularMotionCards;
