import Link from "next/link";
import TypingEffect from "@/components/TypingEffect";
import StatsSection from "@/components/StatsSection";
import StackCodeBlock from "@/components/StackCodeBlock";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";

const focusAreas = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "React and Next.js applications with state that doesn't fight you — clean component boundaries, predictable data flow.",
  },
  {
    index: "02",
    title: "Backend & APIs",
    description:
      "Node.js services and Firebase backends wired up to real auth, real data, and real-time updates, not mock JSON.",
  },
  {
    index: "03",
    title: "Mobile Apps",
    description:
      "Cross-platform apps with React Native and Expo, shipped to a store-ready state — not just a UI prototype.",
  },
  {
    index: "04",
    title: "Real-Time Systems",
    description:
      "WebSocket-driven features — live chat, presence, live data — built with Socket.io and Firestore listeners.",
  },
];

const featured = projects.slice(0, 2);

export default function Home() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-4rem)] items-center border-b-2 border-white/10 bg-ink bg-grid px-6 py-20 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-16 md:grid-cols-2 md:items-center">
          <div className="animate-enter">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              <span className="inline-block h-2 w-2 bg-accent" />
              Available for work
            </p>
            <h1 className="mt-6 text-6xl font-bold uppercase leading-[0.92] tracking-tight text-white md:text-7xl">
              Dzemil
              <br />
              Karisik
            </h1>
            <TypingEffect />
            <p className="mt-6 max-w-md text-white/60">
              Fullstack JavaScript engineer. I build web and mobile products
              end to end — UI, state, backend, and the real-time bits in
              between.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/projects" variant="solid">
                View Work
              </Button>
              <Button href="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <StackCodeBlock />
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="border-b-2 border-white/10 bg-ink px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="inline-block h-2 w-2 bg-accent" />
            What I Do
          </p>
          <div className="mt-10 grid gap-px border-2 border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.index} className="bg-ink p-8">
                <p className="font-mono text-sm text-accent">{area.index}</p>
                <h3 className="mt-4 text-xl font-bold text-white">{area.title}</h3>
                <p className="mt-3 text-sm text-white/60">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent-dim">
                <span className="inline-block h-2 w-2 bg-accent" />
                Selected Work
              </p>
              <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-5xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="font-mono text-sm uppercase tracking-wider text-ink underline hover:text-accent-dim"
            >
              View all work →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block border-2 border-ink bg-paper"
              >
                <div className="border-b-2 border-ink p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50">
                    {project.year} / {project.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-sm text-ink/70">{project.summary}</p>
                </div>
                <div className="flex flex-wrap gap-2 p-6 pt-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="border border-ink/20 px-2 py-1 font-mono text-xs text-ink/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-white/10 bg-ink px-6 py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-5xl">
            Let&apos;s build
            <br />
            something.
          </h2>
          <Button href="/contact" variant="solid">
            Start a conversation
          </Button>
        </div>
      </section>
    </>
  );
}
