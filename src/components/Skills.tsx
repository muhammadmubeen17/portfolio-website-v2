"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, Cpu } from "lucide-react";

interface Skill {
  name: string;
  iconUrl: string;
  color: string;
  category: "frontend" | "backend" | "tools";
}

const allSkills: Skill[] = [
  // Frontend
  { name: "React.js",     iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#0284c7", category: "frontend" },
  { name: "Next.js",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#0f172a", category: "frontend" },
  { name: "TypeScript",   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#2563eb", category: "frontend" },
  { name: "JavaScript",   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#ca8a04", category: "frontend" },
  { name: "Redux",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "#7c3aed", category: "frontend" },
  { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#06b6d4", category: "frontend" },
  { name: "Bootstrap",    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "#7952b3", category: "frontend" },
  { name: "Material UI",  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", color: "#007fff", category: "frontend" },
  { name: "SCSS / SASS",  iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", color: "#cc6699", category: "frontend" },
  { name: "HTML5",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#e34f26", category: "frontend" },
  { name: "CSS3",         iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572b6", category: "frontend" },
  { name: "jQuery",       iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", color: "#0769ad", category: "frontend" },
  // Backend
  { name: "Node.js",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#16a34a", category: "backend" },
  { name: "Express.js",   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#0f172a", category: "backend" },
  { name: "PHP",          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "#777bb4", category: "backend" },
  { name: "Laravel",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg", color: "#dc2626", category: "backend" },
  { name: "Flask",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "#0f172a", category: "backend" },
  { name: "MongoDB",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#16a34a", category: "backend" },
  { name: "MySQL",        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#0284c7", category: "backend" },
  { name: "PostgreSQL",   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#2563eb", category: "backend" },
  { name: "Firebase",     iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#d97706", category: "backend" },
  { name: "REST APIs",    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "#ff6c37", category: "backend" },
  // Tools & Cloud
  { name: "Git",          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#f05032", category: "tools" },
  { name: "GitHub",       iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#0f172a", category: "tools" },
  { name: "GitLab",       iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", color: "#fc6d26", category: "tools" },
  { name: "Bitbucket",    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg", color: "#0052cc", category: "tools" },
  { name: "AWS",          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#ea580c", category: "tools" },
  { name: "Google Cloud", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#2563eb", category: "tools" },
  { name: "Vercel",       iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", color: "#0f172a", category: "tools" },
  { name: "Netlify",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", color: "#00c7b7", category: "tools" },
  { name: "Postman",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "#ff6c37", category: "tools" },
  { name: "Jira",         iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", color: "#0052cc", category: "tools" },
  { name: "VS Code",      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "#007acc", category: "tools" },
  { name: "Strapi",       iconUrl: "https://cdn.simpleicons.org/strapi/4945ff", color: "#4945ff", category: "tools" },
];

const tabs = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend & APIs" },
  { id: "tools", label: "Cloud & DevOps" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative z-10 py-28 px-6 bg-slate-100/70">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="font-mono text-sky-600 text-xs font-bold tracking-[0.18em] uppercase block mb-3">
              02 / Skills
            </span>
            <h2 className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-extrabold text-slate-900 tracking-tight">
              Tech Stack &amp; Tools
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-2xs self-start md:self-auto">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    active
                      ? "text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeSkillsTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid without forced min-height */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default overflow-hidden"
              >
                {/* Subtle brand glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 30%, ${skill.color}15, transparent 70%)` }}
                />

                {/* Icon */}
                <div className="relative w-11 h-11 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    width={38}
                    height={38}
                    className="w-9 h-9 object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Name */}
                <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors text-center leading-tight">
                  {skill.name}
                </span>

                {/* Subtle bottom indicator */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 rounded-full transition-all duration-300"
                  style={{ background: skill.color }}
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Stack Summary Bar */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
              <Cpu size={20} />
            </div>
            <div>
              <p className="text-slate-900 text-sm font-bold">Comprehensive Modern Stack</p>
              <p className="text-slate-500 text-xs">Production-tested across 100+ enterprise &amp; client deployments</p>
            </div>
          </div>
          <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-mono text-xs font-bold">
            {allSkills.length} Technologies
          </span>
        </div>

      </div>
    </section>
  );
}
