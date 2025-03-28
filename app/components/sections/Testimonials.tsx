import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechVision Inc.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "Working with this developer was an absolute pleasure. Their technical skills are exceptional, but what truly sets them apart is their ability to understand business requirements and translate them into elegant technical solutions. They delivered our project ahead of schedule and exceeded our expectations in every way.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateLabs",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "We hired this developer to revamp our outdated platform, and the results were outstanding. They not only modernized our tech stack but also implemented performance optimizations that significantly improved load times. Their communication throughout the project was clear and consistent. We're already planning to work with them on future projects.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Startup Founder",
    company: "EcoSolutions",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "As a non-technical founder, I needed someone who could take my vision and turn it into reality. This developer did exactly that and more. They guided me through technical decisions with patience and built an MVP that helped us secure our first round of funding. Their work was instrumental to our early success.",
  },
  {
    id: 4,
    name: "David Park",
    role: "Marketing Director",
    company: "GlobalBrand",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    content:
      "I've worked with many developers over the years, but few have demonstrated such a perfect balance of creativity and technical expertise. They understood our brand goals and created a web experience that not only looks beautiful but converts visitors into customers at an impressive rate. The ROI on this project has been remarkable.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="testimonials"
      className="py-20 bg-netflix-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-netflix-red/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-netflix-red/10 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-netflix-red uppercase tracking-wide text-sm font-medium">
            Client Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            What People Say
          </h2>
          <p className="text-gray-400 mt-4">
            Don't just take my word for it — hear what clients and colleagues
            have to say about my work and collaboration style.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Large quote icon */}
          <div className="absolute -top-10 -left-10 opacity-10">
            <Quote size={80} className="text-netflix-red" />
          </div>

          <div className="relative h-[350px] md:h-[280px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-out bg-netflix-gray/30 p-8 rounded-2xl backdrop-blur-sm border border-white/5",
                  activeIndex === index
                    ? "translate-x-0 opacity-100"
                    : index < activeIndex ||
                      (activeIndex === 0 && index === testimonials.length - 1)
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-netflix-red/20"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 italic mb-6">
                      {testimonial.content}
                    </p>
                    <div>
                      <h4 className="text-white font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-netflix-red text-sm">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200 disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating || activeIndex === index) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "bg-netflix-red w-4"
                      : "bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200 disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
