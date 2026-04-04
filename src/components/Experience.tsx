"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
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
            04 / Experience
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#00d4ff] via-[#00d4ff]/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-14">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="grid grid-cols-1 md:grid-cols-[42px_1fr] gap-6 md:gap-8"
              >
                {/* Dot */}
                <div className="hidden md:flex items-start justify-center pt-1">
                  <div className="relative w-10 h-10 rounded-full bg-[#080b12] border-2 border-[#00d4ff] shadow-[0_0_20px_rgba(0,212,255,0.25)] flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#00d4ff]" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-slate-500">{item.date}</span>
                    {item.badge && (
                      <span
                        className={`text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-0.5 rounded-full border ${
                          item.badge.color === "cyan"
                            ? "bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/25"
                            : "bg-violet-500/10 text-violet-400 border-violet-500/25"
                        }`}
                      >
                        {item.badge.label}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-0.5">{item.role}</h3>
                  <p className="text-[#00d4ff] text-sm font-medium mb-3">{item.company}</p>
                  <p className="text-slate-400 text-sm leading-[1.85] mb-4">{item.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium px-3 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
