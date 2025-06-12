'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const iframeRef = useRef(null);

  const handleIframeLoad = () => {
    if (formRef.current) {
      formRef.current.reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <motion.section
      role="region"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-gray-900 text-white text-center"
    >
      <h2
        id="contact-heading"
        className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight"
      >
        Let’s Connect
      </h2>

      <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
        Got a project in mind or just want to say hello? Drop a message below.
      </p>

      {/* Invisible iframe to avoid redirect */}
      <iframe
        name="hidden_iframe"
        className="hidden"
        ref={iframeRef}
        onLoad={handleIframeLoad}
      />

      {/* FormSubmit.co integration */}
      <form
        ref={formRef}
        action="https://formsubmit.co/rushimithagare02@gmail.com"
        method="POST"
        target="hidden_iframe"
        className="max-w-xl mx-auto space-y-6 text-left"
      >
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label htmlFor="name" className="block mb-1 text-gray-300 font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 text-gray-300 font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 text-gray-300 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="What would you like to discuss?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-semibold py-3 rounded-md shadow-lg"
        >
          Send Message
        </button>

        {submitted && (
          <motion.p
            className="text-green-400 mt-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ✅ Thank you! Your message has been sent.
          </motion.p>
        )}
      </form>
    </motion.section>
  );
}
