import { motion } from "framer-motion";
import { useMemo } from "react";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href, onClick }: { children: string; href?: string; onClick?: () => void }) => {
  // Memoize the split children so it's computed only once
  const splitChildren = useMemo(() => children.split(""), [children]);

  // Define the animation variants once, outside of the render function
  const animationVariants = {
    initial: { y: 0 },
    hovered: { y: "-100%" },
  };

  const reverseAnimationVariants = {
    initial: { y: "100%" },
    hovered: { y: 0 },
  };

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      onClick={onClick}
      className="relative block overflow-hidden whitespace-nowrap text-white font-medium text-lg cursor-pointer"
    >
      <div className="flex">
        {splitChildren.map((l, i) => (
          <motion.span
            key={i}
            variants={animationVariants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {splitChildren.map((l, i) => (
          <motion.span
            key={i}
            variants={reverseAnimationVariants}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
