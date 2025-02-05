/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import CoolBtn from "../../Misc/CoolBtn";
import Modal from "./Modal";

function CardRow(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative lg:row-span-2 h-full">
      {/* Added a wrapper to maintain layout space */}
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        className={` ${
          isExpanded
            ? "fixed inset-0 w-full h-screen z-50 scale-90"
            : "relative lg:row-span-2 h-full"
        }`}
      >
        <div
          className={`absolute inset-px bg-card-base rounded-xl ${props.css} `}
        ></div>

        {!isExpanded ? (
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div className="px-8 pt-5 pb-3 sm:px-10 sm:pt-5 sm:pb-0">
              <p className="mt-2 text-lg font-medium tracking-tight text-text-base max-lg:text-center">
                {props.title}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-secondary-text-base max-lg:text-center">
                {props.description}
              </p>
            </div>
            <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
              <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-xl bg-gray-900 shadow-2xl">
                <img
                  className="size-full object-cover object-top"
                  src={props.imageUrl}
                  alt={props.imageAlt}
                />
              </div>
            </div>
            <a
              onClick={() => setIsExpanded(true)}
              className="w-fit self-center my-4"
            >
              <CoolBtn text="Learn More" />
            </a>
          </div>
        ) : (
         <Modal onClose={() => setIsExpanded(false)} {...props} />
        )}
      </motion.div>
    </div>
  );
}

export default CardRow;
