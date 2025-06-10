"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaStar, FaEye } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [source, setSource] = useState("Fetching...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Featured projects (fallback when APIs fail)
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with Java Spring Boot backend and React frontend. Features include user authentication, product catalog, shopping cart, and payment integration.",
      githubUrl: "https://github.com/vaibhavxom/ecommerce-platform",
      liveDemoUrl: "https://your-demo-link.com",
      techStack: ["Java", "Spring Boot", "React", "PostgreSQL", "AWS"],
      image: "/projects/ecommerce.jpg", // Add project screenshots
      featured: true
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with user authentication, CRUD operations, and real-time notifications. Includes comprehensive testing and Docker containerization.",
      githubUrl: "https://github.com/vaibhavxom/task-management-api",
      liveDemoUrl: "",
      techStack: ["Java", "Spring Boot", "MySQL", "Docker", "Jenkins"],
      image: "/projects/task-api.jpg",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design. Integrates with multiple weather APIs.",
      githubUrl: "https://github.com/vaibhavxom/weather-dashboard",
      liveDemoUrl: "https://weather-dashboard-demo.com",
      techStack: ["Python", "Django", "JavaScript", "Chart.js", "Bootstrap"],
      image: "/projects/weather.jpg",
      featured: false
    }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Try Spring Boot backend first
        const response = await axios.get("http://localhost:8081/api/projects");
        setProjects(response.data);
        setSource("Spring Boot Backend");
      } catch (backendError) {
        try {
          // Fallback to GitHub API
          const response = await axios.get("https://api.github.com/users/vaibhavxom/repos");
          const githubProjects = response.data
            .filter(repo => !repo.fork && repo.description) // Filter out forks and repos without description
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)) // Sort by most recent
            .slice(0, 9) // Limit to 9 projects
            .map((repo) => ({
              title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              description: repo.description || "A coding project showcasing development skills.",
              githubUrl: repo.html_url,
              liveDemoUrl: repo.homepage || "",
              techStack: repo.language ? [repo.language] : ["Code"],
              stars: repo.stargazers_count,
              watchers: repo.watchers_count,
              updated: repo.updated_at
            }));
          
          setProjects(githubProjects);
          setSource("GitHub API");
        } catch (githubError) {
          // Final fallback to featured projects
          setProjects(featuredProjects);
          setSource("Featured Projects");
          setError("Unable to fetch live project data. Showing featured projects.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const ProjectCard = ({ project, index }) => (
    <motion.article
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, ease: "easeOut" }}
      className={`bg-white dark:bg-neutral-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] duration-300 overflow-hidden flex flex-col ${
        project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
      }`}
      aria-label={`Project: ${project.title}`}
    >
      {/* Project Image */}
      {project.image && (
        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          {project.featured && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
      )}

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <header className="mb-4">
          {/* Added line-clamp-2 and break-words for title overflow */}
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 break-words">
            {project.title}
          </h3>
          {(project.stars !== undefined || project.watchers !== undefined) && (
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              {project.stars !== undefined && (
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {project.stars}
                </span>
              )}
              {project.watchers !== undefined && (
                <span className="flex items-center gap-1">
                  <FaEye />
                  {project.watchers}
                </span>
              )}
            </div>
          )}
        </header>

        <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
          {project.description || "A coding project showcasing development skills."}
        </p>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
            Tech Stack:
          </p>
          <div className="flex flex-wrap gap-2">
            {(Array.isArray(project.techStack) ? project.techStack : [project.techStack]).map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <footer className="flex gap-3 flex-wrap mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-white transition-colors font-medium shadow-md flex-1 justify-center"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <FaGithub size={18} /> Code
          </a>
          {project.liveDemoUrl && project.liveDemoUrl !== "" && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors font-medium shadow-md flex-1 justify-center"
              aria-label={`Live demo for ${project.title}`}
            >
              <FaExternalLinkAlt size={16} /> Demo
            </a>
          )}
        </footer>
      </div>
    </motion.article>
  );

  if (loading) {
    return (
      <section
        id="projects"
        role="status"
        aria-live="polite"
        className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-500"
      >
        <div className="flex flex-col items-center justify-center">
          <svg
            className="animate-spin h-12 w-12 text-blue-600 dark:text-blue-400 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <span className="text-xl font-medium text-gray-600 dark:text-gray-300">
            Loading Projects...
          </span>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="projects"
      className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of my recent work and technical expertise
          </motion.p>
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Data source: {source}
          </motion.p>
        </div>

        {/* Error Message */}
        {error && (
          <motion.div 
            className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-8 text-yellow-800 dark:text-yellow-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FaCode className="inline mr-2" />
            {error}
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/vaibhavxom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            <FaGithub size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}