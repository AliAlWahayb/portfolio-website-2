import React from "react";
import { motion } from "framer-motion";

const CustomCursor: React.FC<{ x: number; y: number }> = (props) => {
  const x = props.x ?? 0;
  const y = props.y ?? 0;


  return (
    <motion.div
      className="hidden md:block absolute ring ring-secondary-base  size-8 rounded-full pointer-events-none z-500"
      style={{
        transform: `translate(-50%, -50%)`, // Center the cursor on the mouse
      }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x - 16, y: y - 16 }} // Subtract half the cursor's size to center it
      transition={{
        type: "spring", // Use spring physics for smooth animation
        stiffness: 500, // Adjust stiffness for faster/slower cursor follow
        damping: 20,    // Adjust damping for smoothness
        mass: 0.2,      // Adjust mass for faster/slower cursor follow
      }}
    >
        <div className="bg-primary-base/60 size-1/2 rounded-full transform translate-x-1/2 translate-y-1/2">

        </div>
    </motion.div>
  );
};

export default CustomCursor;
