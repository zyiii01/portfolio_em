import type { Metadata } from "next";
import { getAllProjects, getAllCategories, getAllTechStacks } from "@/lib/projects";
import WorkGallery from "./WorkGallery";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A gallery of all internship projects and activities by Zion Joy B. Barlongo, filterable by tech stack and category.",
};

export default function WorkPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();
  const techStacks = getAllTechStacks();

  return (
    <div className="px-6 md:px-10 pt-28 pb-20">
      {/* Header */}
      <div className="mb-10">
        <p
          className="text-[0.7rem] tracking-[0.2em] uppercase font-medium mb-2"
          style={{ color: "var(--rose)" }}
        >
          Portfolio
        </p>
        <h1
          className="font-display text-3xl md:text-4xl font-bold mb-3"
          style={{ color: "var(--white)" }}
        >
          Work Gallery
        </h1>
        <p className="text-sm max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
          All internship activities and projects — filterable by category or tech stack.
          New projects added by editing{" "}
          <code className="text-xs px-1 py-0.5 rounded" style={{ background: "rgba(255,255,255,0.08)", color: "var(--butter)" }}>
            data/projects.json
          </code>
          .
        </p>
      </div>

      {/* Client-side filterable gallery */}
      <WorkGallery
        projects={projects}
        categories={categories}
        techStacks={techStacks}
      />
    </div>
  );
}
