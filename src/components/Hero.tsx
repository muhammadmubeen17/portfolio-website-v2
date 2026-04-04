"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "@/components/icons";
import { typedPhrases } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
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
        timeout = setTimeout(() => { setText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => { setText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 45);
      } else {
        setDeleting(false);
        setPhraseIdx(p => (p + 1) % phrases.length);
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
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center z-10 pt-[72px] overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* ── Left: Content ── */}
        <div className="flex flex-col">
          {/* Badge */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 self-start mb-6 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-xs font-medium">Available for freelance & full-time</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="font-mono text-[#00d4ff] text-sm tracking-[0.15em] uppercase mb-3"
          >
            Hey there, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white mb-5"
          >
            Muhammad
            <br />
            <span className="gradient-text">Mubeen Ahmad</span>
          </motion.h1>

          {/* Typed tagline */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="text-[clamp(1.1rem,2vw,1.4rem)] font-medium text-slate-400 mb-6 min-h-[2em]"
          >
            I build{" "}
            <span className="text-[#00d4ff] font-semibold">{typed}</span>
            <span className="cursor-blink text-[#00d4ff] font-light">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="text-slate-400 text-base leading-[1.85] max-w-[500px] mb-8"
          >
            Full Stack Developer crafting high-performance web applications with{" "}
            <strong className="text-slate-200 font-medium">MERN</strong> &amp;{" "}
            <strong className="text-slate-200 font-medium">LAMP</strong> stacks.
          </motion.p>

          {/* Meta info */}
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-4 mb-8"
          >
            <span className="flex items-center gap-1.5 text-slate-500 text-sm">
              <MapPin size={13} className="text-[#00d4ff]" /> Faisalabad, Pakistan
            </span>
            <span className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Briefcase size={13} className="text-[#00d4ff]" /> 8+ Years Experience
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            custom={6} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-7 py-3.5 rounded-full font-semibold text-sm text-[#080b12] bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,212,255,0.35)] transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 rounded-full font-semibold text-sm text-slate-200 border border-white/10 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:-translate-y-0.5 transition-all duration-200"
            >
              Let&apos;s Talk
            </button>
          </motion.div>

          {/* Socials + divider */}
          <motion.div
            custom={7} variants={fadeUp} initial="hidden" animate="visible"
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-white/10" />
            {[
              { href: "https://github.com/muhammadmubeen17", icon: <GitHubIcon size={17} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/muhammad-mubeen-ahmad", icon: <LinkedInIcon size={17} />, label: "LinkedIn" },
              { href: "https://www.mubeendev.site", icon: <GlobeIcon size={17} />, label: "Portfolio" },
            ].map((s) => (
              <a
                key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-slate-500 hover:border-[#00d4ff]/50 hover:text-[#00d4ff] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,212,255,0.2)] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Photo ── */}
        <motion.div
          variants={fadeRight} initial="hidden" animate="visible"
          className="relative flex justify-center lg:justify-end"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.12)_0%,transparent_70%)]" />
          </div>

          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
            <div className="w-[380px] h-[380px] rounded-full border border-[#00d4ff]/[0.07]" />
          </div>
          <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none">
            <div className="w-[440px] h-[440px] rounded-full border border-[#00d4ff]/[0.04]" />
          </div>

          {/* Photo container */}
          <div className="relative w-[340px] sm:w-[400px] lg:w-[440px]">

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute top-16 -left-6 z-20 bg-[#0d1117]/90 backdrop-blur-md border border-white/[0.1] rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-2xl font-extrabold text-white font-mono">8+</p>
              <p className="text-slate-500 text-xs">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="absolute top-1/2 -right-6 z-20 bg-[#0d1117]/90 backdrop-blur-md border border-white/[0.1] rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-2xl font-extrabold text-[#00d4ff] font-mono">100%</p>
              <p className="text-slate-500 text-xs">Job Success</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-[#0d1117]/90 backdrop-blur-md border border-white/[0.1] rounded-2xl px-5 py-3 shadow-xl whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <p className="text-white text-sm font-semibold">Available for Work</p>
              </div>
            </motion.div>

            {/* Photo */}
            <div className="relative overflow-hidden rounded-3xl">
              {/* Gradient base (handles any white bg blending) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-transparent to-transparent z-10 pointer-events-none rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#080b12]/30 via-transparent to-transparent z-10 pointer-events-none rounded-3xl" />

              <Image
                src="/hero.png"
                alt="Muhammad Mubeen Ahmad"
                width={440}
                height={580}
                className="w-full h-auto object-cover object-top mix-blend-luminosity brightness-110 contrast-105"
                priority
              />
            </div>

            {/* Bottom glow under photo */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[#00d4ff]/10 blur-2xl rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-[#00d4ff] to-transparent scroll-pulse" />
        <ArrowDown size={12} className="text-slate-600" />
      </div>
    </section>
  );
}
