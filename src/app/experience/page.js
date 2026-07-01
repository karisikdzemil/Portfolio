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

        <h1 className="text-2xl font-bold text-white">Experience</h1>
        <p className="mt-1 text-sm text-muted">Where I&apos;ve worked and what I&apos;ve built.</p>

        <div className="mt-10 space-y-5">
          {experience.map((job) => (
            <div
              key={job.company}
              className={`relative overflow-hidden rounded-xl border bg-ink-soft ${
                job.current
                  ? "border-accent/25"
                  : "border-white/[0.07]"
              }`}
            >
              {/* Left accent bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] ${
                  job.current ? "bg-accent" : "bg-white/10"
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
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          Present
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded border border-white/10 px-2 py-0.5 font-mono text-xs text-muted">
                        {job.role}
                      </span>
                      <span className="text-xs text-muted/50">{job.location}</span>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-muted">{job.period}</span>
                </div>

                {/* Description */}
                <div className="mt-5 space-y-3">
                  {job.description.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded border px-2 py-0.5 font-mono text-[11px] ${
                        job.current
                          ? "border-accent/20 text-accent/70"
                          : "border-white/[0.08] text-muted"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
