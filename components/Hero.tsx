"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const ROLES = [
  "UI/UX Designer",
  "Information Systems Student",
  "HCI Researcher",
  "Digital Experience Crafter",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Typewriter effect ── */
  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 45 : 90;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated px-6"
    >
      {/* ── Decorative blobs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Floating ring decoration ── */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute top-24 right-16 w-24 h-24 rounded-full border border-violet-500/30 hidden lg:block"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute bottom-32 left-24 w-16 h-16 rounded-full border border-cyan-500/25 hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      />

      {/* ── Main content card ── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="glass-strong rounded-3xl p-8 sm:p-14 text-center">

          {/* Avatar / profile photo */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="relative w-28 h-28 rounded-full glow-violet">
              <Image
                src="/profile-shilva.jpg"
                alt="Foto profil Shilva Damayanti Santoso"
                fill
                className="rounded-full object-cover"
                priority
              />
              {/* Online indicator */}
              <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-400 border-2 border-[#0f1229] z-10" />
            </div>
          </div>

          {/* Greeting */}
          <p className="animate-fade-in-up-delay-1 text-sm sm:text-base font-mono text-cyan-400 tracking-widest uppercase mb-3">
            Hello, World! 👋
          </p>

          {/* Name */}
          <h1 className="animate-fade-in-up-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-white">Shilva </span>
            <span className="gradient-text">Damayanti</span>
            <br />
            <span className="text-white">Santoso</span>
          </h1>

          {/* Typewriter role */}
          <div className="animate-fade-in-up-delay-3 h-9 flex items-center justify-center mb-8">
            <span className="text-xl sm:text-2xl text-violet-300 font-medium">
              {displayed}
              <span className="inline-block w-0.5 h-6 ml-1 bg-violet-400 align-middle animate-pulse" />
            </span>
          </div>

          {/* Bio */}
          <p className="animate-fade-in-up-delay-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-slate-300 mb-10">
            Mahasiswa{" "}
            <span className="text-violet-300 font-semibold">
              Sistem dan Teknologi Informasi
            </span>{" "}
            yang bersemangat merancang pengalaman digital yang intuitif dan
            berpusat pada manusia. Menggabungkan prinsip{" "}
            <span className="text-cyan-300 font-semibold">HCI (Alan Dix)</span>{" "}
            dengan estetika modern untuk menciptakan desain yang bermakna.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                boxShadow: "0 0 24px rgba(124,58,237,0.4)",
              }}
            >
              <span>Lihat Karya</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-slate-200 glass transition-all duration-300 hover:scale-105 hover:border-violet-400"
            >
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Scroll cue */}
          <div className="mt-14 flex justify-center">
            <a
              href="#projects"
              className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
              aria-label="Scroll ke bawah"
            >
              <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
              <div className="w-6 h-10 rounded-full border border-slate-600 group-hover:border-violet-400 transition-colors flex items-start justify-center pt-1.5">
                <div className="w-1 h-2.5 bg-slate-500 rounded-full animate-bounce group-hover:bg-violet-400 transition-colors" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
