import React from "react";

const skills = [
  { name: "Java", description: "Robust object-oriented programming language" },
  { name: "Python", description: "Versatile scripting and backend development" },
  { name: "PHP", description: "Server-side scripting for dynamic web apps" },
  { name: "Django", description: "High-level Python web framework" },
  { name: "Flask", description: "Lightweight Python web framework" },
  { name: "PostgreSQL", description: "Powerful open-source relational DBMS" },
  { name: "MySQL", description: "Widely-used relational database system" },
  { name: "SQL Server", description: "Enterprise-grade relational DBMS by Microsoft" },
  { name: "AWS", description: "Cloud infrastructure & services (S3, Elastic Beanstalk)" },
  { name: "Docker", description: "Containerization platform for DevOps" },
  { name: "Jenkins", description: "CI/CD automation server" },
  { name: "Git", description: "Distributed version control system" },
  { name: "Jira", description: "Agile project management tool" },
];

export default function Skills() {
  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map(({ name, description }) => (
          <div
            key={name}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
