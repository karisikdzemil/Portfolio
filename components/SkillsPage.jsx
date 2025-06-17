import SkillsCard from "./SkillsCard";
import {
  faReact,
  faNodeJs,
  faDatabase,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  {
    icon: faReact,
    title: "Frontend",
    description:
      "Expertise in building interactive UIs using React, Next.js and Tailwind CSS.",
  },
  {
    icon: faNodeJs,
    title: "Backend",
    description:
      "Building scalable APIs with Node.js, Express and working with REST & GraphQL.",
  },
  {
    icon: faDatabase,
    title: "Databases",
    description:
      "Experience with PostgreSQL, MongoDB and Firebase real-time data management.",
  },
];

export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="px-4 md:px-8 lg:px-16 py-16 bg-black min-h-screen text-white"
    >
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-16">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {skills.map((skill, i) => (
          <SkillsCard key={i} {...skill} delay={i * 0.2} />
        ))}
      </div>
    </section>
  );
}
