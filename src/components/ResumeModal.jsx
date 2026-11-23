/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Zap,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export const ResumeModal = ({ isOpen, onClose }) => {
  const [activeView, setActiveView] = useState("overview"); // 'overview' | 'pdf'
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (showEmailPopup) {
          setShowEmailPopup(false);
        } else {
          onClose();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      setShowEmailPopup(false);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, showEmailPopup]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("riteshkhilari.dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090d]/85 backdrop-blur-md"
        />

        {/* Modal Shell */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ type: "spring", damping: 26, stiffness: 280 }}
          className="relative flex flex-col md:flex-row w-full max-w-5xl h-[90vh] max-h-[780px] rounded-2xl border border-white/10 bg-[#0b0e14] text-white shadow-[0_20px_70px_rgba(0,0,0,0.85)] overflow-hidden z-10"
        >
          {/* Close button for mobile / top-right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 grid size-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          {/* ----------------- LEFT SIDEBAR ----------------- */}
          <aside className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-white/10 bg-[#090c10] p-5 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Profile Header */}
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-[#a78bfa]">
                    RK
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white leading-tight">
                      Ritesh Khilari
                    </h3>
                    <p className="text-[0.7rem] text-white/50">
                      Full-Stack & Backend
                    </p>
                  </div>
                </div>
              </div>

              {/* View Switcher Navigation */}
              <div className="space-y-1.5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40 px-2 mb-2">
                  View Mode
                </p>

                <button
                  onClick={() => setActiveView("overview")}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeView === "overview"
                      ? "bg-white/[0.08] text-white border border-white/15 shadow-sm"
                      : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Zap size={14} className={activeView === "overview" ? "text-[#a78bfa]" : "text-white/40"} />
                    <span>30-Second Overview</span>
                  </span>
                  {activeView === "overview" && (
                    <span className="size-1.5 rounded-full bg-[#a78bfa]" />
                  )}
                </button>

                <button
                  onClick={() => setActiveView("pdf")}
                  className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    activeView === "pdf"
                      ? "bg-white/[0.08] text-white border border-white/15 shadow-sm"
                      : "text-white/60 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <FileText size={14} className={activeView === "pdf" ? "text-[#a78bfa]" : "text-white/40"} />
                    <span>Original PDF</span>
                  </span>
                  {activeView === "pdf" && (
                    <span className="size-1.5 rounded-full bg-[#a78bfa]" />
                  )}
                </button>
              </div>

              {/* PDF Actions */}
              <div className="space-y-1 border-t border-white/10 pt-4">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/40 px-2 mb-2">
                  Document
                </p>

                <a
                  href="/resume.pdf"
                  download="Ritesh_Khilari_Resume.pdf"
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <Download size={13} className="text-white/50" />
                  <span>Download PDF</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <ExternalLink size={13} className="text-white/50" />
                  <span>Open in New Tab</span>
                </a>
              </div>
            </div>

            {/* Sidebar Bottom: Natural Get in Touch Action */}
            <div className="border-t border-white/10 pt-4 mt-6">
              <button
                onClick={() => setShowEmailPopup(true)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/[0.07] border border-white/15 px-3 py-2.5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#a78bfa] hover:text-black hover:border-transparent"
              >
                <Mail size={13} />
                <span>Contact / Get in Touch</span>
              </button>
              <p className="mt-2 text-center text-[0.65rem] text-white/40 font-mono">
                riteshkhilari.dev@gmail.com
              </p>
            </div>
          </aside>

          {/* ----------------- RIGHT MAIN CONTENT ----------------- */}
          <main className="relative flex-1 overflow-y-auto p-5 sm:p-7 md:p-8 bg-[#0b0e14]">
            <AnimatePresence mode="wait">
              {activeView === "overview" ? (
                <OverviewPanel
                  key="overview"
                  onOpenContact={() => setShowEmailPopup(true)}
                  onViewPdf={() => setActiveView("pdf")}
                />
              ) : (
                <PdfPanel key="pdf" />
              )}
            </AnimatePresence>
          </main>

          {/* ----------------- NATURAL EMAIL CONTACT POPUP ----------------- */}
          <AnimatePresence>
            {showEmailPopup && (
              <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full max-w-md rounded-2xl border border-white/15 bg-[#0f131a] p-6 text-white shadow-2xl"
                >
                  <button
                    onClick={() => setShowEmailPopup(false)}
                    className="absolute top-4 right-4 grid size-7 place-items-center rounded-lg text-white/50 hover:bg-white/10 hover:text-white"
                  >
                    <X size={15} />
                  </button>

                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="grid size-8 place-items-center rounded-xl bg-[#a78bfa]/15 border border-[#a78bfa]/30 text-[#a78bfa]">
                      <Mail size={15} />
                    </span>
                    <div>
                      <h4 className="text-base font-semibold leading-tight">
                        Get in Touch
                      </h4>
                      <p className="text-xs text-white/50">
                        Open for full-stack & backend opportunities
                      </p>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-white/70 mb-5">
                    Whether you have an engineering role, internship opportunity, or want to talk backend architecture, feel free to reach out directly.
                  </p>

                  <div className="space-y-2.5">
                    <a
                      href="mailto:riteshkhilari.dev@gmail.com?subject=Interview%20Invitation%20-%20Ritesh%20Khilari&body=Hi%20Ritesh,%0D%0A%0D%0AWe%20came%20across%20your%20portfolio%20and%20resume%20and%20would%20love%20to%20connect%20for%20an%20engineering%20role.%0D%0A%0D%0ABest%20regards,"
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#a78bfa] px-4 py-2.5 text-xs font-semibold text-black transition-all hover:bg-[#b99cff]"
                    >
                      <Mail size={13} />
                      <span>Open Email Client (Pre-filled)</span>
                    </a>

                    <button
                      onClick={handleCopyEmail}
                      className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {copied ? (
                        <>
                          <Check size={13} className="text-[#a78bfa]" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy: riteshkhilari.dev@gmail.com</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between text-[0.7rem] text-white/40 font-mono">
                    <span>Phone: +91 8431398279</span>
                    <span>Kolhapur / Pune, India</span>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// -------------------------------------------------------------
// PANEL 1: Minimal, High-Signal 30-Second Overview
// -------------------------------------------------------------
const OverviewPanel = ({ onOpenContact, onViewPdf }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="space-y-6 max-w-3xl"
    >
      {/* Top Banner: Quick Identity */}
      <div>
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[#a78bfa] mb-1.5">
          30-Second Recruiter Summary
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Ritesh Khilari
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70">
          Final-year Computer Science student specializing in scalable backend architectures,
          distributed systems, and full-stack engineering. Strong background in Java, Fastify,
          Redis, PostgreSQL, and AI vector search.
        </p>
      </div>

      {/* 3 Key Stats (Subtle, Monochromatic) */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center sm:text-left">
          <p className="text-[0.65rem] font-medium uppercase tracking-wider text-white/40">
            Problem Solving
          </p>
          <p className="mt-1 font-mono text-lg sm:text-xl font-bold text-white">
            250+ Solved
          </p>
          <p className="text-[0.65rem] text-white/50">LeetCode (Graphs, DP, DSA)</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center sm:text-left">
          <p className="text-[0.65rem] font-medium uppercase tracking-wider text-white/40">
            Education
          </p>
          <p className="mt-1 font-mono text-lg sm:text-xl font-bold text-white">
            8.3 / 10 CGPA
          </p>
          <p className="text-[0.65rem] text-white/50">B.Tech CSE (2023 – 2027)</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center sm:text-left">
          <p className="text-[0.65rem] font-medium uppercase tracking-wider text-white/40">
            Open Source
          </p>
          <p className="mt-1 font-mono text-lg sm:text-xl font-bold text-white">
            Merged PR
          </p>
          <p className="text-[0.65rem] text-white/50">freeCodeCamp Contributor</p>
        </div>
      </div>

      {/* 3 Core Projects (Only What Matters: Impact & Numbers) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
            Core Engineering Proof Points
          </h4>
          <button
            onClick={onViewPdf}
            className="text-xs text-[#a78bfa] hover:underline flex items-center gap-1"
          >
            Full details in PDF <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Project 1: DocuFlux */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h5 className="text-sm font-semibold text-white">
                DocuFlux — Multi-Source RAG Assistant
              </h5>
              <span className="rounded bg-white/5 border border-white/10 px-1.5 py-0.5 text-[0.62rem] text-white/60">
                2026
              </span>
            </div>
            <span className="text-[0.7rem] font-mono text-white/40">
              Fastify • Pinecone • Redis • BullMQ
            </span>
          </div>
          <ul className="mt-2 space-y-1 text-xs text-white/70">
            <li className="flex items-start gap-2">
              <span className="text-[#a78bfa]">•</span>
              <span>
                Cut repeat query latency by <strong>~3s</strong> using multi-layer Redis caching (avg response: ~3.5s).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#a78bfa]">•</span>
              <span>
                Improved retrieval hit rate by <strong>~16%</strong> (to 85%, 0.77 MRR) combining semantic and keyword search via Reciprocal Rank Fusion.
              </span>
            </li>
          </ul>
        </div>

        {/* Project 2: Melodis */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h5 className="text-sm font-semibold text-white">
                Melodis — Realtime Dating Platform
              </h5>
              <span className="rounded bg-white/5 border border-white/10 px-1.5 py-0.5 text-[0.62rem] text-white/60">
                2026
              </span>
            </div>
            <span className="text-[0.7rem] font-mono text-white/40">
              Next.js • Fastify • PostGIS • Socket.IO • Docker
            </span>
          </div>
          <ul className="mt-2 space-y-1 text-xs text-white/70">
            <li className="flex items-start gap-2">
              <span className="text-[#a78bfa]">•</span>
              <span>
                Built discovery pipeline using <strong>PostGIS geospatial search</strong> and <strong>pgvector similarity ranking</strong>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#a78bfa]">•</span>
              <span>
                Concurrency-safe chat with <strong>Socket.IO + Redis fan-out</strong> and identity verification with AWS Rekognition.
              </span>
            </li>
          </ul>
        </div>

        {/* Project 3: TheLlmGateway */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <h5 className="text-sm font-semibold text-white">
                TheLlmGateway — Multi-Tenant LLM Gateway
              </h5>
              <span className="rounded bg-white/5 border border-white/10 px-1.5 py-0.5 text-[0.62rem] text-white/60">
                In Progress
              </span>
            </div>
            <span className="text-[0.7rem] font-mono text-white/40">
              Java • Spring Boot WebFlux • Kafka • Redis
            </span>
          </div>
          <ul className="mt-2 space-y-1 text-xs text-white/70">
            <li className="flex items-start gap-2">
              <span className="text-[#a78bfa]">•</span>
              <span>
                Unified API across OpenAI, Anthropic, and Groq with distributed rate limiting and automatic failover.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#a78bfa]">•</span>
              <span>
                Asynchronous event processing and idempotent usage metering via Kafka and Razorpay webhooks.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Tech Stack Strip */}
      <div className="border-t border-white/10 pt-4">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-white/40 mb-2">
          Core Technologies
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Java",
            "Spring Boot",
            "Node.js",
            "Fastify",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kafka",
            "Socket.IO",
            "pgvector",
            "React",
            "Next.js",
            "AWS",
            "Git & CI/CD",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[0.68rem] text-white/75"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-xs text-white/50">
          Ready for full-time backend or full-stack engineering roles.
        </span>
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#a78bfa] px-3.5 py-1.5 text-xs font-semibold text-black transition-all hover:bg-[#b99cff]"
        >
          <Mail size={13} />
          <span>Connect with Ritesh</span>
        </button>
      </div>
    </motion.div>
  );
};

// -------------------------------------------------------------
// PANEL 2: Clean Native PDF Viewer
// -------------------------------------------------------------
const PdfPanel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full space-y-3"
    >
      <div className="flex items-center justify-between pb-1 border-b border-white/10">
        <div className="flex items-center gap-2">
          <FileText size={15} className="text-[#a78bfa]" />
          <span className="text-xs font-semibold text-white">
            Original Resume PDF
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Ritesh_Khilari_Resume.pdf"
            className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[0.7rem] text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            <Download size={11} /> Download
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[0.7rem] text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            <ExternalLink size={11} /> New Tab
          </a>
        </div>
      </div>

      <div className="flex-1 w-full min-h-[500px] rounded-xl border border-white/10 bg-black/40 overflow-hidden">
        <iframe
          src="/resume.pdf#toolbar=1"
          title="Ritesh Khilari Resume"
          className="w-full h-full min-h-[540px] border-none"
        />
      </div>
    </motion.div>
  );
};
