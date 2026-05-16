import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { getAllLogs } from "@/lib/logs";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";

export const metadata: Metadata = {
  title: "Zion Joy B. Barlongo – UI/UX Designer ",
  description:
    "Portfolio and internship activity log of Zion Joy B. Barlongo —  UI/UX Designer focused on clean code, SEO, and performant UI.",
};

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/zyiii01",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/barlongo-zion-joy-b-189709301",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:zjoybarlongo040504@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  const projects = getAllProjects();
  const logs = getAllLogs();
  const allTech = [...new Set(projects.flatMap((p) => p.techStack))];

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 md:px-10 pt-28 pb-16">
        {/* Left: Text */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--rose)" }}
              aria-hidden="true"
            />
            <span
              className="text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: "var(--rose)" }}
            >
              IT Intern / Makerspace Innovhub
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: "var(--white)" }}
          >
            Zion Joy B.<br />Barlongo
          </h1>

          {/* Role */}
          <p
            className="text-xl font-light tracking-wide"
            style={{ color: "var(--rose)" }}
          >
           UI/UX Designer
          </p>

          {/* Bio */}
          <p
            className="text-sm leading-relaxed max-w-md"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Building pixel-perfect, performant experiences through clean code and SOLID
            principles. Currently documenting my internship journey — one commit at a time.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 flex-wrap mt-2">
            <Button label="Get in Touch" href="mailto:zjoybarlongo040504@gmail.com" variant="primary" />
            <Button label="View Projects" href="/work" variant="outline" />
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-1" role="list" aria-label="Social links">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                role="listitem"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="social-link w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Avatar + Glass Stats Card */}
        <div className="flex flex-col items-center gap-6 order-1 lg:order-2">
          {/* Avatar */}
          <div
            className="avatar-glow w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center border-2"
            style={{
              borderColor: "var(--butter)",
              background: "linear-gradient(145deg, #7c1878 0%, #3d0d62 50%, #1e0836 100%)",
            }}
            aria-label="Avatar of Zion Joy B. Barlongo"
          >
            <span
              className="font-display text-5xl font-bold"
              style={{
                color: "var(--butter)",
                textShadow: "0 0 20px rgba(255,233,138,0.6)",
              }}
            >
              ZJB
            </span>
          </div>

          {/* Glass Stats Card */}
          <div className="glass rounded-2xl p-5 w-full max-w-xs flex flex-col gap-4">
            <p
              className="text-[0.65rem] tracking-[0.18em] uppercase"
              style={{ color: "rgba(255,233,138,0.6)" }}
            >
              Internship Overview
            </p>

            <div className="flex justify-between items-end">
              {[
                { num: projects.length, label: "Projects" },
                { num: projects.filter((p) => p.status === "Completed").length, label: "Completed" },
                { num: projects.filter((p) => p.status === "In Progress").length, label: "In Progress" },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="font-display text-3xl font-bold"
                    style={{ color: "var(--butter)" }}
                  >
                    {num}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="h-px" style={{ background: "rgba(255,255,255,0.1)" }} />

            <div>
              <p
                className="text-[0.65rem] tracking-[0.18em] uppercase mb-2"
                style={{ color: "rgba(255,233,138,0.6)" }}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {allTech.slice(0, 7).map((tech) => (
                  <Badge key={tech} label={tech} variant="tech" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERNSHIP TIMELINE ───────────────────────── */}
      <section className="relative z-10 px-6 md:px-10 pb-20">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2
            className="text-[0.7rem] tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--rose)" }}
          >
            Internship Activity Log
          </h2>
          <div
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, rgba(200,71,113,0.4), transparent)",
            }}
            aria-hidden="true"
          />
          <Link
            href="/work"
            className="text-xs font-medium transition-colors duration-200 hover:text-yellow-300"
            style={{ color: "var(--butter)" }}
          >
            View all →
          </Link>
        </div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="interactive-card group relative rounded-2xl p-5 border flex flex-col gap-3 transition-all duration-300"
            >
              <div
                className="absolute left-0 top-0 w-[3px] h-full rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "var(--rose)" }}
                aria-hidden="true"
              />
              <p
                className="font-display text-[0.65rem] tracking-widest"
                style={{ color: "var(--butter)" }}
              >
                0{idx + 1} — {project.category}
              </p>
              <h3 className="text-sm font-semibold text-white">{project.title}</h3>
              <p
                className="text-xs leading-relaxed flex-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {project.description.slice(0, 100)}…
              </p>
              <Badge
                label={project.status}
                variant={project.status === "Completed" ? "status-done" : "status-wip"}
              />
            </article>
          ))}
        </div>
      </section>

      {/* ─── LATEST LOG PREVIEW ────────────────────────── */}
      {logs.length > 0 && (
        <section className="relative z-10 px-6 md:px-10 pb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2
              className="text-[0.7rem] tracking-[0.2em] uppercase font-medium"
              style={{ color: "var(--rose)" }}
            >
              Latest Log
            </h2>
            <div
              className="flex-1 h-px"
              style={{
                background:
                  "linear-gradient(to right, rgba(200,71,113,0.4), transparent)",
              }}
              aria-hidden="true"
            />
            <Link
              href="/logs"
              className="text-xs font-medium transition-colors duration-200 hover:text-yellow-300"
              style={{ color: "var(--butter)" }}
            >
              All logs →
            </Link>
          </div>

          <div
            className="glass rounded-2xl p-6 max-w-xl"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            <p
              className="font-display text-[0.65rem] tracking-widest mb-2"
              style={{ color: "var(--butter)" }}
            >
              Week {logs[logs.length - 1].week}
            </p>
            <h3 className="text-base font-semibold text-white mb-2">
              {logs[logs.length - 1].title}
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
              {logs[logs.length - 1].excerpt}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {logs[logs.length - 1].tags.map((tag) => (
                <Badge key={tag} label={tag} variant="category" />
              ))}
            </div>
            <Link
              href={`/logs/${logs[logs.length - 1].slug}`}
              className="rose-link text-xs font-medium transition-colors duration-200"
            >
              Read full log →
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
