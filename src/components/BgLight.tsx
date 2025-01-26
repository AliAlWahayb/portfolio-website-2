import React from "react";
import { motion, useAnimation } from "framer-motion";

const getRandomPositionAndRotation = () => {
  const top = `${Math.random() * 100}vh`;
  const left = `${Math.random() * 50}vw`;
  const rotation = `${Math.random() * 360}deg`;
  return { top, left, rotation };
};

const BgLight: React.FC = () => {
  const animationControls = useAnimation();

  // Initial random position and rotation
  const { top, left, rotation } = getRandomPositionAndRotation();

  // Function to trigger a new animation with random position/rotation
  const triggerAnimation = async () => {
    const newPosition = getRandomPositionAndRotation();
    await animationControls.start({
      top: newPosition.top,
      left: newPosition.left,
      rotate: newPosition.rotation,
      transition: { duration: 10, ease: "easeInOut" }, // Smooth animation
    });
    triggerAnimation(); // Repeat the animation
  };

  // Start animation on component mount
  React.useEffect(() => {
    triggerAnimation();
  });

  return (
    <motion.div
      aria-hidden="true"
      className="absolute -z-10 transform-gpu overflow-hidden blur-3xl"
      animate={animationControls} // Attach Framer Motion controls
      initial={{ top, left, rotate: rotation }} // Initial position/rotation
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
      />
    </motion.div>
  );
};

export default BgLight;
