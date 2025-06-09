"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [source, setSource] = useState("Fetching...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/projects")
      .then((res) => {
        setProjects(res.data);
        setSource("Spring Boot Backend");
      })
      .catch(() => {
        axios.get("https://api.github.com/users/vaibhavxom/repos").then((res) => {
          const fallback = res.data.map((repo) => ({
            title: repo.name,
            description: repo.description || "No description provided.",
            githubUrl: repo.html_url,
            liveDemoUrl: repo.homepage || "",
            techStack: "GitHub API",
          }));
          setProjects(fallback);
          setSource("GitHub API");
        });
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section
        role="status"
        aria-live="polite"
        className="py-12 flex justify-center items-center text-gray-600 dark:text-gray-300"
      >
        <svg
          className="animate-spin h-8 w-8 mr-3 text-blue-600 dark:text-blue-400"
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
        <span className="text-lg font-medium">Loading Projects...</span>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-500">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white tracking-tight">
        Projects{" "}
        <span className="text-base font-normal text-gray-500 dark:text-gray-400">
          ({source})
        </span>
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, ease: "easeOut" }}
            className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow transform hover:scale-[1.03] duration-300 p-6 sm:p-8 flex flex-col justify-between min-w-0"
            aria-label={`Project: ${p.title}`}
          >
            <header className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white truncate min-w-0">
                {p.title}
              </h3>
            </header>
            <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow leading-relaxed min-h-[80px] break-words">
              {p.description || "No description available."}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wide font-medium">
              Tech Stack: <span className="font-semibold">{p.techStack}</span>
            </p>
            <footer className="flex gap-4 flex-wrap">
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors font-medium shadow-md"
                aria-label={`GitHub repository for ${p.title}`}
              >
                <FaGithub size={18} /> GitHub
              </a>
              {p.liveDemoUrl && p.liveDemoUrl !== "" && (
                <a
                  href={p.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors font-medium shadow-md"
                  aria-label={`Live demo for ${p.title}`}
                >
                  <FaExternalLinkAlt size={18} /> Live Demo
                </a>
              )}
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
