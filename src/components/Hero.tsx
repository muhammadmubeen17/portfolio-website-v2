"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "@/components/icons";
import { typedPhrases } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
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
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center z-10 px-6 pt-[72px]"
    >
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-mono text-[#00d4ff] text-sm tracking-[0.15em] uppercase mb-4"
          >
            Hey there, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(3rem,7vw,5.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-white mb-6"
          >
            Muhammad
            <br />
            <span className="gradient-text">Mubeen Ahmad</span>
          </motion.h1>

          {/* Typed tagline */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[clamp(1.2rem,2.5vw,1.6rem)] font-medium text-slate-400 mb-7 min-h-[2.2em]"
          >
            I build{" "}
            <span className="text-[#00d4ff] font-semibold">{typed}</span>
            <span className="cursor-blink text-[#00d4ff] font-light">|</span>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-slate-400 text-lg leading-relaxed max-w-[560px] mb-10"
          >
            Full Stack Developer crafting high-performance web applications with{" "}
            <strong className="text-slate-200 font-semibold">MERN</strong> &amp;{" "}
            <strong className="text-slate-200 font-semibold">LAMP</strong> stacks.
            Based in Faisalabad, Pakistan.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-3.5 rounded-full font-semibold text-[#080b12] bg-gradient-to-r from-[#00d4ff] to-[#0099cc] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,212,255,0.35)] transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 rounded-full font-semibold text-slate-200 border border-white/10 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:-translate-y-0.5 transition-all duration-200"
            >
              Let&apos;s Talk
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex gap-4"
          >
            {[
              { href: "https://github.com/muhammadmubeen17", icon: <GitHubIcon size={18} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/muhammad-mubeen-ahmad", icon: <LinkedInIcon size={18} />, label: "LinkedIn" },
              { href: "https://www.mubeendev.site", icon: <GlobeIcon size={18} />, label: "Portfolio" },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-slate-400 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,212,255,0.2)] transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex absolute bottom-10 right-6 flex-col items-center gap-3">
          <span className="font-mono text-[0.65rem] text-slate-600 tracking-[0.25em] uppercase [writing-mode:vertical-rl]">
            Scroll
          </span>
          <div className="w-px h-14 bg-gradient-to-b from-[#00d4ff] to-transparent scroll-pulse" />
          <ArrowDown size={12} className="text-slate-600" />
        </div>
      </div>
    </section>
  );
}
