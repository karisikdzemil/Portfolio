import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col border-2 border-white/10 bg-ink-soft transition-colors hover:border-accent"
    >
      <div className="relative h-48 w-full overflow-hidden border-b-2 border-white/10 grayscale transition-all duration-300 group-hover:grayscale-0">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
          {project.year} / {project.type === "mobile" ? "Mobile" : "Web"}
        </p>
        <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-white/60">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="border border-white/15 px-2 py-1 font-mono text-xs text-white/50">
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-6 font-mono text-sm uppercase tracking-wider text-accent">
          View case study →
        </span>
      </div>
    </Link>
  );
}
