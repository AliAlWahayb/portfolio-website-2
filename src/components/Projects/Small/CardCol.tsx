/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import CoolBtn from "./CoolBtn";
import { IoCloseSharp } from "react-icons/io5";

function CardCol(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative lg:col-span-2">
      {/* Wrapper to maintain layout space */}
      <motion.div
        layout
        transition={{ duration: 0.3 }}
        className={` ${
          isExpanded
            ? "fixed inset-0 w-full h-screen z-50 scale-90"
            : "relative lg:col-span-2"
        }`}
      >
        <div
          className={`absolute inset-px bg-card-base rounded-xl ${props.css} `}
        ></div>

        {!isExpanded ? (
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-t-[calc(2rem+1px)]">
            <div className="px-8 pt-5 sm:px-10 sm:pt-5">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-900 max-lg:text-center">
                {props.title}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-500 max-lg:text-center">
                {props.description}
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
              <img
                className="w-full max-lg:max-w-xs"
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
          <>
            <button
              className="absolute top-4 right-4 p-2 bg-background-base rounded-full shadow-md z-101 cursor-pointer hover:bg-gray-200 transition"
              onClick={() => setIsExpanded(false)}
            >
              <IoCloseSharp size={24} />
            </button>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-3xl font-medium tracking-tight text-gray-900 max-lg:text-center">
                  {props.lgTitle}
                </p>
                <p className="mt-2 max-w-xl text-sm/6 text-gray-500 max-lg:text-center">
                  {props.lgDescription}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
                {Array.isArray(props.lgImageUrl) ? (
                  <div className="grid grid-cols-2 gap-4 p-10">
                    {props.lgImageUrl.map(
                      (image: string | undefined, index: any) => (
                        <img
                          key={index}
                          className="w-full object-cover rounded-lg"
                          src={image}
                          alt={props.lgImageAlt?.[index] || "Image"}
                        />
                      )
                    )}
                  </div>
                ) : (
                  <img
                    className="w-full object-cover p-10"
                    src={props.lgImageUrl}
                    alt={props.lgImageAlt}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default CardCol;
