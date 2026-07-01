import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import { learning } from "@/data/skills";

export const metadata = {
  title: "About",
  description: "Fullstack JavaScript engineer and software engineering student.",
};

const uniTopics = [
  "Software Engineering",
  "Algorithms & Data Structures",
  "Computer Architecture",
  "Competitive Programming",
  "System Design",
  "Version Control (Git)",
];

const courses = [
  { period: "2024", title: "React — The Complete Guide", org: "Udemy — Maximilian Schwarzmüller" },
  { period: "2024", title: "JavaScript — The Complete Guide", org: "Udemy — Maximilian Schwarzmüller" },
  { period: "2022", title: "Certified Front-End Developer", org: "RISC & NIT / IT Camp Serbia" },
  { period: "2022", title: "Web Development Fundamentals", org: "RISC & NIT / IT Camp Serbia" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl space-y-12">

        {/* Bio + Photo */}
        <section className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start">
          <div className="flex-1 space-y-4">
            <h1 className="text-2xl font-bold text-white">About</h1>
            <div className="space-y-3 leading-relaxed text-muted">
              <p>
                I&apos;m a{" "}
                <span className="font-medium text-white">fullstack JavaScript engineer</span> and software
                engineering student at the State University of Novi Pazar. I build products end to end —
                frontend, backend, data, and real-time features.
              </p>
              <p>
                My core stack is{" "}
                <span className="font-medium text-white">React, Next.js, TypeScript and React Native</span>{" "}
                on the frontend, paired with{" "}
                <span className="font-medium text-white">Node.js, Firebase and Socket.io</span> on the backend.
              </p>
            </div>
            <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Currently</p>
              <p className="mt-1.5 text-sm text-white/70">
                Going deeper on the backend — moving past Firestore into relational data modeling
                with PostgreSQL and Prisma.
              </p>
            </div>
          </div>

          <div className="sm:shrink-0">
            <div className="relative h-40 w-32 overflow-hidden rounded-xl border border-white/10 sm:h-48 sm:w-36">
              <Image
                src="/portfolioImage.jpeg"
                alt="Dzemil Karisik"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Education &amp; Courses
          </h2>

          {/* University — featured card */}
          <div className="mb-4 rounded-xl border border-white/[0.08] bg-ink-soft p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="inline-block rounded-sm bg-accent/10 px-2 py-0.5 font-mono text-[10px] text-accent">
                  University Course
                </span>
                <h3 className="mt-2 text-base font-bold text-white">Software Engineering Student</h3>
                <p className="mt-0.5 text-sm italic text-muted">
                  at State University of Novi Pazar, Serbia
                </p>
              </div>
              <span className="font-mono text-xs text-accent">2023 — Present</span>
            </div>

            {/* Progress bar */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted">Progress</span>
                <span className="font-mono text-[10px] text-accent">2nd year · 50%</span>
              </div>
              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-1/2 rounded-full bg-accent" />
              </div>
              <div className="mt-2 flex justify-between">
                {["1st", "2nd", "3rd", "4th"].map((yr, i) => (
                  <div key={yr} className="flex flex-col items-center gap-0.5">
                    <span className={`font-mono text-[10px] ${i <= 1 ? "text-accent/70" : "text-muted/30"}`}>
                      {yr}
                    </span>
                    <span className={`font-mono text-[9px] ${i <= 1 ? "text-muted/50" : "text-muted/20"}`}>
                      year
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics */}
            <div className="mt-4 border-t border-white/[0.07] pt-4">
              <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted/50">
                Covered Topics
              </p>
              <div className="flex flex-wrap gap-1.5">
                {uniTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded border border-white/10 px-2 py-0.5 text-xs text-muted"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Courses — vertical timeline */}
          <div className="relative pl-5">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-white/[0.08]" />
            <div className="space-y-3">
              {courses.map((item) => (
                <div
                  key={item.title}
                  className="relative flex items-start gap-4 rounded-lg border border-white/[0.07] bg-ink-soft p-4"
                >
                  <div className="absolute -left-[21px] top-[18px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-ink">
                    <HiCheckCircle className="text-accent" size={14} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted">{item.org}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted/50">{item.period}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Currently learning */}
        <section>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Currently Learning
          </h2>
          <div className="flex flex-wrap gap-2">
            {learning.map((item) => (
              <span
                key={item.name}
                className="rounded border border-accent/20 bg-accent/5 px-3 py-1.5 text-sm text-accent/80"
              >
                {item.name}
              </span>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
