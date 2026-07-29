"use client";

import Image from "next/image";
import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────── */
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  /** Masonry: control card height variety (tall | normal | short) */
  span: "tall" | "normal" | "short";
};

/* ─── Mock Data ──────────────────────────────────────────── */
// Ganti nama file dengan gambar asli kamu di folder /public
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MedSchedule App",
    category: "Mobile UI",
    image: "/desain1.jpg",
    span: "tall",
  },
  {
    id: 2,
    title: "EduFlow LMS",
    category: "Web App",
    image: "/desain2.jpg",
    span: "normal",
  },
  {
    id: 3,
    title: "GreenMart E-Commerce",
    category: "UX Research",
    image: "/desain3.jpg",
    span: "short",
  },
  {
    id: 4,
    title: "SafeRoute Dashboard",
    category: "Dashboard",
    image: "/desain4.jpg",
    span: "normal",
  },
  {
    id: 5,
    title: "TaskFlow Kanban",
    category: "Productivity App",
    image: "/desain5.jpg",
    span: "tall",
  },
  {
    id: 6,
    title: "NutriScan Mobile",
    category: "Mobile UI",
    image: "/desain6.jpg",
    span: "short",
  },
];

const CATEGORIES = [
  "All",
  "Mobile UI",
  "Web App",
  "UX Research",
  "Dashboard",
  "Productivity App",
];

/* ─── Height map ─────────────────────────────────────────── */
const heightMap: Record<Project["span"], string> = {
  tall: "h-80",
  normal: "h-60",
  short: "h-48",
};

/* ─── Component ─────────────────────────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-[#FAFAFA]">
      {/* ── Section header ── */}
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <p className="text-xs font-mono text-slate-400 tracking-widest uppercase mb-3">
          Design Portfolio
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
          Karya &amp; Desain
        </h2>
        <p className="max-w-sm mx-auto text-slate-500 text-sm leading-relaxed">
          Koleksi visual dari proyek desain grafis &amp; UI/UX saya.
        </p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap gap-2 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? "bg-slate-800 text-white shadow-sm"
                : "bg-white text-slate-500 border border-slate-200 hover:border-slate-400 hover:text-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Masonry / Gallery grid ── */}
      <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer"
          >
            {/* Image container */}
            <div className={`relative w-full ${heightMap[project.span]}`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/55 transition-all duration-400 ease-out rounded-2xl" />

            {/* Title revealed on hover */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <span className="text-xs font-mono text-slate-300 tracking-widest uppercase mb-1">
                {project.category}
              </span>
              <h3 className="text-sm font-bold text-white leading-snug">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <p className="text-center text-slate-400 mt-8 text-sm">
          Belum ada karya di kategori ini.
        </p>
      )}

      {/* ── Footer strip ── */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
        <span>
          Designed by{" "}
          <span className="text-slate-600 font-semibold">
            Shilva Damayanti Santoso
          </span>
        </span>
        <span>Sistem dan Teknologi Informasi · {new Date().getFullYear()}</span>
      </div>
    </section>
  );
}
