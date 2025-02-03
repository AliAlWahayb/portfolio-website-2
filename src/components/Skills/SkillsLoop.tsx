import { motion } from "framer-motion";
import Card from "./Small/Card";
import { Tooltip } from "react-tooltip";

const StaggeredRowCards: React.FC = () => {
  const cards = [
    { svg: "src/assets/arrow.svg", alt: "arrow" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/arrow.svg", alt: "arrow" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
    { svg: "src/assets/tailwind.svg", alt: "tailwind" },
  ];
  function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-wrap justify-center items-center gap-1 md:gap-4 w-3/4 mx-auto"
    >
      {cards.map((card, index) => (
        <motion.div
          variants={{
            initial: {
              y: index > cards.length / 2 ? 100 : -100,
              opacity: 0,
              scale: 0.8,
            },
            whileInView: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: { when: "beforeChildren" },
            },
          }}
          key={index}
          className="w-20 h-20 "
          data-tooltip-id="SkillLoopTooltip"
          data-tooltip-content={
            card.alt.charAt(0).toUpperCase() + card.alt.slice(1)
          }
        >
          <motion.div
            initial={{ translateY: -10 }}
            animate={{ translateY: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse",
              duration: getRandomNumber(7, 10),
              when: "afterChildren",
              delay: 3,
            }}
          >
            <Card svg={card.svg} alt={card.alt} />
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
        noArrow={true}
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
