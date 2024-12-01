import React from "react";
import { motion } from "framer-motion";
import { stats } from "../constants";

function Totaljob() {
  return (
    <div className=" bg-gray-800 bg-opacity-30 text-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white text-blue-900 p-6 rounded-xl shadow-lg flex flex-col items-center"
          >
            <p className="text-lg font-medium">{stat.label}</p>
            <span className="text-3xl lg:text-4xl font-extrabold mt-4">
              {stat.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Totaljob;
