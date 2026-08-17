"use client";

import { motion } from "framer-motion";
import {
  Star,
  Clock,
  CheckCircle,
  ArrowUpRight,
  Shield,
  Zap,
  Award,
} from "lucide-react";
import Image from "next/image";
import { FiverrLogo, UpworkLogo } from "./icons";

/* ─── Stars ─── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          className={
            s <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-slate-300"
          }
        />
      ))}
    </div>
  );
}

/* ─── Stat pill ─── */
function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3">
      <div className="text-slate-500">{icon}</div>
      <div>
        <p className="text-slate-900 font-bold text-base leading-none">
          {value}
        </p>
        <p className="text-slate-500 text-[11px] font-medium mt-0.5">{label}</p>
      </div>
    </div>
  );
}

/* ─── Review card ─── */
function Review({
  name,
  country,
  text,
  rating,
}: {
  name: string;
  country: string;
  text: string;
  rating: number;
}) {
  return (
    <div className="bg-slate-50/80 border border-slate-200/70 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-xs font-bold text-white shadow-xs">
            {name[0]}
          </div>
          <div>
            <p className="text-slate-900 text-xs font-bold">{name}</p>
            <p className="text-slate-500 text-[10px]">{country}</p>
          </div>
        </div>
        <Stars rating={rating} />
      </div>
      <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}

export default function Freelance() {
  return (
    <section
      id="freelance"
      className="relative z-10 py-28 px-6 bg-slate-100/60"
    >
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
          className="mb-16 text-center"
        >
          <span className="font-mono text-sky-600 text-xs font-bold tracking-[0.15em] uppercase block mb-3">
            Hire Me
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-slate-900 tracking-tight mb-4">
            Find Me On Freelance Platforms
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base leading-relaxed">
            I&apos;m actively available for freelance projects on both
            platforms. 5+ years of delivering quality work with top ratings and
            100% client satisfaction.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ── Upwork ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <div className="relative h-full bg-white border border-slate-200/90 rounded-3xl p-7 md:p-8 flex flex-col gap-6 shadow-sm hover:border-[#14a800]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Top bar */}
              <div className="flex items-start justify-between">
                <div>
                  <UpworkLogo className="h-5" />
                  <p className="text-slate-500 text-xs mt-1 font-mono">
                    freelancers/muhammadmubeenahmad
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#14a800]/10 border border-[#14a800]/25 text-[#14a800] text-xs font-bold px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#14a800] animate-pulse" />
                  Available
                </div>
              </div>

              {/* Name & title */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border-2 border-[#14a800]/40 overflow-hidden bg-slate-100">
                    <Image
                      src="/avatar.png"
                      alt="Mubeen Ahmad"
                      width={56}
                      height={56}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#14a800] rounded-full flex items-center justify-center">
                    <CheckCircle size={11} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg">
                    Mubeen A.
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Full Stack Developer · MERN Stack Expert
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 text-xs font-bold bg-pink-50 border border-pink-200 text-pink-600 px-3 py-1.5 rounded-full">
                  <Shield size={11} className="text-pink-600" /> Top Rated Plus
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold bg-amber-500/10 border border-amber-500/25 text-amber-700 px-3 py-1.5 rounded-full">
                  <Award size={11} /> 100% Job Success
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <Stat
                  icon={<Star size={14} />}
                  label="Job Success"
                  value="100%"
                />
                <Stat
                  icon={<CheckCircle size={14} />}
                  label="Total Jobs"
                  value="100+"
                />
                <Stat
                  icon={<Clock size={14} />}
                  label="Member Since"
                  value="2020"
                />
                <Stat
                  icon={<Zap size={14} />}
                  label="Response Time"
                  value="< 1 hr"
                />
              </div>

              {/* Reviews */}
              <div>
                <p className="text-slate-500 text-xs font-mono font-bold uppercase tracking-widest mb-3">
                  Recent Reviews
                </p>
                <div className="flex flex-col gap-2">
                  <Review
                    name="Sarah K."
                    country="United States"
                    rating={5}
                    text="Mubeen is an outstanding developer. He delivered the project ahead of schedule with exceptional quality. Communication was great throughout."
                  />
                  <Review
                    name="James R."
                    country="United Kingdom"
                    rating={5}
                    text="Great work on our MERN stack application. Very professional and technically skilled. Will definitely hire again for future projects."
                  />
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.upwork.com/freelancers/muhammadmubeenahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white hover:opacity-95 hover:shadow-[0_8px_24px_rgba(20,168,0,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "#14a800" }}
              >
                View Upwork Profile
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* ── Fiverr ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <div className="relative h-full bg-white border border-slate-200/90 rounded-3xl p-7 md:p-8 flex flex-col gap-6 shadow-sm hover:border-[#1dbf73]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Top bar */}
              <div className="flex items-start justify-between">
                <div>
                  <FiverrLogo className="h-7" />
                  <p className="text-slate-500 text-xs mt-1 font-mono">
                    fiverr.com/mubeen_ahmad_01
                  </p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1dbf73]/10 border border-[#1dbf73]/25 text-[#1dbf73] text-xs font-bold px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1dbf73] animate-pulse" />
                  Online
                </div>
              </div>

              {/* Name & title */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border-2 border-[#1dbf73]/40 overflow-hidden bg-slate-100">
                    <Image
                      src="/avatar.png"
                      alt="Mubeen Ahmad"
                      width={56}
                      height={56}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#14a800] rounded-full flex items-center justify-center">
                    <CheckCircle size={11} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg">
                    Mubeen Ahmad
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">
                    Full Stack · Frontend Developer
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 text-xs font-bold bg-[#1dbf73]/10 border border-[#1dbf73]/25 text-[#1dbf73] px-3 py-1.5 rounded-full">
                  <Award size={11} /> Level 2 Seller
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold bg-amber-500/10 border border-amber-500/25 text-amber-700 px-3 py-1.5 rounded-full">
                  <Star size={11} /> 5★ Rated
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <Stat
                  icon={<Star size={14} />}
                  label="Avg Rating"
                  value="5 / 5"
                />
                <Stat
                  icon={<CheckCircle size={14} />}
                  label="Reviews"
                  value="47"
                />
                <Stat
                  icon={<Clock size={14} />}
                  label="Response Time"
                  value="~1 Hour"
                />
                <Stat
                  icon={<Zap size={14} />}
                  label="Member Since"
                  value="5 Years"
                />
              </div>

              {/* Reviews */}
              <div>
                <p className="text-slate-500 text-xs font-mono font-bold uppercase tracking-widest mb-3">
                  Recent Reviews
                </p>
                <div className="flex flex-col gap-2">
                  <Review
                    name="anna_buchholz"
                    country="Germany"
                    rating={5}
                    text="Amazing experience working with Mubeen on this issue. Fast, professional and truly exceptional quality. I really appreciate it!"
                  />
                  <Review
                    name="sarath_bk"
                    country="India"
                    rating={5}
                    text="Excellent work using a React stack. Strong attention to structure, comprehensive understanding. Continuing partnership with him again."
                  />
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.fiverr.com/mubeen_ahmad_01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white hover:opacity-95 hover:shadow-[0_8px_24px_rgba(29,191,115,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "#1dbf73" }}
              >
                View Fiverr Profile
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-slate-200"
        >
          {[
            { label: "Combined Reviews", value: "100+" },
            { label: "Avg Rating", value: "5 ★" },
            { label: "Job Success", value: "100%" },
            { label: "Years Active", value: "8+" },
            { label: "Happy Clients", value: "100+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-extrabold text-2xl gradient-text">{s.value}</p>
              <p className="text-slate-500 text-xs font-semibold mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
