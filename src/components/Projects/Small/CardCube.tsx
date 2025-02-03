/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useState } from "react";
import CoolBtn from "../../Misc/CoolBtn";
import Modal from "./Modal";

function CardCube(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative h-full">
      {/* Added parent wrapper */}
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        className={`  ${
          isExpanded
            ? "fixed inset-0 w-full h-screen z-50 scale-90"
            : "relative h-full"
        }`}
      >
        <div
          className={`absolute inset-px bg-card-base rounded-xl ${props.css} `}
        ></div>

        {!isExpanded ? (
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-5 sm:px-10 sm:pt-5">
              <p className="mt-2 text-lg font-medium tracking-tight text-text-base">
                {props.title}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-secondary-text-base">
                {props.description}
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
              <img
                className="w-full object-cover"
                src={props.imageUrl}
                alt={props.imageAlt}
              />
            </div>
            <button
              onClick={() => setIsExpanded(true)}
              className="w-fit self-center my-4"
            >
              <CoolBtn text="Learn More" />
            </button>
          </div>
        ) : (
          <Modal onClose={() => setIsExpanded(false)} {...props} />
        )}
      </motion.div>
    </div>
  );
}

export default CardCube;
