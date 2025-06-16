"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Building Scalable Web Apps",
      "Java | Spring Boot Expert",
      "Cloud & DevOps Enthusiast",
      "Problem Solver & Innovator"
    ],
    loop: true,
    delaySpeed: 2500,
  });

  // Get the correct base path for links
  const basePath = process.env.NODE_ENV === 'production' ? '/dev-portfolio' : '';

  return (
    <section
      aria-label="Hero section"
      className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 py-20 text-center max-w-4xl mx-auto relative"
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Rushikesh Mithagare
      </motion.h1>

      {/* Optional: Add professional photo - uncomment and add your photo to public folder
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <img
          src={`${basePath}/profile-photo.jpg`}
          alt="Rushikesh Mithagare"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
        />
      </motion.div>
      */}

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
        Spring Boot, Python, and cloud technologies. Passionate about creating
        efficient, user-focused applications that solve real-world problems.
      </motion.p>

      {/* Enhanced Button Group */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
       
        
            <a href={`${basePath}/Rushikesh Mithagare - Resume.pdf`}
            download // This attribute tells the browser to download the file
            className="inline-block bg-transparent border-2 border-blue-600 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 text-blue-400 hover:text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            aria-label="Download Resume PDF" >

              Download Resume
              
            </a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center space-x-6 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <a
          href="https://github.com/vaibhavxom"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          aria-label="GitHub Profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
          </svg>
        </a>
        
        <a
          href="https://linkedin.com/in/rushikesh-mithagare"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        
        <a
          href="mailto:rushimithagare02@gmail.com"
          className="text-gray-400 hover:text-green-500 transition-colors duration-300 transform hover:scale-110"
          aria-label="Email Contact"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}