# ZJB Portfolio

Portfolio and internship activity log of **Zion Joy B. Barlongo** — built with Next.js 14, TypeScript (strict), and Tailwind CSS.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
zjb-portfolio/
├── data/
│   └── projects.json          ← Add/edit projects here (no UI code changes needed)
├── content/
│   └── logs/
│       ├── week-01.md         ← Weekly log entries (Markdown + frontmatter)
│       └── week-02.md
├── src/
│   ├── types/index.ts         ← TypeScript interfaces (Project, LogMeta, NavLink)
│   ├── lib/
│   │   ├── projects.ts        ← Data access layer for projects.json
│   │   └── logs.ts            ← File-system reading for Markdown logs
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Badge.tsx      ← Reusable badge pill
│   │   │   ├── Button.tsx     ← Primary & outline button with pulse animation
│   │   │   └── Skeleton.tsx   ← Loading skeleton cards
│   │   ├── molecules/
│   │   │   ├── ProjectCard.tsx ← Project display card
│   │   │   ├── LogCard.tsx    ← Log entry preview card
│   │   │   └── WorkFilter.tsx ← Filter logic (separate from display — SOLID)
│   │   └── layout/
│   │       ├── Navbar.tsx     ← Persistent nav with active-link styling
│   │       └── Footer.tsx     ← Persistent footer
│   └── app/
│       ├── layout.tsx         ← Root layout with metadata
│       ├── globals.css        ← Design tokens, animations, glass utilities
│       ├── page.tsx           ← Home: Hero + Timeline + Latest Log
│       ├── work/
│       │   ├── page.tsx       ← Work gallery (server component)
│       │   ├── WorkGallery.tsx ← Client-side filterable grid
│       │   └── loading.tsx    ← Skeleton loading state
│       └── logs/
│           ├── page.tsx       ← Logs index
│           └── [slug]/
│               ├── page.tsx   ← Dynamic log page (generateStaticParams + generateMetadata)
│               └── loading.tsx
```

---

## Adding a New Project

Edit `data/projects.json` and add a new entry. No UI changes required.

```json
{
  "id": "my-new-project",
  "title": "My New Project",
  "description": "What it does.",
  "techStack": ["Next.js", "TypeScript"],
  "completionDate": "2025-06-01",
  "category": "Frontend",
  "status": "In Progress",
  "keyContributions": ["Built the thing", "Fixed the other thing"],
  "githubLink": "https://github.com/..."
}
```

---

## Adding a Weekly Log

Create a new file in `content/logs/` named `week-NN.md`:

```md
---
title: "Week 3 – Your Title Here"
date: "2025-05-12"
week: 3
tags: ["Next.js", "TypeScript"]
excerpt: "One-line summary shown on the logs index."
---

## Overview
Your markdown content here.
```

---

## Design System

| Token | Value |
|-------|-------|
| `--royal` | `#280B45` — Base background |
| `--magenta` | `#61105E` — Secondary/Accent |
| `--rose` | `#C84771` — Highlights & hover |
| `--butter` | `#FFE98A` — CTAs & glow |

---

## Deployment

```bash
# Vercel (recommended)
vercel deploy

# Or push to GitHub and connect to Vercel dashboard
```

---

## PRD Compliance Checklist

- [x] `projects.json` with typed schema (Title, Description, TechStack, CompletionDate, Category)
- [x] Markdown logs in `/content` parsed dynamically via gray-matter
- [x] TypeScript strict mode with interfaces for all data
- [x] App Router with Home `/`, Work `/work`, Logs `/logs/[slug]`
- [x] Filter system separated from display (SOLID)
- [x] `generateStaticParams` for log pages
- [x] `generateMetadata` for dynamic SEO per log
- [x] Loading skeletons (`loading.tsx`)
- [x] Atomic design: atoms (Badge, Button, Skeleton) → molecules (ProjectCard, LogCard, WorkFilter)
- [x] Responsive: 1 col mobile → 2 col tablet → 3 col desktop
- [x] 44×44px minimum touch targets on all buttons
- [x] Accessible: aria-labels, aria-current, semantic HTML
- [x] Next.js `<Image>` component ready (use for real photos)
