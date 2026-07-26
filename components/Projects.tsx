"use client";

import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────── */
type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  hciPrinciple: string;
  hciNote: string;
  color: string; // gradient stop
  emoji: string;
  link?: string;
};

/* ─── Data ───────────────────────────────────────────────── */
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MedSchedule App",
    category: "Mobile UI",
    description:
      "Aplikasi penjadwalan konsultasi dokter yang dirancang dengan antarmuka ramah pengguna untuk lansia, menekankan ukuran teks besar dan navigasi sederhana.",
    tags: ["Figma", "User Research", "Prototyping"],
    hciPrinciple: "Learnability",
    hciNote: "Sistem dirancang agar pengguna baru dapat langsung menggunakannya tanpa pelatihan — prinsip Alan Dix: learnability.",
    color: "#7c3aed",
    emoji: "🏥",
  },
  {
    id: 2,
    title: "EduFlow LMS",
    category: "Web App",
    description:
      "Redesain Learning Management System untuk perguruan tinggi dengan fokus pada efisiensi alur belajar dan konsistensi visual antarmuka.",
    tags: ["Wireframing", "Usability Testing", "Design System"],
    hciPrinciple: "Consistency",
    hciNote: "Konsistensi elemen UI dipertahankan di seluruh halaman — prinsip Alan Dix: consistency & standards.",
    color: "#4f46e5",
    emoji: "📚",
  },
  {
    id: 3,
    title: "GreenMart E-Commerce",
    category: "UX Research",
    description:
      "Studi kasus UX untuk platform belanja produk organik, mencakup user journey mapping, affinity diagram, dan wireframe mid-fidelity.",
    tags: ["User Journey", "Affinity Diagram", "HCI Analysis"],
    hciPrinciple: "Feedback",
    hciNote: "Setiap aksi pengguna mendapat respons visual instan (feedback) agar pengguna selalu tahu status sistem — Alan Dix.",
    color: "#06b6d4",
    emoji: "🛒",
  },
  {
    id: 4,
    title: "SafeRoute Dashboard",
    category: "Dashboard",
    description:
      "Dashboard visualisasi data keamanan jalan raya real-time untuk dinas perhubungan, menggabungkan data map dan statistik interaktif.",
    tags: ["Data Viz", "Information Architecture", "Figma"],
    hciPrinciple: "Visibility",
    hciNote: "Informasi kritis selalu terlihat di atas lipatan halaman — prinsip visibility of system status Alan Dix.",
    color: "#ec4899",
    emoji: "🗺️",
  },
  {
    id: 5,
    title: "TaskFlow Kanban",
    category: "Productivity App",
    description:
      "Aplikasi manajemen tugas bergaya kanban dengan fitur drag-and-drop, label prioritas, dan mode kolaborasi tim secara real-time.",
    tags: ["Interaction Design", "Prototyping", "User Testing"],
    hciPrinciple: "Flexibility",
    hciNote: "Pengguna ahli dan pemula diakomodasi lewat shortcut keyboard dan antarmuka visual — prinsip flexibility & efficiency of use.",
    color: "#f59e0b",
    emoji: "✅",
  },
  {
    id: 6,
    title: "NutriScan Mobile",
    category: "Mobile UI",
    description:
      "Aplikasi scan barcode nutrisi makanan yang memberikan informasi gizi secara visual dan rekomendasi diet personal berbasis AI.",
    tags: ["Mobile Design", "AI Integration", "UX Writing"],
    hciPrinciple: "Error Prevention",
    hciNote: "Desain mencegah kesalahan input sejak awal melalui validasi langsung — prinsip error prevention Alan Dix.",
    color: "#10b981",
    emoji: "🥗",
  },
];

const CATEGORIES = ["All", "Mobile UI", "Web App", "UX Research", "Dashboard", "Productivity App"];

/* ─── Component ─────────────────────────────────────────── */
export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 px-6 bg-animated">
      {/* ── Section header ── */}
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <p className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3">
          Design Portfolio
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="text-white">Karya &amp; </span>
          <span className="gradient-text">Studi Kasus</span>
        </h2>
        <p className="max-w-xl mx-auto text-slate-400 text-base leading-relaxed">
          Setiap proyek dilandasi prinsip{" "}
          <span className="text-violet-300 font-semibold">Human-Computer Interaction</span>{" "}
          menurut Alan Dix — menggabungkan estetika visual dengan fondasi teori interaksi yang kuat.
        </p>
      </div>

      {/* ── Filter tabs ── */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-wrap gap-2 justify-center">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "text-white glow-violet"
                : "glass text-slate-400 hover:text-white hover:border-violet-400/50"
            }`}
            style={
              activeCategory === cat
                ? {
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
                  }
                : {}
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Project grid ── */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="glass-card rounded-2xl p-6 cursor-pointer flex flex-col gap-4"
            onClick={() =>
              setExpandedId(expandedId === project.id ? null : project.id)
            }
          >
            {/* Card header */}
            <div className="flex items-start justify-between gap-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${project.color}33 0%, ${project.color}11 100%)`,
                  border: `1px solid ${project.color}44`,
                }}
              >
                {project.emoji}
              </div>
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full border"
                style={{
                  color: project.color,
                  borderColor: `${project.color}44`,
                  background: `${project.color}11`,
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Title & description */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* HCI Principle — expanded */}
            {expandedId === project.id && (
              <div
                className="rounded-xl p-4 border text-sm"
                style={{
                  background: `${project.color}0d`,
                  borderColor: `${project.color}33`,
                }}
              >
                <p className="font-semibold text-white mb-1">
                  🎓 HCI Principle:{" "}
                  <span style={{ color: project.color }}>
                    {project.hciPrinciple}
                  </span>
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {project.hciNote}
                </p>
              </div>
            )}

            {/* Toggle hint */}
            <button
              className="mt-auto text-xs font-mono text-slate-500 hover:text-violet-400 transition-colors text-left flex items-center gap-1.5 group"
              aria-expanded={expandedId === project.id}
              onClick={(e) => {
                e.stopPropagation();
                setExpandedId(expandedId === project.id ? null : project.id);
              }}
            >
              <span
                className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                style={{
                  transform:
                    expandedId === project.id ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                ▶
              </span>
              {expandedId === project.id
                ? "Sembunyikan prinsip HCI"
                : "Lihat prinsip HCI"}
            </button>
          </article>
        ))}
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <p className="text-center text-slate-500 mt-8">
          Belum ada proyek di kategori ini.
        </p>
      )}
    </section>
  );
}
