export const skillGroups = [
  {
    category: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", level: "Core", note: "DOM, async patterns, modern module systems." },
      { name: "TypeScript", level: "Proficient", note: "Type-safe components and shared data contracts." },
      { name: "React", level: "Core", note: "Component architecture, hooks, performance patterns." },
      { name: "Next.js", level: "Core", note: "App Router, SSR/SSG, file-based routing." },
      { name: "React Native + Expo", level: "Proficient", note: "Cross-platform mobile apps, store-ready builds." },
      { name: "Redux Toolkit", level: "Proficient", note: "Predictable global state at scale." },
      { name: "Tailwind CSS / SCSS", level: "Core", note: "Utility-first styling and modular architecture." },
      { name: "Framer Motion", level: "Working", note: "Purposeful UI motion, not decoration for its own sake." },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Node.js", level: "Proficient", note: "Server logic and API integrations." },
      { name: "Firebase", level: "Core", note: "Auth, Firestore, real-time listeners." },
      { name: "MongoDB", level: "Working", note: "Document modeling for app data." },
      { name: "Socket.io", level: "Proficient", note: "Real-time, event-driven features like live chat." },
    ],
  },
  {
    category: "Testing & Tooling",
    items: [
      { name: "Jest", level: "Working", note: "Unit and component tests on logic that breaks quietly." },
      { name: "Git", level: "Core", note: "Branching, GitHub flow, collaborative history." },
      { name: "Vercel / Expo deploys", level: "Proficient", note: "Shipping web and mobile builds." },
    ],
  },
];

export const learning = [
  { name: "PostgreSQL", note: "Relational modeling beyond Firestore's document model." },
  { name: "Prisma", note: "Type-safe queries and migrations on top of SQL." },
  { name: "GraphQL", note: "Typed APIs as an alternative to REST endpoints." },
];
