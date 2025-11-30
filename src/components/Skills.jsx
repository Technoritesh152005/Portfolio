import { useState } from "react";
import { cn } from "../lib/util";

const skills = [
  // Frontend
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "REST APIs", level: 70, category: "backend" },
  { name: "Prisma ", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Database
  { name: "SQL", level: 60, category: "database" },
  { name: "Mongodb", level: 60, category: "database" },

  // Tools
  { name: "Git & GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "AWS (Basics)", level: 45, category: "tools" },

  // Core
  { name: "Data Structures and Algorithms", level: 55, category: "core" },
];

const categories = ["all", "frontend", "backend", "database", "tools", "core"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="
        relative py-24 px-4 overflow-hidden
        bg-background
        bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),_transparent_60%)]
        before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:opacity-[0.06] before:pointer-events-none
      "
    >
      {/* Floating glow effect */}
      <div className="absolute -z-10 top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[200px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 backdrop-blur-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-card text-foreground border border-border hover:bg-primary/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, i) => (
            <div
              key={i}
              className="bg-card p-6 rounded-xl border border-border shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:scale-[1.02]"
            >
              <h3 className="font-semibold text-lg mb-3 text-foreground tracking-tight">
                {skill.name}
              </h3>

              {/* PROGRESS BAR */}
              <div className="relative h-2 w-full bg-secondary/60 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-primary rounded-full animate-[grow_1.4s_ease-out_forwards]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* PERCENTAGE */}
              <p className="text-right mt-1 text-sm font-medium text-muted-foreground">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
