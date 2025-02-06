import { lazy, Suspense, memo } from "react";
import Ring from "./Ring";
import SkillsLoop from "./SkillsLoop";
const Spline = lazy(() => import('@splinetool/react-spline'));

const Skills = memo(() => (
  <div className="flex flex-col h-full w-full pb-70">
    <p className="-mb-30 mx-auto mt-5 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-text-base sm:text-5xl">
      Tech Stack
    </p>
    <div className="relative flex items-center justify-center h-full w-full overflow-hidden z-2">
      <Ring />
      <Suspense fallback={<div className="absolute inset-0 bg-gray-100/10 animate-pulse" />}>
        <Spline
          scene="/assets/scene.splinecode"
          className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center"
        />
      </Suspense>
    </div>
    <div className="-mt-15 z-0">
      <p className="mb-10 mx-auto mt-5 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-secondary-text-base sm:text-5xl">
        Additional Technologies
      </p>
      <SkillsLoop />
    </div>
  </div>
));

export default Skills;