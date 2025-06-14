import StatCard from "./StatCard";

export default function StatsSection() {
  const stats = [
    { number: 5, title: "Years Experience" },
    { number: 150, title: "Projects Completed" },
  ];

  return (
    <section className="bg-[#1A1A1A] py-16 flex flex-wrap justify-center gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} number={stat.number} title={stat.title} />
      ))}
    </section>
  );
}
