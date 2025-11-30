import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Ritesh
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Khilari
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            I'm a passionate full stack web developer who loves creating modern and
            responsive web applications using clean code, intuitive design,
            and efficient backend logic.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="/projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};
