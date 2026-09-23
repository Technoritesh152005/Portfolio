import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 pt-24 pb-16"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-20 items-end">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.24em] text-primary opacity-0 animate-fade-in">
              Full-Stack Web and Java Developer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.96] opacity-0 animate-fade-in-delay-1">
              Ritesh <span className="text-primary">Khilari</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-2xl opacity-0 animate-fade-in-delay-2">
              I build reliable full-stack systems that combine thoughtful product
              experiences with scalable backend architecture.
            </p>

            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-4">
              <a href="/projects" className="cosmic-button inline-flex items-center gap-2">
                Explore selected work <ArrowUpRight size={17} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-2 font-medium transition-colors hover:border-primary hover:text-primary">
                Resume <Download size={16} />
              </a>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4">
              <a href="mailto:riteshkhilari4@gmail.com" className="inline-flex items-center gap-2 hover:text-primary"><Mail size={15} /> Email</a>
              <a href="https://github.com/Technoritesh152005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Github size={15} /> GitHub</a>
              <a href="https://www.linkedin.com/in/ritesh-khilari-6882342b8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>

          <div className="border-l border-primary/40 pl-6 lg:mb-2 opacity-0 animate-fade-in-delay-4">
            <figure className="relative w-full max-w-[19rem] mb-10">
              <div className="absolute -top-3 -right-3 h-full w-full border border-primary/40" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden border-8 border-card bg-card shadow-2xl">
                <img
                  src="/WhatsApp%20Image%202026-09-23%20at%201.08.51%20PM.jpeg"
                  alt="Ritesh Khilari"
                  className="h-full w-full object-cover object-[58%_58%] grayscale-[15%] transition duration-500 hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Ritesh Khilari</span>
                <span>01 / 04</span>
              </figcaption>
            </figure>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Currently focused on</p>
            <div className="space-y-4 text-lg">
              <p><span className="text-primary mr-3">01</span> Java and Spring Boot</p>
              <p><span className="text-primary mr-3">02</span> Node.js and distributed systems</p>
              <p><span className="text-primary mr-3">03</span> AI applications and RAG</p>
              <p><span className="text-primary mr-3">04</span> Cloud deployment and security</p>
            </div>
          </div>
        </div>

        <a href="#about" className="mt-20 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors opacity-0 animate-fade-in-delay-4">
          About the engineer <ArrowDown size={16} />
        </a>
      </div>

      
    </section>
  );
};
