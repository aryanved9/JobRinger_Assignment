import React, { useRef, useState, useEffect } from "react";
import { jobs } from "../constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Jobs() {
  const scrollRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Scroll Function
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 150 : 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Automatic Animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating && scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="w-full px-6 lg:px-12 py-10 bg-gray-800 bg-opacity-30 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Jobs</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition z-10"
          onClick={() => handleScroll("left")}
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Job Cards - Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scroll-smooth scrollbar-hide"
          onMouseEnter={() => setIsAnimating(true)}
          onMouseLeave={() => setIsAnimating(false)}
        >
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <span
                className={`self-start px-3 py-1 text-sm font-medium rounded-full ${
                  job.type === "Hybrid Job"
                    ? "bg-green-500 text-gray-900"
                    : "bg-yellow-500 text-gray-900"
                }`}
              >
                {job.type}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-blue-400">
                {job.title}
              </h3>
              <p className="text-gray-400">{job.company}</p>
              <div className="mt-3 text-gray-300 text-sm">
                <p className="flex items-center gap-2">
                  <span>⏳</span> {job.time}
                </p>
                <p className="flex items-center gap-2">
                  <span>📋</span> {job.experience}
                </p>
                <p className="flex items-center gap-2">
                  <span>📍</span> {job.location}
                </p>
              </div>
              <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition z-10"
          onClick={() => handleScroll("right")}
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Jobs;
