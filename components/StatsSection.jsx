import StatCard from "./StatCard";

export default function StatsSection() {
  const stats = [
    { number: 3, title: "Years Experience" },
    { number: 30, title: "Projects Completed" },
    { number: 4, title: "Hackathons / Camps" }

  ];

  return (
    <section className="bg-[#1A1A1A] py-16 flex flex-wrap justify-center gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} number={stat.number} title={stat.title} />
      ))}
    </section>
  );
}
