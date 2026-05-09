export default function CardSkeleton() {
  return (
    <div
      className="rounded-2xl p-5 border animate-pulse"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="h-3 w-20 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="h-4 w-3/4 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="h-3 w-full rounded-full mb-2" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="h-3 w-5/6 rounded-full mb-6" style={{ background: "rgba(255,255,255,0.06)" }} />
      <div className="flex gap-2">
        <div className="h-5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="h-5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
