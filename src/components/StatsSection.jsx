import StatCard from "./StatCard";

const stats = [
  { number: 3, suffix: "+", title: "Years writing code" },
  { number: 30, suffix: "+", title: "Projects completed" },
  { number: 4, suffix: "", title: "Hackathons / camps" },
];

export default function StatsSection() {
  return (
    <section className="border-y-2 border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col divide-y-2 divide-white/10 md:flex-row md:divide-x-2 md:divide-y-0">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </section>
  );
}
