import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const getRandomPositionAndRotation = () => {
  const top = `${Math.random() * 100}vh`; // Random position from 0 to 100 viewport height
  const left = `${Math.random() * 50}vw`; // Random position from 0 to 50 viewport width
  const rotation = `${Math.random() * 360}deg`; // Random rotation from 0 to 360 degrees
  return { top, left, rotation };
};

const BgLight: React.FC = () => {
  const animationControls = useAnimation();

  // Function to trigger a new animation with random position/rotation
  const triggerAnimation = () => {
    const newPosition = getRandomPositionAndRotation();
    animationControls.start({
      x: newPosition.left,
      y: newPosition.top,
      rotate: newPosition.rotation,
      transition: {
        duration: 15, // Adjusted for a smoother but slower animation
        ease: "easeInOut",
      },
    });
  };

  useEffect(() => {
    // Start animation loop once the component is mounted
    const interval = setInterval(triggerAnimation, 5000); // Trigger animation every 5 seconds
    triggerAnimation(); // Run the first animation immediately

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency ensures it runs only once

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 -z-10 transform-gpu overflow-hidden blur-3xl will-change-transform"
      animate={animationControls} // Attach Framer Motion controls
      initial={{ x: "50vw", y: "50vh", rotate: "0deg" }} // Initial position/rotation
    >
      <div
        className="relative aspect-1155/678 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
      />
    </motion.div>
  );
};

export default BgLight;
