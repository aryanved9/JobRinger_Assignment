import React from "react";
import { IMAGE } from "../constants/index.js";
import { motion } from "framer-motion";

function Employers() {
  return (
    <div className="w-full py-8 px-4 lg:px-8 bg-transparent">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-center mb-8">
        Featured{" "}
        <span className="bg-gradient-to-r from-purple-400 via-gray-400 to-blue-500 bg-clip-text text-transparent">
          Employers
        </span>
      </h2>

      {/* White Rounded Container */}
      <div className="bg-white opacity-70 rounded-full px-4 py-3 mx-3 md:mx-6 lg:mx-10 shadow-lg overflow-hidden">
        {/* Horizontal Scrollable Section */}
        <motion.div
          className="flex items-center justify-start gap-3"
          animate={{
            x: ["0%", "-45%", "0%"], // Moves from 0% to -80% and back to 0%
          }}
          transition={{
            repeat: Infinity, // Infinite loop
            duration: 25, // Total time for one full animation loop
            ease: "easeInOut", // Smooth transition
          }}
        >
          {IMAGE.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-20 sm:w-24 md:w-28 lg:w-32 p-1 rounded-lg transition duration-300"
            >
              {/* Image Content */}
              <div className="flex items-center justify-center h-12 sm:h-16 md:h-20 lg:h-24">
                <img
                  src={item.image}
                  alt={`Employer ${index + 1}`}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Employers;
