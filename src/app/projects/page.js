"use client";

import ProjectsFilter from "@/components/ProjectsFilter";
import { projects } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-2xl font-bold text-white">{t("projects.label")}</h1>
        <p className="mt-1 text-sm text-muted">{t("projects.title")}</p>
        <ProjectsFilter projects={projects} />
      </div>
    </div>
  );
}
