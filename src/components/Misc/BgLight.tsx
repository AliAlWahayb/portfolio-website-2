import React, { useEffect, useRef } from "react";

const getRandomPositionAndRotation = () => {
  const top = `${Math.random() * 100}vh`; // Random position from 0 to 100 viewport height
  const left = `${Math.random() * 50}vw`; // Random position from 0 to 50 viewport width
  const rotation = `${Math.random() * 360}deg`; // Random rotation from 0 to 360 degrees
  return { top, left, rotation };
};

const BgLight: React.FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);

  const triggerAnimation = () => {
    const newPosition = getRandomPositionAndRotation();
    if (bgRef.current) {
      bgRef.current.style.transition = "transform 15s ease-in-out"; // Set transition for smooth animation
      bgRef.current.style.transform = `translate(${newPosition.left}, ${newPosition.top}) rotate(${newPosition.rotation})`;
    }

    // Request the next frame after the current one ends
    requestAnimationFrame(() => triggerAnimation());
  };

  // Start animation on component mount
  useEffect(() => {
    triggerAnimation(); // Start the animation loop
  }, []); // Empty dependency array ensures it runs only once when mounted

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 transform-gpu overflow-hidden blur-3xl will-change-transform"
    >
      <div
        ref={bgRef}
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className="relative aspect-1155/678 w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
      />
    </div>
  );
};
{/* drop */}

export default BgLight;
