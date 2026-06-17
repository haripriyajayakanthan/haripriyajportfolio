import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ArrowUpRight, Mail, Linkedin, GraduationCap, Briefcase,
  Code2, Palette, PenTool, Sparkles, Mic2, Users, Trophy,
  ArrowRight, MapPin, Send, Brain, Cpu, Zap, Bot, Wand2, Command, Activity,
  Globe, ExternalLink, Bookmark, FolderGit2,
} from "lucide-react";
import portrait from "@/assets/profile.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haripriya Jayakanthan — B.Tech IT, Designer & Creator" },
      { name: "description", content: "Portfolio of Haripriya Jayakanthan — B.Tech Information Technology student passionate about AI, web design, development and content creation." },
      { property: "og:title", content: "Haripriya Jayakanthan — Portfolio" },
      { property: "og:description", content: "B.Tech IT student. Web designer. Web developer. Content creator." },
    ],
  }),
  component: Portfolio,
});

const nav = [
  ["Home", "home"], ["About", "about"], ["Education", "education"],
  ["Experience", "experience"], ["Skills", "skills"],
  ["Services", "services"], ["Projects", "projects"], ["Contact", "contact"],
] as const;

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 pt-4"
    >
      <div className="glass mx-auto max-w-6xl rounded-full px-5 py-3 flex items-center justify-between shadow-soft">
        <a href="#home" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
          Haripriya<span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition">
          Let's talk <ArrowUpRight className="h-4 w-4" />
        </a>
        <button onClick={() => setOpen(o => !o)} className="lg:hidden p-2 rounded-full hover:bg-secondary" aria-label="Menu">
          <div className="space-y-1.5"><span className="block h-0.5 w-5 bg-foreground"/><span className="block h-0.5 w-5 bg-foreground"/></div>
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="glass mx-auto max-w-6xl mt-2 rounded-3xl p-4 lg:hidden grid grid-cols-2 gap-1">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl hover:bg-secondary text-sm">{label}</a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

/* ---------- HERO ---------- */
const AI_PROMPTS = [
  "Designing intelligent interfaces…",
  "Training curiosity.exe…",
  "Generating creative ideas…",
  "Building tomorrow, today…",
];

function useTypewriter(words: string[], speed = 60, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[i % words.length];
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);
  return text;
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const typed = useTypewriter(AI_PROMPTS);

  // Mouse-tracked parallax for the portrait card
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [8, -8]), { stiffness: 120, damping: 15 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-8, 8]), { stiffness: 120, damping: 15 });
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  return (
    <section ref={ref} id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Neural grid + nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }} />
        {[
          { top: '15%', left: '8%', size: 3, delay: 0, duration: 8 },
          { top: '25%', left: '85%', size: 4, delay: 1, duration: 10 },
          { top: '65%', left: '12%', size: 2, delay: 2, duration: 7 },
          { top: '75%', left: '90%', size: 3, delay: 0.5, duration: 9 },
          { top: '40%', left: '5%', size: 2, delay: 1.5, duration: 11 },
          { top: '85%', left: '70%', size: 3, delay: 3, duration: 8 },
          { top: '10%', left: '60%', size: 2, delay: 2.5, duration: 12 },
          { top: '55%', left: '95%', size: 2, delay: 0.8, duration: 10 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/40"
            style={{ top: node.top, left: node.left, width: node.size, height: node.size, boxShadow: '0 0 12px 2px oklch(0.82 0.06 305 / 0.35)' }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: node.duration, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <line x1="8%" y1="15%" x2="60%" y2="10%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="3s" repeatCount="indefinite" />
          </line>
          <line x1="85%" y1="25%" x2="95%" y2="55%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="4s" repeatCount="indefinite" />
          </line>
          <line x1="12%" y1="65%" x2="70%" y2="85%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="5s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>

      {/* Aurora blobs */}
      <motion.div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "var(--gradient-soft)" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl bg-blush"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full opacity-30 blur-3xl bg-lavender"
        animate={{ x: [-40, 40, -40], y: [-20, 20, -20] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <motion.div style={{ y }} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <Brain className="h-3.5 w-3.5 text-accent" /> AI · Design · Code — in motion
          </motion.div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="block">
              Hi, I'm
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="block italic font-light bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_8s_linear_infinite]">
              Haripriya
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="block">
              Jayakanthan.
            </motion.span>
          </h1>

          {/* Typewriter line */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 font-mono text-sm text-foreground/80"
          >
            <Wand2 className="h-4 w-4 text-accent" />
            <span className="text-muted-foreground">&gt;</span>
            <span>{typed}</span>
            <span className="inline-block h-4 w-[2px] bg-foreground animate-pulse" />
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            B.Tech Information Technology student · Web designer · Web developer · Content creator.
            Passionate about AI, technology, creativity, and continuous learning.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="flex flex-wrap gap-3">
            <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition shadow-glow overflow-hidden">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
              View portfolio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm hover:bg-secondary transition">
              <Command className="h-3.5 w-3.5" /> Contact me
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            <div><div className="font-display text-2xl text-foreground">3rd</div>Year B.Tech</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="font-display text-2xl text-foreground">6+</div>Core skills</div>
            <div className="h-8 w-px bg-border" />
            <div><div className="font-display text-2xl text-foreground">∞</div>Curiosity</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto lg:mx-0 w-full max-w-md"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ perspective: 1000 }}
        >
          {/* Conic aurora behind portrait */}
          <motion.div
            className="absolute -inset-6 rounded-[3rem] opacity-70 blur-2xl"
            style={{ background: "conic-gradient(from 0deg, oklch(0.87 0.055 305 / 0.6), oklch(0.91 0.035 25 / 0.5), oklch(0.93 0.025 75 / 0.5), oklch(0.87 0.055 305 / 0.6))" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbital rings */}
          <motion.div
            className="absolute -inset-4 rounded-[2.5rem] border border-accent/25 pointer-events-none"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -inset-8 rounded-[3rem] border border-dashed border-foreground/10 pointer-events-none"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            className="relative aspect-square rounded-full overflow-hidden shadow-glow"
          >
            <div className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
            <img src={portrait} alt="Haripriya Jayakanthan" width={1024} height={1024} className="relative h-full w-full object-cover" />
            {/* Holographic sheen */}
            <motion.div
              className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none rounded-full"
              style={{ background: "linear-gradient(115deg, transparent 30%, oklch(0.95 0.06 305 / 0.6) 50%, transparent 70%)", backgroundSize: "200% 200%" }}
              animate={{ backgroundPosition: ["0% 0%", "200% 200%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-full" />
            {/* Subtle scan line */}
            <motion.div
              className="absolute inset-x-0 h-px bg-accent/30 shadow-[0_0_8px_1px_oklch(0.82_0.06_305/0.4)]"
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* AI prompt card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            className="absolute -bottom-8 -left-8 glass rounded-2xl p-3 shadow-soft w-56"
          >
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-2">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
              </div>
              <span className="ml-auto font-mono">haripriya.ai</span>
            </div>
            <div className="flex items-start gap-2">
              <Bot className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
              <div className="text-[11px] font-mono leading-relaxed">
                <span className="text-muted-foreground">$ </span>{typed}
                <span className="inline-block h-3 w-[2px] bg-foreground/70 ml-0.5 animate-pulse align-middle" />
              </div>
            </div>
          </motion.div>

          {/* Open to work */}
          <motion.div
            animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass rounded-full px-4 py-2 shadow-soft text-xs flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Open to work
          </motion.div>

          {/* ML Enthusiast */}
          <motion.div
            animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 -right-10 glass rounded-xl px-3 py-2 shadow-soft flex items-center gap-2"
          >
            <Cpu className="h-3.5 w-3.5 text-accent" />
            <span className="text-[10px] font-medium">ML Enthusiast</span>
          </motion.div>

          {/* Live signal — audio bars */}
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 -left-10 glass rounded-xl px-3 py-2 shadow-soft flex items-center gap-2"
          >
            <Activity className="h-3.5 w-3.5 text-accent" />
            <div className="flex items-end gap-0.5 h-3">
              {[0.4, 0.9, 0.6, 1, 0.5].map((h, i) => (
                <motion.span
                  key={i}
                  className="w-0.5 bg-accent rounded-full"
                  animate={{ scaleY: [h, h * 0.4, h] }}
                  transition={{ duration: 0.9 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                  style={{ height: '100%', transformOrigin: 'bottom' }}
                />
              ))}
            </div>
            <span className="text-[10px] font-medium">live</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SECTION HELPERS ---------- */
function SectionHeader({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl mb-14">
      <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
        <span className="h-px w-8 bg-foreground/40" /> {kicker}
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl text-balance">
        {title}
      </motion.h2>
      {lead && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-4 text-muted-foreground text-lg max-w-2xl">
          {lead}
        </motion.p>
      )}
    </div>
  );
}

const Section = ({ id, className = "", children }: { id: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`relative py-24 sm:py-32 px-4 sm:px-8 ${className}`}>
    <div className="mx-auto max-w-7xl">{children}</div>
  </section>
);

/* ---------- ABOUT ---------- */
function About() {
  const traits = [
    { icon: Users, label: "Leadership" },
    { icon: Mic2, label: "Communication" },
    { icon: Sparkles, label: "Creativity" },
    { icon: Trophy, label: "Event Management" },
  ];
  return (
    <Section id="about">
      <SectionHeader kicker="About" title="A curious mind, building thoughtfully." />
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-lg sm:text-xl leading-relaxed text-foreground/80">
          I'm a B.Tech Information Technology student passionate about <em className="text-foreground">AI, technology, and continuous learning</em>.
          I enjoy exploring software development and shaping my craft through projects, internships, and hands-on experience.
          Beyond code, I love coordinating teams, hosting events, and turning ideas into experiences.
        </motion.p>
        <div className="grid grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 shadow-soft hover:-translate-y-1 transition-transform"
            >
              <t.icon className="h-6 w-6 text-foreground mb-3" />
              <div className="font-display text-lg">{t.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- EDUCATION ---------- */
function Education() {
  const items = [
    { year: "Present", title: "B.Tech Information Technology — 3rd Year", place: "New Prince Shri Bhavani College of Engineering and Technology" },
    { year: "School", title: "Higher Secondary", place: "Bethel Matriculation Higher Secondary School" },
  ];
  return (
    <Section id="education" className="bg-secondary/40">
      <SectionHeader kicker="Education" title="A timeline of learning." />
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" />
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative mb-10 sm:grid sm:grid-cols-2 sm:gap-12 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}
          >
            <div className="pl-12 sm:pl-0 sm:text-right sm:pr-12">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{it.year}</div>
              <h3 className="font-display text-2xl">{it.title}</h3>
              <p className="text-muted-foreground mt-1">{it.place}</p>
            </div>
            <div className="hidden sm:block" />
            <div className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-foreground flex items-center justify-center">
              <GraduationCap className="h-2.5 w-2.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  const exp = [
    { role: "Web Development Intern", org: "Repunext", time: "First-year internship", desc: "Contributed to real-world web development tasks and shipped UI work alongside the team." },
    { role: "Event Anchor & Organizer", org: "School & College", time: "Ongoing", desc: "Anchored and coordinated multiple events — from cultural programs to academic gatherings." },
    { role: "Team Coordinator", org: "Various Initiatives", time: "Ongoing", desc: "Led small teams to plan, organize and deliver creative projects and activities." },
  ];
  return (
    <Section id="experience">
      <SectionHeader kicker="Experience" title="Hands-on, on stage, and behind the screen." />
      <div className="grid md:grid-cols-3 gap-5">
        {exp.map((e, i) => (
          <motion.article
            key={e.role}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl bg-card p-7 border border-border shadow-soft hover:shadow-glow transition-shadow"
          >
            <Briefcase className="h-6 w-6 mb-5 text-foreground/70 group-hover:text-foreground transition" />
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{e.time}</div>
            <h3 className="font-display text-2xl mt-2">{e.role}</h3>
            <div className="text-foreground/70 text-sm mt-1">{e.org}</div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            <div className="absolute top-6 right-6 h-9 w-9 rounded-full bg-accent/40 group-hover:bg-accent flex items-center justify-center transition">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  const skills = [
    { name: "Communication", level: 92 },
    { name: "Leadership", level: 88 },
    { name: "Team Coordination", level: 90 },
    { name: "Web Designing", level: 85 },
    { name: "Web Development", level: 80 },
    { name: "Content Creation", level: 86 },
  ];
  return (
    <Section id="skills" className="bg-secondary/40">
      <SectionHeader kicker="Skills" title="Tools, soft and sharp." />
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="font-display text-xl">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.07, ease: "easeOut" }}
                className="h-full rounded-full bg-foreground"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { icon: Palette, title: "Web Designing", desc: "Aesthetic, user-first interfaces with attention to detail, spacing and typography." },
    { icon: Code2, title: "Web Development", desc: "Responsive, modern websites built with clean code and smooth interactions." },
    { icon: PenTool, title: "Content Creation", desc: "Thoughtful writing and visuals that bring brands and ideas to life." },
  ];
  return (
    <Section id="services">
      <SectionHeader kicker="Services" title="What I can help you with." />
      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-3xl p-8 overflow-hidden border border-border bg-card hover:-translate-y-2 transition-transform shadow-soft"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition" style={{ background: "var(--gradient-soft)" }} />
            <div className="relative">
              <div className="h-12 w-12 rounded-2xl bg-foreground text-background flex items-center justify-center mb-6">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const projects = [
    {
      tag: "Web Application",
      title: "StudentVerse",
      desc: "A full-stack student collaboration platform with authentication, notes hub, internship finder, team matching, events, community feed, and cloud database.",
      features: ["User Authentication", "Notes Hub", "Internship Hub", "Team Finder", "Events Hub", "Community Feed", "User Profiles", "Cloud DB"],
      stack: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Firestore", "Firebase Hosting"],
      link: "https://studentverse-56744.web.app",
      status: "Live",
      hue: "var(--lavender)",
    },
    { tag: "AI · Web", title: "Coming Soon", desc: "Exciting project on the way.", hue: "var(--beige)" },
    { tag: "Design · UI", title: "Coming Soon", desc: "Something creative brewing.", hue: "var(--blush)" },
  ];

  return (
    <Section id="projects" className="bg-secondary/40">
      <SectionHeader
        kicker="Projects"
        title="A canvas in progress."
        lead="Exciting projects are on the way as I continue learning, building and experimenting."
      />
      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden border border-border ${p.title === "StudentVerse" ? "md:col-span-2 md:row-span-1" : ""}`}
            style={{ background: `linear-gradient(160deg, ${p.hue}, var(--card))` }}
          >
            {p.title === "StudentVerse" ? (
              <div className="relative p-7 flex flex-col h-full min-h-[420px]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-foreground/60 glass rounded-full px-3 py-1">{p.tag}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30 rounded-full px-2.5 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {p.status}
                  </span>
                </div>
                <h3 className="font-display text-3xl mb-2">{p.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.features?.map((f) => (
                    <span key={f} className="text-xs bg-background/60 rounded-full px-2.5 py-1 border border-border">{f}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack?.map((s) => (
                    <span key={s} className="text-xs text-muted-foreground bg-secondary/60 rounded-full px-2.5 py-1">{s}</span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm hover:opacity-90 transition"
                  >
                    <Globe className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
                <div className="absolute inset-0 p-7 flex flex-col justify-between">
                  <span className="self-start text-xs uppercase tracking-widest text-foreground/60 glass rounded-full px-3 py-1">{p.tag}</span>
                  <div>
                    <div className="font-display text-3xl mb-1">{p.title}</div>
                    <div className="text-sm text-foreground/60">{p.desc}</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- LEADERSHIP ---------- */
function Leadership() {
  const items = [
    { icon: Mic2, title: "Event Anchoring", desc: "Hosted multiple school and college events on stage." },
    { icon: Trophy, title: "Event Organizing", desc: "Planned and executed end-to-end logistics for gatherings." },
    { icon: Users, title: "Team Management", desc: "Coordinated peers towards shared creative goals." },
    { icon: Sparkles, title: "Leadership Roles", desc: "Active in school and college leadership initiatives." },
  ];
  return (
    <Section id="leadership">
      <SectionHeader kicker="Leadership" title="Beyond the curriculum." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-6 shadow-soft hover:-translate-y-1 transition-transform"
          >
            <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center mb-4">
              <it.icon className="h-5 w-5" />
            </div>
            <div className="font-display text-xl mb-2">{it.title}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- CONTACT ---------- */
const EMAILJS_SERVICE_ID = "service_242cv5u";
const EMAILJS_TEMPLATE_ID = "template_uvm8zwt";
const EMAILJS_PUBLIC_KEY = "ue1LJ5q7zq-5KWIjx";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
        <div>
          <SectionHeader kicker="Contact" title="Let's create something together." />
          <div className="space-y-4">
            <a href="mailto:haripriyajayakathan05@gmail.com" className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-soft hover:-translate-y-0.5 transition">
              <div className="h-11 w-11 rounded-full bg-foreground text-background flex items-center justify-center"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="font-medium">haripriyajayakathan05@gmail.com</div>
              </div>
              <ArrowUpRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl glass p-5 shadow-soft hover:-translate-y-0.5 transition">
              <div className="h-11 w-11 rounded-full bg-foreground text-background flex items-center justify-center"><Linkedin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">LinkedIn</div>
                <div className="font-medium">Haripriya Jayakanthan</div>
              </div>
              <ArrowUpRight className="ml-auto h-5 w-5 opacity-0 group-hover:opacity-100 transition" />
            </a>
            <div className="flex items-center gap-4 rounded-2xl glass p-5 shadow-soft">
              <div className="h-11 w-11 rounded-full bg-accent flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
                <div className="font-medium">Tamil Nadu, India</div>
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-soft space-y-5"
        >
          <Field label="Your name" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Jane Doe" />
          <Field label="Email" id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea id="message" name="message" required maxLength={1000} rows={5} placeholder="Tell me about your idea…"
              value={form.message} onChange={handleChange}
              className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <button type="submit" disabled={status === "sending"} className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm hover:opacity-90 transition shadow-glow disabled:opacity-60">
            {status === "sending" && "Sending…"}
            {status === "sent" && "Sent — thank you!"}
            {status === "error" && "Couldn't send — try again"}
            {status === "idle" && (<>Send message <Send className="h-4 w-4 group-hover:translate-x-1 transition" /></>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, id, name, type = "text", placeholder, value, onChange }: { label: string; id: string; name: string; type?: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={id} name={name} type={type} required maxLength={255} placeholder={placeholder} value={value} onChange={onChange}
        className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="px-4 sm:px-8 pb-10">
      <div className="mx-auto max-w-7xl glass rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-soft">
        <div className="font-display text-xl">Haripriya Jayakanthan</div>
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} — Crafted with care.</div>
        <div className="flex items-center gap-3">
          <a href="mailto:haripriyajayakathan05@gmail.com" className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition"><Mail className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center hover:bg-accent transition"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
