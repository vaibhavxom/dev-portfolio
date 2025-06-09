"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Java | Spring Boot | Python",
      "AWS | Docker | CI/CD",
      // Removed provisional certificate mention here
    ],
    loop: true,
    delaySpeed: 2500,
  });

  return (
    <section
      aria-label="Hero section"
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 py-28 text-center max-w-4xl mx-auto"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Rushikesh Mithagare
      </motion.h1>

      <motion.div
        className="text-lg sm:text-xl md:text-3xl font-semibold mb-12 min-h-[48px] text-blue-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        aria-live="polite"
        aria-atomic="true"
      >
        <span>{text}</span>
        <Cursor
          cursorColor="#3B82F6"
          cursorStyle="|"
          blinkSpeed={500}
          aria-hidden="true"
        />
      </motion.div>

      <motion.p
        className="max-w-3xl text-gray-300 mb-14 text-base sm:text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        I build scalable, maintainable software solutions with expertise in Java,
        Spring Boot, Python, and cloud technologies.
      </motion.p>

      <motion.a
        href="/Rushikesh Mithagare - Resume.pdf"
        download
        className="inline-block bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-white font-semibold px-10 py-4 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        aria-label="Download Resume PDF"
        tabIndex={0}
      >
        Download Resume
      </motion.a>
    </section>
  );
}
