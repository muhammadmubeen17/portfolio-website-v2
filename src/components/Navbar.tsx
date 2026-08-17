"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#freelance", label: "Hire Me" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ["about", "skills", "projects", "experience", "freelance", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-xs"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="group font-mono text-lg font-bold text-slate-900 tracking-wide flex items-center gap-0.5 cursor-pointer"
        >
          <span className="text-sky-600 transition-transform group-hover:-translate-x-0.5">&lt;</span>
          <span className="font-extrabold">MM</span>
          <span className="text-sky-600 transition-transform group-hover:translate-x-0.5">/&gt;</span>
        </button>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/80 shadow-2xs">
          {links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 ${
                  isActive
                    ? "bg-white text-sky-600 shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {l.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("#contact")}
            className="inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-5 py-2.5 rounded-full hover:shadow-[0_8px_20px_rgba(14,165,233,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700 p-2 rounded-xl bg-slate-100 border border-slate-200/80 hover:text-sky-600 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left text-slate-700 py-2.5 px-3 rounded-xl text-sm font-semibold hover:bg-slate-50 hover:text-sky-600 transition-all"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-2 text-center text-white bg-gradient-to-r from-sky-500 to-indigo-600 font-bold py-3 px-4 rounded-xl text-sm shadow-md transition-all"
          >
            Let&apos;s Connect
          </button>
        </div>
      )}
    </header>
  );
}
