"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Shield,
  CheckCircle,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
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
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none opacity-25 -z-10" />

      {/* Luminous Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.07)_0%,transparent_70%)] pointer-events-none -z-10" />

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
            <span>Building</span>
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
            className="flex flex-wrap items-center gap-4 w-full relative z-10"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(14,165,233,0.3)] hover:shadow-[0_14px_30px_rgba(14,165,233,0.4)] transition-all duration-200 cursor-pointer"
            >
              View My Work
              <ArrowUpRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-7 py-3.5 rounded-full font-semibold text-sm text-slate-800 border border-slate-200 hover:border-sky-400 hover:text-sky-600 hover:-translate-y-0.5 transition-all duration-200 bg-white shadow-xs hover:shadow-sm cursor-pointer"
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
                  className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:-translate-y-0.5 hover:shadow-sm bg-white transition-all duration-200 cursor-pointer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Right Column: Developer Info Card & Headshot ── */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.14)_0%,transparent_70%)] pointer-events-none blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)] pointer-events-none blur-xl" />

          {/* Unified Glass Developer Info Card */}
          <div className="relative w-full max-w-[350px] sm:max-w-[370px] bg-white border border-slate-200/90 rounded-[32px] p-4 sm:p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_60px_rgba(14,165,233,0.14)] hover:border-sky-300 transition-all duration-300">
            {/* Card Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 px-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-slate-500">
                <MapPin size={12} className="text-sky-600" />
                <span>Pakistan · UTC+5</span>
              </div>
            </div>

            {/* Headshot Image Container */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/70 shadow-inner group mb-3.5">
              <Image
                src="/avatar.png"
                alt="Muhammad Mubeen Ahmad — Full Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 370px, 370px"
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              {/* Badge 1: Top Rated Plus */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-rose-50/70 border border-rose-200/70">
                <div className="w-8 h-8 rounded-xl bg-white border border-rose-200 flex items-center justify-center text-rose-600 flex-shrink-0 shadow-2xs">
                  <Shield size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate leading-tight">
                    Top Rated Plus
                  </p>
                  <p className="text-[10.5px] font-semibold text-rose-600 truncate">
                    100% Job Success
                  </p>
                </div>
              </div>

              {/* Badge 2: Projects Completed */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-sky-50/70 border border-sky-200/70">
                <div className="w-8 h-8 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 shadow-2xs">
                  <CheckCircle size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate leading-tight">
                    100+ Delivered
                  </p>
                  <p className="text-[10.5px] font-semibold text-sky-600 truncate">
                    8+ Years Active
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Info Specs Row */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono px-0.5">
              <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                <Clock size={12} className="text-emerald-500" />
                <span>&lt; 1 hr Response Time</span>
              </div>
              <div className="flex items-center gap-1 text-amber-600 font-bold">
                <Star size={11} className="fill-amber-400 text-amber-400" />
                <span>5.0 Rating</span>
              </div>
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
