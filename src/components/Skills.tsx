"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const categories = [
  {
    key: "frontend" as const,
    label: "Frontend",
    gradient: "from-sky-500 to-cyan-400",
    glow: "rgba(14,165,233,0.25)",
    hoverBorder: "hover:border-sky-500/40",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]",
    tagHover: "hover:bg-sky-500/10 hover:border-sky-500/40 hover:text-sky-400",
  },
  {
    key: "backend" as const,
    label: "Backend",
    gradient: "from-violet-600 to-purple-500",
    glow: "rgba(124,58,237,0.25)",
    hoverBorder: "hover:border-violet-500/40",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]",
    tagHover: "hover:bg-violet-500/10 hover:border-violet-500/40 hover:text-violet-400",
  },
  {
    key: "tools" as const,
    label: "Tools & Platforms",
    gradient: "from-emerald-600 to-green-500",
    glow: "rgba(5,150,105,0.25)",
    hoverBorder: "hover:border-emerald-500/40",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(5,150,105,0.1)]",
    tagHover: "hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-400",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 py-28 px-6 bg-[#0d1117]/60"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-[0.15em] uppercase block mb-3">
            02 / Skills
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight">
            Tech Stack
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 ${cat.hoverBorder} ${cat.hoverGlow} hover:-translate-y-1`}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.gradient}`}
                  style={{ boxShadow: `0 4px 12px ${cat.glow}` }}
                />
                <h3 className="font-bold text-white text-base">{cat.label}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400 cursor-default transition-all duration-200 ${cat.tagHover} hover:-translate-y-px`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
