import React, { useEffect, useRef, useState } from "react";

const Eyes: React.FC = () => {
  const [, setEyePos] = useState({
    left: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
  });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);

      animationFrameId.current = requestAnimationFrame(() => {
        const eyeRadius = 20; // Max movement of pupils
        const leftEye = {
          x: window.innerWidth / 2 - 50,
          y: window.innerHeight / 2,
        };
        const rightEye = {
          x: window.innerWidth / 2 + 50,
          y: window.innerHeight / 2,
        };

        const getEyeOffset = (eye: { x: number; y: number }) => {
          const dx = event.clientX - eye.x;
          const dy = event.clientY - eye.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);
          const limitedDistance = Math.min(eyeRadius, distance);
          return {
            x: Math.cos(angle) * limitedDistance,
            y: Math.sin(angle) * limitedDistance,
          };
        };

        setEyePos({
          left: getEyeOffset(leftEye),
          right: getEyeOffset(rightEye),
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {["left", "right"].map((eye) => (
        <div
          key={eye}
          className="relative w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center mx-4"
        >
          <div className="w-10 h-10 bg-black rounded-full" />
        </div>
      ))}
    </div>
  );
};

export default Eyes;
