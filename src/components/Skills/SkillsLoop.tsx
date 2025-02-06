import { motion } from "framer-motion";
import Card from "./Small/Card";
import { Tooltip } from "react-tooltip";
import { useMemo } from "react";

// Static data and functions moved outside component
const cards = [
  { name: "C++", svg: "/assets/logos/c.svg" },
  { name: "Vue.js", svg: "/assets/logos/vue-9.svg" },
  { name: "Java", svg: "/assets/logos/java.svg" },
  { name: "GitHub", svg: "/assets/logos/github-icon-1.svg" },
  { name: "Prolog", svg: "/assets/logos/prolog-svgrepo-com.svg" },
  { name: "PyQt", svg: "/assets/logos/qt-1.svg" },
  { name: "SQL", svg: "/assets/logos/mysql-logo-pure.svg" },
  { name: "Figma", svg: "/assets/logos/figma-icon.svg" },
  { name: "Git", svg: "/assets/logos/git-bash.svg" },
  { name: "Bootstrap", svg: "/assets/logos/bootstrap-5-1.svg" },
  { name: "Framer-Motion", svg: "/assets/logos/framer-motion.svg" },
  { name: "Tailwind", svg: "/assets/logos/tailwind-css-1.svg" },
  { name: "javascript", svg: "/assets/logos/logo-javascript.svg" },
];

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

const StaggeredRowCards: React.FC = () => {
  const shuffledCards = useMemo(() => {
    const shuffled = shuffleArray(cards);
    return shuffled.map((card) => ({
      ...card,
      duration: getRandomNumber(7, 10),
    }));
  }, []);

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true, margin: "100px" }}
      className="flex flex-wrap justify-center items-center gap-1 md:gap-4 w-3/4 mx-auto"
    >
      {shuffledCards.map((card) => (
        <motion.div
          key={card.name}
          variants={{
            initial: {
              y: 100,
              opacity: 0,
              scale: 0.8,
            },
            whileInView: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 10,
                when: "beforeChildren",
              },
            },
          }}
          className="w-20 h-20"
          data-tooltip-id="SkillLoopTooltip"
          data-tooltip-content={card.name}
        >
          <motion.div
            initial={{ translateY: -10 }}
            animate={{ translateY: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: card.duration,
              delay: 3,
            }}
            style={{ willChange: "transform" }}
          >
            <Card svg={card.svg} alt={card.name} />
          </motion.div>
        </motion.div>
      ))}
      <Tooltip
        id="SkillLoopTooltip"
        offset={10}
        variant="light"
        place="top"
        delayShow={250}
        delayHide={250}
        noArrow
        style={{
          background: "#fff",
          color: "#364153",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      />
    </motion.div>
  );
};

export default StaggeredRowCards;
