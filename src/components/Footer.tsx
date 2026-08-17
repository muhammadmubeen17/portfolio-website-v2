"use client";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "@/components/icons";

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/70 backdrop-blur-md py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="group font-mono text-lg font-bold text-slate-900 tracking-wide flex items-center gap-0.5 cursor-pointer"
        >
          <span className="text-sky-600 transition-transform group-hover:-translate-x-0.5">
            &lt;
          </span>
          <span className="font-extrabold">MM</span>
          <span className="text-sky-600 transition-transform group-hover:translate-x-0.5">
            /&gt;
          </span>
        </button>

        <p className="text-sm text-slate-500 text-center font-medium">
          Designed &amp; Built by{" "}
          <span className="text-slate-900 font-semibold">
            Muhammad Mubeen Ahmad
          </span>
        </p>

        <div className="flex gap-3">
          {[
            {
              href: "https://github.com/muhammadmubeen17",
              icon: <GitHubIcon size={15} />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/muhammad-mubeen-ahmad",
              icon: <LinkedInIcon size={15} />,
              label: "LinkedIn",
            },
            {
              href: "https://www.mubeendev.site",
              icon: <GlobeIcon size={15} />,
              label: "Portfolio",
            },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:border-sky-400 hover:text-sky-600 hover:shadow-xs bg-white transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
