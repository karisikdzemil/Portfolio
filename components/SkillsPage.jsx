import SkillsCard from "./SkillsCard";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faSass,
  faGitAlt,
  faReact,
  faTypo3,
} from "@fortawesome/free-brands-svg-icons";

import {
  faBolt,
  faCheckCircle,
  faCubes,
  faFireAlt,
  faMemory,
} from "@fortawesome/free-solid-svg-icons";

export const skills = [
  {
    icon: faHtml5,
    title: "HTML5",
    description: "Semantic and accessible markup with strong understanding of web structure.",
  },
  {
    icon: faCss3Alt,
    title: "CSS / SCSS",
    description: "Responsive design, animations, and modular SCSS architecture.",
  },
  {
    icon: faJs,
    title: "JavaScript",
    description: "Solid grasp of ES6+ features and DOM manipulation techniques.",
  },
  {
    icon: faTypo3,
    title: "TypeScript",
    description: "Type-safe JavaScript that improves scalability and maintainability.",
  },
  {
    icon: faReact,
    title: "React / Next.js",
    description: "SPA and SSR development using React, Next.js, and component-based architecture.",
  },
    {
    icon: faReact,
    title: "React Native",
    description: "I have strong skills in React Native and can build fully functional mobile applications.",
  },
  {
    icon: faSass,
    title: "Tailwind & SCSS",
    description: "Fast styling with Tailwind utility classes and structured SCSS.",
  },
  {
  icon: faBolt, 
  title: "Expo",
  description: "Rapid development and deployment of React Native apps using Expo SDK and tools.",
  },
  {
    icon: faMemory,
    title: "Redux & Redux Toolkit",
    description: "Global state management for scalable and performant applications.",
  },
  {
    icon: faGitAlt,
    title: "Git",
    description: "Version control with Git, GitHub flow, and collaborative workflows.",
  },
  {
    icon: faFireAlt,
    title: "Firebase",
    description: "Authentication, real-time database, and Firestore integration.",
  },
  {
    icon: faCubes,
    title: "Socket.io",
    description: "Real-time communication and event-driven architecture using websockets.",
  },
  {
    icon: faCheckCircle,
    title: "Jest",
    description: "Unit and component testing with coverage for mission-critical features.",
  },
  {
    icon: faBolt,
    title: "Framer Motion",
    description: "Smooth and modern animations for engaging user interfaces.",
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
