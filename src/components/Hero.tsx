import React, { useState } from "react";
import BgLight from "./BgLight";
import SvgIcon from "./SvgIcon";
import { PiGithubLogoBold } from "react-icons/pi";
import { TfiLinkedin } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";
import { ReactTyped } from "react-typed";
import Draggable from "react-draggable";

const Hero: React.FC = () => {
  const [showSecondTyped, setShowSecondTyped] = useState(false);
  const [showThirdTyped, setShowThirdTyped] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8" id="DragArea">
      <BgLight />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <Draggable
            bounds="#DragArea"
            position={position}
            onStart={() => setIsDragging(true)}
            onStop={(e, data) => {
              console.log("Stopped dragging", data);
              setIsDragging(false);
              setPosition({ x: 0, y: 0 });
            }}
          >
            <div
              className={` ${
                isDragging
                  ? "transition-transform  duration-200 ease-out"
                  : "transition-transform duration-5000 ease-in-out"
              }`}
            >
              <ReactTyped
                strings={["Here you can find anything"]}
                typeSpeed={40}
                showCursor={false}
                className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
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
                onStop={(e, data) => {
                  console.log("Stopped dragging", data);
                  setIsDragging(false);
                  setPosition({ x: 0, y: 0 });
                }}
              >
                <div
                  className={` ${
                    isDragging
                      ? "transition-transform  duration-200 ease-out"
                      : "transition-transform duration-5000 ease-in-out"
                  }`}
                >
                  <ReactTyped
                    strings={[
                      "Anim aute id magna aliqua ad ad non deserunt sunt. ",
                    ]}
                    typeSpeed={40}
                    showCursor={false}
                    className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 me-1"
                    onComplete={() => setShowThirdTyped(true)}
                  />
                </div>
              </Draggable>
            )}

            {showThirdTyped && (
              <Draggable
                bounds="#DragArea"
                position={position}
                onStart={() => setIsDragging(true)}
                onStop={(e, data) => {
                  console.log("Stopped dragging", data);
                  setIsDragging(false);
                  setPosition({ x: 0, y: 0 });
                }}
              >
                <div
                  className={` ${
                    isDragging
                      ? "transition-transform  duration-200 ease-out"
                      : "transition-transform duration-5000 ease-in-out"
                  }`}
                >
                  <ReactTyped
                    strings={[
                      " Qui irure qui lorem cupidatat commodo.",
                      " Dolor sit amet consectetur adipiscing elit.",
                      " Tempor incididunt ut labore et dolore magna aliqua.",
                    ]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                    className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
                  />
                </div>
              </Draggable>
            )}
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
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
          </div>
        </div>
      </div>
      <BgLight />
    </div>
  );
};

export default Hero;
