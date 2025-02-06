import Card from "./Small/Card";
import { Tooltip } from "react-tooltip";
import { memo, useMemo } from "react";

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
  { name: "Tailwind", svg: "/assets/logos/tailwind-css-1.svg" },
  { name: "javascript", svg: "/assets/logos/logo-javascript.svg" },
];

const StaggeredRowCards = memo(() => {
  const shuffledCards = useMemo(() => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    return shuffled.map((card) => ({
      ...card,
    }));
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-1 md:gap-4 w-3/4 mx-auto">
      {shuffledCards.map((card) => (
        <div
          key={card.name}
          className="w-20 h-20"
          data-tooltip-id="SkillLoopTooltip"
          data-tooltip-content={card.name}
        >
          <div className="animate-float">
            <Card svg={card.svg} alt={card.name} />
          </div>
        </div>
      ))}
      <Tooltip
        id="SkillLoopTooltip"
        offset={10}
        variant="light"
        place="top"
        delayShow={250}
        delayHide={250}
        noArrow
        className="!bg-white !text-[#364153] !font-bold !rounded-lg"
      />
    </div>
  );
});

export default StaggeredRowCards;
