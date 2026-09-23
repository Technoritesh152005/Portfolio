/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import architectureDiagram from "../assets/melodis_arch.png";
import {
  AWS,
  Docker,
  Gemini,
  Google,
  JavaScript,
  NextJs,
  NodeJs,
  PostgreSQL,
  Prisma,
  React,
  Redis,
  ReSend,
  TailwindCSS,
} from "developer-icons";

const sections = [
  { id: "introduction", label: "Introduction", icon: Sparkles },
  { id: "architecture", label: "Architecture", icon: Layers3 },
  { id: "features", label: "Features", icon: CheckCircle2 },
  { id: "stack", label: "Tech stack", icon: GitBranch },
  { id: "optimization", label: "Optimization", icon: Zap },
  { id: "security", label: "Security", icon: LockKeyhole },
  { id: "learnings", label: "Learnings", icon: BrainCircuit },
];

const stackGroups = [
  {
    label: "Frontend",
    description: "Product interface and client experience",
    technologies: [
      { name: "Next.js", icon: NextJs },
      { name: "React", icon: React },
      { name: "JavaScript", icon: JavaScript },
      { name: "Tailwind CSS", icon: TailwindCSS },
    ],
  },
  {
    label: "Backend and realtime",
    description: "Application services and live communication",
    technologies: [
      { name: "Node.js", icon: NodeJs },
      { name: "Fastify" },
      { name: "Socket.IO" },
    ],
  },
  {
    label: "Data and search",
    description: "Transactional, spatial, and semantic data",
    technologies: [
      { name: "PostgreSQL", icon: PostgreSQL },
      { name: "Prisma", icon: Prisma },
      { name: "PostGIS" },
      { name: "pgvector" },
      { name: "Redis", icon: Redis },
      { name: "RedisBloom" },
    ],
  },
  {
    label: "Async processing",
    description: "Queues, workers, and scheduled operations",
    technologies: [
      { name: "BullMQ" },
      { name: "Redis", icon: Redis },
    ],
  },
  {
    label: "Infrastructure and deployment",
    description: "Containers, hosting, routing, and storage",
    technologies: [
      { name: "Docker", icon: Docker },
      { name: "Docker Compose" },
      { name: "Caddy" },
      { name: "AWS", icon: AWS },
      { name: "S3-compatible storage" },
    ],
  },
  {
    label: "AI and external providers",
    description: "Personalization, verification, identity, and messaging",
    technologies: [
      { name: "Google Gemini Embeddings", icon: Gemini },
      { name: "AWS Rekognition", icon: AWS },
      { name: "Groq" },
      { name: "Resend", icon: ReSend },
      { name: "Google OAuth", icon: Google },
      { name: "JWT" },
    ],
  },
];

const content = {
  introduction: {
    eyebrow: "Melodis / project introduction",
    title: "A full-stack dating platform built like a real product.",
    body: "Melodis is a production-oriented, AI-assisted dating platform built as a modular Node.js monorepo. Separate services handle the API, realtime chat, worker jobs, and shared infrastructure, creating a complete experience from signup and profile verification to discovery, matching, and conversation.",
    items: [
      "Next.js and React frontend with a Fastify Node.js API",
      "PostgreSQL with Prisma, PostGIS, and pgvector for relational, spatial, and semantic data",
      "Redis for caching, queues, presence, and Bloom filtering with BullMQ workers",
      "Verified onboarding, location-aware discovery, swipe and mutual-match logic",
      "Realtime match chat with presence, read receipts, media, voice bios, and attachments",
      "Safety controls, AI-assisted personalization, Docker deployment, and S3-compatible storage",
    ],
  },
  purpose: {
    eyebrow: "01 / purpose",
    title: "Make connection more intentional.",
    body: "The product is designed for people who want more context and confidence before connecting. Discovery considers preferences, distance, verification, and compatibility rather than treating every profile as an interchangeable swipe.",
  },
  architecture: {
    eyebrow: "02 / architecture",
    title: "A modular production architecture behind one product experience.",
    body: "Clients connect through Caddy, which handles HTTPS, TLS termination, redirects, and routing to isolated Docker services. The web, API, realtime, and worker services communicate over an internal Docker network while PostgreSQL and Redis remain private infrastructure dependencies.",
    details: [
      { title: "Public boundary", body: "Caddy is the only service exposed to the VPS. It terminates TLS, redirects HTTP to HTTPS, and routes frontend, API, and WebSocket traffic to the correct internal service. Application and database ports remain private inside Docker." },
      { title: "Application services", body: "The Next.js web service renders the product and calls the Fastify API. The API owns authentication, validation, business rules, and persistence. Socket.IO handles match-authorized rooms, chat events, presence, and realtime state. BullMQ workers process slow or scheduled jobs outside the request path." },
      { title: "Data and infrastructure", body: "PostgreSQL is the source of truth for users, profiles, matches, and messages, with PostGIS for geospatial queries and pgvector for semantic search. Redis Stack supports caching, sessions, rate limits, pub/sub, presence, and Bloom filtering. Persistent Docker volumes protect service data across restarts." },
      { title: "Request and event flow", body: "A browser request enters through Caddy and is forwarded to the Next.js web service or Fastify API. API operations read and write PostgreSQL or Redis, while realtime events move through Socket.IO. Heavy work such as embeddings, feed generation, notifications, verification, and cleanup is handed to BullMQ workers." },
      { title: "Deployment and operations", body: "Docker Compose provides isolated services on an internal network, while Caddy manages certificates and routing at the edge. Service dependencies wait for PostgreSQL and Redis health before starting, and the architecture can scale API, realtime, and worker processes horizontally behind the proxy." },
    ],
  },
  features: {
    eyebrow: "03 / portfolio features",
    title: "Product depth beyond a basic swipe app.",
    body: "Melodis combines recommendation quality, realtime engagement, user trust, and production infrastructure into one coherent product. These are the features that best demonstrate the engineering work behind it.",
    details: [
      { title: "Intelligent matching and discovery", body: "Discovery is preference-aware rather than random. Candidate filtering considers age, location, gender, profession, religion, caste visibility preferences, verification state, blocks, and previous swipes. PostGIS handles nearby-user queries, while feed generation and fallback logic keep the candidate pool useful when strict filters would otherwise produce too few results." },
      { title: "AI and semantic personalization", body: "Profile biographies and interests can be represented as embeddings and compared through PostgreSQL vector search. Similarity signals support compatibility ranking and labels such as GOOD and STRONG, giving the recommendation flow a semantic foundation instead of relying only on matching fields." },
      { title: "Realtime chat and engagement", body: "Match-authorized Socket.IO rooms support live messaging, typing indicators, read receipts, online presence, attachments, and match-aware communication. Messages are persisted before broadcast so the realtime event reflects the server-confirmed message ID and timestamp." },
      { title: "User safety and trust", body: "Trust is part of the product flow. Face-based selfie verification reduces fake profiles and controls access to discovery, swiping, and chat. Users can block, report, or unmatch, while consent-gated scam-risk analysis and moderation signals provide an additional safety layer." },
      { title: "Profile and media management", body: "Onboarding captures structured profile information, interests, professions, preferences, location, photos, and voice bios. Large media files upload directly to S3-compatible storage through short-lived presigned URLs, keeping file transfer away from the API and reducing request overhead." },
      { title: "Scalable backend architecture", body: "The modular monorepo separates the web client, API, realtime service, worker jobs, and shared infrastructure. PostgreSQL and Prisma provide transactional data modeling, Redis supports cache and presence, and background workers keep expensive work outside the user-facing request path." },
      { title: "Resilient production infrastructure", body: "BullMQ jobs use retry and exponential backoff policies, while Redis-backed circuit breakers protect integrations such as Rekognition, AI providers, and email delivery. Docker Compose and Caddy keep deployment responsibilities separated and make the service boundaries explicit." },
      { title: "High-performance optimization", body: "Redis Bloom filters help avoid repeatedly showing the same candidate without the memory cost of a large explicit set. Precomputed feeds, relaxed fallback rules, direct uploads, and queue-driven processing keep discovery responsive and the main API available for interactive work." },
    ],
  },
  stack: {
    eyebrow: "04 / technology",
    title: "A stack chosen for product speed and system control.",
    body: "The implementation uses familiar tools at each boundary so features can move quickly without hiding the system underneath.",
  },
  optimization: {
    eyebrow: "05 / optimization",
    title: "Optimizations that keep the main request path focused.",
    body: "The strongest optimization work focuses on database filtering, prepared feeds, efficient background processing, and keeping large file transfers away from the API.",
    details: [
      { title: "Database-level discovery filtering", body: "PostgreSQL filters candidates by preferences, verification, safety state, previous swipes, blocks, and distance with PostGIS ST_DWithin. The API returns 20 profiles per request, while refills fetch batches of 100." },
      { title: "Semantic compatibility ranking", body: "Profile biographies and interests are compared through pgvector embeddings. The system assigns STRONG at 0.75 similarity and GOOD at 0.60; no unverified vector index is claimed." },
      { title: "Precomputed Redis feeds", body: "Workers prepare candidate IDs in Redis before users request them. Feeds refill below 10 entries, are capped at 200, and are scheduled for active users every five minutes." },
      { title: "Queue-driven background work", body: "BullMQ moves verification, embeddings, feed refill, notifications, icebreakers, scam analysis, cleanup, and account deletion outside the API request path. Jobs use three attempts with exponential backoff." },
      { title: "Compressed direct media uploads", body: "Before upload, large images are resized and converted to WebP at quality 0.85. The API then generates a short-lived presigned URL, allowing the browser to send the compressed file directly to S3-compatible storage instead of routing the file bytes through the backend." },
    ],
  },
  security: {
    eyebrow: "06 / security",
    title: "Safety is part of the product architecture.",
    body: "Authentication, verification, moderation, and privacy protections are treated as core flows rather than afterthoughts.",
    items: ["HTTP-only access and refresh-token cookies with rotation and revocation", "CSRF protection, Helmet headers, CORS restrictions, and rate limiting", "Validation and sanitization at service boundaries", "Verification-based access control for discovery, swiping, and chat", "Consent-gated scam-risk analysis and time-limited location tokens", "Circuit breakers and queue retries around external providers"],
  },
  learnings: {
    eyebrow: "07 / learnings",
    title: "The interesting work lives between the services.",
    body: "Melodis strengthened my understanding of how product decisions become system boundaries. Realtime features need durable persistence, AI features need consent and traceability, and background jobs need reliability rules before they need more concurrency.",
    items: ["Designing a multi-service Node.js monorepo", "Balancing realtime UX with database truth", "Scaling expensive work through queues and workers", "Using AI as a grounded product capability", "Building trust and safety into user flows"],
  },
};

export const MelodisDetail = () => {
  const getHash = () => window.location.hash.replace("#", "");
  const getValidSection = () => {
    const hash = getHash();
    return sections.some(({ id }) => id === hash) ? hash : "introduction";
  };
  const [activeSection, setActiveSection] = useState(getValidSection);

  useEffect(() => {
    const handleHashChange = () => {
      const nextSection = getHash();
      setActiveSection(sections.some(({ id }) => id === nextSection) ? nextSection : "introduction");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const selectSection = (sectionId) => {
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `${window.location.pathname}#${sectionId}`);
  };

  const activeContent = content[activeSection];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07090d] px-4 pb-24 pt-24 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(244,63,94,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(244,63,94,0.07)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <a href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"><ArrowLeft size={16} /> Back to projects</a>

        <header className="max-w-4xl">
          <div className="mb-5 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-rose-300"><span className="h-px w-10 bg-rose-400" />Melodis</div>
          <h1 className="font-heading text-5xl font-bold leading-[0.96] tracking-tight sm:text-7xl">Engineering a more thoughtful way to connect.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60 sm:text-xl">A focused project document covering the product purpose, architecture, key systems, and engineering decisions behind Melodis.</p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-[190px_minmax(0,1fr)] md:items-start md:gap-12">
          <nav aria-label="Melodis contents" className="md:sticky md:top-24">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-white/85">Contents</p>
            <div className="relative border-l border-white/10 pl-5">
              {sections.map(({ id, label }) => (
                <button key={id} type="button" onClick={() => selectSection(id)} className={`relative block w-full py-2.5 text-left text-base transition-colors ${activeSection === id ? "font-medium text-rose-300 before:absolute before:-left-[1.35rem] before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-rose-300 before:shadow-[0_0_10px_rgba(251,113,133,0.8)]" : "text-white/40 hover:text-white/80"}`}>{label}</button>
              ))}
            </div>
          </nav>

          <motion.section key={activeSection} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="max-w-4xl rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-10">
          <div className="mb-7 flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-rose-300"><span className="size-2 rounded-full bg-rose-300" />{activeContent.eyebrow}</div>
          <h2 className="font-heading max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{activeContent.title}</h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">{activeContent.body}</p>
          {activeSection === "stack" ? (
            <div className="mt-10 space-y-10">
              {stackGroups.map(({ label, description, technologies }) => (
                <section key={label}>
                  <div className="mb-4 flex items-end justify-between gap-4 border-b border-white/10 pb-3">
                    <div><h3 className="font-heading text-xl font-semibold tracking-tight text-white sm:text-2xl">{label}</h3><p className="mt-1 text-sm text-white/40">{description}</p></div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {technologies.map(({ name, icon: Icon }) => (
                      <div key={`${label}-${name}`} className="group flex min-h-16 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300/35 hover:bg-rose-300/[0.04]">
                        {Icon ? <Icon className="size-7 shrink-0 transition-transform duration-300 group-hover:scale-110" /> : <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-rose-300/20 bg-rose-300/10 font-mono text-xs text-rose-200">&lt;/&gt;</span>}
                        <span className="text-sm font-medium text-white/75">{name}</span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ) : activeSection === "architecture" || activeSection === "features" || activeSection === "optimization" ? (
            <div className="mt-10">
              {activeSection === "architecture" && <figure>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-[0_18px_60px_rgba(244,63,94,0.08)]">
                  <img src={architectureDiagram} alt="Melodis production architecture with Docker and Caddy" className="h-auto w-full" />
                </div>
                <figcaption className="mt-3 text-center text-xs leading-5 text-white/40">Melodis production deployment: Caddy at the edge, isolated application services, private data infrastructure, and persistent volumes.</figcaption>
              </figure>}
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {activeContent.details.map(({ title, body }, index) => (
                  <article key={title} className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-300/35 hover:bg-rose-300/[0.04] hover:shadow-[0_16px_45px_rgba(244,63,94,0.08)]">
                    <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-xs tracking-[0.2em] text-rose-300/75">0{index + 1}</span><span className="h-px w-10 bg-rose-300/35 transition-all duration-300 group-hover:w-16" /></div>
                    <h3 className="font-heading text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">{title}</h3>
                    <p className="mt-4 text-[0.95rem] leading-7 text-white/60">{body}</p>
                    <span className="pointer-events-none absolute -bottom-12 -right-8 size-32 rounded-full bg-rose-300/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </article>
                ))}
              </div>
            </div>
          ) : activeContent.items ? <div className="mt-9 grid gap-3 sm:grid-cols-2">{activeContent.items.map((item, index) => <div key={item} className="group relative flex h-full items-start gap-3 overflow-hidden rounded-2xl border border-white/10 bg-black/15 p-4 text-sm leading-6 text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300/35 hover:bg-rose-300/[0.04]"><span className="grid size-7 shrink-0 place-items-center rounded-lg border border-rose-300/20 bg-rose-300/10 text-[0.65rem] font-semibold text-rose-200">{String(index + 1).padStart(2, "0")}</span><span>{item}</span><span className="pointer-events-none absolute -bottom-8 -right-8 size-20 rounded-full bg-rose-300/10 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" /></div>)}</div> : null}
          </motion.section>
        </div>

        <footer className="mt-10 flex flex-wrap items-center gap-5 text-sm text-white/45"><a href="https://melodis.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><Zap size={16} className="text-emerald-300" />melodis.in</a><a href="https://github.com/Technoritesh152005/Dating_Web_App" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white"><GithubIcon />GitHub repository</a></footer>
      </div>
    </main>
  );
};

const GithubIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current"><path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.16c-3.17.69-3.84-1.34-3.84-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.53-.29-5.2-1.27-5.2-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.39-2.67 5.36-5.21 5.64.41.36.77 1.07.77 2.16v3.2c0 .3.2.66.79.55A11.3 11.3 0 0 0 12 .7Z" /></svg>;
