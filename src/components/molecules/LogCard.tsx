import Link from "next/link";
import type { LogMeta } from "@/types";
import Badge from "@/components/atoms/Badge";

export default function LogCard({ log }: { log: LogMeta }) {
  return (
    <Link
      href={`/logs/${log.slug}`}
      className="interactive-card group block rounded-2xl p-5 border transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-display text-xs tracking-widest"
          style={{ color: "var(--butter)" }}
        >
          Week {log.week}
        </span>
        <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
          {new Date(log.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>

      <h3 className="text-sm font-semibold text-white mb-2">{log.title}</h3>
      <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
        {log.excerpt}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {log.tags.map((tag) => (
          <Badge key={tag} label={tag} variant="category" />
        ))}
      </div>

      <p
        className="mt-3 text-xs font-medium transition-colors duration-200 group-hover:text-rose-400"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        Read more →
      </p>
    </Link>
  );
}
