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
    role: " Full Stack Developer Engineer",
    period: "Feb 2024 - Present",
    description:
      "Leading development of enterprise web applications using React, Node.js, and MongoDB services for Virtual Globe Technology Pvt. Ltd.",
    achievements: [
      "Developed the frontend of the TenderWin.ai platform using Next.js, React, and Tailwind CSS for a seamless and responsive UI.",
      "Implemented role-based authentication and authorization to enhance security across user access levels.",
      "Designed and implemented the homepage, user profile pages, edit profile functionality, and authentication modules including signup and login.",
      "Optimized API integrations for real-time tender updates and user notifications.",
      "Integrated Redux Toolkit for efficient state management, ensuring smooth user interactions across the platform.",
      "Collaborated closely with frontend and backend developers to integrate bidding analytics and enhance tender tracking functionality",
      "Developed reusable UI components to improve maintainability and consistency across the platform.",
    ],
    current: true,
  },
  {
    id: 2,
    company: "Virtual Globe Technology",
    role: " Full Stack Developer Intern",
    period: "Oct 2023 - Feb 2024",
    description:
      "Developed and maintained various web applications with React, Express, and MongoDB for e-commerce  clients.",
    achievements: [
      "Developed full-stack web applications with React for frontend UI and Express.js with Node.js for backend services.",
      "Designed and implemented RESTful APIs with Express.js and integrated MongoDB as the primary database for efficient data storage and retrieval.",
      "Gained hands-on experience with Redux Toolkit for state management, ensuring smooth data handling across components.",
      "Implemented authentication and authorization using JWT and bcrypt, improving security for user logins and role-based access control.",
      // "Built dynamic dashboards and user profile pages with real-time data updates using WebSockets and React Query.",
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
