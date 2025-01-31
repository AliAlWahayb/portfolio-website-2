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
  ].reverse();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [moveX, setMoveX] = useState(1150);
  const moveY = 150;
  const duration = 50; // Set a fixed duration for smoother timing
  const marginX = 100;

  // Update container dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setMoveX(containerRef.current.clientWidth - marginX * 2);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [cards.length, marginX]); // Added dependencies

  // Helper function to calculate the path variants
  const pathVariants = (index: number) => {
    const halfLength = cards.length / 2;
    const isSecondRow = index >= halfLength;

    // Adjust x and y paths to be consistent for synchronization
    const xAnimation = isSecondRow
      ? [
          marginX * (index + 1),
          marginX,
          marginX,
          moveX,
          moveX,
          marginX * (index + 1),
        ]
      : [
          marginX * (index + 1),
          moveX,
          moveX,
          marginX,
          marginX,
          marginX * (index + 1),
        ];

    const yAnimation = isSecondRow
      ? [moveY, moveY, 0, 0, moveY, moveY]
      : [0, 0, moveY, moveY, 0, 0];

    const delay = isSecondRow
      ? index 
      : (cards.length - index); // Reverse delay for the first row

    return {
      x: xAnimation,
      y: yAnimation,
      transition: {
        repeat: Infinity,
        duration: duration,
        ease: ["linear", "easeIn","linear", "easeIn"],
        delay: delay,
        times: [0, 0.25, 0.3, 0.7, 0.75, 1],
      },
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full "
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          animate={pathVariants(index)}
          className="absolute" // Moved inline style to className for clarity
        >
          <Card svg={card.svg} alt={card.alt} />
        </motion.div>
      ))}
    </div>
  );
};

export default RectangularMotionCards;
