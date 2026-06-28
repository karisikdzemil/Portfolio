import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import EducationItem from "@/components/EducationItem";
import { learning } from "@/data/skills";

export const metadata = {
  title: "About",
  description:
    "Fullstack JavaScript engineer and software engineering student, currently focused on going deeper on the backend.",
};

const process = [
  {
    index: "01",
    title: "Scope",
    description:
      "Break the problem down before writing code — what's the core flow, what's the data model, what can wait until later.",
  },
  {
    index: "02",
    title: "Build",
    description:
      "Ship in vertical slices: UI, state and backend together, so there's something real to test early — not just static screens.",
  },
  {
    index: "03",
    title: "Test",
    description:
      "Cover the logic that breaks quietly with Jest, instead of chasing coverage numbers for their own sake.",
  },
  {
    index: "04",
    title: "Ship & Iterate",
    description:
      "Deploy early to Vercel or Expo, then iterate based on what's actually broken or missing — not on guesses.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b-2 border-white/10 bg-ink px-6 py-24 md:px-10">
        <PageHeader index="01" label="Who I Am" title="About" />

        <div className="mx-auto mt-14 grid max-w-6xl gap-12 md:grid-cols-3">
          <div className="order-2 space-y-5 text-white/70 md:order-1 md:col-span-2">
            <p>
              I&apos;m a <span className="font-bold text-white">fullstack JavaScript engineer</span> and software
              engineering student, currently studying at the State University of Novi Pazar. I build products end to
              end — frontend, backend, data, and the real-time parts that connect them.
            </p>
            <p>
              My core stack is <span className="font-bold text-white">React, Next.js, TypeScript and React Native</span>{" "}
              on the frontend, paired with <span className="font-bold text-white">Node.js, Firebase and Socket.io</span>{" "}
              on the backend. I reach for Redux Toolkit when state gets complex, and Tailwind when I need to move fast
              without losing control of the CSS.
            </p>
            <p>
              Academically, I focus on algorithms, data structures and computer architecture. The rest of what I know
              comes from building — taking a project from a blank repo to something deployed and usable, then fixing
              what breaks.
            </p>
            <div className="border-l-2 border-accent bg-ink-soft p-5 text-white/80">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Currently</p>
              <p className="mt-2">
                Going deeper on the backend — moving past Firestore into relational data modeling and typed APIs.
              </p>
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:col-span-1">
            <div className="border-2 border-white/15 p-2">
              <Image
                src="/portfolioImage.jpeg"
                alt="Dzemil Karisik"
                className="h-72 w-60 object-cover md:h-80 md:w-64"
                width={600}
                height={800}
              />
              <p className="border-t-2 border-white/15 px-3 py-2 font-mono text-xs uppercase tracking-[0.15em] text-white/40">
                DK / Novi Pazar, RS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-white/10 bg-ink px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="inline-block h-2 w-2 bg-accent" />
            How I Work
          </p>
          <div className="mt-10 grid gap-px border-2 border-white/10 bg-white/10 md:grid-cols-4">
            {process.map((step) => (
              <div key={step.index} className="bg-ink p-8">
                <p className="font-mono text-sm text-accent">{step.index}</p>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-24 text-ink md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent-dim">
            <span className="inline-block h-2 w-2 bg-accent" />
            Education
          </p>
          <h2 className="mt-4 text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Formal Education &<br />Courses
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-ink/50">Formal</h3>
              <div className="space-y-8">
                <EducationItem
                  tone="light"
                  period="2023 — Present"
                  title="B.S. Software Engineering"
                  subtitle="State University of Novi Pazar"
                  description="Second year of undergraduate study. Curriculum covers algorithms, data structures, computer architecture and software development fundamentals."
                />
                <EducationItem
                  tone="light"
                  period="2019 — 2023"
                  title="High School Diploma"
                  subtitle="Gimnazija Novi Pazar"
                  description="General program with a focus on mathematics, Serbian language and natural sciences."
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-ink/50">Courses & Certificates</h3>
              <div className="space-y-8">
                <EducationItem
                  tone="light"
                  period="2024"
                  title="React — The Complete Guide"
                  subtitle="Udemy — Maximilian Schwarzmüller"
                  status="Completed"
                />
                <EducationItem
                  tone="light"
                  period="2024"
                  title="JavaScript — The Complete Guide"
                  subtitle="Udemy — Maximilian Schwarzmüller"
                  status="Completed"
                />
                <EducationItem
                  tone="light"
                  period="2022"
                  title="Certified Front-End Developer"
                  subtitle="RISC & NIT Novi Pazar — IT Camp Serbia"
                  description="React training covering dynamic UIs and component-based architecture."
                  status="Completed"
                />
                <EducationItem
                  tone="light"
                  period="2022"
                  title="Web Development Fundamentals"
                  subtitle="RISC & NIT Novi Pazar — IT Camp Serbia"
                  description="HTML, CSS and JavaScript fundamentals — responsive layout and interactive scripting."
                  status="Completed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="inline-block h-2 w-2 bg-accent" />
            Currently Learning
          </p>
          <div className="mt-10 grid gap-px border-2 border-dashed border-white/20 bg-white/10 md:grid-cols-3">
            {learning.map((item) => (
              <div key={item.name} className="bg-ink p-8">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="mt-3 text-sm text-white/60">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
