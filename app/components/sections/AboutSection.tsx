import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Ensure your file is in the `public` folder
    link.download = "Sanket_Resume.pdf"; // The file name after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="about"
      className="py-20 bg-netflix-black relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-netflix-red/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="lg:w-2/5 relative animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl border-2 border-netflix-red/20 -translate-x-4 -translate-y-4"></div>
              <img
                src="/data/dp_1.jpg"
                alt="Developer Portrait"
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <a
                href="https://github.com/sanketdorle-github"
                target="_blank"
                className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanketdorle05"
                target="_blank"
                className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-white" />
              </a>
              {/* <a
                href="#"
                className="bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-white" />
              </a> */}
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:w-3/5">
            <div className="space-y-6">
              <div>
                <span className="text-netflix-red uppercase tracking-wide text-sm font-medium">
                  About Me
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
                  Crafting Digital Experiences with Passion and Precision
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  With over 1.5 years of experience as a full-stack developer,
                  I've dedicated my career to creating seamless, user-focused
                  applications that solve real-world problems. My journey in the
                  world of development began with a fascination for how
                  technology can transform ideas into impactful solutions.
                </p>
                <p>
                  I specialize in building modern web applications using React,
                  Next.js, Node.js, and MongoDB, with a strong focus on
                  performance, accessibility, and clean code. My approach
                  combines technical expertise with creative problem-solving to
                  deliver outstanding digital products.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through technical writing and mentoring.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="#projects">
                  <Button
                    variant="outline"
                    className="bg-netflix-red hover:bg-netflix-red/90 text-white px-6 py-5 flex items-center gap-2 "
                  >
                    View Projects
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  onClick={handleDownload}
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-white px-6 py-5 flex items-center gap-2"
                >
                  Download Resume
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
