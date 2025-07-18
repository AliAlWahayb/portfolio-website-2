import React, {  useMemo, useReducer } from "react";
import BgLight from "../Misc/BgLight";
import SvgIcon from "./Small/SvgIcon";
import { PiGithubLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import { Tooltip } from "react-tooltip";
import CoolBtn from "../Misc/CoolBtn";

// State reducer for typed completion tracking
const typedReducer = (state: number, action: 'SECOND' | 'THIRD') => {
  switch(action) {
    case 'SECOND': return Math.max(state, 1);
    case 'THIRD': return Math.max(state, 2);
    default: return state;
  }
};

const Hero: React.FC = React.memo(() => {
  const [typedState, dispatchTyped] = useReducer(typedReducer, 0);

  // Memoized tooltip style
  const tooltipStyle = useMemo(() => ({
    background: "#fff",
    color: "#364153",
    fontWeight: "bold",
    borderRadius: "8px",
  }), []);

  // Memoized draggable content


  // Memoized typed components
  const MainTyped = useMemo(() => (
    <ReactTyped
      strings={["Ali AlWahayb"]}
      startDelay={500}
      typeSpeed={40}
      showCursor={false}
      className="text-5xl font-semibold tracking-tight text-balance text-text-base sm:text-7xl"
      onComplete={() => dispatchTyped('SECOND')}
    />
  ), []);

  const SecondaryTyped = useMemo(() => (
    <ReactTyped
      strings={["Ali, a Computer Science student at Imam Abdulrahman Bin Faisal University, Interested in "]}
      typeSpeed={40}
      showCursor={false}
      className="mt-8 text-lg font-medium text-pretty text-secondary-text-base sm:text-xl/8 me-1"
      onComplete={() => dispatchTyped('THIRD')}
    />
  ), []);

  const TertiaryTyped = useMemo(() => (
    <ReactTyped
      strings={[" Web development.", " Self-hosting ", " Text to Speech ", " Apps development ", " Machine learning "]}
      typeSpeed={40}
      backSpeed={40}
      loop
      className="mt-8 text-lg font-medium text-pretty text-secondary-text-base sm:text-xl/8"
    />
  ), []);

  return (
    <div className="mt-25 relative isolate px-6 lg:px-8" id="DragArea">
      <BgLight />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-18">
        <div className="text-center select-none">
          <div className="min-h-60">
            {(MainTyped)}
            <div className="mt-6">
              {typedState >= 1 && (
                <>
                  {SecondaryTyped}
                  {typedState >= 2 && TertiaryTyped}
                </>
              )}
            </div>
          </div>
          
          <div
            
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <SvgIcon
              name="Github"
              link="https://github.com/AliAlWahayb"
              icon={<PiGithubLogoBold className="size-8" />}
            />
            <SvgIcon
              name="Email"
              email="alialwahayb@outlook.com"
              icon={<HiOutlineMail className="size-8" />}
            />
            <SvgIcon
              name="Linkedin"
              link="https://www.linkedin.com/in/alialwahayb"
              icon={<TfiLinkedin className="size-8" />}
            />
          </div>

          <div
            
            className="flex items-center justify-center mx-auto max-w-2xl sm:mt-16"
          >
            <a
              href="src/assets/Ali AlWahayb.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="my-7 md:-my-5"
            >
              <CoolBtn text="Open CV" className="bg-card-900" />
            </a>
          </div>
        </div>
      </div>
      <BgLight />
      <Tooltip
        id="DragTooltip"
        float
        noArrow
        content="Drag me!"
        variant="light"
        offset={10}
        place="top"
        delayShow={250}
        delayHide={250}
        style={tooltipStyle}
      />
    </div>
  );
});

export default Hero;
