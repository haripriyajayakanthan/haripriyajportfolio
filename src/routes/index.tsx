import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  ArrowUpRight, Mail, Linkedin, GraduationCap, Briefcase,
  Code2, Palette, PenTool, Sparkles, Mic2, Users, Trophy,
  ArrowRight, MapPin, Send,
} from "lucide-react";
import portrait from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haripriya Jayakanthan — Engineer, Designer & Creator" },
      { name: "description", content: "Portfolio of Haripriya Jayakanthan — engineering student passionate about AI, web design, development and content creation." },
      { property: "og:title", content: "Haripriya Jayakanthan — Portfolio" },
      { property: "og:description", content: "Engineering student. Web designer. Web developer. Content creator." },
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
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen pt-32 pb-20 px-4 sm:px-8 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <motion.div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl"
        style={{ background: "var(--gradient-soft)" }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl bg-blush"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        <motion.div style={{ y }} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Available for collaborations
          </motion.div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-balance">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="block">
              Hi, I'm
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="block italic font-light">
              Haripriya
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="block">
              Jayakanthan.
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            B.Tech Information Technology student · Web designer · Web developer · Content creator.
            Passionate about AI, technology, creativity, and continuous learning.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }} className="flex flex-wrap gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:opacity-90 transition shadow-glow">
              View portfolio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm hover:bg-secondary transition">
              Contact me
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
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-glow">
            <div className="absolute inset-0" style={{ background: "var(--gradient-soft)" }} />
            <img src={portrait} alt="Haripriya Jayakanthan portrait" width={1024} height={1280} className="relative h-full w-full object-cover mix-blend-luminosity opacity-95" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-[2rem]" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 shadow-soft flex items-center gap-3"
          >
            <div className="h-9 w-9 rounded-full bg-accent flex items-center justify-center"><Code2 className="h-4 w-4" /></div>
            <div className="text-xs">
              <div className="font-medium">Currently learning</div>
              <div className="text-muted-foreground">AI & modern web</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 glass rounded-full px-4 py-2 shadow-soft text-xs flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Open to work
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
          I'm an engineering student passionate about <em className="text-foreground">AI, technology, and continuous learning</em>.
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
  const placeholders = [
    { tag: "AI · Web", title: "Coming Soon", hue: "var(--lavender)" },
    { tag: "Design · UI", title: "Coming Soon", hue: "var(--beige)" },
    { tag: "Content · Brand", title: "Coming Soon", hue: "var(--blush)" },
  ];
  return (
    <Section id="projects" className="bg-secondary/40">
      <SectionHeader
        kicker="Projects"
        title="A canvas in progress."
        lead="Exciting projects are on the way as I continue learning, building and experimenting."
      />
      <div className="grid md:grid-cols-3 gap-5">
        {placeholders.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-border"
            style={{ background: `linear-gradient(160deg, ${p.hue}, var(--card))` }}
          >
            <div className="absolute inset-0 backdrop-blur-[2px] group-hover:backdrop-blur-0 transition-all duration-500" />
            <div className="absolute inset-0 p-7 flex flex-col justify-between">
              <span className="self-start text-xs uppercase tracking-widest text-foreground/60 glass rounded-full px-3 py-1">{p.tag}</span>
              <div>
                <div className="font-display text-3xl mb-1">{p.title}</div>
                <div className="text-sm text-foreground/60">Stay tuned ↗</div>
              </div>
            </div>
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
function Contact() {
  const [sent, setSent] = useState(false);
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
          onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
          className="rounded-3xl bg-card border border-border p-7 sm:p-9 shadow-soft space-y-5"
        >
          <Field label="Your name" id="name" placeholder="Jane Doe" />
          <Field label="Email" id="email" type="email" placeholder="you@email.com" />
          <div>
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea id="message" required maxLength={1000} rows={5} placeholder="Tell me about your idea…"
              className="mt-2 w-full rounded-2xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm hover:opacity-90 transition shadow-glow">
            {sent ? "Sent — thank you!" : <>Send message <Send className="h-4 w-4 group-hover:translate-x-1 transition" /></>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={id} type={type} required maxLength={255} placeholder={placeholder}
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
