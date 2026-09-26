/* eslint-disable no-unused-vars */
import { GraduationCap, School } from "lucide-react";
import { motion } from "motion/react";

const education = [
  {
    icon: GraduationCap,
    period: "2023 — 2027",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Dr. D. Y. Patil Pratishthan’s College of Engineering, Kolhapur",
    result: "8.5 CGPA through 6th semester",
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
      <div className="relative mx-auto max-w-5xl">
        <motion.header initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
            Academic background
          </p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            Education
          </h1>
        </motion.header>

        <div className="relative space-y-5">
          <div className="absolute bottom-8 left-6 top-8 w-px bg-white/15 sm:left-8" aria-hidden="true" />
          {education.map(({ icon: Icon, period, title, institution, status, result }, index) => (
            <motion.article key={title} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.12 }} className="group relative pl-14 sm:pl-20">
              <span className="absolute left-2.5 top-8 z-10 grid size-7 place-items-center rounded-full border border-white/20 bg-[#0d1117] text-emerald-200 sm:left-[1.1rem]"><Icon size={15} /></span>
              <div className="relative rounded-xl border border-white/10 bg-[#0d1117] p-6 transition-colors duration-300 hover:border-emerald-300/30 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{period}</p>
                    <h2 className="font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">{institution}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                  {status && <span className="text-sm text-white/50">{status}</span>}
                  <span className="text-sm font-medium text-emerald-200">{result}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
};
