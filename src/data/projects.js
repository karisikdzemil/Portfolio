export const projects = [
  {
    slug: "havenspace",
    title: "HavenSpace",
    type: "web",
    year: "2025",
    role: "Solo developer",
    summary:
      "A full-stack real estate platform with AI-powered property search, interactive maps, agent profiles, and real-time inquiries.",
    description:
      "HavenSpace is a full-stack real estate platform where users can browse, search and save properties, connect with agents, and send inquiries — all in one place. Built end to end as a solo project, covering everything from JWT authentication and Cloudinary image uploads to AI-assisted search powered by the Gemini API and interactive Leaflet maps.",
    image: "/havenspace.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
      "Gemini API",
      "Leaflet",
      "JWT",
    ],
    links: [
      { label: "Live Demo", href: "https://haven-space-theta.vercel.app/" },
      { label: "GitHub", href: "https://github.com/karisikdzemil/HavenSpace" },
    ],
    problem:
      "Real estate platforms are either bloated portals with poor UX or simple listing pages with no intelligence. I wanted to build something end to end that felt like a real product — with proper auth, media handling, a working inquiry system, and AI search that actually helps users find what they are looking for.",
    approach: [
      "Built the frontend in React with Tailwind CSS and Framer Motion for smooth page transitions and animated property cards. Leaflet handles the interactive map layer, letting users explore listings by location.",
      "Backend is a Node.js/Express REST API with MongoDB Atlas for data persistence. JWT handles authentication with protected routes on both the client and server. Cloudinary manages property image uploads and storage.",
      "Integrated the Gemini API to power AI-assisted property search — users can describe what they want in natural language and get matched listings back, rather than filling out rigid filter forms.",
      "Agents have dedicated profiles with their active listings. Users can save favourites, manage an inquiry inbox, and contact agents directly through the platform — covering the full interaction loop from discovery to enquiry.",
    ],
  },
  {
    slug: "retrovibe",
    title: "RetroVibe",
    type: "web",
    year: "2024",
    role: "Solo developer",
    summary:
      "A nostalgic social platform where users relive and discuss events from the past, with anonymous real-time chat.",
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
    problem:
      "Most social apps are built around the present moment. RetroVibe needed a space built around the past instead — somewhere people could post, browse and discuss specific events or eras together without it feeling like a generic feed.",
    approach: [
      "Built the UI in Next.js + React with Tailwind CSS, structured around fast navigation between event feeds and filters.",
      "Used Firebase for authentication and as the primary datastore, with Redux Toolkit managing client-side state for feeds, filters, and chat sessions.",
      "Implemented anonymous real-time chat rooms with Socket.io, handling presence and message delivery outside of Firebase's listener model.",
      "Covered core logic and components with Jest to keep regressions out while iterating quickly on the UI.",
    ],
  },
  {
    slug: "vibely",
    title: "Vibely",
    type: "web",
    year: "2024",
    role: "Solo developer",
    summary:
      "A full social media platform with auth, posts, profiles, follow system and real-time feeds — built end to end.",
    description:
      "A feature-rich social media platform with user authentication, post creation and deletion, profile editing, dark mode, comments, likes, following system, and suggested users – all wrapped in a clean UI.",
    image: "/vibely.png",
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Firestore"],
    links: [
      { label: "Live Demo", href: "https://vibely-2628d.web.app/" },
      { label: "GitHub", href: "https://github.com/karisikdzemil/Vibely" },
    ],
    problem:
      "I wanted to prove out a complete product feature set — not just a CRUD demo — covering the parts of a social app that are easy to skip: following, suggested users, dark mode, and real-time updates.",
    approach: [
      "React + Tailwind CSS frontend with Redux Toolkit handling global state for auth, theme, and feed data.",
      "Firestore as the backend for posts, comments, likes and the following graph, with real-time listeners keeping feeds in sync across sessions.",
      "Dark mode and profile editing built on the same state layer as the rest of the app, rather than bolted on separately.",
    ],
  },
  {
    slug: "crypto-exchange-simulator",
    title: "Crypto Exchange Simulator",
    type: "web",
    year: "2023",
    role: "Solo developer",
    summary:
      "A demo crypto trading app with live price data, interactive charts and a simulated balance — no real money involved.",
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
    problem:
      "I wanted hands-on experience with live financial data and charting, without the risk of wiring up real trading or real money.",
    approach: [
      "Pulled live price data from the CoinMarketCap API and rendered trend charts with Chart.js.",
      "Used Context API for the simulated balance and portfolio state, with Firestore persisting transaction history per user.",
      "Built a full demo trading flow — buy, sell, balance updates, transaction log — that mirrors how a real exchange manages state.",
    ],
  },
  {
    slug: "shopnative",
    title: "ShopNative",
    type: "mobile",
    year: "2023",
    role: "Solo developer",
    summary:
      "A fully featured e-commerce mobile app built with React Native and Expo, from browsing to checkout to order history.",
    description:
      "A fully featured e-commerce mobile app that allows users to create an account, browse products, manage favorites, search by category, add items to cart, enter payment methods and delivery addresses, place orders, and view their order history. Built with React Native and Expo, and powered by Firebase for real-time data and authentication.",
    image: "/shopnative.png",
    tags: [
      "React Native",
      "Expo",
      "Firebase",
      "Tailwind CSS",
      "Redux Toolkit",
      "eCommerce API",
    ],
    links: [
      { label: "Expo Demo", href: "https://expo.dev/accounts/dzemilk/projects/ShopNative" },
      { label: "GitHub", href: "https://github.com/karisikdzemil/ShopNative" },
    ],
    problem:
      "I wanted to ship something that felt like a real, store-ready e-commerce app rather than a UI prototype — covering the full purchase flow, not just product listings.",
    approach: [
      "Built with React Native and Expo for cross-platform delivery, styled with Tailwind utility classes.",
      "Firebase for authentication and real-time product/order data, Redux Toolkit for cart and checkout state.",
      "Implemented the full flow end to end: browse by category, favorites, cart, addresses, payment methods, order placement and order history.",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export const webProjects = projects.filter((p) => p.type === "web");
export const mobileProjects = projects.filter((p) => p.type === "mobile");
