import SkillsCard from "./SkillsCard";

const skills = [
  {
    title: "React & Next.js",
    description:
      "Expert in building scalable React applications with modern hooks, context, and state management patterns.",
    icon: "⚛️",
  },
  {
    title: "TypeScript",
    description:
      "Advanced TypeScript development for type-safe, maintainable, and scalable frontend applications.",
    icon: "📘",
  },
  {
    title: "Modern CSS",
    description:
      "CSS Grid, Flexbox, animations, and design systems. Proficient in Tailwind CSS and styled-components.",
    icon: "🎨",
  },
  {
    title: "Performance",
    description:
      "Optimizing Core Web Vitals, implementing lazy loading, code splitting, and advanced caching strategies.",
    icon: "🚀",
  },
  {
    title: "DevOps & Tools",
    description:
      "Git workflows, CI/CD pipelines, Docker, and modern build tools like Vite and Webpack.",
    icon: "🛠️",
  },
  {
    title: "AI Integration",
    description:
      "Implementing AI-powered features, working with APIs, and creating intelligent user interfaces.",
    icon: "🤖",
  },
];

export default function SkillsPage() {
  return (
    <section className="px-6 py-16 bg-black min-h-screen text-white">
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-12">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillsCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
