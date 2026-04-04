"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/portfolio";

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const imgRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 18 });
  const y = useSpring(rawY, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(y, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 border-b border-white/[0.05] last:border-none`}
    >
      {/* Ambient glow behind row */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl ${
          isEven
            ? "bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(0,212,255,0.05),transparent)]"
            : "bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,rgba(124,58,237,0.06),transparent)]"
        }`}
      />

      {/* ── Screenshot (3D tilt) ── */}
      <div
        className={`${isEven ? "lg:order-1" : "lg:order-2"}`}
        style={{ perspective: "1400px" }}
      >
        <motion.div
          ref={imgRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.5)] group-hover:border-[#00d4ff]/20 transition-colors duration-500"
        >
          {/* Browser bar */}
          <div className="flex items-center gap-1.5 bg-[#161b22] px-4 py-3 border-b border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <div className="flex-1 mx-3 h-5 bg-white/[0.06] rounded-md flex items-center px-2">
              <span className="font-mono text-[10px] text-slate-600 truncate">
                {project.url.replace(/^https?:\/\//, "")}
              </span>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-slate-600 hover:text-[#00d4ff] transition-colors"
              aria-label="Open site"
            >
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/10] bg-[#0d1117]">
            <Image
              src={project.image ?? ""}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 group-hover:opacity-0 transition-opacity duration-500" />
          </div>

          {/* 3D shine */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background: useTransform(
                [x, y],
                ([mx, my]) =>
                  `radial-gradient(300px at ${(Number(mx) + 0.5) * 100}% ${(Number(my) + 0.5) * 100}%, rgba(255,255,255,0.04), transparent 70%)`
              ),
            }}
          />
        </motion.div>
      </div>

      {/* ── Content ── */}
      <div className={`${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col gap-5`}>
        {/* Number */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-slate-600 tracking-widest">{project.number}</span>
          <div className="h-px flex-1 max-w-[40px] bg-white/[0.08]" />
          <span
            className={`text-[10px] font-semibold font-mono tracking-widest uppercase px-2.5 py-1 rounded-full border ${
              isEven
                ? "text-[#00d4ff] bg-[#00d4ff]/10 border-[#00d4ff]/20"
                : "text-violet-400 bg-violet-500/10 border-violet-500/20"
            }`}
          >
            {index < 3 ? "Featured" : "Project"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight group-hover:text-[#00d4ff] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-base leading-[1.85]">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs font-medium px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:border-[#00d4ff]/30 hover:text-[#00d4ff] transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
              isEven
                ? "bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-[#00d4ff] hover:bg-[#00d4ff]/20 hover:shadow-[0_8px_24px_rgba(0,212,255,0.2)]"
                : "bg-violet-500/10 border border-violet-500/25 text-violet-400 hover:bg-violet-500/20 hover:shadow-[0_8px_24px_rgba(124,58,237,0.2)]"
            }`}
          >
            View Live Site
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

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
          className="mb-4"
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-[0.15em] uppercase block mb-3">
            03 / Projects
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight">
              What I&apos;ve Built
            </h2>
            <p className="text-slate-500 text-sm font-mono">{projects.length} projects</p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#00d4ff]/40 via-white/10 to-transparent mb-4" />

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
