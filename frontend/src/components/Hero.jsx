import React from "react";

function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between py-10 px-8 lg:px-16 bg-transparent text-gray-300">
      {/* Left Section */}
      <div className="flex flex-col space-y-3 text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
          GET AHEAD WITH{" "}
          <span className="bg-gradient-to-r from-purple-400 via-gray-400 to-blue-500 bg-clip-text text-transparent">
            OTHER PROFESSIONALS
          </span>
        </h1>
        <p className="mt-4 text-lg lg:text-xl leading-relaxed text-gray-400">
          Join others in your industry and company to get helpful advice from
          colleagues and coworkers.
        </p>
        <button className="mt-6 px-6 py-3 w-80 bg-purple-600 text-white rounded-full font-medium text-lg hover:bg-purple-500 transition duration-300">
          DOWNLOAD NOW
        </button>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 space-y-6 ml-6 bg-gray-800 bg-opacity-30 rounded-xl p-6 lg:p-8 shadow-lg">
        {/* 40% Progress Section */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-4xl font-bold text-green-400">40%</h2>
            <p className="ml-4 text-gray-400">
              or more of people at these companies are on JobRider.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={(e) => e.preventDefault()}
            className="px-5 py-2 text-sm font-medium text-gray-200 bg-blue-600 rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
            Register For FREE
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="px-5 py-2 text-sm font-medium text-gray-200 bg-purple-600 rounded-md hover:bg-purple-500 transition-colors duration-300"
          >
            Post A JOB
          </button>
        </div>

        {/* Sales Inquiry */}
        <a
          href="#"
          className="mt-4 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          Sales Enquiry
        </a>
      </div>
    </div>
  );
}

export default Hero;
