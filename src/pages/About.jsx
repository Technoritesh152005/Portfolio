import { Code, User, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-24 px-4 relative bg-secondary/20 backdrop-blur-xl border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - TEXT */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
              Passionate Full Stack Web Developer
            </h3>

            <p className="text-muted-foreground">
              I'm Ritesh Khilari, a developer who turns ideas into functional, elegant, and efficient digital experiences. 
              I enjoy building things that live on the internet — from minimal user interfaces to complex full-stack systems.
            </p>

            <p className="text-muted-foreground">
              My journey began with HTML, CSS, and JavaScript, but curiosity pushed me deeper into the world of scalable architecture, 
              backend APIs, databases, and modern frameworks like React, Node.js, Prisma, and GraphQL. I don’t just code — I understand 
              how systems connect, perform, and evolve.
            </p>

            <p className="text-muted-foreground">
              My aim is not just to build applications, but to create experiences that feel intuitive, thoughtful, and reliable. 
              I’m working toward becoming a software engineer capable of building real-world solutions that positively affect people's lives.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:justify-start">
              <a href="/contact" className="cosmic-button">
                Get in Touch
              </a>
            
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-2 sm:ml-4 rounded-full border border-primary text-primary font-medium
                hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid gap-6">

            <AboutCard
              icon={<Code className="text-primary h-6 w-6" />}
              title="Web Development"
              desc="Creating responsive and visually appealing interfaces using modern frontend technologies and clean UI patterns."
            />

            <AboutCard
              icon={<User className="text-primary h-6 w-6" />}
              title="Full Stack Development"
              desc="Building complete web solutions by handling frontend components, backend logic, APIs, and databases — ensuring smooth and scalable systems."
            />

            <AboutCard
              icon={<Briefcase className="text-primary h-6 w-6" />}
              title="Project Experience"
              desc="Developing real projects to sharpen my problem-solving skills, explore new technologies, and understand how features evolve from idea to deployment."
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
