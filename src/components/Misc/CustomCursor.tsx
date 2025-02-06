import { memo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  x: number;
  y: number;
}

const CustomCursor = memo(({ x, y }: CustomCursorProps) => {
  const prevPos = useRef({ x: 0, y: 0 });
  const updateInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const updatePosition = () => {
      prevPos.current = { x, y };
    };
    
    updateInterval.current = setInterval(updatePosition, 16);
    return () => clearInterval(updateInterval.current);
  }, [x, y]);

  return (
    <motion.div
      className="hidden md:block absolute ring ring-secondary-base size-8 rounded-full pointer-events-none z-[500] transform-gpu"
      style={{
        transform: `translate3d(${prevPos.current.x - 16}px, ${prevPos.current.y - 16}px, 0)`,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.2,
      }}
    >
      <div className="bg-primary-base/60 size-1/2 rounded-full transform translate-x-1/2 translate-y-1/2" />
    </motion.div>
  );
});

export default CustomCursor;