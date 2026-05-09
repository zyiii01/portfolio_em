import type { Metadata } from "next";
import { getAllLogs } from "@/lib/logs";
import LogCard from "@/components/molecules/LogCard";

export const metadata: Metadata = {
  title: "Logs",
  description: "Weekly internship learning logs by Zion Joy B. Barlongo.",
};

export default function LogsPage() {
  const logs = getAllLogs();

  return (
    <div className="px-6 md:px-10 pt-28 pb-20">
      <div className="mb-10">
        <p
          className="text-[0.7rem] tracking-[0.2em] uppercase font-medium mb-2"
          style={{ color: "var(--rose)" }}
        >
          Learning Logs
        </p>
        <h1
          className="font-display text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--white)" }}
        >
          Weekly Logs
        </h1>
        <p className="text-sm max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
          Documenting what I learn, build, and encounter each week throughout my internship.
        </p>
      </div>

      {logs.length === 0 ? (
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          No logs yet. Add a Markdown file to{" "}
          <code className="text-xs px-1 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.08)", color: "var(--butter)" }}>
            content/logs/
          </code>
          .
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {logs.map((log) => (
            <LogCard key={log.slug} log={log} />
          ))}
        </div>
      )}
    </div>
  );
}
