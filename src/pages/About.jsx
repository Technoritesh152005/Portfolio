import { Code, User, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-24 px-4 relative bg-secondary/20 backdrop-blur-xl border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-sm uppercase tracking-[0.24em] text-primary mb-4">About the engineer</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Building systems with <span className="text-primary">care and intent.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - TEXT */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              A product-minded developer who thinks beyond the happy path.
            </h3>

            <p className="text-muted-foreground">
              I'm Ritesh Khilari, a Full-Stack Web and Java Developer focused on
              building reliable systems from interface to infrastructure. I care
              about the details users feel and the architecture teams have to maintain.
            </p>

            <p className="text-muted-foreground">
              My work spans React, Node.js, Fastify, Java, Spring Boot, PostgreSQL,
              Redis, AI workflows, and cloud deployment. I enjoy turning complex
              requirements into clear boundaries, measurable behavior, and useful products.
            </p>

            <p className="text-muted-foreground">
              I am looking for software engineering roles where I can contribute
              across the stack, learn from strong teams, and keep raising the quality
              bar for the systems I help ship.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:justify-start">
              <a href="/contact" className="cosmic-button">
                Let’s talk engineering
              </a>
            
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-2 sm:ml-4 rounded-full border border-primary text-primary font-medium
                hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Download resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid gap-6">

            <AboutCard
              icon={<Code className="text-primary h-6 w-6" />}
              title="Full-stack product work"
              desc="Thoughtful React experiences backed by APIs, data models, validation, and the operational details that make features dependable."
            />

            <AboutCard
              icon={<User className="text-primary h-6 w-6" />}
              title="Backend architecture"
              desc="Java and Spring Boot, Node.js and Fastify, PostgreSQL, Redis, queues, realtime systems, caching, and performance-aware design."
            />

            <AboutCard
              icon={<Briefcase className="text-primary h-6 w-6" />}
              title="Reliable AI systems"
              desc="RAG, embeddings, semantic search, evaluation, and grounded outputs designed to be traceable instead of magical."
            />

          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, desc }) => (
  <div className="rounded-xl p-6 bg-card/40 backdrop-blur-md border border-primary/20 shadow-md 
                  hover:shadow-primary/30 transition-all duration-300 card-hover">
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-primary/10">{icon}</div>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  </div>
);
