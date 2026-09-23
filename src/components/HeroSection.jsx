import { ArrowUpRight, Code2, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../assets/murfinal.jpeg";
import { Folder } from "./ui/folder-component";
import GitHubActivity from "./ui/github-activity";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4 pt-14 pb-14"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid lg:grid-cols-[1.35fr_0.85fr] gap-10 lg:gap-12 items-center">
          <div className="space-y-6 -mt-4">
            <p className="text-[0.7rem] md:text-[0.8rem] font-semibold uppercase tracking-[0.32em] text-[#b99cff] opacity-0 animate-fade-in">
              FULL-STACK WEB AND JAVA DEVELOPER
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight opacity-0 animate-fade-in-delay-1">
              <span className="text-white">Ritesh</span>{" "}
              <span className="text-[#a78bfa]">Khilari</span>
            </h1>

            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-white/80 opacity-0 animate-fade-in-delay-2">
              I build reliable full-stack systems that combine thoughtful product
              experiences with scalable backend architecture.
            </p>

            <div className="flex flex-wrap gap-3 opacity-0 animate-fade-in-delay-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-[linear-gradient(135deg,#a78bfa,#8b5cf6)] px-5 py-2.25 font-medium text-base text-white shadow-[0_0_30px_rgba(167,139,250,0.28)] transition-all duration-300 hover:brightness-110"
              >
                Explore selected work <ArrowUpRight size={17} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0d1117]/40 px-4 py-2.25 font-medium text-base text-white/90 transition-colors hover:border-[#a78bfa] hover:text-[#d9c8ff]"
              >
                <span>Resume</span>
                <span className="inline-flex h-10 w-12 items-center justify-center overflow-visible transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <Folder color="blue" size="sm" className="h-10 w-12 scale-[0.22] origin-center opacity-90" />
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4">
              <a href="mailto:riteshkhilari4@gmail.com" className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-[#d9c8ff]">
                <Mail size={15} /> Email
              </a>
              <a href="https://github.com/Technoritesh152005" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-[#d9c8ff]">
                <Github size={15} /> GitHub
              </a>
              <a href="https://leetcode.com/u/Ritesh_Khilari_07/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-[#d9c8ff]">
                <Code2 size={15} /> LeetCode
              </a>
              <a href="https://www.linkedin.com/in/ritesh-khilari-6882342b8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-[#d9c8ff]">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-end opacity-0 animate-fade-in-delay-4">
            <div className="w-full max-w-[400px] overflow-hidden rounded-2xl border border-[#7c8cff]/40 bg-[#0d1117]/90 shadow-[0_0_35px_rgba(139,92,246,0.18)] backdrop-blur-sm">
              <div className="p-4 pb-0">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,#f6f8fa,#d0d7de)]">
                  <img
                    src={profileImage}
                    alt="Ritesh Khilari"
                    className="h-[290px] w-full object-cover object-center object-[center_12%]"
                  />
                </div>
                <div className="mt-4 pb-1 text-2xl font-semibold tracking-tight text-foreground">
                  Ritesh Khilari
                </div>
              </div>

              <div className="border-t border-white/10 px-4 py-4">
                <p className="mb-4 text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
                  ENGINEERING PROFILE
                </p>

                <ul className="space-y-4 text-sm text-foreground/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Final-year CSE student building serious full-stack projects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Full-stack + Java | React, Node.js, Spring Boot, databases, and cloud deployment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>Open to software engineering roles and ready to contribute with a strong team.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-[760px] opacity-0 animate-fade-in-delay-4">
          <div className="mb-3 text-[0.62rem] font-medium uppercase tracking-[0.28em] text-white/60">
            GitHub activity
          </div>
          <GitHubActivity
            username="Technoritesh152005"
            accent={["#0e4429", "#006d32", "#26a641", "#39d353"]}
            cellSize={13}
            months={8}
            showMonths={true}
            className="rounded-2xl border border-white/10 bg-[#0d1117]/60 p-4"
          />
        </div>
      </div>
    </section>
  );
};
