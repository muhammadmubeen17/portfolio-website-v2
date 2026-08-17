"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Layers, Users, Star, CheckCircle, Globe, Zap, Shield, Sparkles, ArrowUpRight } from "lucide-react";

function useInView(ref: React.RefObject<HTMLDivElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.25 }
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
  { icon: <Code2 size={20} />,  target: 8,   suffix: "+",  label: "Years Experience",  color: "#0284c7" },
  { icon: <Layers size={20} />, target: 100, suffix: "+",  label: "Projects Completed", color: "#6366f1" },
  { icon: <Users size={20} />,  target: 100, suffix: "+",  label: "Happy Clients",     color: "#059669" },
  { icon: <Star size={20} />,   target: 5,   suffix: " ★", label: "Avg Client Rating", color: "#d97706" },
];

const highlights = [
  { label: "MERN Stack",    color: "#0284c7" },
  { label: "LAMP Stack",    color: "#6366f1" },
  { label: "React & Next.js",  color: "#0284c7" },
  { label: "Laravel & PHP", color: "#dc2626" },
  { label: "Node.js & Express", color: "#16a34a" },
  { label: "TypeScript",    color: "#2563eb" },
  { label: "REST APIs & GraphQL", color: "#8b5cf6" },
  { label: "Cloud & DevOps", color: "#ea580c" },
];

const services = [
  { icon: <Globe size={18} />,   title: "Full Stack Web Apps",     desc: "End-to-end architecture from DB schema & RESTful APIs to pixel-perfect modern UIs" },
  { icon: <Zap size={18} />,     title: "API Design & Integration", desc: "Robust microservices, auth flows, third-party payment gateways, and webhooks" },
  { icon: <Layers size={18} />,  title: "SaaS & Custom Portals",   desc: "Multi-tenant platforms, high-performance dashboards, and real-time features" },
  { icon: <Shield size={18} />,  title: "Code Quality & Performance", desc: "Database optimization, responsive refactoring, and security best practices" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef);

  return (
    <section id="about" className="relative z-10 py-28 px-6 overflow-hidden bg-slate-50/60">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease }}
          className="mb-14"
        >
          <span className="font-mono text-sky-600 text-xs font-bold tracking-[0.18em] uppercase block mb-3">
            01 / About
          </span>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold text-slate-900 tracking-tight">
            Engineering Full-Stack Excellence
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── Left Column: Bio & Core Expertise (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.7, ease }}
              className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm space-y-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={16} className="text-sky-600" />
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                  The Journey &amp; Philosophy
                </span>
              </div>
              <p className="text-slate-800 text-lg md:text-xl font-medium leading-[1.8]">
                I&apos;m a <span className="text-sky-600 font-bold">Full Stack Web Developer</span> with over <span className="text-slate-900 font-bold">8+ years</span> of professional experience turning ambitious digital concepts into scalable, robust web solutions.
              </p>
              <p className="text-slate-600 text-base leading-[1.85]">
                With deep expertise across both the <strong className="text-slate-800 font-semibold">MERN stack</strong> (MongoDB, Express, React, Node.js) and the <strong className="text-slate-800 font-semibold">LAMP stack</strong> (Linux, Apache, MySQL, PHP/Laravel), I handle the entire development lifecycle — from database schema design and API security to interactive, lightning-fast user interfaces.
              </p>
              <p className="text-slate-600 text-base leading-[1.85]">
                Over the years, I&apos;ve shipped enterprise SaaS tools, high-traffic e-commerce systems, AI-powered applications, and real estate portals for international clients on <strong className="text-slate-800 font-semibold">Upwork</strong> and <strong className="text-slate-800 font-semibold">Fiverr</strong> with an immaculate 100% Job Success record.
              </p>

              {/* Core Expertise Pills inside Bio card */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider mb-3">Core Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((h) => (
                    <span
                      key={h.label}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 hover:-translate-y-0.5 shadow-2xs cursor-default"
                      style={{ color: h.color, borderColor: `${h.color}35`, background: `${h.color}0c` }}
                    >
                      {h.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Counter Stats Grid */}
            <div ref={statsRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: 0.1, ease }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="group relative bg-white border border-slate-200/90 rounded-2xl p-5 flex flex-col gap-2.5 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 overflow-hidden"
                  >
                    <div style={{ color: s.color }} className="opacity-90">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-3xl font-extrabold text-slate-900 leading-none font-mono tabular-nums">
                        <Counter target={s.target} inView={inView} suffix={s.suffix} />
                      </p>
                      <p className="text-slate-500 text-xs mt-1.5 font-semibold">{s.label}</p>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── Right Column: What I Do & Verified Trust (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, ease }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Services Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 font-bold flex items-center gap-2">
                <Code2 size={15} className="text-sky-600" />
                Services &amp; Capabilities
              </p>
              <div className="flex flex-col gap-5">
                {services.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="group flex gap-4 items-start"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200/70 flex items-center justify-center text-sky-600 flex-shrink-0 mt-0.5 shadow-2xs">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-bold mb-0.5 group-hover:text-sky-600 transition-colors">{s.title}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Platform Trust Card */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm">
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 font-bold flex items-center gap-2">
                <Shield size={15} className="text-emerald-600" />
                Verified On Platforms
              </p>
              <div className="flex flex-col gap-3">
                {/* Upwork */}
                <a
                  href="https://www.upwork.com/freelancers/muhammadmubeenahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group bg-slate-50/70 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-300 p-3.5 rounded-2xl transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#14a800]/10 border border-[#14a800]/25 flex items-center justify-center p-1.5">
                      <svg viewBox="0 0 24 24" fill="#14a800" className="w-5 h-5">
                        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-bold group-hover:text-[#14a800] transition-colors">Upwork</p>
                      <p className="text-slate-500 text-[11px]">Top Rated Plus · 100% JSS</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-amber-400 text-amber-400" />)}
                    </div>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover:text-[#14a800] transition-colors" />
                  </div>
                </a>

                {/* Fiverr */}
                <a
                  href="https://www.fiverr.com/mubeen_ahmad_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group bg-slate-50/70 hover:bg-emerald-50/50 border border-slate-200/70 hover:border-emerald-300 p-3.5 rounded-2xl transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1dbf73]/10 border border-[#1dbf73]/25 flex items-center justify-center p-1.5">
                      <svg viewBox="0 7 24 10" fill="#1dbf73" className="w-6 h-auto">
                        <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-slate-900 text-sm font-bold group-hover:text-[#1dbf73] transition-colors">Fiverr</p>
                      <p className="text-slate-500 text-[11px]">Level 2 Seller · 5.0 ★</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} size={10} className="fill-amber-400 text-amber-400" />)}
                    </div>
                    <ArrowUpRight size={14} className="text-slate-400 group-hover:text-[#1dbf73] transition-colors" />
                  </div>
                </a>
              </div>

              {/* Overall trust badge */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle size={14} className="text-emerald-500" />
                  100% Client Satisfaction
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold">
                  Top Rated Plus
                </span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
