"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black" />
      </div>
      <div className="relative z-20 text-center px-4">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Sanket Dorle
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Full Stack Developer specializing in modern web applications
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 10 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white/30 rounded-full mt-2" />
        </motion.div>
      </div>
    </div>
  );
}
