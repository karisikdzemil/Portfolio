"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import GithubActivity from "@/components/GithubActivity";
import { HiArrowRight } from "react-icons/hi";

const quickStats = [
  { value: "3+", label: "Years coding" },
  { value: "5", label: "Projects shipped" },
  { value: "2", label: "Platforms" },
  { value: "2023", label: "Started uni" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.06] px-8 pb-12 pt-12 md:px-10 md:pt-14">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute right-[-60px] top-[-40px] h-[380px] w-[380px] rounded-full bg-accent/[0.07] blur-[110px]" />
        <div className="pointer-events-none absolute bottom-[-60px] left-[-40px] h-[280px] w-[280px] rounded-full bg-violet-600/[0.06] blur-[90px]" />

        <motion.div
          className="relative mx-auto max-w-3xl"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent"
          >
            Hello, I&apos;m Dzemil
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-3 text-3xl font-bold leading-[1.2] md:text-[2.6rem]"
          >
            <span className="gradient-heading">Fullstack JavaScript</span>
            <br />
            <span className="gradient-heading">Engineer</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl leading-relaxed text-muted"
          >
            Hi! {"I'm"} Džemil, a{" "}
            <span className="font-medium text-white/80">
              full-stack engineer
            </span>{" "}
            and Informatics student at the{" "}
            <span className="font-medium text-white/80">
              University of Novi Pazar
            </span>
            . {"I'm"} genuinely passionate about building modern web and mobile
            applications, driven by a constant hunger to{" "}
            <span className="font-medium text-white/80">
              learn new technologies
            </span>{" "}
            and grow. As a developer, I pride myself on being{" "}
            <span className="font-medium text-white/80">
              resourceful, persistent, and highly communicative
            </span>
             {" "}always finding clever solutions to complex problems and bringing
            strong collaboration to any team.
          </motion.p>
          {/* 
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-xl border border-white/[0.06] bg-ink-soft p-4 transition-all duration-300 hover:border-accent/25 hover:shadow-[0_0_32px_rgba(245,158,11,0.08)]"
              >
                <p className="font-mono text-2xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </section>

      {/* ── GitHub Activity ────────────────────────── */}
      <section className="border-b border-white/[0.06] px-8 py-10 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted">
            GitHub Activity
          </p>
          <GithubActivity />
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────── */}
      <section className="px-8 py-10 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Featured Work
            </p>
            <Link
              href="/projects"
              className="group flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent-dim"
            >
              All projects
              <HiArrowRight
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="space-y-3">
            {featured.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-ink-soft p-4 transition-all duration-300 hover:border-accent/25 hover:bg-surface hover:shadow-[0_0_40px_rgba(245,158,11,0.07)]"
                >
                  <div className="h-14 w-20 shrink-0 overflow-hidden rounded-lg border border-white/[0.08]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={80}
                      height={56}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white transition-colors duration-200 group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-0.5 truncate text-xs text-muted">
                      {project.summary}
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[10px] text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <HiArrowRight
                    size={14}
                    className="shrink-0 text-muted/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
