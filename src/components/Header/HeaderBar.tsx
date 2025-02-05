"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import Headroom from "react-headroom";
import FlipLink from "./Small/FlipLink";


const logo = "/assets/logo.svg";
const links = ["Skills", "Projects", "TimeLine"];

export default function StackedNavbars() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Headroom
      className="relative z-100"
      style={{
        transition: "transform .5s ease-in-out",
      }}
    >
      {!mobileMenuOpen && (
        <div className="mt-3 flex justify-center">
          {/* Top Navbar */}
          <nav className="absolute w-[90%] md:w-[70%] bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg flex items-center justify-between px-6 py-3">
            {/* Center Logo (Mobile) */}
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-white text-xl font-bold md:hidden cursor-pointer"
              onClick={() => handleScroll("Hero")}
            >
              <img src={ logo } alt="logo" className="w-10"/>
              </motion.div>

            {/* Mobile: Hamburger Menu (Flipped to Right) */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white text-2xl"
              >
                <FaBars />
              </button>
            </div>

            {/* Left Section (Desktop) */}
            <div className="hidden md:flex space-x-6">
              {links.map((link) => (
                <FlipLink key={link} onClick={() => handleScroll(link)}>
                  {link}
                </FlipLink>
              ))}
            </div>

            {/* Center Logo (Desktop Only) */}
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 1 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="hidden md:block text-white text-xl font-bold cursor-pointer"
              onClick={() => handleScroll("Hero")}
            >
              <img src={ logo } alt="logo" className="w-10"/>
              </motion.div>

            {/* Right Section */}
            <div className="hidden md:hidden space-x-4 items-center">
              <a
                href="#"
                className="text-white font-medium hover:text-gray-300"
              >
                Sign in
              </a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
                Try free
              </button>
            </div>
          </nav>

          {/* Second Navbar */}
          <nav className="w-[90%] md:w-[70%] bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg flex items-center justify-between px-6 py-3 border border-white/10">
            {/* Center Logo (Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 1, x: -100, y: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-white text-xl font-bold md:hidden cursor-pointer"
              onClick={() => handleScroll("Hero")}
            >
              <img src={ logo } alt="logo" className="w-10"/>
              </motion.div>

            {/* Mobile: Hamburger Menu (Flipped to Right) */}
            <div className="md:hidden ml-auto">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-white text-2xl "
              >
                <FaBars />
              </button>
            </div>

            {/* Left Section (Desktop) */}
            <div className="hidden md:flex space-x-6">
              {links.map((link) => (
                <FlipLink key={link} onClick={() => handleScroll(link)}>
                  {link}
                </FlipLink>
              ))}
            </div>

            {/* Center Logo (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, scale: 1, x: -100, y: -100 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="hidden md:block text-white text-xl font-bold cursor-pointer"
              onClick={() => handleScroll("Hero")}
            >
              <img src={ logo } alt="logo" className="w-10"/>
            </motion.div>

            {/* Right Section (Desktop) */}
            <div className="hidden md:hidden  space-x-4 items-center">
              <a
                href="#"
                className="text-white font-medium hover:text-gray-300"
              >
                Sign in
              </a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
                Try free
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 z-50 bg-transparent" />{" "}
        {/* More Transparent */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-xs bg-black/70 backdrop-blur-lg px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo (Flipped to Left) */}
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white text-xl font-bold cursor-pointer"
              onClick={() => handleScroll("Hero")}
            >
              <img src={ logo } alt="logo" className="w-10"/>
              </motion.div>

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl"
            >
              <HiMiniXMark />
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 space-y-4">
            {links.map((link) => (
              <FlipLink key={link} onClick={() => handleScroll(link)}>
                {link}
              </FlipLink>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 hidden">
            <a
              href="#"
              className="block text-white font-medium hover:text-gray-300"
            >
              Sign in
            </a>
            <button className="mt-3 w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
              Try free
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </Headroom>
  );
}
