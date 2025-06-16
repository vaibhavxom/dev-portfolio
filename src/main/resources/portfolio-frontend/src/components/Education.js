"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaProjectDiagram, FaCertificate } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Science in Software Engineering",
    institution: "COCSIT, Latur – SRTM University, Nanded",
    date: "Aug 2022 – May 2025 (Expected)",
    gpa: "8.5 / 10",
    icon: FaUniversity,
    color: "bg-gradient-to-br from-blue-500 to-purple-600",
    points: [
      "Core Languages: Java, Python, C, C++, JavaScript, PHP",
      "Web & Backend: Django, Flask, Spring Boot",
      "Databases: PostgreSQL, MySQL, SQL Server",
      "DevOps & Tools: Git, Docker, Jenkins, Maven",
      "Cloud & Infra: AWS (S3, Beanstalk), Firebase",
      "Agile Practices: Jira, CI/CD, GitHub Actions"
    ]
  },
  {
    title: "Major Academic Projects",
    institution: "",
    date: "2023 – 2025",
    icon: FaProjectDiagram,
    color: "bg-gradient-to-br from-green-400 to-blue-500",
    points: [
      "Tour Package Booking System (Django + SQLite) – 95% transaction success rate",
      "Photo Upload App to AWS S3 (Spring Boot) – 100% upload reliability",
      "Banking System (Java + MySQL) – Simulated 1000+ transactions/sec"
    ]
  },
  {
    title: "Certifications",
    institution: "",
    date: "2022 – 2024",
    icon: FaCertificate,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    points: [
      "Full Stack Java Development – Spring Boot, Hibernate, JSP",
      "Python for Beginners – Coursera",
      "Problem Solving – HackerRank",
      "Git & GitHub Essentials – Udemy"
    ]
  }
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Education</h2>
          <p className="text-lg text-gray-300 mt-2">
            Merging academic depth with real-world skill application
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Timeline View */}
        <div className="relative pl-10 border-l border-blue-500 ml-4 space-y-14">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Timeline Marker */}
                <div className="absolute -left-7 top-1 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg z-10 border-4 border-gray-900">
                  <div className={`${edu.color} w-full h-full rounded-full flex items-center justify-center`}>
                    <Icon className="text-white text-lg" />
                  </div>
                </div>

                {/* Timeline Content */}
                <div className="ml-6">
                  <h3 className="text-xl font-bold">{edu.title}</h3>
                  {edu.institution && (
                    <p className="text-gray-300 text-sm">{edu.institution}</p>
                  )}
                  <p className="text-sm text-gray-400 mb-3">{edu.date}</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    {edu.points.map((point, i) => (
                      <li key={i} className="hover:text-white transition duration-300">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
