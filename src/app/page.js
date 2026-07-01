import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import GithubActivity from "@/components/GithubActivity";

const quickStats = [
  { value: "3+", label: "Years coding" },
  { value: "4", label: "Projects shipped" },
  { value: "2", label: "Platforms" },
  { value: "2023", label: "Started uni" },
];

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Intro */}
      <section className="border-b border-white/[0.07] px-8 pb-10 pt-10 md:px-10 md:pt-12">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Hello 👋
          </p>
          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            I&apos;m a fullstack JavaScript engineer
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            I build web and mobile products end to end — UI, state, backend, and the real-time bits in between.
            My core stack is{" "}
            <span className="font-medium text-white">React, Next.js and TypeScript</span> on the frontend,
            paired with{" "}
            <span className="font-medium text-white">Node.js, Firebase and Socket.io</span> on the backend.
            Currently studying Software Engineering at the State University of Novi Pazar.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded border border-white/[0.07] bg-ink-soft p-4"
              >
                <p className="font-mono text-xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Activity */}
      <section className="border-b border-white/[0.07] px-8 py-10 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-muted">
            GitHub Activity
          </p>
          <GithubActivity />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-8 py-10 md:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
              Featured Work
            </p>
            <Link
              href="/projects"
              className="font-mono text-xs text-accent transition-colors hover:text-accent-dim"
            >
              All projects →
            </Link>
          </div>

          <div className="space-y-3">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex items-center gap-4 rounded border border-white/[0.07] bg-ink-soft p-4 transition-all hover:border-accent/30 hover:bg-surface"
              >
                <div className="h-14 w-20 shrink-0 overflow-hidden rounded border border-white/[0.08]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={56}
                    className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-muted">
                    {project.summary}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-white/[0.08] px-1.5 py-0.5 font-mono text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
