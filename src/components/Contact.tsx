"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Clock,
  Sparkles,
  MessageSquare,
  Briefcase,
  Globe,
} from "lucide-react";
import {
  GitHubIcon,
  LinkedInIcon,
  UpworkLogo,
  FiverrLogo,
} from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mb-16"
        >
          <span className="font-mono text-sky-600 text-xs font-bold tracking-[0.15em] uppercase block mb-3">
            05 / Contact
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left Column: Intro & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="flex flex-col"
          >
            <p className="text-slate-800 text-lg md:text-xl font-medium leading-[1.8] mb-5">
              Have a project in mind? Looking for a developer who can handle
              both frontend and backend? I&apos;m available for freelance
              contracts and open to full-time engineering opportunities.
            </p>
            <p className="text-slate-600 text-base leading-[1.85] mb-8">
              Whether it&apos;s architecting a new web platform, modernizing
              legacy systems, or scaling product performance — connect with me
              through any of my official profiles.
            </p>

            {/* Location & Time info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-bold">Location</p>
                  <p className="text-slate-600 text-xs">Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white border border-slate-200/80 p-4 rounded-2xl shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-slate-900 text-xs font-bold">Timezone</p>
                  <p className="text-slate-600 text-xs">
                    PKT (UTC+5) · Flexible
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Platform Connection Hub */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="flex flex-col gap-4"
          >
            {/* Primary Action Card (Upwork & Fiverr) */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-7 shadow-sm hover:border-sky-300 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-sky-600" />
                <span className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                  Hire Directly On Platforms
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-2">
                {/* Upwork Button */}
                <a
                  href="https://www.upwork.com/freelancers/muhammadmubeenahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <UpworkLogo className="h-5" />
                    <ArrowUpRight size={15} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-sm font-bold">
                      Hire on Upwork
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      Top Rated Plus · 100% JSS
                    </p>
                  </div>
                </a>

                {/* Fiverr Button */}
                <a
                  href="https://www.fiverr.com/mubeen_ahmad_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-between p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <FiverrLogo className="h-7" />
                    <ArrowUpRight size={15} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 text-sm font-bold">
                      Hire on Fiverr
                    </p>
                    <p className="text-slate-500 text-[11px]">
                      Level 2 Seller · 5.0 ★
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social & Professional Network Cards */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm">
              <p className="text-slate-500 text-xs font-mono font-bold uppercase tracking-widest mb-4">
                Connect Across Networks
              </p>

              <div className="flex flex-col gap-2.5">
                {[
                  {
                    href: "https://www.linkedin.com/in/muhammad-mubeen-ahmad",
                    label: "LinkedIn",
                    sub: "linkedin.com/in/muhammad-mubeen-ahmad",
                    icon: <LinkedInIcon size={18} />,
                    action: "Message",
                  },
                  {
                    href: "https://github.com/muhammadmubeen17",
                    label: "GitHub",
                    sub: "github.com/muhammadmubeen17",
                    icon: <GitHubIcon size={18} />,
                    action: "Follow",
                  },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-sky-300 hover:bg-sky-50/40 group transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-700 group-hover:text-sky-600 shadow-2xs transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-slate-900 text-sm font-bold group-hover:text-sky-600 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-slate-500 text-xs truncate max-w-[200px] sm:max-w-[280px]">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-sky-600 group-hover:translate-x-0.5 transition-transform">
                      <span>{item.action}</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
