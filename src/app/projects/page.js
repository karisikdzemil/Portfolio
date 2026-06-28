import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { webProjects, mobileProjects } from "@/data/projects";

export const metadata = {
  title: "Work",
  description: "Web and mobile projects built end to end — frontend, backend, and the real-time pieces between them.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b-2 border-white/10 bg-ink px-6 py-24 md:px-10">
        <PageHeader
          index="03"
          label="Selected Work"
          title="Projects"
          subtitle="A handful of projects I've built solo, end to end — UI, state, backend and deployment. Each one links to a short case study."
        />
      </section>

      <section className="border-b-2 border-white/10 bg-ink px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-white/40">Web</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {webProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-white/40">Mobile</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mobileProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <p className="mt-16 text-white/50">
            More on{" "}
            <a
              href="https://github.com/karisikdzemil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline hover:text-white"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
