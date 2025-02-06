import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';

const Footer = memo(() => {
  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.3 }}
      className="relative h-40 flex items-start px-4 md:justify-center"
    >
      <div className="absolute left-7 md:left-1/2 top-0 h-3/4 w-1 bg-primary-base transform md:-translate-x-1/2" />
      <div className="absolute left-7 md:left-1/2 top-3/4 w-full h-1 bg-primary-base transform md:-translate-x-1/2">
        <div className="text-sm -mt-6 -ms-5 text-white font-bold text-center md:ml-6 md:text-left md:text-base">
          Copyright © {new Date().getFullYear()} AliAlWahayb - All rights reserved.
          <button
            className="underline cursor-pointer ms-2 mt-4 md:mt-0 hidden md:inline"
            onClick={() => handleScroll("rootPage")}
            aria-label="Scroll to top"
          >
            Back to the top
          </button>
        </div>
      </div>
    </motion.div>
  );
});

export default Footer;
