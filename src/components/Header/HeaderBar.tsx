import { motion } from "framer-motion";
import { useState } from "react";
import Headroom from "react-headroom";

const links = ["Products", "History", "Contact"];

export default function StackedNavbars() {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => setIsLaunching(false), 1500); // Reset after animation
  };

  return (
    <Headroom
      className="relative z-100 "
      style={{
        transition: "transform .5s ease-in-out",
      }}
    >
      <div className="mt-3 flex justify-center">
        <nav className="absolute  w-[90%] md:w-[70%] bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg flex items-center justify-between px-6 py-3">
          {/* Left Section */}
          <div className="flex space-x-6">
            {links.map((link) => (
              <a
                href={link}
                className="text-white font-medium hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <motion.div
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-white text-xl font-bold"
          >
            logo.
          </motion.div>

          {/* Right Section */}
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Sign in
            </a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
              Try free
            </button>
          </div>
        </nav>
        {/* second nav */}
        <nav className=" w-[90%] md:w-[70%] bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg flex items-center justify-between px-6 py-3 border border-white/10">
          {/* Left Section */}
          <div className="flex space-x-6">
            {links.map((link) => (
              <a
                href={link}
                className="text-white font-medium hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -100, y: -100 }}
            animate={
              isLaunching
                ? {
                    opacity: 1,
                    scale: 1.2,
                    x: [0, 100, -100, 100, -100, 0],
                    y: [0, 100, -100, 100, -100, 0],
                  }
                : { opacity: 1, scale: 1, x: 0, y: 0 }
            }
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-white text-xl font-bold"
          >
            logo.
          </motion.div>

          {/* Right Section */}
          <div className="flex space-x-4 items-center">
            <a href="#" className="text-white font-medium hover:text-gray-300">
              Sign in
            </a>
            <button
              onClick={handleLaunch}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700"
            >
              Try free
            </button>
          </div>
        </nav>
      </div>
    </Headroom>
  );
}
