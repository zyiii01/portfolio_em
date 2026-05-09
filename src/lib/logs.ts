import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { LogMeta } from "@/types";

const LOGS_DIR = path.join(process.cwd(), "content/logs");

export function getAllLogSlugs(): string[] {
  return fs
    .readdirSync(LOGS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllLogs(): LogMeta[] {
  return getAllLogSlugs()
    .map((slug) => getLogMeta(slug))
    .filter(Boolean)
    .sort((a, b) => a!.week - b!.week) as LogMeta[];
}

export function getLogMeta(slug: string): LogMeta | null {
  const filePath = path.join(LOGS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    week: data.week ?? 0,
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
  };
}

export function getLogContent(slug: string): { meta: LogMeta; content: string } | null {
  const filePath = path.join(LOGS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      week: data.week ?? 0,
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? "",
    },
    content,
  };
}
