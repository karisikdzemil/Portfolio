import ProjectsFilter from "@/components/ProjectsFilter";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Things I've built from scratch — web and mobile.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <p className="mt-1 text-sm text-muted">Things I&apos;ve built from scratch.</p>
        <ProjectsFilter projects={projects} />
      </div>
    </div>
  );
}
