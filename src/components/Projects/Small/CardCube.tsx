/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useState } from "react";
import CoolBtn from "./CoolBtn";
import { IoCloseSharp } from "react-icons/io5";

function CardCube(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={` ${props.css} ${
        isExpanded
          ? " fixed inset-0 w-full h-screen z-100 scale-80"
          : "relative"
      }`}
    >
      {!isExpanded && (
        <>
          <div className="absolute inset-px bg-card-base"></div>
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-5 sm:px-10 sm:pt-5">
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                {props.title}
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-500">
                {props.description}
              </p>
            </div>
            <div className=" flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
              <img
                className="w-full object-cover"
                src={props.imageUrl}
                alt={props.imageAlt}
              />
            </div >
            <button onClick={() => setIsExpanded(true)}  className=" w-fit self-center my-4 "><CoolBtn text="Learn More" /></button>
          </div>
          <div className="pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5"></div>
        </>
      )}
      {isExpanded && (
        <>
          <div className="absolute inset-px bg-card-base "></div>
          <button
                className="absolute top-4 right-4 p-2 bg-background-base rounded-full shadow-md z-101 cursor-pointer hover:bg-gray-200 transition"
                onClick={() => setIsExpanded(false)}
              >
                <IoCloseSharp  size={24} />
              </button>
          <div className="relative flex h-full flex-col overflow-hidden">
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
              <p className="mt-2 text-3xl font-medium tracking-tight text-gray-900">
                {props.lgTitle}
              </p>
              <p className="mt-2 max-w-lg text-xl/6 text-gray-500">
                {props.lgDescription}
              </p>
            </div>
            <div className="flex flex-1 items-center justify-center px-8 max-lg:py-6 sm:px-10 lg:pb-2">
              {Array.isArray(props.lgImageUrl) ? (
                // Multiple Images: Grid Layout
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
                // Single Image: Display Normally
                <img
                  className="w-full object-cover p-10"
                  src={props.lgImageUrl}
                  alt={props.lgImageAlt}
                />
              )}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5"></div>
        </>
      )}
    </motion.div>
  );
}

export default CardCube;
