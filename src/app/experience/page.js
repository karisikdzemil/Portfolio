import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Experience",
  description: "Professional experience — web development work and client projects.",
};

const experience = [
  {
    company: "FWRD Digital & Product",
    role: "Web Developer",
    period: "Aug 2025 — Present",
    current: true,
    location: "Remote",
    description: [
      "Working on the maintenance and active development of multiple client-facing products built in Next.js — implementing new features, resolving issues across live codebases, and improving overall performance and code quality.",
      "Involved across the full development cycle: from scoping and planning through implementation, code review, and deployment. Working on real production apps with real users, which has sharpened how I approach building and debugging.",
      "Also delivering Webflow projects end-to-end for select clients, handling everything from initial setup to launch.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Webflow"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Aug 2024 — Aug 2025",
    current: false,
    location: "Remote",
    description: [
      "Worked independently with clients to scope, build and ship custom web projects end to end — covering everything from requirements and planning through to deployment and handoff.",
      "Built web applications and landing pages primarily with React and Next.js, with Firebase handling authentication and real-time data on the backend. Managed client communication, timelines, and delivery solo.",
    ],
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS", "Node.js"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">

        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Experience</p>
          <h1 className="mt-2 text-2xl font-bold text-white">Where I&apos;ve worked</h1>
          <p className="mt-1 text-sm text-muted">Building products in production environments.</p>
        </AnimatedSection>

        <div className="relative mt-10 space-y-5">
          {/* Vertical timeline line */}
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

                {/* Top gradient bar for current */}
                {job.current && (
                  <div className="h-[3px] w-full bg-gradient-to-r from-accent via-amber-300 to-transparent" />
                )}

                {/* Left accent bar */}
                <div
                  className={`absolute bottom-0 left-0 top-0 w-[3px] ${
                    job.current ? "bg-accent" : "bg-white/[0.06]"
                  }`}
                />

                <div className="p-6 pl-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-bold text-white">{job.company}</h2>
                        {job.current && (
                          <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] text-accent">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                            Present
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

                  {/* Description */}
                  <div className="mt-5 space-y-3">
                    {job.description.map((para, j) => (
                      <p key={j} className="text-sm leading-relaxed text-muted">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
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
