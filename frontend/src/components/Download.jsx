import React from "react";
import { motion } from "framer-motion";
import Downloadimg from "../assets/Download.png";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";

function Download() {
  return (
    <div className="border-b bg-transparent">
      <div className="container mx-auto flex flex-wrap items-center px-4 lg:px-8">
        {/* Image Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <img
            className="rounded-2xl w-2/3 max-w-sm lg:max-w-sm object-cover shadow-lg"
            src={Downloadimg}
            alt="Download Preview"
          />
        </motion.div>

        {/* Text & Button Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-cyan-100 mb-4">
            GET AHEAD IN
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-blue-600 mb-6">
            YOUR CAREER
          </h3>

          {/* Call-to-Action Button */}
          <button
            onClick={(e) => e.preventDefault()}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md mb-6"
          >
            GET ON JOB <span className="text-yellow-300">RINGER</span>
          </button>

          {/* Download Buttons */}
          <div className="flex gap-6">
            {/* Apple Store Button */}
            <div className="flex items-center gap-2 cursor-pointer">
              <FaApple className="text-sky-300 text-2xl" />
              <span className="text-gray-200 text-lg font-medium">
                App Store
              </span>
            </div>

            {/* Google Play Button */}
            <div className="flex items-center gap-2 cursor-pointer">
              <IoLogoAndroid className="text-green-400 text-2xl" />
              <span className="text-gray-200 text-lg font-medium">
                Google Play
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Download;
