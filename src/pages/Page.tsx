import { useRef, useCallback, memo } from "react";
import HeaderBar from "../components/Header/HeaderBar";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import TimeLine from "../components/TimeLine/TimeLine";
import CustomCursor from "../components/Misc/CustomCursor";
import useMouse from "@react-hook/mouse-position";

const Page = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 30
  });

  const MemoizedCursor = useCallback(() => (
    <CustomCursor x={mouse.x ?? 0} y={mouse.y ?? 0} />
  ), [mouse.x, mouse.y]);

  return (
    <div
      ref={ref}
      className="bg-background-base overflow-hidden cursor-follow relative"
      id="rootPage"
    >
      {(mouse.x && mouse.y) && <MemoizedCursor />}
      <HeaderBar />
      <div className="min-h-screen" id="Hero">
        <Hero />
      </div>
      <div className="min-h-screen" id="Skills">
        <Skills />
      </div>
      <div className="min-h-screen mb-25" id="Projects">
        <Projects />
      </div>
      <div className="flex flex-col min-h-screen" id="TimeLine">
        <TimeLine />
        {/* <Footer/> */}
      </div>
    </div>
  );
});

export default Page;