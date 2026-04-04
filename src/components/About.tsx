"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function useInView(ref: React.RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = performance.now();
    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(frame);
      else setCount(target);
    };
    requestAnimationFrame(frame);
  }, [inView, target]);
  return <span>{count}</span>;
}

const stats = [
  { target: 5, label: "Years Experience", suffix: "+" },
  { target: 9, label: "Projects Shipped", suffix: "+" },
  { target: 2, label: "Tech Stacks", suffix: "" },
];

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef);

  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-[0.15em] uppercase block mb-3">
            01 / About
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 items-start">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-slate-400 text-lg leading-[1.85] mb-5">
              I&apos;m a <strong className="text-slate-200 font-semibold">Full Stack Web Developer</strong> from
              Faisalabad, Pakistan, with a passion for turning complex ideas into seamless,
              interactive web experiences.
            </p>
            <p className="text-slate-400 text-lg leading-[1.85] mb-5">
              My journey spans frontend finesse to backend architecture — I&apos;m fluent in both the{" "}
              <strong className="text-slate-200 font-semibold">MERN stack</strong> (MongoDB, Express,
              React, Node.js) and the{" "}
              <strong className="text-slate-200 font-semibold">LAMP stack</strong> (Linux, Apache,
              MySQL, PHP/Laravel), letting me deliver complete solutions from database to UI.
            </p>
            <p className="text-slate-400 text-lg leading-[1.85]">
              I&apos;ve delivered projects across diverse industries — from SaaS platforms and e-commerce
              to GPT-powered apps and leadership assessment tools — always with a focus on clean code,
              performance, and exceeding client expectations.
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex gap-10 mt-10 pt-10 border-t border-white/[0.06]"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <div className="flex items-end gap-0.5 leading-none">
                    <span className="text-[2.8rem] font-extrabold text-[#00d4ff] font-mono tabular-nums">
                      <Counter target={s.target} inView={inView} />
                    </span>
                    <span className="text-[1.8rem] font-extrabold text-[#00d4ff] pb-1">{s.suffix}</span>
                  </div>
                  <span className="text-xs text-slate-500 mt-1 tracking-wide">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-9 text-center backdrop-blur-sm hover:border-[#00d4ff]/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-300">
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-5">
                <div className="absolute inset-[-4px] rounded-full bg-[conic-gradient(#00d4ff,#7c3aed,#00d4ff)] spin-slow" />
                <div className="relative w-full h-full rounded-full bg-[#080b12] border-[3px] border-[#080b12] flex items-center justify-center">
                  <span className="font-mono font-extrabold text-[1.8rem] text-[#00d4ff]">MM</span>
                </div>
              </div>

              <h3 className="font-bold text-white text-lg mb-1">Muhammad Mubeen Ahmad</h3>
              <p className="font-mono text-[#00d4ff] text-sm mb-5">Full Stack Developer</p>

              <div className="flex flex-wrap gap-2 justify-center mb-5">
                {["MERN Stack", "LAMP Stack", "Remote", "Freelance"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1.5 text-slate-400 text-sm">
                <MapPin size={13} className="text-[#00d4ff]" />
                Faisalabad, Pakistan
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
