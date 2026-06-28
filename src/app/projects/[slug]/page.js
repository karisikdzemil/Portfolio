import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="border-b-2 border-white/10 bg-ink px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Link href="/projects" className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 hover:text-accent">
            ← All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {project.year} / {project.role} / {project.type === "mobile" ? "Mobile" : "Web"}
              </p>
              <h1 className="mt-4 text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-6xl">
                {project.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <Button key={link.label} href={link.href} variant="outline" external>
                  {link.label} →
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-white/10 bg-ink-soft px-6 py-10 md:px-10">
        <div className="relative mx-auto h-64 max-w-6xl border-2 border-white/10 md:h-[420px]">
          <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover" />
        </div>
      </section>

      <section className="bg-ink px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-3">
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">The Problem</h2>
              <p className="mt-4 text-lg text-white/70">{project.problem}</p>
            </div>

            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">What I Built</h2>
              <ul className="mt-4 space-y-4">
                {project.approach.map((point, i) => (
                  <li key={i} className="flex gap-4 border-l-2 border-white/15 pl-4 text-white/70">
                    <span className="font-mono text-sm text-white/30">0{i + 1}</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-white/15 px-2 py-1 font-mono text-xs text-white/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-white/10 bg-ink px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">Next project</p>
            <Link href={`/projects/${next.slug}`} className="mt-2 block text-3xl font-bold text-white hover:text-accent">
              {next.title} →
            </Link>
          </div>
          <Button href="/contact" variant="solid">
            Start a project
          </Button>
        </div>
      </section>
    </>
  );
}
