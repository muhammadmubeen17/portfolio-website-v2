"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2 } from "lucide-react";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 py-28 px-6 bg-slate-50/70"
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
          <span className="font-mono text-sky-600 text-xs font-bold tracking-[0.18em] uppercase block mb-3">
            04 / Experience
          </span>
          <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold text-slate-900 tracking-tight">
            Career Journey &amp; Leadership
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-300 to-slate-200 hidden md:block" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="grid grid-cols-1 md:grid-cols-[48px_1fr] gap-6 md:gap-8 items-start"
              >
                {/* Timeline Node Dot */}
                <div className="hidden md:flex items-start justify-center pt-5">
                  <div className="relative w-12 h-12 rounded-2xl bg-white border-2 border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center flex-shrink-0">
                    <Briefcase size={18} className="text-sky-600" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white border border-slate-200/90 rounded-3xl p-7 md:p-8 shadow-sm hover:border-sky-300 hover:shadow-md transition-all duration-300">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar size={12} className="text-sky-600" />
                      <span>{item.date}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                          item.badge.color === "cyan"
                            ? "bg-sky-50 text-sky-700 border-sky-200"
                            : "bg-indigo-50 text-indigo-700 border-indigo-200"
                        }`}
                      >
                        {item.badge.label}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{item.role}</h3>
                  <div className="flex items-center gap-1.5 text-sky-600 font-bold text-sm mb-4">
                    <Building2 size={15} />
                    <span>{item.company}</span>
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-[1.8] mb-6">{item.description}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-sky-300 hover:text-sky-600 transition-colors"
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
