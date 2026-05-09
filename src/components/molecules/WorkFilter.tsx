"use client";

import type { Project } from "@/types";

interface WorkFilterProps {
  categories: Project["category"][];
  techStacks: string[];
  activeCategory: string;
  activeTech: string;
  onCategoryChange: (cat: string) => void;
  onTechChange: (tech: string) => void;
}

export default function WorkFilter({
  categories,
  techStacks,
  activeCategory,
  activeTech,
  onCategoryChange,
  onTechChange,
}: WorkFilterProps) {
  const pillBase =
    "px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 cursor-pointer min-h-[44px] flex items-center";

  const activePill = {
    background: "var(--rose)",
    borderColor: "var(--rose)",
    color: "white",
  };
  const inactivePill = {
    background: "transparent",
    borderColor: "rgba(255,255,255,0.2)",
    color: "rgba(255,255,255,0.6)",
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Category Filter */}
      <div>
        <p
          className="text-[0.65rem] tracking-[0.18em] uppercase mb-2"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Category
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            className={pillBase}
            style={activeCategory === "All" ? activePill : inactivePill}
            onClick={() => onCategoryChange("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={pillBase}
              style={activeCategory === cat ? activePill : inactivePill}
              onClick={() => onCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Filter */}
      <div>
        <p
          className="text-[0.65rem] tracking-[0.18em] uppercase mb-2"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            className={pillBase}
            style={activeTech === "All" ? activePill : inactivePill}
            onClick={() => onTechChange("All")}
          >
            All
          </button>
          {techStacks.map((tech) => (
            <button
              key={tech}
              className={pillBase}
              style={activeTech === tech ? activePill : inactivePill}
              onClick={() => onTechChange(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
