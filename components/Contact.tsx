"use client";

import { useState } from "react";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/shilva-damayanti",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0077b5",
  },
  {
    label: "Behance",
    href: "https://behance.net/shilvadamayanti",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.49.36-1.055.62-1.69.78-.63.17-1.3.25-2.01.25H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.428-.29.7-.604.8-.96h2.57c-.41 1.28-1.04 2.19-1.89 2.75-.85.56-1.884.84-3.08.84-.836 0-1.592-.13-2.26-.4a4.556 4.556 0 01-1.69-1.16 5.343 5.343 0 01-1.05-1.79 6.82 6.82 0 01-.36-2.27c0-.83.12-1.59.38-2.28.25-.69.62-1.29 1.08-1.79.47-.5 1.02-.895 1.67-1.18.64-.28 1.37-.42 2.18-.42.896 0 1.67.174 2.33.52a4.882 4.882 0 011.63 1.38c.43.58.74 1.24.93 1.99.19.75.26 1.54.23 2.38h-7.66c0 .84.22 1.5.66 1.93zM3.01 10.41h3.456c.79 0 1.44-.173 1.94-.527.5-.35.753-.917.753-1.69 0-.84-.24-1.43-.72-1.76-.48-.33-1.1-.496-1.866-.496H3.01v4.474zm14.26-2.06c-.36-.37-.904-.553-1.63-.553-.48 0-.88.07-1.18.22-.31.15-.556.34-.74.57a2.1 2.1 0 00-.37.77 4.32 4.32 0 00-.12.83h4.83c-.08-.76-.42-1.46-.79-1.83zM3.01 13.47h3.956c.39 0 .77-.04 1.14-.12.37-.08.7-.21.98-.4.28-.19.5-.44.67-.75.17-.31.25-.7.25-1.16 0-.92-.26-1.58-.79-1.96-.52-.38-1.23-.57-2.11-.57H3.01v4.96z" />
      </svg>
    ),
    color: "#053eff",
  },
  {
    label: "GitHub",
    href: "https://github.com/shilvadamayanti",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    color: "#6e5494",
  },
  {
    label: "Email",
    href: "mailto:shilva.damayanti@email.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#ec4899",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const EMAIL = "shilva.damayanti@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer id="contact" className="relative py-24 px-6">
      {/* ── Decorative top border ── */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.5), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-white">Mari </span>
          <span className="gradient-text-pink">Terhubung</span>
        </h2>
        <p className="max-w-lg mx-auto text-slate-400 text-base leading-relaxed mb-10">
          Terbuka untuk diskusi proyek, kolaborasi desain, atau sekadar ngobrol
          tentang UI/UX dan HCI. Jangan ragu untuk menghubungi saya! 🚀
        </p>

        {/* Email copy card */}
        <div className="glass-card rounded-2xl p-6 mb-10 inline-flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto w-full">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-pink-500/15 border border-pink-500/30">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-pink-400" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-slate-300 text-sm font-mono flex-1 break-all text-left">
            {EMAIL}
          </span>
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-300 shrink-0"
            style={{
              background: copied
                ? "linear-gradient(135deg,#10b981,#059669)"
                : "linear-gradient(135deg,#7c3aed,#4f46e5)",
              boxShadow: "0 0 16px rgba(124,58,237,0.3)",
            }}
            aria-label="Salin alamat email"
          >
            {copied ? "✓ Tersalin!" : "Salin"}
          </button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group glass rounded-xl p-3.5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              style={{
                ["--hover-glow" as string]: `0 0 20px ${social.color}44`,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${social.color}55`)
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = "")
              }
            >
              <span
                className="transition-colors duration-300"
                style={{ color: "#94a3b8" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = social.color)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#94a3b8")
                }
              >
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom divider */}
        <div
          aria-hidden
          className="h-px w-full mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* Footer note */}
        <p className="text-slate-600 text-xs font-mono">
          Designed & built with ❤️ by{" "}
          <span className="text-violet-400">Shilva Damayanti Santoso</span>
          {" · "}
          <span className="text-slate-500">
            Sistem dan Teknologi Informasi
          </span>
          {" · "}
          <span className="text-slate-600">{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
