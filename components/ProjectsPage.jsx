import ProjectCard from "./ProjectsCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution built with Next.js and TypeScript. Features include real-time inventory, advanced filtering, and secure payment processing with Stripe.",
    icon: "🛍️",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Redis"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and customizable widgets. Processes over 1M data points daily with sub-second load times.",
    icon: "📊",
    tags: ["React", "D3.js", "WebSockets", "Node.js", "PostgreSQL"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and customizable widgets. Processes over 1M data points daily with sub-second load times.",
    icon: "📊",
    tags: ["React", "D3.js", "WebSockets", "Node.js", "PostgreSQL"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "Case Study", href: "#" },
    ],
  },    
];

export default function ProjectsPage() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 bg-black min-h-screen text-white">
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-16">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
