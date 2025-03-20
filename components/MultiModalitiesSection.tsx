"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Position = "top" | "right" | "bottom" | "left";

const getPath = () => {
  const radius = 270; // Half of 540px (pink circle diameter)
  // Create a complete circular path starting from top, going clockwise
  return `M 0 -${radius} A ${radius} ${radius} 0 0 1 ${radius} 0 A ${radius} ${radius} 0 0 1 0 ${radius} A ${radius} ${radius} 0 0 1 -${radius} 0 A ${radius} ${radius} 0 0 1 0 -${radius}`;
};

const MultiModalitiesSection = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>("top");

  return (
    <section className="px-6 pt-16 bg-white pb-12">
      <div className="text-center mb-12 flex flex-col justify-center">
        <h2 className="text-5xl text-[#1e1e1e] mb-20">Multi-modalities</h2>
        <div className="relative flex items-center justify-center h-[636px] w-[636px] mx-auto">
          {/* Central Circle */}
          <div className="relative flex items-center justify-center w-[444px] h-[444px] rounded-full bg-gradient-to-r from-blue-900 to-teal-500 text-white text-center">
            <p className="text-lg font-bold">
              4000 single-cell <br /> RNA-seq datasets
            </p>
          </div>

          {/* Pink Circle
          <div className="absolute h-[540px] w-[540px] rounded-full border-2 border-pink-500"></div> */}

          {/* Dotted Circle */}
          <div className="absolute h-[636px] w-[636px] rounded-full border-2 border-dotted border-[#003A7F]"></div>

          {/* SVG for path */}
          <svg
            className="absolute h-[540px] w-[540px]"
            viewBox="-270 -270 540 540"
            style={{
              pointerEvents: "none",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <path
              d={getPath()}
              fill="none"
              stroke="transparent"
            />
          </svg>

          {/* Arrow */}
          <motion.div
            className="absolute"
            style={{
              offsetPath: `path("${getPath()}")`,
              offsetRotate: "auto",
              top: "50%",
              left: "50%",
            }}
            animate={{
              offsetDistance: currentPosition === "top" ? "0%" :
                            currentPosition === "right" ? "25%" :
                            currentPosition === "bottom" ? "50%" :
                            "75%"
            }}
            initial={{
              offsetDistance: currentPosition === "top" ? "0%" :
                            currentPosition === "right" ? "25%" :
                            currentPosition === "bottom" ? "50%" :
                            "75%"
            }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              type: "tween"
            }}
          >
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.37158 0.499998C8.75648 -0.166669 9.71873 -0.166667 10.1036 0.5L17.6092 13.5C17.9941 14.1667 17.513 15 16.7432 15H1.73205C0.962248 15 0.481125 14.1667 0.866025 13.5L8.37158 0.499998Z"
                fill="#045888"
              />
            </svg>
          </motion.div>

          {/* Position Buttons */}
          <div className="absolute top-[-50px] flex flex-col items-center">
            <p className="mt-2 text-sm text-[#1e1e1e]">Spatial proteomics</p>
            <div
              className={`w-12 h-12 rounded-full cursor-pointer ${
                currentPosition === "top"
                  ? "bg-gradient-to-r from-blue-900 to-teal-500"
                  : "bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500"
              }`}
              onClick={() => setCurrentPosition("top")}
              onMouseEnter={() => setCurrentPosition("top")}
            ></div>
          </div>

          <div className="absolute right-[-198px] top-1/2 transform -translate-y-1/2 flex flex-row items-center gap-2">
            <div
              className={`w-12 h-12 rounded-full cursor-pointer ${
                currentPosition === "right"
                  ? "bg-gradient-to-r from-blue-900 to-teal-500"
                  : "bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500"
              }`}
              onClick={() => setCurrentPosition("right")}
              onMouseEnter={() => setCurrentPosition("right")}
            ></div>
            <p className="text-sm text-[#1e1e1e]">Single-cell RNA sequencing</p>
          </div>

          <div className="absolute bottom-[-50px] flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full cursor-pointer ${
                currentPosition === "bottom"
                  ? "bg-gradient-to-r from-blue-900 to-teal-500"
                  : "bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500"
              }`}
              onClick={() => setCurrentPosition("bottom")}
              onMouseEnter={() => setCurrentPosition("bottom")}
            ></div>
            <p className="mt-2 text-sm text-[#1e1e1e]">
              Single-cell spatial transcriptomics
            </p>
          </div>

          <div className="absolute left-[-198px] top-1/2 transform -translate-y-1/2 flex flex-row items-center gap-2">
            <p className="text-sm text-[#1e1e1e]">
              Bulk spatial transcriptomics
            </p>
            <div
              className={`w-12 h-12 rounded-full cursor-pointer ${
                currentPosition === "left"
                  ? "bg-gradient-to-r from-blue-900 to-teal-500"
                  : "bg-gray-200 hover:bg-gradient-to-r hover:from-blue-900 hover:to-teal-500"
              }`}
              onClick={() => setCurrentPosition("left")}
              onMouseEnter={() => setCurrentPosition("left")}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiModalitiesSection;
