export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  completionDate: string;
  category: "SEO Audit" | "Frontend" | "Research" | "Design" | "Full Stack";
  status: "Completed" | "In Progress";
  evidenceLinks?: string[];
  githubLink?: string;
  liveLink?: string;
  keyContributions: string[];
}

export interface LogMeta {
  slug: string;
  title: string;
  date: string;
  week: number;
  tags: string[];
  excerpt: string;
}

export interface NavLink {
  label: string;
  href: string;
}
