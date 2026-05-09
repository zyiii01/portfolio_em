import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllLogSlugs, getLogContent } from "@/lib/logs";
import Badge from "@/components/atoms/Badge";
import { marked } from "marked";

interface Props {
  params: { slug: string };
}

// PRD 3.2: generateStaticParams for static generation of all log pages
export async function generateStaticParams() {
  const slugs = getAllLogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// PRD 4.1: Dynamic generateMetadata for unique SEO titles per log
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getLogContent(params.slug);
  if (!data) return { title: "Log Not Found" };

  return {
    title: data.meta.title,
    description: data.meta.excerpt,
    keywords: data.meta.tags,
    openGraph: {
      title: data.meta.title,
      description: data.meta.excerpt,
      type: "article",
      publishedTime: data.meta.date,
    },
  };
}

export default function LogPage({ params }: Props) {
  const data = getLogContent(params.slug);
  if (!data) notFound();

  const { meta, content } = data;
  const html = marked(content) as string;

  return (
    <div className="px-6 md:px-10 pt-28 pb-20 max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/logs"
        className="muted-link inline-flex items-center gap-1 text-xs font-medium mb-8 transition-colors duration-200"
      >
        ← Back to Logs
      </Link>

      {/* Meta */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="font-display text-xs tracking-widest"
            style={{ color: "var(--butter)" }}
          >
            Week {meta.week}
          </span>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            {new Date(meta.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <h1
          className="font-display text-2xl md:text-3xl font-bold mb-4 leading-snug"
          style={{ color: "var(--white)" }}
        >
          {meta.title}
        </h1>

        <div className="flex flex-wrap gap-1.5">
          {meta.tags.map((tag) => (
            <Badge key={tag} label={tag} variant="category" />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-8"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <article
        className="prose-log"
        dangerouslySetInnerHTML={{ __html: html }}
        aria-label={`Log content: ${meta.title}`}
      />

      {/* Navigation */}
      <div
        className="mt-12 pt-6 border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <Link
          href="/logs"
          className="rose-link text-sm font-medium transition-colors duration-200"
        >
          ← View all logs
        </Link>
      </div>
    </div>
  );
}
