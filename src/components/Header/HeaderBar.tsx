import React, { useState, useCallback } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";
import Headroom from "react-headroom";
import FlipLink from "./Small/FlipLink";

const logo = "/assets/logo.svg";
const links = ["Skills", "Projects", "TimeLine"];

const MemoFlipLink = React.memo(FlipLink);

export default function StackedNavbars() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Memoize handleScroll to avoid re-creating the function on each render
  const handleScroll = useCallback((id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  

  return (
    <Headroom
      className="relative z-50"
      style={{ transition: "transform .3s ease-in-out" }}
      pinStart={100}
    >
      <div className="mt-3 flex justify-center">
        <nav className="w-[90%] md:w-[70%] bg-black/30 backdrop-blur-lg rounded-2xl shadow-xl flex items-center justify-between px-6 py-3 border border-white/10 relative overflow-hidden">
          {/* Glow effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20 animate-pulse" />

          {/* Mobile Logo */}
          <div
            className="text-white cursor-pointer md:hidden"
            onClick={() => handleScroll("Hero")}
          >
            <img src={logo} alt="logo" className="w-10" />
          </div>

          {/* Desktop Left Section */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <MemoFlipLink key={link} onClick={() => handleScroll(link)}>
                {link}
              </MemoFlipLink>
            ))}
          </div>

          {/* Desktop Center Logo */}
          <div
            className="hidden md:block cursor-pointer"
            onClick={() => handleScroll("Hero")}
          >
            <img src={logo} alt="logo" className="w-10 " loading="lazy" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto z-50">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white text-2xl hover:drop-shadow-glow transition-all"
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <DialogPanel
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg p-6"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex justify-between items-center mb-8">
            <img
              src={logo}
              alt="logo"
              className="w-10"
              loading="lazy"
              onClick={() => handleScroll("Hero")}
            />
            <button
              className="text-white text-2xl hover:drop-shadow-glow"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HiMiniXMark />
            </button>
          </div>

          <nav className="grid gap-4">
            {links.map((link) => (
              <MemoFlipLink
                key={link}
                onClick={() => {
                  handleScroll(link);
                  setMobileMenuOpen(false); // Close the menu after click
                }}
              >
                {link}
              </MemoFlipLink>
            ))}
          </nav>
        </DialogPanel>
      </Dialog>
    </Headroom>
  );
}
