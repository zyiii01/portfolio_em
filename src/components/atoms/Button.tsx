import Link from "next/link";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  label,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-content-center px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 min-h-[44px] min-w-[44px]";

  const styles =
    variant === "primary"
      ? "btn-pulse"
      : "border border-white/30 text-white hover:border-rose-400 hover:text-rose-400 hover:bg-rose-500/10";

  const inlineStyle =
    variant === "primary"
      ? { background: "var(--butter)", color: "var(--royal)" }
      : {};

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`} style={inlineStyle}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      style={inlineStyle}
    >
      {label}
    </button>
  );
}
