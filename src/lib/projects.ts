import projectsData from "../../data/projects.json";
import type { Project } from "@/types";

export function getAllProjects(): Project[] {
  return projectsData as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((p) => p.id === id);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return getAllProjects().filter((p) => p.category === category);
}

export function getProjectsByTech(tech: string): Project[] {
  return getAllProjects().filter((p) =>
    p.techStack.some((t) => t.toLowerCase() === tech.toLowerCase())
  );
}

export function getAllCategories(): Project["category"][] {
  const cats = getAllProjects().map((p) => p.category);
  return [...new Set(cats)];
}

export function getAllTechStacks(): string[] {
  const stacks = getAllProjects().flatMap((p) => p.techStack);
  return [...new Set(stacks)].sort();
}
