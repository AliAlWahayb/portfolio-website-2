import { motion } from "framer-motion";
import Card from "./Small/Card";
import { Tooltip } from "react-tooltip";
import { useMemo } from "react";




const StaggeredRowCards: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shuffleArray = (array: any[]) => {
    return array
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((item: any) => ({ item, sort: Math.random() }))
      .sort((a: { sort: number; }, b: { sort: number; }) => a.sort - b.sort)
      .map(({ item }) => item);
  };

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

  const shuffledCards = useMemo(() => shuffleArray(cards), []);


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
      {shuffledCards.map((card, index) => (
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
            card.name.charAt(0).toUpperCase() + card.name.slice(1)
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
