"use client";

import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import ContactSection from "./sections/ContactSection";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { Code2, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import AboutSection from "./sections/AboutSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      {/* About Section */}
      {/* <section id="about" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 mb-6">
                With over 1.5 years of experience in full-stack development, I
                specialize in building scalable web applications using modern
                technologies. My passion lies in creating elegant solutions to
                complex problems while ensuring the best user experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-400 text-sm">
                    React, Next.js, TypeScript, Tailwind CSS
                  </p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <p className="text-gray-400 text-sm">
                    Node.js, PostgreSQL,MongoDB
                  </p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-purple-600 rounded-lg transform rotate-3" />
              <img
                src="/data/SaketImage.jpg"
                alt="Profile"
                className="absolute inset-0 object-cover rounded-lg transform -rotate-3 aspect-square"
              />
            </div>
          </motion.div>
        </div>
      </section> */}

      <Skills />

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block p-3 bg-red-600 rounded-full mb-4"
            >
              <Code2 className="w-8 h-8" />
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              A collection of my recent work showcasing modern web development
              techniques and creative solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      <Experience />
      {/* <Testimonials /> */}

      {/* Contact Section */}
      {/* <section id="contact" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in working together? Let's discuss your project and
              explore how we can create something amazing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    @username
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    /in/username
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Twitter className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    @username
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section> */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2025 sanketdorle. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
