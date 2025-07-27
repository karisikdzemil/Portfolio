import ProjectCard from "./ProjectsCard";

const projects = [
  {
    title: "RetroVibe",
    description:
      "A nostalgic social platform where users can relive and discuss events from the past. Features include profile creation, event posting, filtering, and anonymous real-time chat using WebSockets.",
    image: "/retrovibe.png",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Redux Toolkit",
      "Node.js",
      "Socket.io",
      "Jest",
    ],
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
    tags: [
      "React.js",
      "Tailwind CSS",
      "Context API",
      "Chart.js",
      "Firestore",
      "CoinMarketCap API",
    ],
    links: [
      { label: "Live Demo", href: "https://crypto-app-rho-virid.vercel.app/" },
      { label: "GitHub", href: "https://github.com/karisikdzemil/Crypto-App" },
    ],
  },
];

const nativeProjects = [
  {
    title: "ShopNative",
    description:
      "A fully featured e-commerce mobile app that allows users to create an account, browse products, manage favorites, search by category, add items to cart, enter payment methods and delivery addresses, place orders, and view their order history. Built with React Native and Expo, and powered by Firebase for real-time data and authentication.",
    image: "/ShopNative.png",
    tags: ["React Native", "Expo", "Firebase", "Tailwind CSS", "Redux Toolkit"],
    links: [
      {
        label: "Expo Demo",
        href: "https://expo.dev/accounts/dzemilk/projects/ShopNative",
      },
      {
        label: "GitHub",
        href: "https://github.com/karisikdzemil/ShopNative",
      },
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center min-w-0">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} delay={index * 0.2} />
        ))}
      </div>
      <div className="mt-24">
        <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text">
          Mobile Projects
        </h3>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-12 justify-items-center">
          {nativeProjects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 0.2} />
          ))}
        </div>
      </div>

      <p className="text-center mt-12 text-lg text-gray-300">
        There are many more interesting projects on my GitHub if you're
        curious:&nbsp;
        <a
          href="https://github.com/karisikdzemil"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-pink-400 transition-colors duration-300"
        >
          GitHub
        </a>
      </p>
    </section>
  );
}
