/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import CoolBtn from "../../Misc/CoolBtn";
import Modal from "./Modal";

function CardCol(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative lg:col-span-2 h-full">
      {/* Wrapper to maintain layout space */}
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        className={` ${
          isExpanded
            ? "fixed inset-0 w-full h-screen z-50 scale-90"
            : "relative lg:col-span-2 h-full"
        }`}
      >
        <div
          className={`absolute inset-px bg-card-base rounded-xl ${props.css} `}
        ></div>

        {!isExpanded ? (
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-5">
              <p className="mt-2 text-lg font-medium tracking-tight text-text-base max-lg:text-center">
                {props.title}
              </p>
              <p className="mt-2  text-sm/6 text-secondary-text-base max-lg:text-center">
                {props.description}
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
              <audio className="w-full max-lg:max-w-xs" controls>
                <source src={props.audioUrl} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <a
              onClick={() => setIsExpanded(true)}
              className="w-fit self-center my-4"
            >
              <CoolBtn text="Learn More" className="bg-card-900" />
            </a>
          </div>
        ) : (
          <Modal onClose={() => setIsExpanded(false)} {...props} />
        )}
      </motion.div>
    </div>
  );
}

export default CardCol;
