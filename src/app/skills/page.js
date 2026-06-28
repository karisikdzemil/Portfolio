import PageHeader from "@/components/ui/PageHeader";
import { skillGroups, learning } from "@/data/skills";

export const metadata = {
  title: "Stack",
  description:
    "The tools a fullstack JavaScript engineer actually uses — frontend, backend, data, testing and tooling, with honest proficiency levels.",
};

const levelOrder = { Core: 0, Proficient: 1, Working: 2 };

export default function SkillsPage() {
  return (
    <>
      <section className="border-b-2 border-white/10 bg-ink px-6 py-24 md:px-10">
        <PageHeader
          index="02"
          label="Tech I Use"
          title="Stack"
          subtitle="I work across the full stack — from the database to the pixels users click. No padded lists: every level here reflects what I'd actually ship with today."
        />
      </section>

      {skillGroups.map((group, i) => (
        <section
          key={group.category}
          className={`border-b-2 px-6 py-20 md:px-10 ${
            i % 2 === 0 ? "border-white/10 bg-ink" : "border-ink/10 bg-paper"
          }`}
        >
          <div className="mx-auto max-w-6xl">
            <div className={`flex items-baseline justify-between ${i % 2 === 0 ? "text-white" : "text-ink"}`}>
              <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">{group.category}</h2>
              <span className={`font-mono text-xs ${i % 2 === 0 ? "text-white/40" : "text-ink/40"}`}>
                0{i + 1} / 0{skillGroups.length}
              </span>
            </div>

            <div className={`mt-8 divide-y-2 ${i % 2 === 0 ? "divide-white/10" : "divide-ink/10"}`}>
              {[...group.items]
                .sort((a, b) => levelOrder[a.level] - levelOrder[b.level])
                .map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col gap-2 py-5 transition-colors md:flex-row md:items-baseline md:justify-between md:gap-6"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="block h-3 w-0 bg-accent transition-all group-hover:w-3" />
                      <h3 className={`text-lg font-bold ${i % 2 === 0 ? "text-white" : "text-ink"}`}>
                        {item.name}
                      </h3>
                      <span
                        className={`font-mono text-xs uppercase tracking-[0.15em] ${
                          i % 2 === 0 ? "text-accent" : "text-accent-dim"
                        }`}
                      >
                        [{item.level}]
                      </span>
                    </div>
                    <p className={`text-sm md:max-w-md md:text-right ${i % 2 === 0 ? "text-white/50" : "text-ink/50"}`}>
                      {item.note}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-ink px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
            <span className="inline-block h-2 w-2 bg-accent" />
            In Progress
          </p>
          <div className="mt-8 grid gap-px border-2 border-dashed border-white/20 bg-white/10 md:grid-cols-3">
            {learning.map((item) => (
              <div key={item.name} className="bg-ink p-6">
                <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-white/50">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
