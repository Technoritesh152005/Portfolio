/* eslint-disable no-unused-vars */
import {
  ArrowUpRight,
  Github,
  Globe2,
} from "lucide-react";
import { motion } from "motion/react";
import melodisPreview from "../assets/image.png";

const stack = ["Next.js", "JavaScript", "Fastify", "PostgreSQL", "Redis", "Socket.IO"];

export const Projects = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 pb-24 pt-28 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(244,63,94,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.07)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[130px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-rose-300"><span className="h-px w-10 bg-rose-400" />Selected work<span className="h-px w-10 bg-rose-400" /></div>
          <h1 className="text-5xl font-bold leading-[0.96] tracking-tight sm:text-7xl">Projects with a<span className="block text-rose-300">point of view.</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">A quick overview of the products I build. Open a project later to explore the deeper engineering story.</p>
        </motion.header>

        <div className="grid justify-items-center sm:grid-cols-2 lg:grid-cols-3">
          <motion.article id="melodis" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} whileHover={{ y: -8, rotateX: 1.5, rotateY: -1.5 }} transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }} className="group relative w-full max-w-[460px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_18px_60px_rgba(244,63,94,0.07)] transition-[border-color,box-shadow] duration-500 hover:border-rose-300/40 hover:shadow-[0_24px_70px_rgba(244,63,94,0.18)]">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#180a13]">
              <motion.img src={melodisPreview} alt="Melodis dating platform interface" className="h-full w-full object-cover object-top" whileHover={{ scale: 1.07 }} transition={{ duration: 0.8, ease: "easeOut" }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090d]/55 via-transparent to-transparent" />
              <div className="pointer-events-none absolute -inset-y-10 -left-1/2 w-1/3 rotate-12 bg-white/20 blur-2xl opacity-0 transition-all duration-700 group-hover:left-[115%] group-hover:opacity-100" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-white/75 backdrop-blur-md">Featured</span>
            </div>
            <div className="p-5">
              <div className="mb-2 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">Melodis</h2>
                <a href="https://melodis.in" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-emerald-200"><span className="size-1.5 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />Live</a>
              </div>
              <p className="text-sm leading-6 text-white/55">AI-assisted dating platform for verified profiles, compatibility discovery, safer matching, and realtime connection.</p>
              <div className="mt-5 flex flex-wrap gap-2">{stack.map((technology) => <span key={technology} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-white/65">{technology}</span>)}</div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-4">
                  <a href="https://melodis.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"><Globe2 size={17} />Live</a>
                  <a href="https://github.com/Technoritesh152005/Dating_Web_App" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white"><Github size={17} />GitHub</a>
                </div>
                <a href="/projects/melodis_detail" className="inline-flex items-center gap-1.5 text-sm font-medium text-rose-300 transition-colors hover:text-rose-200">Expand details<ArrowUpRight size={15} /></a>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </main>
  );
};
