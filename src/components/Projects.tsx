"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-28 px-6">
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
            03 / Projects
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight">
            What I&apos;ve Built
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
              }}
              className="group card-top-border bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 backdrop-blur-sm hover:border-[#00d4ff]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(0,212,255,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs text-slate-600 tracking-widest">
                  {project.number}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="w-9 h-9 border border-white/[0.08] rounded-full flex items-center justify-center text-slate-500 group-hover:border-[#00d4ff]/40 group-hover:text-[#00d4ff] hover:bg-[#00d4ff]/10 transition-all duration-200"
                >
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Title */}
              <h3 className="font-bold text-white text-lg leading-snug mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[0.68rem] font-medium px-2.5 py-1 rounded bg-[#00d4ff]/[0.07] border border-[#00d4ff]/[0.15] text-[#00d4ff]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
