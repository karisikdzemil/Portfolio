"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaGithub } from "react-icons/fa";

const filters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
];

export default function ProjectsFilter({ projects }) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      <div className="mt-6 flex gap-2 border-b border-white/[0.07] pb-5">
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`rounded px-3 py-1.5 font-mono text-xs transition-all ${
              active === value
                ? "bg-accent text-ink font-bold"
                : "border border-white/10 text-muted hover:border-white/20 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {filtered.map((project) => {
          const hasLive = project.links.some(
            (l) =>
              l.label.toLowerCase().includes("live") ||
              l.label.toLowerCase().includes("demo") ||
              l.label.toLowerCase().includes("expo")
          );
          const githubLink = project.links.find((l) =>
            l.href.includes("github")
          );
          const liveLink = project.links.find(
            (l) =>
              !l.href.includes("github") && !l.href.includes("expo.dev")
          ) || project.links.find((l) => l.href.includes("expo.dev"));

          return (
            <div
              key={project.slug}
              className="group overflow-hidden rounded-xl border border-white/[0.07] bg-ink-soft transition-all duration-300 hover:border-accent/20 hover:shadow-[0_0_40px_rgba(245,158,11,0.04)]"
            >
              {/* Image — always in color */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-soft/80 via-ink-soft/10 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="rounded-full border border-white/20 bg-black/50 px-2.5 py-0.5 font-mono text-[10px] capitalize text-white/70 backdrop-blur-sm">
                    {project.type}
                  </span>
                  {hasLive && (
                    <span className="flex items-center gap-1.5 rounded-full border border-green-400/30 bg-black/50 px-2.5 py-0.5 font-mono text-[10px] text-green-400 backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      Live
                    </span>
                  )}
                </div>

                {/* Year top-right */}
                <span className="absolute top-3 right-3 font-mono text-[10px] text-white/40">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-white transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/[0.08] px-1.5 py-0.5 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action row */}
                <div className="mt-4 flex items-center gap-2 border-t border-white/[0.07] pt-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 rounded border border-white/10 py-1.5 text-center font-mono text-[11px] text-muted transition-all hover:border-accent/30 hover:text-accent"
                  >
                    Case Study →
                  </Link>
                  {liveLink && (
                    <a
                      href={liveLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit live site"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/10 text-muted transition-all hover:border-accent/30 hover:text-accent"
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
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-white/10 text-muted transition-all hover:border-accent/30 hover:text-accent"
                    >
                      <FaGithub size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
