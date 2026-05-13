"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Logs", href: "/logs" },
  { label: "About Me", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-5 glass border-b border-white/10">
      {/* Logo */}
      <Link
        href="/"
        className="font-display text-sm font-bold tracking-[0.18em]"
        style={{ color: "var(--butter)", textShadow: "0 0 20px rgba(255,233,138,0.4)" }}
      >
        ZJB
      </Link>

      {/* Nav Links */}
      <nav aria-label="Main navigation">
        <ul className="flex gap-8 list-none m-0 p-0">
          {links.map(({ label, href }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium tracking-[0.08em] transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--butter)" : "rgba(255,255,255,0.75)",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
