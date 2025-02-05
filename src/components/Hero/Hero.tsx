/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import BgLight from "../Misc/BgLight";
import SvgIcon from "./Small/SvgIcon";
import { PiGithubLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import Draggable from "react-draggable";
import { Tooltip } from "react-tooltip";
import CoolBtn from "../Misc/CoolBtn";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [showSecondTyped, setShowSecondTyped] = useState(false);
  const [showThirdTyped, setShowThirdTyped] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className=" mt-25 relative isolate px-6 lg:px-8" id="DragArea">
      <BgLight />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-18">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center select-none">
          <div className="min-h-60">
            <Draggable
              bounds="#DragArea"
              position={position}
              onStart={() => setIsDragging(true)}
              onStop={(_e, _data) => {
                setIsDragging(false);
                setPosition({ x: 0, y: 0 });
              }}
            >
              <div
                data-tooltip-id="DragTooltip"
                data-tooltip-hidden={isDragging}
                className={`cursor-pointer ${
                  isDragging
                    ? "transition-transform  duration-200 ease-out"
                    : "transition-transform duration-5000 ease-in-out"
                }`}
              >
                <ReactTyped
                  strings={["Ali AlWahayb"]}
                  startDelay={500}
                  typeSpeed={40}
                  showCursor={false}
                  className="text-5xl font-semibold tracking-tight text-balance text-text-base sm:text-7xl"
                  onComplete={() => setShowSecondTyped(true)}
                />
              </div>
            </Draggable>
            <div className="mt-6">
              {showSecondTyped && (
                <Draggable
                  bounds="#DragArea"
                  position={position}
                  onStart={() => setIsDragging(true)}
                  onStop={(_e, _data) => {
                    setIsDragging(false);
                    setPosition({ x: 0, y: 0 });
                  }}
                >
                  <div
                    data-tooltip-id="DragTooltip"
                    data-tooltip-hidden={isDragging}
                    className={` ${
                      isDragging
                        ? "transition-transform  duration-200 ease-out"
                        : "transition-transform duration-5000 ease-in-out"
                    }`}
                  >
                    <ReactTyped
                      strings={[
                        "Ali, a Computer Science student at Imam Abdulrahman Bin Faisal University, Interested in ",
                      ]}
                      typeSpeed={40}
                      showCursor={false}
                      className="mt-8 text-lg font-medium text-pretty text-secondary-text-base sm:text-xl/8 me-1"
                      onComplete={() => setShowThirdTyped(true)}
                    />
                    {showThirdTyped && (
                      <ReactTyped
                        strings={[
                          " Web development.",
                          " Self-hosting ",
                          " Text to Speech ",
                          " Apps development ",
                          " Machine learning ",
                        ]}
                        typeSpeed={40}
                        backSpeed={40}
                        loop
                        className="mt-8 text-lg font-medium text-pretty text-secondary-text-base sm:text-xl/8"
                      />
                    )}
                  </div>
                </Draggable>
              )}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showThirdTyped ? 1 : 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className=" mt-10 flex items-center justify-center gap-x-6"
          >
            <SvgIcon
              name="Github"
              link="https://github.com/AliAlWahayb"
              icon={<PiGithubLogoBold className="size-8 " />}
            />
            <SvgIcon
              name="Email"
              email="alialwahayb@outlook.com"
              icon={<HiOutlineMail className="size-8" />}
            />
            <SvgIcon
              name="Linkedin"
              link="https://www.linkedin.com/in/alialwahayb"
              icon={<TfiLinkedin className="size-8" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showThirdTyped ? 1 : 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className=" flex items-center justify-center mx-auto  max-w-2xl sm:mt-16"
          >
            <a
              href="src/assets/Ali AlWahayb.pdf"
              target="_blank"
              className="my-7 md:-my-5"
            >
              <CoolBtn text="Open CV" className="bg-card-900" />
            </a>
          </motion.div>
        </div>
      </div>
      <BgLight />
      <Tooltip
        id="DragTooltip"
        float={true}
        noArrow={true}
        content="Drag me!"
        variant="light"
        offset={10}
        place="top"
        delayShow={250}
        delayHide={250}
        style={{
          background: "#fff",
          color: "#364153",
          fontWeight: "bold",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default Hero;
