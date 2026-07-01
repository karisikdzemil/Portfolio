"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
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
      />
    </div>
  );
}
