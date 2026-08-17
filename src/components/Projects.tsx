"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/portfolio";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "react", label: "React & Next.js" },
  { id: "laravel", label: "Laravel & PHP" },
  { id: "wordpress", label: "WordPress" },
];

function filterProjects(cat: string) {
  if (cat === "all") return projects;
  if (cat === "react") {
    return projects.filter((p) =>
      p.stack.some((s) => ["React", "Next.js", "TypeScript"].includes(s))
    );
  }
  if (cat === "laravel") {
    return projects.filter((p) =>
      p.stack.some((s) => ["Laravel", "PHP"].includes(s))
    );
  }
  if (cat === "wordpress") {
    return projects.filter((p) =>
      p.stack.some((s) => ["WordPress", "Elementor"].includes(s))
    );
  }
  return projects;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 260, damping: 26 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: "spring" as const, stiffness: 260, damping: 26 },
      opacity: { duration: 0.25 },
    },
  }),
};

export default function Projects() {
  const [selectedCat, setSelectedCat] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filtered = filterProjects(selectedCat);
  const currentProject = filtered[currentIndex] || filtered[0];

  const handleSelectCat = (catId: string) => {
    setSelectedCat(catId);
    setCurrentIndex(0);
    setDirection(0);
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = filtered.length - 1;
      if (next >= filtered.length) next = 0;
      return next;
    });
  };

  return (
    <section id="projects" className="relative z-10 py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-sky-600 text-xs font-bold tracking-[0.18em] uppercase block mb-3">
              03 / Portfolio
            </span>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold text-slate-900 tracking-tight">
              Featured Work
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80 self-start md:self-auto shadow-2xs">
            {categories.map((cat) => {
              const active = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCat(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main Carousel Card ── */}
        <div className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-sky-300 transition-all duration-300 mb-10 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject.title + selectedCat}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 28 : direction < 0 ? -28 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -28 : 28 }}
              transition={{ duration: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Browser Preview Mockup */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md hover:shadow-xl transition-all duration-300 group">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-100 border-b border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-3 h-6 bg-white border border-slate-200/80 rounded-md flex items-center px-3 shadow-2xs">
                      <span className="font-mono text-[11px] text-slate-500 truncate">
                        {currentProject.url.replace(/^https?:\/\//, "")}
                      </span>
                    </div>
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-sky-600 transition-colors p-1"
                      aria-label="Open live site in new tab"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  </div>

                  {/* Project Screenshot */}
                  <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden">
                    <Image
                      src={currentProject.image ?? ""}
                      alt={currentProject.title}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Project Details */}
              <div className="lg:col-span-5 flex flex-col items-start text-left">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  {currentProject.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="flex items-center gap-4 w-full pt-2 border-t border-slate-100">
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:-translate-y-0.5 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Explore Live Site
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Carousel Controls & Navigation ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-4">
          {/* Arrow Buttons */}
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:border-sky-400 hover:text-sky-600 hover:shadow-md transition-all active:scale-95 shadow-xs"
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center text-slate-700 hover:border-sky-400 hover:text-sky-600 hover:shadow-md transition-all active:scale-95 shadow-xs"
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {filtered.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-sky-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Jump to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Quick Jump Strip ── */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers size={13} className="text-sky-600" />
            Quick Jump
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filtered.map((item, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={item.title}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`group text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-sky-50/80 border-sky-300 shadow-xs"
                      : "bg-white border-slate-200/70 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <p className="text-xs font-bold text-slate-900 truncate group-hover:text-sky-600">
                      {item.title}
                    </p>
                    {active && <Sparkles size={11} className="text-sky-600 flex-shrink-0" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
