"use client";

import { useState, useMemo } from "react";
import { HiDesktopComputer, HiServer, HiCog, HiSearch } from "react-icons/hi";
import {
  SiHtml5, SiSass, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiExpo, SiRedux, SiTailwindcss, SiFramer, SiWebflow,
  SiNodedotjs, SiExpress, SiNestjs, SiPostgresql, SiPrisma, SiMongodb,
  SiRedis, SiSocketdotio, SiDocker,
  SiGit, SiGithubactions, SiJest, SiGnubash, SiCloudinary, SiPostman,
  SiVercel, SiNetlify
} from "react-icons/si";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  {
    id: "frontend",
    name: "Frontend",
    categoryIcon: HiDesktopComputer,
    accent: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      activeBorder: "border-blue-500/60",
      glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]",
      bar: "from-blue-500/50",
      chip: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    },
    items: [
      { name: "HTML5",         icon: SiHtml5,       color: "#E34F26", level: 95, note: "Semantika, a11y, SEO struktura" },
      { name: "CSS3 / SCSS",   icon: SiSass,        color: "#CC6699", level: 90, note: "Grid, flex, animacije, mixins" },
      { name: "JavaScript",    icon: SiJavascript,  color: "#F7DF1E", level: 95, note: "ES2023+, async patterns" },
      { name: "TypeScript",    icon: SiTypescript,  color: "#3178C6", level: 88, note: "Generics, utility types, strict mode" },
      { name: "React",         icon: SiReact,       color: "#61DAFB", level: 93, note: "Hooks, context, performance tuning" },
      { name: "Next.js",       icon: SiNextdotjs,   color: "#ffffff", level: 90, note: "App Router, RSC, ISR" },
      { name: "React Native",  icon: SiReact,       color: "#61DAFB", level: 80, note: "Cross-platform mobile app-ovi" },
      { name: "Expo",          icon: SiExpo,        color: "#ffffff", level: 78, note: "EAS build, OTA update-ovi" },
      { name: "Redux",         icon: SiRedux,       color: "#764ABC", level: 82, note: "Toolkit, RTK Query" },
      { name: "Tailwind CSS",  icon: SiTailwindcss, color: "#06B6D4", level: 92, note: "Design sistemi, custom teme" },
      { name: "Framer Motion", icon: SiFramer,      color: "#6B8AFF", level: 80, note: "Layout animacije, gestures" },
      { name: "Webflow",       icon: SiWebflow,     color: "#4353FF", level: 70, note: "Brzi marketing sajtovi" },
    ],
  },
  {
    id: "backend",
    name: "Backend & Data",
    categoryIcon: HiServer,
    accent: {
      text: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      activeBorder: "border-green-500/60",
      glow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]",
      bar: "from-green-500/50",
      chip: "bg-green-500/15 text-green-300 border-green-500/30",
    },
    items: [
      { name: "Node.js",     icon: SiNodedotjs,   color: "#339933", level: 90, note: "REST API-ji, streams, workers" },
      { name: "Express",     icon: SiExpress,     color: "#ffffff", level: 88, note: "Middleware, auth, rate limiting" },
      { name: "Nest.js",     icon: SiNestjs,      color: "#E0234E", level: 75, note: "DI, moduli, guards" },
      { name: "PostgreSQL",  icon: SiPostgresql,  color: "#4169E1", level: 82, note: "Indeksi, joins, migracije" },
      { name: "Prisma",      icon: SiPrisma,      color: "#5A67D8", level: 85, note: "Type-safe ORM, schema-first" },
      { name: "MongoDB",     icon: SiMongodb,     color: "#47A248", level: 80, note: "Aggregation pipeline, Mongoose" },
      { name: "Redis",       icon: SiRedis,       color: "#DC382D", level: 70, note: "Keširanje, sesije, pub/sub" },
      { name: "Socket.io",   icon: SiSocketdotio, color: "#ffffff", level: 78, note: "Realtime chat, notifikacije" },
      { name: "Docker",      icon: SiDocker,      color: "#2496ED", level: 72, note: "Compose, multi-stage build" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    categoryIcon: HiCog,
    accent: {
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      activeBorder: "border-purple-500/60",
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]",
      bar: "from-purple-500/50",
      chip: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    },
    items: [
      { name: "Git",         icon: SiGit,           color: "#F05032", level: 90, note: "Rebase, cherry-pick, hooks" },
      { name: "CI/CD",       icon: SiGithubactions, color: "#2088FF", level: 78, note: "GitHub Actions pipeline-ovi" },
      { name: "Jest",        icon: SiJest,          color: "#C21325", level: 75, note: "Unit + integracioni testovi" },
      { name: "Linux CLI",   icon: SiGnubash,       color: "#4EAA25", level: 80, note: "Bash skripte, server setup" },
      { name: "Postman",     icon: SiPostman,       color: "#FF6C37", level: 88, note: "Kolekcije, automatski testovi" },
      { name: "Cloudinary",  icon: SiCloudinary,    color: "#3448C5", level: 75, note: "Media pipeline, transformacije" },
      { name: "Vercel",      icon: SiVercel,        color: "#ffffff", level: 88, note: "Edge funkcije, preview deploy" },
      { name: "Netlify",     icon: SiNetlify,       color: "#00C7B7", level: 80, note: "Build hooks, redirects" },
    ],
  },
];

export default function SkillsPage() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const { lang, t } = useLanguage();

  const FILTERS = [
    { id: "all", label: t("skills.filterAll") },
    ...categories.map((c) => ({ id: c.id, label: c.name })),
  ];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => filter === "all" || c.id === filter)
      .map((c) => ({
        ...c,
        items: q
          ? c.items.filter(
              (i) =>
                i.name.toLowerCase().includes(q) ||
                i.note.toLowerCase().includes(q)
            )
          : c.items,
      }))
      .filter((c) => c.items.length > 0);
  }, [filter, query]);

  const totalTools = categories.reduce((n, c) => n + c.items.length, 0);

  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl space-y-8">

        {/* Header */}
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {t("skills.label")}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white">{t("skills.title")}</h1>
          <p className="mt-1 text-sm text-muted">
            {t("skills.subtitle")}{" "}
            <span className="font-mono text-xs text-white/40">
              —{" "}
              {lang === "sr"
                ? `${totalTools} alata u ${categories.length} oblasti`
                : `${totalTools} tools across ${categories.length} domains`}
            </span>
          </p>
        </AnimatedSection>

        {/* Controls */}
        <AnimatedSection delay={0.05}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] transition-all duration-200 ${
                      active
                        ? "border-white/20 bg-white/[0.08] text-white"
                        : "border-white/[0.06] bg-white/[0.02] text-muted hover:border-white/[0.12] hover:text-white/80"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            <div className="relative sm:w-56">
              <HiSearch
                size={14}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
              />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("skills.searchPlaceholder")}
                className="w-full rounded-lg border border-white/[0.06] bg-white/[0.02] py-1.5 pl-8 pr-3 font-mono text-[11px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/20"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        {visible.length === 0 ? (
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-10 text-center">
            <p className="font-mono text-xs text-muted">
              {t("skills.noResults")} &quot;{query}&quot;.
            </p>
          </div>
        ) : (
          <div
            className={`grid gap-5 ${
              filter === "all" ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2"
            }`}
          >
            {visible.map((cat, i) => (
              <AnimatedSection key={cat.name} delay={0.1 + i * 0.08}>
                <div
                  className={`group h-full overflow-hidden rounded-xl border ${cat.accent.border} bg-ink-soft transition-all duration-300 ${cat.accent.glow}`}
                >
                  <div className={`h-[2px] bg-gradient-to-r ${cat.accent.bar} to-transparent`} />

                  <div className="p-5">
                    <div className="mb-5 flex items-center gap-3">
                      <div className={`rounded-xl ${cat.accent.bg} p-2.5`}>
                        <cat.categoryIcon className={cat.accent.text} size={18} />
                      </div>
                      <h3 className="font-semibold text-white">{cat.name}</h3>
                      <span className="ml-auto font-mono text-[10px] text-muted">
                        {cat.items.length} {t("skills.toolsSuffix")}
                      </span>
                    </div>

                    <div className={`grid gap-2 ${filter === "all" ? "grid-cols-3" : "grid-cols-4"}`}>
                      {cat.items.map((item, idx) => (
                        <div
                          key={item.name}
                          style={{ animationDelay: `${idx * 35}ms` }}
                          className="skill-tile group/item relative flex flex-col items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/[0.12] hover:bg-white/[0.05]"
                        >
                          <item.icon
                            size={22}
                            style={{ color: item.color }}
                            className="transition-transform duration-200 group-hover/item:scale-110"
                          />
                          <span className="text-center font-mono text-[10px] leading-tight text-muted">
                            {item.name}
                          </span>

                          {/* level bar */}
                          <div className="h-[2px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                            <div
                              className="h-full rounded-full opacity-60 transition-all duration-500 group-hover/item:opacity-100"
                              style={{ width: `${item.level}%`, backgroundColor: item.color }}
                            />
                          </div>

                          {/* tooltip */}
                          <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-40 -translate-x-1/2 translate-y-1 rounded-lg border border-white/10 bg-[#0b0d12] px-2.5 py-2 text-center opacity-0 shadow-xl transition-all duration-200 group-hover/item:translate-y-0 group-hover/item:opacity-100">
                            <p className="font-mono text-[10px] leading-snug text-white/70">
                              {item.note}
                            </p>
                            <p className="mt-1 font-mono text-[9px]" style={{ color: item.color }}>
                              {item.level}%
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

      </div>

      <style jsx global>{`
        @keyframes skillIn {
          from { opacity: 0; transform: translateY(8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .skill-tile {
          opacity: 0;
          animation: skillIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}
