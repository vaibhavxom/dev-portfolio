'use client';

import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      role="region"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-6 bg-gray-900 text-white text-center"
    >
      <h2
        id="contact-heading"
        className="text-3xl font-extrabold mb-8 tracking-wide"
      >
        Let's Connect
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-lg max-w-md mx-auto">
        {/* Email Contact */}
        <a
          href="mailto:rushimithagare02@gmail.com"
          className="flex items-center gap-3 text-gray-200 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 rounded transition-colors"
          aria-label="Send email to Rushikesh Mithagare"
        >
          <FaEnvelope
            className="text-red-400 w-6 h-6 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="underline decoration-red-400">rushimithagare02@gmail.com</span>
        </a>

        {/* LinkedIn Contact */}
        <a
          href="https://www.linkedin.com/in/rushikesh-mithagare-639861178"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-200 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors"
          aria-label="Visit LinkedIn profile of Rushikesh Mithagare"
        >
          <FaLinkedin
            className="text-blue-400 w-6 h-6 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="underline decoration-blue-400">
            linkedin.com/in/rushikesh-mithagare
          </span>
        </a>
      </div>
    </motion.section>
  );
}
