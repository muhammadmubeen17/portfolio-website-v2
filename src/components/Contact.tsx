"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    if (!name || !email || !message) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
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

          {/* Form / Success / Error */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center py-8 gap-5"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-medium text-slate-500 hover:text-[#00d4ff] transition-colors duration-200 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  noValidate
                >
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map((f) => (
                    <div key={f.id} className="mb-6">
                      <label htmlFor={f.id} className="block text-xs font-medium text-slate-400 tracking-wide mb-2">
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

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-400 text-xs mb-4 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2.5">
                      <XCircle size={14} className="flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#00d4ff] to-[#0099cc] text-[#080b12] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,212,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <Send size={15} />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
