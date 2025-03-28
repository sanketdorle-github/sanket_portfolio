import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: "JavaScript", level: 95, color: "bg-yellow-500" },
  { name: "React", level: 92, color: "bg-blue-400" },
  { name: "TypeScript", level: 88, color: "bg-blue-600" },
  { name: "Next.js", level: 90, color: "bg-gray-800" },
  { name: "HTML/CSS", level: 96, color: "bg-orange-500" },
  { name: "Tailwind CSS", level: 94, color: "bg-cyan-500" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 90, color: "bg-green-600" },
  { name: "Express", level: 88, color: "bg-gray-600" },
  { name: "MongoDB", level: 85, color: "bg-green-500" },
  { name: "PostgreSQL", level: 82, color: "bg-blue-500" },
  // { name: "Python", level: 80, color: "bg-yellow-600" },
  // { name: "GraphQL", level: 78, color: "bg-pink-600" },
];

const otherSkills: Skill[] = [
  // { name: "Docker", level: 85, color: "bg-blue-500" },
  { name: "Git/GitHub", level: 92, color: "bg-gray-700" },
  { name: "AWS", level: 80, color: "bg-yellow-500" },
  { name: "CI/CD", level: 84, color: "bg-green-600" },
  // { name: "TDD", level: 82, color: "bg-red-500" },
  { name: "Agile", level: 88, color: "bg-red-400" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-netflix-black relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-netflix-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-netflix-red/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-netflix-red uppercase tracking-wide text-sm font-medium">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
            Technical Skills
          </h2>
          <p className="text-gray-400 mt-4">
            A comprehensive overview of my technical skills and proficiency
            levels across various technologies, frameworks, and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-netflix-gray/40 backdrop-blur-sm p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-1000 ease-out",
                        skill.color
                      )}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-netflix-gray/40 backdrop-blur-sm p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-1000 ease-out",
                        skill.color
                      )}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200 + 300}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-netflix-gray/40 backdrop-blur-sm p-6 rounded-xl border border-white/5">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Tools & Methods
            </h3>
            <div className="space-y-6">
              {otherSkills.map((skill, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100 + 600}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all duration-1000 ease-out",
                        skill.color
                      )}
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200 + 600}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
