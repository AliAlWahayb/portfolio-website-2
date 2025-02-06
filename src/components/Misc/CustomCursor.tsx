import { memo, useState, useEffect } from 'react';

interface CustomCursorProps {
  x: number;
  y: number;
}

const CustomCursor = memo(({ x, y }: CustomCursorProps) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Use requestAnimationFrame to update cursor position efficiently
    const updatePosition = () => {
      setCursorPos({ x, y });
      requestAnimationFrameId = requestAnimationFrame(updatePosition);
    };
    
    // Start updating the position with requestAnimationFrame
    let requestAnimationFrameId = requestAnimationFrame(updatePosition);
    
    return () => {
      // Clean up when the component unmounts
      cancelAnimationFrame(requestAnimationFrameId);
    };
    

  }, [x, y]);

  return (
    <div
      className="hidden md:block absolute ring ring-secondary-base size-8 rounded-full pointer-events-none z-[500] transform-gpu"
      style={{
        transform: `translate3d(${cursorPos.x - 16}px, ${cursorPos.y - 16}px, 0)`,
      }}
      
    >
      <div className="bg-primary-base/60 size-1/2 rounded-full transform translate-x-1/2 translate-y-1/2" />
    </div>
  );
});

export default CustomCursor;
