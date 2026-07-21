import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi";
import { learning } from "@/data/skills";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "About",
  description:
    "Fullstack JavaScript engineer and software engineering student.",
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
  {
    period: "2024",
    title: "React — The Complete Guide",
    org: "Udemy — Maximilian Schwarzmüller",
  },
  {
    period: "2024",
    title: "JavaScript — The Complete Guide",
    org: "Udemy — Maximilian Schwarzmüller",
  },
  {
    period: "2022",
    title: "Certified Front-End Developer",
    org: "RISC & NIT / IT Camp Serbia",
  },
  {
    period: "2022",
    title: "Web Development Fundamentals",
    org: "RISC & NIT / IT Camp Serbia",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl space-y-14">
        {/* ── Bio + Photo ─────────────────────────────── */}
        <AnimatedSection className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start">
          <div className="flex-1 space-y-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                About me
              </p>
              <h1 className="mt-2 text-2xl font-bold text-white">
                Dzemil Karisik
              </h1>
            </div>
            <div className="space-y-3 leading-relaxed text-muted">
              <p>
                My journey in software engineering started in 2022, driven by a
                deep curiosity for how complex web platforms operate under the
                hood. Today, I&apos;m an Informatics student at the{" "}
                <span className="font-medium text-white">
                  University of Novi Pazar
                </span>
                , actively balancing academic fundamentals with building
                production-grade software.
              </p>
              <p>
                I take an engineering-first approach to development—focusing not
                just on making things look great, but ensuring the underlying
                systems are maintainable, efficient, and well-structured. Beyond
                writing code, I thrive in collaborative environments where{" "}
                <span className="font-medium text-white">
                  clear communication, adaptability, and active problem-solving
                </span>{" "}
                keep projects moving forward smoothly.
              </p>
            </div>
            <div className="rounded-xl border border-accent/20 bg-gradient-to-br from-accent/[0.08] to-transparent p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Currently
              </p>
              <p className="mt-1.5 text-sm text-white/70">
                Engineering production-grade web applications at FWRD Digital,
                while continuously deepening my knowledge in backend systems and
                software architecture.
              </p>
            </div>
          </div>

          <div className="sm:shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-accent/[0.06] blur-xl" />
              <div className="relative h-40 w-32 overflow-hidden rounded-xl border border-white/10 sm:h-48 sm:w-36">
                <Image
                  src="/portfolioImage.jpeg"
                  alt="Dzemil Karisik"
                  fill
                  sizes="(max-width: 640px) 128px, 144px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Education &amp; Courses
          </h2>

          <div className="mb-4 overflow-hidden rounded-xl border border-white/[0.08] bg-ink-soft">
            <div className="h-[3px] w-full bg-gradient-to-r from-accent via-amber-300 to-transparent" />
            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] text-accent">
                    University
                  </span>
                  <h3 className="mt-2 text-base font-bold text-white">
                    Software Engineering Student
                  </h3>
                  <p className="mt-0.5 text-sm italic text-muted">
                    State University of Novi Pazar, Serbia
                  </p>
                </div>
                <span className="font-mono text-xs text-accent">
                  2023 — Present
                </span>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted">
                    Progress
                  </span>
                  <span className="font-mono text-[10px] text-accent">
                    3rd year · 75%
                  </span>
                </div>
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
                </div>
                <div className="mt-2 flex justify-between">
                  {["1st", "2nd", "3rd", "4th"].map((yr, i) => (
                    <span
                      key={yr}
                      className={`font-mono text-[10px] ${i <= 2 ? "text-accent/70" : "text-muted/25"}`}
                    >
                      {yr} yr
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 border-t border-white/[0.07] pt-4">
                <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted/50">
                  Covered Topics
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {uniTopics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/[0.08] px-2.5 py-0.5 text-xs text-muted"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Courses timeline */}
          <div className="relative pl-5">
            <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-accent/30 to-transparent" />
            <div className="space-y-3">
              {courses.map((item, i) => (
                <div
                  key={item.title}
                  className="animate-enter relative flex items-start gap-4 rounded-xl border border-white/[0.07] bg-ink-soft p-4 transition-colors hover:border-white/[0.12]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="absolute -left-[21px] top-[18px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-ink">
                    <HiCheckCircle className="text-accent" size={14} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{item.org}</p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-muted/50">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* <AnimatedSection delay={0.15}>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Currently Learning
          </h2>
          <div className="flex flex-wrap gap-2">
            {learning.map((item) => (
              <div
                key={item.name}
                className="group rounded-xl border border-dashed border-accent/20 bg-accent/[0.04] px-4 py-2.5 transition-colors hover:border-accent/40 hover:bg-accent/[0.07]"
              >
                <span className="text-sm text-accent/80">{item.name}</span>
                {item.note && (
                  <p className="mt-0.5 text-xs text-muted/50">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection> */}
      </div>
    </div>
  );
}
