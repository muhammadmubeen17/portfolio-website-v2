"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string; // simple icons slug
  color: string;
}

const categories: { label: string; tag: string; skills: Skill[] }[] = [
  {
    label: "Frontend",
    tag: "UI & Interaction",
    skills: [
      { name: "React.js",     icon: "react",             color: "#61DAFB" },
      { name: "Next.js",      icon: "nextdotjs",         color: "#ffffff" },
      { name: "TypeScript",   icon: "typescript",        color: "#3178C6" },
      { name: "JavaScript",   icon: "javascript",        color: "#F7DF1E" },
      { name: "Redux",        icon: "redux",             color: "#764ABC" },
      { name: "Tailwind CSS", icon: "tailwindcss",       color: "#06B6D4" },
      { name: "Bootstrap",    icon: "bootstrap",         color: "#7952B3" },
      { name: "Material UI",  icon: "mui",               color: "#007FFF" },
      { name: "SCSS",         icon: "sass",              color: "#CC6699" },
      { name: "HTML5",        icon: "html5",             color: "#E34F26" },
      { name: "CSS3",         icon: "css3",              color: "#1572B6" },
      { name: "jQuery",       icon: "jquery",            color: "#0769AD" },
    ],
  },
  {
    label: "Backend",
    tag: "APIs & Databases",
    skills: [
      { name: "Node.js",      icon: "nodedotjs",         color: "#339933" },
      { name: "Express.js",   icon: "express",           color: "#ffffff" },
      { name: "PHP",          icon: "php",               color: "#777BB4" },
      { name: "Laravel",      icon: "laravel",           color: "#FF2D20" },
      { name: "Flask",        icon: "flask",             color: "#ffffff" },
      { name: "MongoDB",      icon: "mongodb",           color: "#47A248" },
      { name: "MySQL",        icon: "mysql",             color: "#4479A1" },
      { name: "PostgreSQL",   icon: "postgresql",        color: "#4169E1" },
      { name: "Firebase",     icon: "firebase",          color: "#FFCA28" },
    ],
  },
  {
    label: "Tools & Cloud",
    tag: "DevOps & Workflow",
    skills: [
      { name: "Git",          icon: "git",               color: "#F05032" },
      { name: "GitHub",       icon: "github",            color: "#ffffff" },
      { name: "GitLab",       icon: "gitlab",            color: "#FC6D26" },
      { name: "Bitbucket",    icon: "bitbucket",         color: "#0052CC" },
      { name: "AWS",          icon: "amazonaws",         color: "#FF9900" },
      { name: "Google Cloud", icon: "googlecloud",       color: "#4285F4" },
      { name: "Vercel",       icon: "vercel",            color: "#ffffff" },
      { name: "Netlify",      icon: "netlify",           color: "#00C7B7" },
      { name: "Postman",      icon: "postman",           color: "#FF6C37" },
      { name: "Jira",         icon: "jira",              color: "#0052CC" },
      { name: "VS Code",      icon: "visualstudiocode",  color: "#007ACC" },
      { name: "Strapi",       icon: "strapi",            color: "#4945FF" },
    ],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      whileHover={{ y: -4, scale: 1.04 }}
      className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] cursor-default transition-colors duration-300 hover:border-white/20"
      style={{ "--skill-color": skill.color } as React.CSSProperties}
    >
      {/* Glow behind icon */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 40%, ${skill.color}18, transparent 70%)` }}
      />

      {/* Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}`}
          alt={skill.name}
          width={36}
          height={36}
          className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            // fallback: show colored initial
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement!;
            parent.innerHTML = `<span style="color:${skill.color};font-size:1.4rem;font-weight:800;font-family:monospace">${skill.name[0]}</span>`;
          }}
        />
      </div>

      {/* Name */}
      <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors duration-200 text-center leading-tight">
        {skill.name}
      </span>

      {/* Bottom color bar */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 rounded-full transition-all duration-300"
        style={{ background: skill.color }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-28 px-6 bg-[#0d1117]/60">
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

        {/* Categories */}
        <div className="flex flex-col gap-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-white font-bold text-lg">{cat.label}</h3>
                  <p className="text-slate-600 text-xs font-mono">{cat.tag}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                <span className="font-mono text-xs text-slate-600">{cat.skills.length} tools</span>
              </div>

              {/* Skill grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3">
                {cat.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
