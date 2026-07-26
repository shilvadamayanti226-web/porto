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
      className="relative min-h-screen flex items-center justify-center bg-[#FAFAFA] px-6 py-20"
    >
      {/* ── Subtle background dot grid ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">

        {/* Avatar */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="relative w-28 h-28 rounded-full ring-4 ring-slate-200 shadow-md">
            <Image
              src="/profile-shilva.jpg"
              alt="Foto profil Shilva Damayanti Santoso"
              fill
              sizes="112px"
              className="rounded-full object-cover"
              priority
            />
            {/* Online indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#FAFAFA] z-10" />
          </div>
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-800 mb-3">
          Shilva Damayanti
          <br />
          <span className="text-slate-500 font-medium">Santoso</span>
        </h1>

        {/* Typewriter role */}
        <div className="animate-fade-in-up-delay-2 h-9 flex items-center justify-center mb-6">
          <span className="text-lg sm:text-xl text-slate-500 font-medium">
            {displayed}
            <span className="inline-block w-0.5 h-5 ml-1 bg-slate-400 align-middle animate-pulse" />
          </span>
        </div>

        {/* Bio */}
        <p className="animate-fade-in-up-delay-3 max-w-xl mx-auto text-base sm:text-lg leading-relaxed text-slate-600 mb-10">
          Mahasiswa{" "}
          <span className="text-slate-800 font-semibold">
            Sistem dan Teknologi Informasi
          </span>{" "}
          yang bersemangat merancang pengalaman digital intuitif dan berpusat
          pada manusia. Menggabungkan prinsip{" "}
          <span className="text-slate-800 font-semibold">HCI (Alan Dix)</span>{" "}
          dengan estetika modern untuk menciptakan desain yang bermakna.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-in-up-delay-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-all duration-200 hover:scale-105 shadow-sm"
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
            href="mailto:shilva.damayanti@email.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 hover:scale-105 shadow-sm"
          >
            <span>Hubungi Saya</span>
          </a>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex justify-center animate-fade-in-up-delay-4">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors group"
            aria-label="Scroll ke bawah"
          >
            <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
            <div className="w-6 h-10 rounded-full border border-slate-300 group-hover:border-slate-500 transition-colors flex items-start justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-slate-300 rounded-full animate-bounce group-hover:bg-slate-500 transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
