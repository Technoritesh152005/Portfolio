/* eslint-disable no-unused-vars */
import {
  AWS,
  Docker,
  Figma,
  Git,
  GraphQL,
  HTML5,
  Java,
  JavaScript,
  Jest,
  Linux,
  MongoDB,
  NextJs,
  NodeJs,
  PostgreSQL,
  Postman,
  Prisma,
  React,
  Redis,
  Spring,
  TailwindCSS,
} from "developer-icons";
import { motion } from "motion/react";

const groups = [
  {
    label: "Frontend engineering",
    description: "Interfaces that stay clear, responsive, and maintainable.",
    skills: [
      ["Next.js", NextJs], ["React", React], ["JavaScript", JavaScript],
      ["HTML5", HTML5], ["Tailwind CSS", TailwindCSS],
    ],
  },
  {
    label: "Backend and APIs",
    description: "Services, contracts, validation, and realtime application behavior.",
    skills: [
      ["Node.js", NodeJs], ["Fastify"], ["Java", Java], ["Spring Boot", Spring],
      ["REST APIs"], ["GraphQL", GraphQL], ["Postman", Postman],
    ],
  },
  {
    label: "Data and distributed systems",
    description: "Reliable persistence, caching, search, and asynchronous workflows.",
    skills: [
      ["PostgreSQL", PostgreSQL], ["Prisma", Prisma], ["MongoDB", MongoDB],
      ["Redis", Redis], ["PostGIS"], ["pgvector"], ["BullMQ"], ["Socket.IO"],
    ],
  },
  {
    label: "System design",
    description: "Thinking from requirements to boundaries, tradeoffs, and operations.",
    skills: [
      ["High-Level Design (HLD)"], ["Low-Level Design (LLD)"],
      ["Microservice architecture"], ["Database design"], ["API design"],
      ["Caching and queues"], ["Realtime systems"],
    ],
  },
  {
    label: "Infrastructure and workflow",
    description: "Shipping software with repeatable development and deployment practices.",
    skills: [
      ["Docker", Docker], ["Docker Compose"], ["AWS", AWS], ["Caddy"],
      ["Linux", Linux], ["Git", Git], ["GitHub"], ["Jest", Jest], ["Figma", Figma],
    ],
  },
];

export const Skills = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 pb-24 pt-28 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(167,139,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[440px] w-[760px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-violet-300">Engineering toolkit</p>
          <h1 className="font-heading text-5xl font-bold leading-[0.96] tracking-tight sm:text-7xl">Skills for building<span className="block text-violet-300">the whole system.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">A practical mix of product development, backend engineering, system design, and infrastructure thinking.</p>
        </motion.header>

        <div className="space-y-5">
          {groups.map(({ label, description, skills }, index) => (
            <motion.section key={label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: index * 0.05 }} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="mb-2 font-mono text-xs tracking-[0.2em] text-violet-300/75">0{index + 1}</p><h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">{label}</h2></div>
                <p className="max-w-sm text-sm leading-6 text-white/40">{description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map(([name, Icon]) => (
                  <div key={name} className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/15 px-3.5 py-2.5 text-sm text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/35 hover:bg-violet-300/[0.05]">
                    {Icon ? <Icon className="size-6 shrink-0 transition-transform duration-300 group-hover:scale-110" /> : <span className="grid size-6 shrink-0 place-items-center rounded-md border border-violet-300/20 bg-violet-300/10 font-mono text-[0.58rem] text-violet-200">&lt;/&gt;</span>}
                    {name}
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
};
