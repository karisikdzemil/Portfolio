import { HiDesktopComputer, HiServer, HiCog } from "react-icons/hi";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpo,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiSocketdotio,
  SiGit,
  SiVercel,
  SiJest,
} from "react-icons/si";
import { learning } from "@/data/skills";

export const metadata = {
  title: "Skills",
  description: "The tools a fullstack JavaScript engineer actually uses.",
};

const categories = [
  {
    name: "Frontend",
    categoryIcon: HiDesktopComputer,
    accent: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Expo", icon: SiExpo, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#6B8AFF" },
    ],
  },
  {
    name: "Backend & Data",
    categoryIcon: HiServer,
    accent: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
    ],
  },
  {
    name: "Tools",
    categoryIcon: HiCog,
    accent: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Jest", icon: SiJest, color: "#C21325" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">

        <div>
          <h1 className="text-2xl font-bold text-white">Skills</h1>
          <p className="mt-1 text-sm text-muted">The stack I build with, daily.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`rounded-xl border ${cat.accent.border} bg-ink-soft p-5`}
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-3">
                <div className={`rounded-lg ${cat.accent.bg} p-2`}>
                  <cat.categoryIcon className={cat.accent.text} size={18} />
                </div>
                <h3 className="font-semibold text-white">{cat.name}</h3>
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-3 gap-2">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 rounded-lg bg-white/[0.03] p-3 transition-colors hover:bg-white/[0.06]"
                  >
                    <item.icon size={22} style={{ color: item.color }} />
                    <span className="text-center font-mono text-[10px] leading-tight text-muted">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently learning */}
        <div>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            In Progress
          </h2>
          <div className="flex flex-wrap gap-2">
            {learning.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-dashed border-white/15 bg-ink-soft px-4 py-2"
              >
                <span className="text-sm text-muted">{item.name}</span>
                <p className="mt-0.5 text-xs text-muted/50">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
