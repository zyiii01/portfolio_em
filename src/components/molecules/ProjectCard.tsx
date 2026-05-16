import type { Project } from "@/types";
import Badge from "@/components/atoms/Badge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const artifacts = project.evidenceArtifacts ?? [];

  return (
    <article
      className="interactive-card interactive-card-lift group relative rounded-2xl p-5 border transition-all duration-300 flex flex-col gap-4 cursor-pointer"
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 w-[3px] h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "var(--rose)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p
            className="font-display text-xs tracking-widest mb-1"
            style={{ color: "var(--butter)" }}
          >
            {project.category}
          </p>
          <h3 className="text-base font-semibold text-white">{project.title}</h3>
          {project.role && (
            <p className="mt-1 text-xs font-medium" style={{ color: "var(--rose)" }}>
              {project.role}
            </p>
          )}
        </div>
        <Badge
          label={project.status}
          variant={project.status === "Completed" ? "status-done" : "status-wip"}
        />
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
        {project.description}
      </p>

      {/* Key Contributions */}
      <ul className="flex flex-col gap-1">
        {project.keyContributions.slice(0, 3).map((c, i) => (
          <li
            key={i}
            className="text-xs pl-4 relative"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            <span
              className="absolute left-0"
              style={{ color: "var(--rose)" }}
              aria-hidden="true"
            >
              ▹
            </span>
            {c}
          </li>
        ))}
      </ul>

      {/* Proof of Work */}
      {artifacts.length > 0 && (
        <div
          className="rounded-lg border p-3"
          style={{
            borderColor: "rgba(200,71,113,0.24)",
            background:
              "linear-gradient(135deg, rgba(61,13,98,0.34), rgba(200,71,113,0.08))",
          }}
        >
          <p
            className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em]"
            style={{ color: "var(--butter)" }}
          >
            Project Deliverables &amp; Artifacts
          </p>
          <div className="flex flex-wrap gap-2">
            {artifacts.map((artifact) => (
              <a
                key={`${artifact.label}-${artifact.href}`}
                href={artifact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border px-2.5 py-1 text-[0.68rem] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow-200/70 hover:text-yellow-100"
                style={{
                  borderColor: "rgba(255,233,138,0.28)",
                  color: "rgba(255,255,255,0.82)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                {artifact.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.techStack.map((tech) => (
          <Badge key={tech} label={tech} variant="tech" />
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-1 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium transition-colors duration-200 hover:text-yellow-300"
            style={{ color: "var(--butter)" }}
          >
            Live ↗
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="subtle-link text-xs font-medium transition-colors duration-200"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}
