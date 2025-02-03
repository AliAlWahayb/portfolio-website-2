import React from "react";
import { motion } from "framer-motion";

const ComponentTemplate: React.FC = () => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}

     className=" relative h-40 flex items-start px-4 md:justify-center">
      {/* Vertical Line - Start in Small Screens, Centered in md: */}
      <div className="absolute left-9.25 md:left-1/2 top-0 h-3/4 w-1 bg-primary-base transform md:-translate-x-1/2"></div>

      {/* Horizontal Line - Starts from Left on Small Screens, Centered in md: */}
      <div className="absolute left-9.25 md:left-1/2 top-3/4 w-full h-1 bg-primary-base transform md:-translate-x-1/2">
        <div className="-ml-40 -mt-6 text-white font-bold text-center md:ml-6 md:text-left">
          Copyright © {new Date().getFullYear()} AliAlWahayb - All rights
          reserved.
          <button
            className="underline cursor-pointer ms-2"
            onClick={() => handleScroll("rootPage")}
          >
            Back to the top
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ComponentTemplate;
