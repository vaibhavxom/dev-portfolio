"use client";
import React, { useState } from "react";
import { FaCode, FaDatabase, FaCloud, FaTools, FaPython, FaJava, FaPhp, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiDjango, SiFlask, SiPostgresql, SiMysql, SiJenkins, SiJira, SiJavascript, SiGooglecloud, SiFirebase, SiC, SiCplusplus } from "react-icons/si";

const skills = [
  { 
    name: "JavaScript", 
    description: "Dynamic scripting language for web development", 
    category: "code",
    level: 93,
    icon: SiJavascript,
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    name: "Java", 
    description: "Robust object-oriented programming language", 
    category: "code",
    level: 90,
    icon: FaJava,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "Python", 
    description: "Versatile scripting and backend development", 
    category: "code",
    level: 95,
    icon: FaPython,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "C", 
    description: "Low-level systems programming language", 
    category: "code",
    level: 85,
    icon: SiC,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "C++", 
    description: "Object-oriented systems programming", 
    category: "code",
    level: 87,
    icon: SiCplusplus,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "C#", 
    description: "Microsoft's object-oriented programming language", 
    category: "code",
    level: 82,
    icon: FaCode,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "PHP", 
    description: "Server-side scripting for dynamic web apps", 
    category: "code",
    level: 85,
    icon: FaPhp,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "Django", 
    description: "High-level Python web framework", 
    category: "code",
    level: 88,
    icon: SiDjango,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "Flask", 
    description: "Lightweight Python web framework", 
    category: "code",
    level: 82,
    icon: SiFlask,
    color: "from-blue-400 to-blue-600"
  },
  { 
    name: "PostgreSQL", 
    description: "Powerful open-source relational DBMS", 
    category: "database",
    level: 87,
    icon: SiPostgresql,
    color: "from-green-400 to-green-600"
  },
  { 
    name: "MySQL", 
    description: "Widely-used relational database system", 
    category: "database",
    level: 85,
    icon: SiMysql,
    color: "from-green-400 to-green-600"
  },
  { 
    name: "SQL Server", 
    description: "Enterprise-grade relational DBMS by Microsoft", 
    category: "database",
    level: 80,
    icon: FaDatabase,
    color: "from-green-400 to-green-600"
  },
  { 
    name: "AWS", 
    description: "Cloud infrastructure & services (S3, Elastic Beanstalk)", 
    category: "cloud",
    level: 83,
    icon: FaAws,
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    name: "Google Cloud", 
    description: "Google's cloud computing platform", 
    category: "cloud",
    level: 80,
    icon: SiGooglecloud,
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    name: "Firebase", 
    description: "Google's mobile and web app development platform", 
    category: "cloud",
    level: 85,
    icon: SiFirebase,
    color: "from-yellow-400 to-yellow-600"
  },
  { 
    name: "Docker", 
    description: "Containerization platform for DevOps", 
    category: "tools",
    level: 86,
    icon: FaDocker,
    color: "from-purple-400 to-purple-600"
  },
  { 
    name: "Jenkins", 
    description: "CI/CD automation server", 
    category: "tools",
    level: 78,
    icon: SiJenkins,
    color: "from-purple-400 to-purple-600"
  },
  { 
    name: "Git", 
    description: "Distributed version control system", 
    category: "tools",
    level: 92,
    icon: FaGitAlt,
    color: "from-purple-400 to-purple-600"
  },
  { 
    name: "Jira", 
    description: "Agile project management tool", 
    category: "tools",
    level: 85,
    icon: SiJira,
    color: "from-purple-400 to-purple-600"
  }
];

const categoryFilters = [
  { key: "all", label: "All Skills", icon: FaCode },
  { key: "code", label: "Programming", icon: FaCode },
  { key: "database", label: "Databases", icon: FaDatabase },
  { key: "cloud", label: "Cloud", icon: FaCloud },
  { key: "tools", label: "DevOps", icon: FaTools }
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeFilter === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Exploring the technologies that power modern development
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {categoryFilters.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === key
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg scale-105"
                  : "bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:scale-105"
              }`}
            >
              <Icon className="text-lg" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl group-hover:bg-white/10">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <IconComponent className="text-2xl text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-300 mb-4">
                        {skill.description}
                      </p>

                      {/* Skill Level */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="font-semibold text-white">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                              transitionDelay: hoveredSkill === skill.name ? '200ms' : '0ms'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute bottom-6 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                      <div className="absolute top-1/2 left-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {skills.filter(s => s.category === 'code').length}+
              </div>
              <div className="text-gray-400 text-sm">Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {skills.filter(s => s.category === 'database').length}+
              </div>
              <div className="text-gray-400 text-sm">Databases</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {skills.filter(s => s.category === 'cloud').length}+
              </div>
              <div className="text-gray-400 text-sm">Cloud Platforms</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {skills.filter(s => s.category === 'tools').length}+
              </div>
              <div className="text-gray-400 text-sm">DevOps Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}