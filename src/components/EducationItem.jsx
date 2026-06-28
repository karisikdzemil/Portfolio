export default function EducationItem({ title, subtitle, period, description, tags, status, tone = "dark" }) {
  const isDark = tone === "dark";

  return (
    <div className={`border-l-2 pl-6 ${isDark ? "border-white/15" : "border-ink/20"}`}>
      <p className={`font-mono text-xs uppercase tracking-[0.2em] ${isDark ? "text-white/40" : "text-ink/40"}`}>
        {period}
      </p>
      <h3 className={`mt-2 text-lg font-bold ${isDark ? "text-white" : "text-ink"}`}>{title}</h3>
      <p className={`mt-1 font-mono text-sm ${isDark ? "text-accent" : "text-accent-dim"}`}>{subtitle}</p>
      {description && (
        <p className={`mt-3 text-sm ${isDark ? "text-white/60" : "text-ink/60"}`}>{description}</p>
      )}
      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`border px-2 py-1 font-mono text-xs ${
                isDark ? "border-white/15 text-white/60" : "border-ink/15 text-ink/60"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {status && (
        <span
          className={`mt-4 inline-block border-2 border-accent px-2 py-1 font-mono text-xs font-bold uppercase ${
            isDark ? "text-accent" : "text-accent-dim"
          }`}
        >
          {status}
        </span>
      )}
    </div>
  );
}
