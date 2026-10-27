import React from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          {/* THE EXACT 1:1 MERCURY INFOTECH RESPONSIVE SVG */}
          <svg
            className="mi-svg-container"
            viewBox="0 0 1536 1024"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mercury Infotech Loading"
          >
            {/* 1. BLUE GEOMETRY ('M' and 'I' Stem) */}
            <g className="mi-blue-group">
              {/* Exact Letter M */}
              <path
                className="mi-blue-shape mi-m-shape"
                d="M 403 696 L 403 264 L 450 264 L 613 428 L 776 264 L 823 264 L 823 696 L 735 696 L 735 434 L 613 556 L 491 434 L 491 696 Z"
              />

              {/* Exact Letter I Stem */}
              <path
                className="mi-blue-shape mi-i-shape"
                d="M 957 264 L 1047 264 L 1047 696 L 957 696 Z"
              />
            </g>

            {/* 2. RED HIGH-FIVE / SYNERGY FIGURES ABOVE 'I' */}
            <g className="mi-red-group mi-red-stroke">
              {/* 5 Top Burst Rays */}
              <line className="mi-ray mi-ray-1" x1="951" y1="118" x2="914" y2="82" />
              <line className="mi-ray mi-ray-2" x1="976" y1="105" x2="958" y2="55" />
              <line className="mi-ray mi-ray-3" x1="1002" y1="100" x2="1002" y2="44" />
              <line className="mi-ray mi-ray-4" x1="1028" y1="105" x2="1046" y2="55" />
              <line className="mi-ray mi-ray-5" x1="1053" y1="118" x2="1090" y2="82" />

              {/* 2 Circular Heads */}
              <circle className="mi-red-head-left" cx="924" cy="161" r="28" />
              <circle className="mi-red-head-right" cx="1080" cy="161" r="28" />

              {/* Continuous Outer Loop: Hanging U-Arms, Shoulders & Center High-Five Arch */}
              <path
                className="mi-red-body"
                d="M 896 268 L 896 338 A 16 16 0 0 1 864 338 L 864 266 C 864 224, 882 217, 926 217 C 968 217, 985 196, 985 152 A 17 17 0 0 1 1019 152 C 1019 196, 1036 217, 1078 217 C 1122 217, 1140 224, 1140 266 L 1140 338 A 16 16 0 0 1 1108 338 L 1108 268"
              />

              {/* Inner Crossing Body Arch Resting on Top Corners of Blue 'I' */}
              <path
                className="mi-red-arch"
                d="M 964 256 C 988 238, 1002 212, 1002 182"
              />
              <path
                className="mi-red-arch"
                d="M 1040 256 C 1016 238, 1002 212, 1002 182"
              />
            </g>

            {/* 3. BOTTOM BRAND TEXT: "Mercury Infotech" */}
            <text x="762" y="848" textAnchor="middle" className="mi-logo-text">
              Mercury Infotech
            </text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
