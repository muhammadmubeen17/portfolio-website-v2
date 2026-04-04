"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!name || !email || !message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="relative z-10 py-28 px-6">
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
            05 / Contact
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-white tracking-tight">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 xl:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-slate-400 text-lg leading-[1.85] mb-5">
              Have a project in mind? Looking for a developer who can handle both frontend and
              backend? I&apos;m available for freelance work and open to full-time opportunities.
            </p>
            <p className="text-slate-400 text-lg leading-[1.85] mb-10">
              Whether it&apos;s a new product, a legacy codebase needing modernization, or a complex
              integration — let&apos;s talk.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  href: "https://github.com/muhammadmubeen17",
                  icon: <span className="text-[#00d4ff] flex-shrink-0"><GitHubIcon size={17} /></span>,
                  label: "github.com/muhammadmubeen17",
                },
                {
                  href: "https://www.linkedin.com/in/muhammad-mubeen-ahmad",
                  icon: <span className="text-[#00d4ff] flex-shrink-0"><LinkedInIcon size={17} /></span>,
                  label: "linkedin.com/in/muhammad-mubeen-ahmad",
                },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-[#00d4ff] text-sm transition-colors duration-200"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 backdrop-blur-sm"
            noValidate
          >
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name", tag: "input" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com", tag: "input" },
            ].map((f) => (
              <div key={f.id} className="mb-6">
                <label
                  htmlFor={f.id}
                  className="block text-xs font-medium text-slate-400 tracking-wide mb-2"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.12)] transition-all duration-200"
                />
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-medium text-slate-400 tracking-wide mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-slate-200 placeholder:text-slate-600 text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_0_3px_rgba(0,212,255,0.12)] transition-all duration-200 resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                status === "sent"
                  ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white"
                  : "bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-[#080b12] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,212,255,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              }`}
            >
              <Send size={15} />
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
