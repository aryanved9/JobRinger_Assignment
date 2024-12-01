import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-cyan-800 to-blue-900 text-white py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: About Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-sm text-gray-300 text-center md:text-left">
            We are dedicated to connecting job seekers and employers, making the hiring process seamless and efficient.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>
          </ul>
        </motion.div>

        {/* Column 3: Contact Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center md:items-end"
        >
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@jobringer.com</li>
            <li>Phone: +91 12345 67890</li>
            <li>Address: Bengaluru, India</li>
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-8 border-t border-gray-700 pt-4 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} JobRinger. All rights reserved to aryanved9.
        </p>
      </motion.div>
    </footer>
  );
}

