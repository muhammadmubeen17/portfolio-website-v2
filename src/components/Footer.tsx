import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        <span className="font-mono text-lg font-bold text-white">
          <span className="text-[#00d4ff]">&lt;</span>MM<span className="text-[#00d4ff]">/&gt;</span>
        </span>

        <p className="text-sm text-slate-500 text-center">
          Designed &amp; Built by{" "}
          <span className="text-slate-300 font-medium">Muhammad Mubeen Ahmad</span>
        </p>

        <div className="flex gap-3">
          {[
            { href: "https://github.com/muhammadmubeen17", icon: <GitHubIcon size={15} />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/muhammad-mubeen-ahmad", icon: <LinkedInIcon size={15} />, label: "LinkedIn" },
          ].map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 border border-white/[0.07] rounded-full flex items-center justify-center text-slate-500 hover:border-[#00d4ff]/40 hover:text-[#00d4ff] transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
