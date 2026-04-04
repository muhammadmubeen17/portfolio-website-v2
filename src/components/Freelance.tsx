"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, Clock, CheckCircle, ArrowUpRight, Shield, Zap, Award } from "lucide-react";
import Image from "next/image";

/* ─── Upwork SVG Logo ─── */
const UpworkLogo = () => (
  <svg viewBox="0 0 102 28" fill="none" className="h-6 w-auto">
    <path
      d="M28.18 5.74c-4.34 0-7.72 2.8-9.14 7.24-.9-3.34-2.1-5.76-4.2-7.24v13.64c0 2.36 1.9 4.28 4.28 4.28 2.36 0 4.28-1.92 4.28-4.28v-4.7c.6 2.1 2.22 3.58 4.78 3.58 3.76 0 6.58-3.06 6.58-6.26 0-3.22-2.82-6.26-6.58-6.26zm0 8.96c-1.64 0-2.86-1.22-2.86-2.7s1.22-2.7 2.86-2.7 2.86 1.22 2.86 2.7-1.22 2.7-2.86 2.7zM6.28 0C2.82 0 0 2.82 0 6.28v15.08c0 3.46 2.82 6.28 6.28 6.28s6.28-2.82 6.28-6.28V6.28C12.56 2.82 9.74 0 6.28 0zm0 18.9c-1.42 0-2.56-1.14-2.56-2.56s1.14-2.56 2.56-2.56 2.56 1.14 2.56 2.56-1.14 2.56-2.56 2.56z"
      fill="#14a800"
    />
    <text x="42" y="20" fontFamily="Arial" fontWeight="700" fontSize="16" fill="#14a800">upwork</text>
  </svg>
);

const FiverrLogo = () => (
  <svg viewBox="0 0 80 28" fill="none" className="h-6 w-auto">
    <text x="0" y="22" fontFamily="Arial" fontWeight="900" fontSize="22" fill="#1dbf73">fiverr</text>
    <circle cx="73" cy="8" r="4" fill="#1dbf73" />
  </svg>
);

/* ─── 3D Tilt Card ─── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 120, damping: 18 });
  const y = useSpring(rawY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-7deg", "7deg"]);
  const shine = useTransform(
    [x, y],
    ([mx, my]) =>
      `radial-gradient(280px at ${(Number(mx) + 0.5) * 100}% ${(Number(my) + 0.5) * 100}%, rgba(255,255,255,0.06), transparent 70%)`
  );

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <div style={{ perspective: "1200px" }}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={className}
      >
        {children}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: shine }}
        />
      </motion.div>
    </div>
  );
}

/* ─── Stars ─── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={13}
          className={s <= Math.round(rating) ? "fill-amber-400 text-amber-400" : "text-slate-600"}
        />
      ))}
    </div>
  );
}

/* ─── Stat pill ─── */
function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3">
      <div className="text-slate-400">{icon}</div>
      <div>
        <p className="text-white font-bold text-base leading-none">{value}</p>
        <p className="text-slate-500 text-[11px] mt-0.5">{label}</p>
      </div>
    </div>
  );
}

/* ─── Review card ─── */
function Review({ name, country, text, rating }: { name: string; country: string; text: string; rating: number }) {
  return (
    <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d4ff]/30 to-[#7c3aed]/30 flex items-center justify-center text-xs font-bold text-white">
            {name[0]}
          </div>
          <div>
            <p className="text-white text-xs font-semibold">{name}</p>
            <p className="text-slate-600 text-[10px]">{country}</p>
          </div>
        </div>
        <Stars rating={rating} />
      </div>
      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">&ldquo;{text}&rdquo;</p>
    </div>
  );
}

export default function Freelance() {
  return (
    <section id="freelance" className="relative z-10 py-28 px-6 bg-[#0d1117]/60">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-[0.15em] uppercase block mb-3">
            Hire Me
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight mb-4">
            Find Me On Freelance Platforms
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            I&apos;m actively available for freelance projects on both platforms. 5 years of delivering
            quality work with top ratings and 100% client satisfaction.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Upwork ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <TiltCard className="relative h-full bg-[#0d1117] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#14a800]/30 hover:shadow-[0_0_60px_rgba(20,168,0,0.08)] transition-all duration-500">
              {/* Top bar */}
              <div className="flex items-start justify-between">
                <div>
                  <UpworkLogo />
                  <p className="text-slate-500 text-xs mt-1 font-mono">freelancers/muhammadmubeenahmad</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#14a800]/10 border border-[#14a800]/25 text-[#14a800] text-xs font-semibold px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#14a800] animate-pulse" />
                  Available
                </div>
              </div>

              {/* Name & title */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border-2 border-[#14a800]/40 overflow-hidden">
                    <Image src="/avatar.png" alt="Mubeen Ahmad" width={56} height={56} className="object-cover object-top w-full h-full" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#14a800] rounded-full flex items-center justify-center">
                    <CheckCircle size={11} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Mubeen A.</h3>
                  <p className="text-slate-400 text-sm">Full Stack Developer · MERN Stack Expert</p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold bg-[#14a800]/10 border border-[#14a800]/20 text-[#14a800] px-3 py-1.5 rounded-full">
                  <Shield size={11} /> Top Rated
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full">
                  <Award size={11} /> 100% Job Success
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full">
                  <Zap size={11} /> Expert Vetted
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <Stat icon={<Star size={14} />} label="Job Success" value="100%" />
                <Stat icon={<CheckCircle size={14} />} label="Total Jobs" value="50+" />
                <Stat icon={<Clock size={14} />} label="Member Since" value="2020" />
                <Stat icon={<Zap size={14} />} label="Response Time" value="< 1 hr" />
              </div>

              {/* Reviews */}
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-3">Recent Reviews</p>
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
                className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm bg-[#14a800] text-white hover:bg-[#12960] hover:shadow-[0_8px_32px_rgba(20,168,0,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "#14a800" }}
              >
                View Upwork Profile
                <ArrowUpRight size={15} />
              </a>
            </TiltCard>
          </motion.div>

          {/* ── Fiverr ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <TiltCard className="relative h-full bg-[#0d1117] border border-white/[0.08] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#1dbf73]/30 hover:shadow-[0_0_60px_rgba(29,191,115,0.08)] transition-all duration-500">
              {/* Top bar */}
              <div className="flex items-start justify-between">
                <div>
                  <FiverrLogo />
                  <p className="text-slate-500 text-xs mt-1 font-mono">fiverr.com/mubeen_ahmad_01</p>
                </div>
                <div className="flex items-center gap-1.5 bg-[#1dbf73]/10 border border-[#1dbf73]/25 text-[#1dbf73] text-xs font-semibold px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1dbf73] animate-pulse" />
                  Online
                </div>
              </div>

              {/* Name & title */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border-2 border-[#1dbf73]/40 overflow-hidden">
                    <Image src="/avatar.png" alt="Mubeen Ahmad" width={56} height={56} className="object-cover object-top w-full h-full" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#14a800] rounded-full flex items-center justify-center">
                    <CheckCircle size={11} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Mubeen Ahmad</h3>
                  <p className="text-slate-400 text-sm">Full Stack · Frontend Developer</p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold bg-[#1dbf73]/10 border border-[#1dbf73]/20 text-[#1dbf73] px-3 py-1.5 rounded-full">
                  <Award size={11} /> Level 2 Seller
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold bg-amber-500/10 border border-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full">
                  <Star size={11} /> 5 Rated
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full">
                  <Zap size={11} /> Fast Delivery
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <Stat icon={<Star size={14} />} label="Avg Rating" value="5 / 5" />
                <Stat icon={<CheckCircle size={14} />} label="Reviews" value="47" />
                <Stat icon={<Clock size={14} />} label="Response Time" value="~1 Hour" />
                <Stat icon={<Zap size={14} />} label="Member Since" value="5 Years" />
              </div>

              {/* Reviews */}
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-3">Recent Reviews</p>
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
                className="mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  background: "#1dbf73",
                  boxShadow: "0 0 0 0 rgba(29,191,115,0)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(29,191,115,0.35)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(29,191,115,0)")}
              >
                View Fiverr Profile
                <ArrowUpRight size={15} />
              </a>
            </TiltCard>
          </motion.div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-white/[0.05]"
        >
          {[
            { label: "Combined Reviews", value: "100+" },
            { label: "Avg Rating", value: "5 ★" },
            { label: "Job Success", value: "100%" },
            { label: "Years Active", value: "8+" },
            { label: "Happy Clients", value: "50+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-extrabold text-2xl gradient-text">{s.value}</p>
              <p className="text-slate-600 text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
