import ProjectCard from "./ProjectsCard";

const projects = [
  {
    title: "RetroVibe",
    description:
      "A nostalgic social platform where users can relive and discuss events from the past. Features include profile creation, event posting, filtering, and anonymous real-time chat using WebSockets.",
    image: "/retrovibe.png",
    tags: ["Next.js", "React.js", "Tailwind CSS", "Firebase", "Redux Toolkit","Node.js", "Socket.io", "Jest"],
    links: [
      { label: "Live Demo", href: "https://retrovibe-client.vercel.app/" },
      { label: "GitHub", href: "https://github.com/karisikdzemil/RetroVibe" },
    ],
  },
  {
    title: "Vibely",
    description:
      "A feature-rich social media platform with user authentication, post creation and deletion, profile editing, dark mode, comments, likes, following system, and suggested users – all wrapped in a clean UI.",
    image: "/vibely.png",
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Firestore"],
    links: [
      { label: "Live Demo", href: "https://vibely-2628d.web.app/" },
      { label: "GitHub", href: "https://github.com/karisikdzemil/Vibely" },
    ],
  },
  {
    title: "Crypto Exchange Simulator",
    description:
      "A modern crypto trading simulation app where users can explore currencies, track price trends, and trade with a demo balance. The app includes interactive charts, transaction history, and portfolio analytics.",
    image: "/crypto.png",
    tags: ["React.js", "Tailwind CSS", "Context API", "Chart.js", "Firestore", "CoinMarketCap API"],
    links: [
      { label: "Live Demo", href: "https://crypto-app-rho-virid.vercel.app/" },
      { label: "GitHub", href: "https://github.com/karisikdzemil/Crypto-App" },
    ],
  },  
];

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="px-4 md:px-8 lg:px-16 py-16 bg-black min-h-screen text-white"
    >
      <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text mb-16">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 0.2} />
        ))}
      </div>
    </section>
  );
}
