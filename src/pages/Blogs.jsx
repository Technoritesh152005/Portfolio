import { motion } from "motion/react";

export const Blogs = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 pb-24 pt-32 text-white sm:px-6">
            <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(167,139,250,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.08)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />
            <div className="pointer-events-none absolute left-1/2 top-16 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-6xl">
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-12 max-w-3xl"
                >
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                        Learning log
                    </p>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        What I&apos;m learning
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                        I&apos;m exploring new technologies and documenting what I learn.
                        More learning notes will be added here soon.
                    </p>
                </motion.header>
            </div>
        </main>
    );
};