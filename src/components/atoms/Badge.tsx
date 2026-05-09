interface BadgeProps {
  label: string;
  variant?: "tech" | "category" | "status-done" | "status-wip";
}

const variantStyles: Record<string, string> = {
  tech: "bg-rose-500/15 border border-rose-500/35 text-white/85",
  category: "bg-yellow-300/10 border border-yellow-300/30 text-yellow-200",
  "status-done": "bg-green-500/15 border border-green-500/30 text-green-300",
  "status-wip": "bg-yellow-400/12 border border-yellow-400/30 text-yellow-200",
};

export default function Badge({ label, variant = "tech" }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-0.5 rounded-full text-[0.68rem] font-medium tracking-wide ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
