"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const jobsBase = [
  {
    company: "FWRD Digital & Product",
    role: "Web Developer",
    period: "Aug 2025 — Present",
    current: true,
    location: "Remote",
    tags: ["Next.js", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS", "Webflow"],
  },
  {
    company: "Freelance",
    role: "Full-stack Developer",
    period: "Aug 2023 — Aug 2025",
    current: false,
    location: "Remote",
    tags: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
  },
];

const descriptions = {
  en: [
    [
      "Actively developing and maintaining high-performance, client-facing web applications—optimizing live codebases, implementing modern architecture patterns, and ensuring code quality.",
      "Engaged in the full product lifecycle: from initial architectural scoping and planning to strict code reviews, API integrations, and continuous deployments.",
      "Engineered and launched custom Webflow digital platforms end-to-end for select enterprise clients, incorporating advanced JavaScript logic and custom styling.",
    ],
    [
      "Architected and delivered custom web applications end-to-end—managing everything from system requirements and UI development to database design and production deployment.",
      "Engineered scalable full-stack products with a focus on system performance, secure authentication flows, and seamless real-time data management.",
    ],
  ],
  sr: [
    [
      "Aktivno razvijam i održavam visoko-performantne web aplikacije namijenjene klijentima — optimizujem živuće kodne baze, implementiram moderne arhitekturalne šablone i osiguravamo kvalitet koda.",
      "Uključen sam u kompletan ciklus produkata: od inicijalne arhitekturalne procjene i planiranja do strogih code review-a, API integracija i kontinuiranih deploymentova.",
      "Inženirisao i lansirao prilagođene Webflow digitalne platforme od A do Z za odabrane enterprise klijente, uključujući naprednu JavaScript logiku i prilagođen styling.",
    ],
    [
      "Arhitekturisao i isporučio prilagođene web aplikacije od početka do kraja — upravljajući svime od sistemskih zahtjeva i UI razvoja do dizajna baze podataka i produkcijskog deploymenta.",
      "Inženirisao skalabilne full-stack produkte s fokusom na performanse sistema, sigurne tokove autentifikacije i besprijekoran real-time menadžment podataka.",
    ],
  ],
};

export default function ExperiencePage() {
  const { lang, t } = useLanguage();

  const experience = jobsBase.map((job, i) => ({
    ...job,
    description: descriptions[lang][i],
  }));

  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {t("experience.label")}
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white">{t("experience.title")}</h1>
          <p className="mt-1 text-sm text-muted">{t("experience.subtitle")}</p>
        </AnimatedSection>

        <div className="relative mt-10 space-y-5">
          <div className="absolute left-[19px] top-8 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/30 via-white/[0.06] to-transparent md:block" />

          {experience.map((job, i) => (
            <AnimatedSection key={job.company} delay={0.1 + i * 0.1}>
              <div
                className={`relative overflow-hidden rounded-xl border bg-ink-soft transition-all duration-300 hover:shadow-[0_0_50px_rgba(245,158,11,0.05)] md:ml-10 ${
                  job.current ? "border-accent/25" : "border-white/[0.07]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[2.1rem] top-6 hidden h-3 w-3 rounded-full border-2 md:block ${
                    job.current
                      ? "border-accent bg-accent shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                      : "border-white/20 bg-ink"
                  }`}
                />

                {job.current && (
                  <div className="h-[3px] w-full bg-gradient-to-r from-accent via-amber-300 to-transparent" />
                )}

                <div
                  className={`absolute bottom-0 left-0 top-0 w-[3px] ${
                    job.current ? "bg-accent" : "bg-white/[0.06]"
                  }`}
                />

                <div className="p-6 pl-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-bold text-white">{job.company}</h2>
                        {job.current && (
                          <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] text-accent">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                            {t("experience.present")}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="rounded-full border border-white/[0.08] px-2.5 py-0.5 font-mono text-xs text-muted">
                          {job.role}
                        </span>
                        <span className="text-xs text-muted/40">{job.location}</span>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted">{job.period}</span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {job.description.map((para, j) => (
                      <p key={j} className="text-sm leading-relaxed text-muted">
                        {para}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] transition-colors ${
                          job.current
                            ? "border-accent/20 text-accent/70 hover:border-accent/40"
                            : "border-white/[0.07] text-muted hover:border-white/20"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
