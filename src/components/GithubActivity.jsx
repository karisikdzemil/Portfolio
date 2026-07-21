"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function CalendarSkeleton() {
  return (
    <div className="space-y-2">
      <div className="shimmer h-[112px] w-full rounded-lg" />
      <div className="flex gap-2">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="shimmer h-2.5 w-8 rounded-sm" />
        ))}
      </div>
    </div>
  );
}

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <CalendarSkeleton />;

  if (hasError) {
    return (
      <div className="flex h-[112px] items-center justify-center rounded-lg border border-white/[0.06] bg-ink-soft">
        <p className="font-mono text-xs text-muted">{t("github.unavailable")}</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username="karisikdzemil"
        colorScheme="dark"
        theme={{
          dark: ["#11141b", "#78350f", "#b45309", "#d97706", "#f59e0b"],
        }}
        blockSize={11}
        blockMargin={3}
        fontSize={11}
        style={{ fontFamily: "var(--font-mono)", color: "#5c6478" }}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
