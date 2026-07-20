import { HiDesktopComputer, HiServer, HiCog } from "react-icons/hi";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiExpo, SiRedux, SiTailwindcss, SiFramer,
  SiNodedotjs, SiFirebase, SiMongodb, SiSocketdotio,
  SiGit, SiVercel, SiJest,
} from "react-icons/si";
import { learning } from "@/data/skills";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = {
  title: "Skills",
  description: "The tools a fullstack JavaScript engineer actually uses.",
};

const categories = [
  {
    name: "Frontend",
    categoryIcon: HiDesktopComputer,
    accent: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]",
      bar: "from-blue-500/50",
    },
    items: [
      { name: "React",         icon: SiReact,       color: "#61DAFB" },
      { name: "Next.js",       icon: SiNextdotjs,   color: "#ffffff" },
      { name: "TypeScript",    icon: SiTypescript,  color: "#3178C6" },
      { name: "JavaScript",    icon: SiJavascript,  color: "#F7DF1E" },
      { name: "React Native",  icon: SiReact,       color: "#61DAFB" },
      { name: "Expo",          icon: SiExpo,        color: "#ffffff" },
      { name: "Redux",         icon: SiRedux,       color: "#764ABC" },
      { name: "Tailwind CSS",  icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer,      color: "#6B8AFF" },
    ],
  },
  {
    name: "Backend & Data",
    categoryIcon: HiServer,
    accent: {
      text: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.08)]",
      bar: "from-green-500/50",
    },
    items: [
      { name: "Node.js",   icon: SiNodedotjs,  color: "#339933" },
      { name: "Firebase",  icon: SiFirebase,   color: "#FFCA28" },
      { name: "MongoDB",   icon: SiMongodb,    color: "#47A248" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
    ],
  },
  {
    name: "Tools",
    categoryIcon: HiCog,
    accent: {
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.08)]",
      bar: "from-purple-500/50",
    },
    items: [
      { name: "Git",    icon: SiGit,    color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
      { name: "Jest",   icon: SiJest,   color: "#C21325" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-4xl space-y-10">

        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Tech Stack</p>
          <h1 className="mt-2 text-2xl font-bold text-white">Skills</h1>
          <p className="mt-1 text-sm text-muted">The stack I build with, daily.</p>
        </AnimatedSection>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.name} delay={0.05 + i * 0.08}>
              <div
                className={`group h-full overflow-hidden rounded-xl border ${cat.accent.border} bg-ink-soft transition-all duration-300 ${cat.accent.glow}`}
              >
                {/* Top accent bar */}
                <div className={`h-[2px] bg-gradient-to-r ${cat.accent.bar} to-transparent`} />

                <div className="p-5">
                  {/* Header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`rounded-xl ${cat.accent.bg} p-2.5`}>
                      <cat.categoryIcon className={cat.accent.text} size={18} />
                    </div>
                    <h3 className="font-semibold text-white">{cat.name}</h3>
                    <span className="ml-auto font-mono text-[10px] text-muted">
                      {cat.items.length} tools
                    </span>
                  </div>

                  {/* Icon grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="group/item flex flex-col items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3 transition-all duration-200 hover:border-white/[0.1] hover:bg-white/[0.05]"
                      >
                        <item.icon
                          size={22}
                          style={{ color: item.color }}
                          className="transition-transform duration-200 group-hover/item:scale-110"
                        />
                        <span className="text-center font-mono text-[10px] leading-tight text-muted">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Currently learning */}
        <AnimatedSection delay={0.2}>
          <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            In Progress
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {learning.map((item) => (
              <div
                key={item.name}
                className="group rounded-xl border border-dashed border-white/[0.1] bg-ink-soft px-4 py-3 transition-all duration-200 hover:border-accent/30 hover:bg-accent/[0.04]"
              >
                <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white/90">
                  {item.name}
                </span>
                {item.note && (
                  <p className="mt-0.5 text-xs text-muted/50">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
