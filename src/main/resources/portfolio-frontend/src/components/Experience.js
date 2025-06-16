"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="py-20 bg-gray-950 text-white relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Experience</h2>
          <p className="text-lg text-gray-300 mt-2">
            Hands-on exposure through real-world simulation projects
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline Entry */}
        <motion.div
          className="relative pl-10 border-l border-blue-600 ml-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="absolute -left-7 top-1 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
            <FaBriefcase className="text-white" />
          </div>

          {/* Content */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold">Accenture North America – Virtual Job Simulation</h3>
            <p className="text-gray-400 text-sm mb-3">
              Development & Advanced Engineering · Jan 2025
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>
                Built a Java Spring Boot component for search functionality on an interactive client-facing platform.
              </li>
              <li>
                Implemented Jenkins pipelines to automate builds and testing with each code commit.
              </li>
              <li>
                Collaborated in Agile planning to create user stories, prioritize tasks, and improve sprint execution.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
