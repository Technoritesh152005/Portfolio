/* eslint-disable no-unused-vars */
import {
  BrainCircuit,
  Layers3,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import profileImage from "../assets/murfinal.jpeg";

const capabilities = [
  {
    number: "01",
    icon: Layers3,
    title: "Full-stack product development",
    description:
      "Building responsive React applications backed by well-structured APIs, authentication, databases, and the engineering details that turn features into usable products.",
    tags: ["React", "Next.js", "APIs", "Auth"],
  },
  {
    number: "02",
    icon: ServerCog,
    title: "Backend & system engineering",
    description:
      "Working with Java/Spring Boot and Node.js/Express, PostgreSQL, Prisma, Redis, queues, caching, APIs, and system-design concepts to build reliable backend services.",
    tags: ["Spring Boot", "Node.js", "Redis", "PostgreSQL"],
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI & RAG systems",
    description:
      "Building AI-powered applications using RAG, embeddings, semantic search, document processing, vector databases, and grounded responses with an emphasis on useful and traceable outputs.",
    tags: ["RAG", "Embeddings", "Semantic search", "Vector DBs"],
  },
];

export const About = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 pb-24 pt-28 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(167,139,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[38rem] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div className="mb-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-violet-300">
            <span className="h-px w-10 bg-violet-400" />
            About the engineer
          </div>
          <h1 className="max-w-3xl text-5xl font-bold leading-[0.96] tracking-tight sm:text-7xl">
            Building software
            <span className="block text-violet-300">with purpose.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-white/65 sm:text-2xl">
            A full-stack developer who cares about both the product and the
            system behind it.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:gap-20">
          <motion.section
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-center gap-3 text-sm text-white/45">
              <Sparkles size={16} className="text-violet-300" />
              <span>From idea to architecture to deployment</span>
            </div>
            <div className="space-y-6 text-[1.05rem] leading-8 text-white/70">
              <p>
                I&apos;m <strong className="font-semibold text-white">Ritesh Khilari</strong>,
                a Full-Stack Developer focused on building practical, scalable
                web applications and backend systems. I enjoy understanding how
                things work beneath the surface, from user interfaces and APIs
                to databases, caching, queues, and deployment.
              </p>
              <p>
                My work spans <strong className="font-medium text-white/90">React, Next.js, JavaScript, Node.js, Express.js, Java, Spring Boot, PostgreSQL, Prisma, Redis, Docker, and AI/RAG systems.</strong>{" "}
                I&apos;ve built projects involving authentication, REST and
                GraphQL APIs, asynchronous processing, semantic search,
                real-time systems, and AI-powered workflows.
              </p>
              <p>
                I like taking a problem from <span className="text-violet-300">idea</span>{" "}
                <span className="text-white/35">-&gt;</span> architecture{" "}
                <span className="text-white/35">-&gt;</span> implementation{" "}
                <span className="text-white/35">-&gt;</span> deployment, while
                keeping the code understandable and the system reliable.
              </p>
            </div>

          </motion.section>

          <motion.figure
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[340px] lg:mx-0 lg:justify-self-end"
          >
            <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-violet-300/35" aria-hidden="true" />
            <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-bl-2xl border-b-2 border-l-2 border-cyan-300/35" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0d1117] p-2 shadow-[0_24px_70px_rgba(139,92,246,0.16)]">
              <img
                src={profileImage}
                alt="Ritesh Khilari"
                className="aspect-[4/5] w-full rounded-xl border border-white/10 object-cover object-center"
              />
            </div>
          </motion.figure>
        </div>

        <section className="mt-28">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-violet-300">What I build</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Engineering across the stack.</h2>
            </div>
            <p className="hidden max-w-xs text-right text-sm leading-6 text-white/45 md:block">Useful systems, clear boundaries, and a product mindset at every layer.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {capabilities.map(({ number, icon: Icon, title, description, tags }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-violet-300/35"
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-violet-200 transition-transform group-hover:rotate-6">
                    <Icon size={21} />
                  </span>
                  <span className="font-mono text-xs text-white/25">{number}</span>
                </div>
                <h3 className="max-w-xs text-xl font-semibold leading-snug">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-white/55">{description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[0.68rem] text-white/45">{tag}</span>
                  ))}
                </div>
                <div className="pointer-events-none absolute -bottom-12 -right-8 size-32 rounded-full bg-violet-400/10 blur-3xl transition-opacity group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-white/45"
        >
          Currently looking for software engineering opportunities where I can contribute to real products, work with strong engineers, and continue growing across the full stack.
        </motion.div>
      </div>
    </main>
  );
};
