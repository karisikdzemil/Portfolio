"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: i * 0.06,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
  exit: { opacity: 0, y: -10, scale: 0.97, transition: { duration: 0.2 } },
};

export default function ProjectsFilter({ projects }) {
  const [active, setActive] = useState("all");
  const { lang, t } = useLanguage();

  const filters = [
    { label: t("projects.filterAll"),    value: "all"    },
    { label: "Web",                      value: "web"    },
    { label: t("projects.filterMobile"), value: "mobile" },
  ];

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="mt-6 flex gap-2 border-b border-white/[0.06] pb-5">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`relative rounded-lg px-4 py-1.5 font-mono text-xs transition-all duration-200 ${
              active === value
                ? "text-ink font-bold"
                : "border border-white/[0.08] text-muted hover:border-white/20 hover:text-white"
            }`}
          >
            {active === value && (
              <motion.span
                layoutId="filter-bg"
                className="absolute inset-0 rounded-lg bg-accent"
                transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
              />
            )}
            <span className="relative">{label}</span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const summary = lang === "sr" && project.summary_sr ? project.summary_sr : project.summary;
            const hasLive = project.links.some(
              (l) =>
                l.label.toLowerCase().includes("live") ||
                l.label.toLowerCase().includes("demo") ||
                l.label.toLowerCase().includes("expo")
            );
            const githubLink = project.links.find((l) => l.href.includes("github"));
            const liveLink =
              project.links.find(
                (l) => !l.href.includes("github") && !l.href.includes("expo.dev")
              ) || project.links.find((l) => l.href.includes("expo.dev"));

            return (
              <motion.div
                key={project.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="group overflow-hidden rounded-xl border border-white/[0.07] bg-ink-soft transition-all duration-300 hover:border-accent/25 hover:shadow-[0_0_50px_rgba(245,158,11,0.08)]"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) calc(100vw - 4rem), (max-width: 1280px) calc(50vw - 5rem), 380px"
                    priority={i === 0}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-soft/90 via-ink-soft/20 to-transparent" />
                  <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0" />

                  {/* Top-left badges */}
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 font-mono text-[10px] capitalize text-white/70 backdrop-blur-sm">
                      {project.type === "mobile" && lang === "sr" ? "mobilno" : project.type}
                    </span>
                    {hasLive && (
                      <span className="flex items-center gap-1.5 rounded-full border border-green-400/30 bg-black/50 px-2.5 py-0.5 font-mono text-[10px] text-green-400 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                        Live
                      </span>
                    )}
                  </div>

                  {/* Year */}
                  <span className="absolute right-3 top-3 font-mono text-[10px] text-white/40">
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-white transition-colors duration-200 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                    {summary}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 rounded-lg border border-white/[0.08] py-1.5 text-center font-mono text-[11px] text-muted transition-all duration-200 hover:border-accent/30 hover:text-accent"
                    >
                      {t("projects.details")}
                    </Link>
                    {liveLink && (
                      <a
                        href={liveLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit live site"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-muted transition-all duration-200 hover:border-accent/30 hover:text-accent"
                      >
                        <FaGlobe size={12} />
                      </a>
                    )}
                    {githubLink && (
                      <a
                        href={githubLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-muted transition-all duration-200 hover:border-accent/30 hover:text-accent"
                      >
                        <FaGithub size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}
