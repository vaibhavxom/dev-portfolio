"use client"; // Ensure this is a client component in Next.js

import React from "react";
import { FaCode, FaDatabase, FaCloud, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", description: "Robust object-oriented programming language", category: "code" },
  { name: "Python", description: "Versatile scripting and backend development", category: "code" },
  { name: "PHP", description: "Server-side scripting for dynamic web apps", category: "code" },
  { name: "Django", description: "High-level Python web framework", category: "code" },
  { name: "Flask", description: "Lightweight Python web framework", category: "code" },
  { name: "PostgreSQL", description: "Powerful open-source relational DBMS", category: "database" },
  { name: "MySQL", description: "Widely-used relational database system", category: "database" },
  { name: "SQL Server", description: "Enterprise-grade relational DBMS by Microsoft", category: "database" },
  { name: "AWS", description: "Cloud infrastructure & services (S3, Elastic Beanstalk)", category: "cloud" },
  { name: "Docker", description: "Containerization platform for DevOps", category: "tools" },
  { name: "Jenkins", description: "CI/CD automation server", category: "tools" },
  { name: "Git", description: "Distributed version control system", category: "tools" },
  { name: "Jira", description: "Agile project management tool", category: "tools" },
];

const getIcon = (category) => {
  switch (category) {
    case "code":
      return <FaCode className="text-blue-400" />;
    case "database":
      return <FaDatabase className="text-green-400" />;
    case "cloud":
      return <FaCloud className="text-yellow-400" />;
    case "tools":
      return <FaTools className="text-purple-400" />;
    default:
      return null;
  }
};

export default function Skills() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {skills.map(({ name, description, category }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4 text-3xl">
              {getIcon(category)}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
            <p className="text-sm text-gray-300 text-center">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
