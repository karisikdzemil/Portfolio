export default function PageHeader({ index, label, title, subtitle, tone = "dark" }) {
  const isDark = tone === "dark";

  return (
    <div className="mx-auto max-w-6xl">
      <p
        className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] ${
          isDark ? "text-accent" : "text-accent-dim"
        }`}
      >
        <span className="inline-block h-2 w-2 bg-accent" />
        {index} / {label}
      </p>
      <h1
        className={`mt-4 text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-lg ${
            isDark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
