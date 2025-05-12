import { memo } from 'react';

interface CustomCursorProps {
  x: number;
  y: number;
}

const CustomCursor = memo(({ x, y }: CustomCursorProps) => {
  return (
    <div
      className="hidden md:block absolute ring ring-secondary-base size-8 rounded-full pointer-events-none z-[500] transform-gpu"
      style={{
        transform: `translate3d(${x - 16}px, ${y - 16}px, 0)`,
      }}
    >
      <div className="bg-primary-base/60 size-1/2 rounded-full transform translate-x-1/2 translate-y-1/2" />
    </div>
  );
});

export default CustomCursor;