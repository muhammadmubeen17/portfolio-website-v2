"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Code2,
  Terminal,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "@/components/icons";
import { typedPhrases } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function useTyped(phrases: string[]) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting) {
      if (charIdx < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 45);
      } else {
        setDeleting(false);
        setPhraseIdx((p) => (p + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return text;
}

export default function Hero() {
  const typed = useTyped(typedPhrases);
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center z-10 pt-[96px] pb-20 overflow-hidden"
    >
      {/* Background Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none opacity-60" />

      {/* Luminous Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* ── Left Column: Intro & Headline ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 shadow-2xs"
          >
            <Sparkles size={13} className="text-sky-600" />
            <span className="text-xs font-mono font-bold tracking-wider uppercase">
              Full Stack Engineer
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-mono text-slate-500 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase mb-2"
          >
            Hello, World! I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(2.6rem,5.5vw,4.6rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-900 mb-5"
          >
            Muhammad <br />
            <span className="gradient-text">Mubeen Ahmad</span>
          </motion.h1>

          {/* Typed tagline */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(1.1rem,2vw,1.35rem)] font-medium text-slate-700 mb-6 min-h-[2em] flex items-center gap-1.5"
          >
            <span>Building scalable</span>
            <span className="text-sky-600 font-bold">{typed}</span>
            <span className="cursor-blink text-sky-600 font-light">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-600 text-base md:text-lg leading-[1.8] max-w-xl mb-9"
          >
            Crafting robust, high-performance web applications with{" "}
            <strong className="text-slate-900 font-semibold">MERN</strong> &amp;{" "}
            <strong className="text-slate-900 font-semibold">LAMP</strong>{" "}
            stacks. Specializing in responsive architectures, smooth UX, and
            scalable backend systems.
          </motion.p>

          {/* CTA & Socials Row */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 w-full"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(14,165,233,0.3)] hover:shadow-[0_14px_30px_rgba(14,165,233,0.4)] transition-all duration-200"
            >
              View My Work
              <ArrowUpRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 rounded-full font-semibold text-sm text-slate-800 border border-slate-200 hover:border-sky-400 hover:text-sky-600 hover:-translate-y-0.5 transition-all duration-200 bg-white shadow-xs hover:shadow-sm"
            >
              Let&apos;s Connect
            </button>

            <div className="h-6 w-px bg-slate-200 hidden sm:block mx-1" />

            <div className="flex items-center gap-2">
              {[
                {
                  href: "https://github.com/muhammadmubeen17",
                  icon: <GitHubIcon size={16} />,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/muhammad-mubeen-ahmad",
                  icon: <LinkedInIcon size={16} />,
                  label: "LinkedIn",
                },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:-translate-y-0.5 hover:shadow-sm bg-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: Interactive Code Card & Tech Showcase ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12)_0%,transparent_70%)]" />
          </div>

          {/* Code Window */}
          <div className="relative w-full max-w-md bg-white border border-slate-200/90 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_60px_rgba(14,165,233,0.14)]">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-50/90 border-b border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px] font-semibold bg-white border border-slate-200/70 px-2.5 py-0.5 rounded-md shadow-2xs">
                <Code2 size={12} className="text-sky-600" />
                <span>developer.ts</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>active</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 sm:p-6 font-mono text-[12px] sm:text-[13px] leading-relaxed text-slate-800 bg-white">
              <div className="flex">
                <span className="w-6 text-slate-300 select-none text-right mr-3 font-mono">
                  1
                </span>
                <span>
                  <span className="text-indigo-600 font-semibold">const</span>{" "}
                  <span className="text-slate-900 font-bold">developer</span> =
                  &#123;
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-slate-300 select-none text-right mr-3 font-mono">
                  2
                </span>
                <span className="pl-4">
                  <span className="text-sky-700">name:</span>{" "}
                  <span className="text-emerald-600 font-medium">
                    &quot;Muhammad Mubeen Ahmad&quot;
                  </span>
                  ,
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-slate-300 select-none text-right mr-3 font-mono">
                  3
                </span>
                <span className="pl-4">
                  <span className="text-sky-700">role:</span>{" "}
                  <span className="text-emerald-600 font-medium">
                    &quot;Full Stack Engineer&quot;
                  </span>
                  ,
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-slate-300 select-none text-right mr-3 font-mono">
                  4
                </span>
                <span className="pl-4">
                  <span className="text-sky-700">stacks:</span> [
                  <span className="text-amber-600 font-medium">
                    &quot;MERN&quot;
                  </span>
                  ,{" "}
                  <span className="text-amber-600 font-medium">
                    &quot;LAMP&quot;
                  </span>
                  ],
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-slate-300 select-none text-right mr-3 font-mono">
                  5
                </span>
                <span className="pl-4">
                  <span className="text-sky-700">skills:</span> [
                  <span className="text-slate-600">&quot;React&quot;</span>,{" "}
                  <span className="text-slate-600">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-slate-600">&quot;Laravel&quot;</span>],
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-slate-300 select-none text-right mr-3 font-mono">
                  6
                </span>
                <span className="pl-4">
                  <span className="text-sky-700">delivers:</span>{" "}
                  <span className="text-indigo-600 font-semibold">()</span>{" "}
                  =&gt;{" "}
                  <span className="text-emerald-600 font-medium">
                    &quot;High Performance&quot;
                  </span>
                  ,
                </span>
              </div>
              <div className="flex">
                <span className="w-6 text-slate-300 select-none text-right mr-3 font-mono">
                  7
                </span>
                <span>&#125;;</span>
              </div>
            </div>

            {/* Bottom Card Highlights */}
            <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-200/80 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                <Terminal size={13} className="text-sky-600" />
                <span>Ready to build next</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-sky-100 text-sky-700 font-mono font-bold text-[11px]">
                100+ Projects Completed
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <div className="w-px h-8 bg-gradient-to-b from-sky-500 to-transparent scroll-pulse" />
        <ArrowDown size={12} className="text-slate-400" />
      </div>
    </section>
  );
}
