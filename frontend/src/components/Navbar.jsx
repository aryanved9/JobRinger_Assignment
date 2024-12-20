import React from "react";
import logo from "../assets/job.png";
import { CgOrganisation } from "react-icons/cg";
import { MdOutlinePostAdd } from "react-icons/md";
import { SiMicrodotblog } from "react-icons/si";
import { FaMoneyCheckAlt } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-3 px-4 xl:px-12 bg-transparent">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Job Logo"
          className="w-24 h-auto sm:w-28 md:w-32"
        />
      </div>

      {/* Center Text */}
      <div className="hidden xl:block text-center text-xl font-semibold tracking-wide text-gray-300 flex-grow">
        BRINGING YOU{" "}
        <span className="bg-gradient-to-r from-purple-500 via-gray-400 to-blue-500 bg-clip-text text-transparent">
          THE PERFECT JOB
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden xl:flex items-center gap-4 sm:gap-4 xl:gap-8 text-lg text-gray-400 mr-8">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex flex-col items-center hover:text-blue-400 transition-colors duration-300"
        >
          <CgOrganisation size={24} />
          <span className="mt-1 text-sm">Companies</span>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex flex-col items-center hover:text-purple-400 transition-colors duration-300"
        >
          <MdOutlinePostAdd size={24} />
          <span className="mt-1 text-sm">Posts</span>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex flex-col items-center hover:text-green-400 transition-colors duration-300"
        >
          <SiMicrodotblog size={24} />
          <span className="mt-1 text-sm">Blogs</span>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex flex-col items-center hover:text-yellow-400 transition-colors duration-300"
        >
          <FaMoneyCheckAlt size={24} />
          <span className="mt-1 text-sm">Pricing</span>
        </a>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-4 sm:gap-4">
        {/* Jobseeker and Employer Login */}
        <a
          href="#"
          className="hidden xl:block text-sm font-medium text-gray-400 hover:text-orange-400 transition-colors duration-300"
        >
          Jobseeker Login
        </a>
        <a
          href="#"
          className="hidden xl:block text-sm font-medium text-gray-400 hover:text-orange-400 transition-colors duration-300"
        >
          Employer Login
        </a>

        {/* Get the App Button */}
        <button className="ml-4 px-4 py-2 text-sm font-medium text-purple-500 border border-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-colors duration-300">
          GET THE APP
        </button>
      </div>
    </nav>
  );
}

export default Navbar;


