/* eslint-disable no-unused-vars */
import { GraduationCap, School, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const education = [
  {
    icon: GraduationCap,
    period: "2023 — 2027",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Dr. D. Y. Patil Pratishthan’s College of Engineering, Kolhapur",
    status: "Currently pursuing",
    result: "8.5 CGPA through 6th semester",
    current: true,
  },
  {
    icon: School,
    period: "2022 — 2023",
    title: "Higher Secondary Education (HSC)",
    institution: "Jai Hind Junior College, Pimpri",
    status: "Maharashtra State Board",
    result: "MHT-CET: 70 percentile",
  },
];

export const Education = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 pb-24 pt-28 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(167,139,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="mx-auto mb-16 max-w-3xl text-center">
         
        </motion.header>

        <div className="relative space-y-5">
          <div className="absolute bottom-8 left-6 top-8 w-px bg-gradient-to-b from-violet-300/70 via-violet-300/25 to-transparent sm:left-8" aria-hidden="true" />
          {education.map(({ icon: Icon, period, title, institution, status, result, current }, index) => (
            <motion.article key={title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.12 }} className="group relative pl-14 sm:pl-20">
              <span className="absolute left-2.5 top-8 z-10 grid size-7 place-items-center rounded-full border border-violet-300/40 bg-[#0d1117] text-violet-200 shadow-[0_0_18px_rgba(167,139,250,0.25)] sm:left-[1.1rem]"><Icon size={15} /></span>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/35 hover:bg-violet-300/[0.04] sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300/80"><span>{period}</span>{current && <><span className="text-white/20">/</span><span className="flex items-center gap-1.5 text-emerald-300/80"><span className="size-1.5 animate-pulse rounded-full bg-emerald-300" />Current</span></>}</div>
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">{institution}</p>
                  </div>
                  <Sparkles size={18} className="shrink-0 text-violet-300/60 transition-transform duration-300 group-hover:rotate-12" />
                </div>
                <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-5"><span className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-sm text-white/65">{status}</span><span className="rounded-full border border-violet-300/20 bg-violet-300/[0.07] px-3 py-1.5 text-sm font-medium text-violet-200">{result}</span></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};
