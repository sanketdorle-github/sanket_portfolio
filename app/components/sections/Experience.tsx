import { cn } from "@/lib/utils";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  current: boolean;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "Virtual Globe Technology",
    role: "Full Stack Developer Engineer",
    period: "Aug 2024 - Present",
    description:
      "Building scalable, high-performance web platforms including a Tendering System and eCommerce platform using Next.js, React, Node.js, Express.js, and MongoDB. Focused on creating reusable, responsive UI components and integrating REST APIs for dynamic, data-driven experiences.",
    achievements: [
      "Engineered reusable UI components using React, Next.js, Radix UI, and shadcn/ui to ensure visual consistency and responsiveness across the platform.",
      "Developed the frontend for TenderWIN.ai — a tender management system displaying real-time listings across 25+ states and organizations.",
      "Integrated REST APIs for live tender updates and implemented advanced search and filtering features, improving discoverability by 40%.",
      "Streamlined Redux Toolkit for efficient state management, reducing API calls by 40% and enhancing overall performance.",
      "Implemented secure JWT-based authentication and role-based access control to strengthen system security.",
      "Collaborated in an Agile environment, participating in sprint planning, code reviews, and cross-functional team discussions.",
      "Optimized API performance and frontend rendering through debugging, validation, and browser compatibility improvements.",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Virtual Globe Technology",
    role: " Full Stack Developer Intern",
    period: "May 2024 - July 2024",
    description:
      "Developed and maintained various web applications with React, Express, and MongoDB for e-commerce  clients.",
    achievements: [
      "Developed responsive and dynamic user interfaces with React.js, improving usability and reducing bounce rates by 30%.",
      "Built and integrated RESTful APIs using Express.js and Node.js, connected with MongoDB for efficient data management.",
      "Implemented real-time communication features using Socket.io, enabling instant messaging with ~100ms latency across multiple chat rooms.",
      "Engineered secure authentication and authorization workflows using JWT and bcrypt to protect user sessions and manage role-based access.",
      "Leveraged Redux Toolkit for state management to ensure consistent and predictable data flow across the application.",
      "Collaborated with the senior engineering team to debug, optimize, and deploy scalable full-stack applications for production.",
    ],
    current: false,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-netflix-dark relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-netflix-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-netflix-red/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-netflix-red uppercase tracking-wide text-sm font-medium">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            Professional Experience
          </h2>
          <p className="text-gray-400 mt-4">
            A timeline of my professional journey, highlighting key roles,
            responsibilities, and achievements across different organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 w-px h-full bg-netflix-red/20 transform md:translate-x-0 translate-x-[12px]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={cn(
                  "relative flex flex-col md:flex-row",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full border-2 border-netflix-red bg-netflix-black transform -translate-y-1 md:-translate-x-[12px] translate-x-[0px]"></div>

                {/* Content */}
                <div className="md:w-1/2 pl-10 md:pl-0 md:pr-10">
                  <div
                    className={cn(
                      "bg-netflix-gray/40 backdrop-blur-sm p-6 rounded-xl border border-white/5",
                      "transform transition-all duration-500 hover:translate-y-[-5px]",
                      exp.current ? "border-l-4 border-l-netflix-red" : "",
                      index % 2 === 0 ? "md:ml-10" : "md:mr-10"
                    )}
                  >
                    {exp.current && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-netflix-red/20 text-netflix-red rounded mb-3">
                        Current Position
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex justify-between items-center mt-1 mb-3">
                      <span className="text-netflix-red font-medium">
                        {exp.company}
                      </span>
                      <span className="text-sm text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Details of the work:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-netflix-red mr-2">•</span>
                          <span className="text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
