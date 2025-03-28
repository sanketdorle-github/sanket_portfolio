import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';

const ContactSection = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
    const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        toast.success(
         
          data.message || "success",
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(
         
           data.error || "Something went wrong",
         );
      }
      setIsSubmitting(false);
    } catch (error) {
     
      toast.error(
         
       "Failed to send email",
      );
      setIsSubmitting(false);
    }

    // Simulate form submission
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   toast({
    //     title: "Message sent!",
    //     description: "Thanks for reaching out. I'll get back to you soon.",
    //   });
    //   setFormData({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    //   });
    // }, 1500);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  
  //   console.log("Submitting Data:", formData); // Debugging
  
  //   try {
  //     const res = await fetch(`/api/contact`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  
  //     const data = await res.json();
  //     console.log("API Response:", data); // Debugging
  //   } catch (error) {
  //     console.error("Fetch Error:", error);
  //   }
  
  //   setIsSubmitting(false);
  // };
  
  return (
    <section
      id="contact"
      className="py-20 bg-netflix-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-netflix-red/5 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-netflix-red/5 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-netflix-red uppercase tracking-wide text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project in mind or just want to chat? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-netflix-gray/30 backdrop-blur-sm p-8 rounded-2xl border border-white/5 animate-fade-in">
            <h3 className="text-xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-netflix-red focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-netflix-red focus:outline-none transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-netflix-red focus:outline-none transition-colors duration-200"
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-netflix-red focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-netflix-red hover:bg-netflix-red/90 text-white py-3 transition-colors duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8 mb-8">
              <div className="bg-netflix-gray/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-netflix-red/10 mr-4">
                    <Mail className="text-netflix-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a
                      href="mailto:sanketgdorle05@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors duration-200 "
                    >
                      sanketgdorle05@gmail.com{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-netflix-gray/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-netflix-red/10 mr-4">
                    <Phone className="text-netflix-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+917887347943"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      +91 7887347943
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-netflix-gray/30 backdrop-blur-sm p-6 rounded-xl border border-white/5 transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-netflix-red/10 mr-4">
                    <MapPin className="text-netflix-red h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Nagpur, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-netflix-gray/30 backdrop-blur-sm p-6 rounded-xl border border-white/5">
              <h4 className="text-white font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sanketdorle-github"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
                  aria-label="Github"
                >
                  <Github className="text-white h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanketdorle05"
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white h-5 w-5" />
                </a>
                {/* <a
                  href="#"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="text-white h-5 w-5" />
                </a> */}
                <a
                  href="mailto:sanketgdorle05@gmail.com"
                  className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="text-white h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
