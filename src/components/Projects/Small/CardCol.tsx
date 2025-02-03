/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion } from "framer-motion";
import CoolBtn from "../../Misc/CoolBtn";
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
              <p className="mt-2 text-lg font-medium tracking-tight text-text-base max-lg:text-center">
                {props.title}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-secondary-text-base max-lg:text-center">
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
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-50 p-2 bg-background-base rounded-full shadow-md cursor-pointer hover:bg-gray-200 transition"
                onClick={() => setIsExpanded(false)}
              >
                <IoCloseSharp size={24} />
              </button>

              {/* Title & Description */}
              <div className="px-6 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0 text-center lg:text-left">
                <p className="text-3xl font-medium tracking-tight text-text-base">
                  {props.lgTitle}
                </p>
                <p className="mt-2 max-w-lg mx-auto lg:mx-0 text-xl text-secondary-text-base">
                  {props.lgDescription}
                </p>
              </div>

              {/* Image Container */}
              <div className="relative min-h-[30rem] w-full flex justify-center px-6 lg:px-10">
                {Array.isArray(props.lgImageUrl) ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {props.lgImageUrl.map(
                      (image: string | undefined, index: number) => (
                        <img
                          key={index}
                          className="w-full max-w-[500px] h-auto lg:h-[300px] object-cover rounded-lg"
                          src={image}
                          alt={
                            props.lgImageAlt?.[index] || `Image ${index + 1}`
                          }
                        />
                      )
                    )}
                  </div>
                ) : (
                  <img
                    className="w-full  h-auto md:my-10 object-cover rounded-lg"
                    src={props.lgImageUrl}
                    alt={props.lgImageAlt || "Image"}
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
