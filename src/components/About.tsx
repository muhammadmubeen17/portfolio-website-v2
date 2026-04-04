"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Users, Star, CheckCircle, Globe, Zap, Shield } from "lucide-react";

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ target, inView, suffix = "" }: { target: number; inView: boolean; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) requestAnimationFrame(frame);
      else setCount(target);
    };
    requestAnimationFrame(frame);
  }, [inView, target]);
  return <>{count}{suffix}</>;
}

const stats = [
  { icon: <Code2 size={18} />,  target: 8,   suffix: "+",  label: "Years Experience",  color: "#00d4ff" },
  { icon: <Layers size={18} />, target: 50,  suffix: "+",  label: "Projects Shipped",  color: "#7c3aed" },
  { icon: <Users size={18} />,  target: 100, suffix: "+",  label: "Happy Clients",     color: "#10b981" },
  { icon: <Star size={18} />,   target: 5,   suffix: " ★", label: "Avg Rating",        color: "#f59e0b" },
];

const highlights = [
  { label: "MERN Stack",    color: "#00d4ff" },
  { label: "LAMP Stack",    color: "#7c3aed" },
  { label: "React / Next",  color: "#61DAFB" },
  { label: "Laravel / PHP", color: "#FF2D20" },
  { label: "Node.js",       color: "#339933" },
  { label: "TypeScript",    color: "#3178C6" },
  { label: "Cloud & DevOps",color: "#FF9900" },
];

const services = [
  { icon: <Globe size={15} />,   title: "Full Stack Web Apps",     desc: "End-to-end development from DB schema to pixel-perfect UI" },
  { icon: <Zap size={15} />,     title: "API Design & Integration", desc: "RESTful APIs, third-party integrations, and microservices" },
  { icon: <Layers size={15} />,  title: "SaaS & E-commerce",       desc: "Scalable platforms with auth, payments, and dashboards" },
  { icon: <Shield size={15} />,  title: "Code Review & Consulting", desc: "Architecture advice, performance audits, and team mentoring" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef);

  return (
    <section id="about" className="relative z-10 py-28 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease }}
          className="mb-16"
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-[0.15em] uppercase block mb-3">
            01 / About
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col gap-10">

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease }}
              className="space-y-5"
            >
              <p className="text-slate-300 text-lg leading-[1.9]">
                I&apos;m a <span className="text-white font-semibold">Full Stack Web Developer</span> from
                Faisalabad, Pakistan, with <span className="text-[#00d4ff] font-semibold">8+ years</span> of
                experience turning complex ideas into seamless, high-performance web applications.
              </p>
              <p className="text-slate-400 text-base leading-[1.9]">
                Fluent in both the <span className="text-[#00d4ff] font-medium">MERN stack</span> and the{" "}
                <span className="text-[#7c3aed] font-medium">LAMP stack</span>, I deliver complete solutions
                from database design to pixel-perfect UI — with a strong focus on clean architecture,
                scalability, and performance.
              </p>
              <p className="text-slate-400 text-base leading-[1.9]">
                Over the years I&apos;ve shipped SaaS platforms, e-commerce stores, GPT-powered apps, real estate
                tools, and enterprise dashboards for clients on <span className="text-white font-medium">Upwork</span> and{" "}
                <span className="text-white font-medium">Fiverr</span> — maintaining a{" "}
                <span className="text-amber-400 font-medium">5★ rating</span> and{" "}
                <span className="text-emerald-400 font-medium">100% job success</span> throughout.
              </p>
            </motion.div>

            {/* Expertise pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-3">Core Expertise</p>
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <span
                    key={h.label}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{ color: h.color, borderColor: `${h.color}30`, background: `${h.color}0d` }}
                  >
                    {h.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats grid */}
            <div ref={statsRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: 0.15, ease }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
                    style={{ ["--c" as string]: s.color }}
                  >
                    <div style={{ color: s.color }} className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold text-white leading-none font-mono tabular-nums">
                        <Counter target={s.target} inView={inView} suffix={s.suffix} />
                      </p>
                      <p className="text-slate-500 text-xs mt-1.5">{s.label}</p>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${s.color}60, transparent)` }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                      style={{ background: `radial-gradient(circle at 30% 70%, ${s.color}08, transparent 70%)` }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: 0.2, ease }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-[#080b12] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,212,255,0.3)] transition-all duration-200"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/10 text-slate-300 hover:border-[#00d4ff]/40 hover:text-[#00d4ff] hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </a>
            </motion.div>
          </div>

          {/* ── Right: What I Do + Platform trust ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, ease }}
            className="lg:sticky lg:top-24 flex flex-col gap-5"
          >
            {/* What I Do card */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">What I Do</p>
              <div className="flex flex-col gap-4">
                {services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="group flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center text-[#00d4ff] flex-shrink-0 mt-0.5 group-hover:bg-[#00d4ff]/20 transition-colors duration-200">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{s.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Platform trust bar */}
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6">
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4">Verified On</p>
              <div className="flex flex-col gap-3">

                {/* Upwork */}
                <a href="https://www.upwork.com/freelancers/muhammadmubeenahmad" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between group hover:bg-white/[0.03] px-3 py-2 rounded-xl transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#14a800]/10 border border-[#14a800]/20 flex items-center justify-center">
                      <span className="text-[#14a800] font-black text-xs">U</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Upwork</p>
                      <p className="text-slate-600 text-[11px]">Top Rated · 100% JSS</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-amber-400 text-amber-400" />)}
                  </div>
                </a>

                {/* Fiverr */}
                <a href="https://www.fiverr.com/mubeen_ahmad_01" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between group hover:bg-white/[0.03] px-3 py-2 rounded-xl transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1dbf73]/10 border border-[#1dbf73]/20 flex items-center justify-center">
                      <span className="text-[#1dbf73] font-black text-xs">F</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Fiverr</p>
                      <p className="text-slate-600 text-[11px]">Level 2 Seller · 47 Reviews</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-amber-400 text-amber-400" />)}
                  </div>
                </a>
              </div>

              {/* Overall trust metric */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle size={12} className="text-emerald-400" />
                  100% Job Success across platforms
                </div>
                <span className="text-amber-400 text-xs font-bold">5.0 ★</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
