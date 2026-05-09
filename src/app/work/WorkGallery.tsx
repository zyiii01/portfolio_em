"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/types";
import ProjectCard from "@/components/molecules/ProjectCard";
import WorkFilter from "@/components/molecules/WorkFilter";

interface WorkGalleryProps {
  projects: Project[];
  categories: Project["category"][];
  techStacks: string[];
}

// Filter logic is separated from UI display (SOLID - Single Responsibility)
function filterProjects(
  projects: Project[],
  activeCategory: string,
  activeTech: string
): Project[] {
  return projects.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchTech =
      activeTech === "All" ||
      p.techStack.some((t) => t.toLowerCase() === activeTech.toLowerCase());
    return matchCat && matchTech;
  });
}

export default function WorkGallery({ projects, categories, techStacks }: WorkGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeTech, setActiveTech] = useState<string>("All");

  const filtered = useMemo(
    () => filterProjects(projects, activeCategory, activeTech),
    [projects, activeCategory, activeTech]
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Filters */}
      <WorkFilter
        categories={categories}
        techStacks={techStacks}
        activeCategory={activeCategory}
        activeTech={activeTech}
        onCategoryChange={setActiveCategory}
        onTechChange={setActiveTech}
      />

      {/* Results count */}
      <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
        Showing {filtered.length} of {projects.length} projects
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            No projects match the selected filters.
          </p>
          <button
            className="mt-4 text-xs font-medium transition-colors duration-200"
            style={{ color: "var(--butter)" }}
            onClick={() => {
              setActiveCategory("All");
              setActiveTech("All");
            }}
          >
            Clear filters →
          </button>
        </div>
      )}
    </div>
  );
}
