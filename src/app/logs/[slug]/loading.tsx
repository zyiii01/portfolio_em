export default function LogLoading() {
  return (
    <div className="px-6 md:px-10 pt-28 pb-20 max-w-3xl mx-auto animate-pulse">
      <div className="h-3 w-24 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="h-4 w-20 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="h-8 w-3/4 rounded-full mb-4" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="flex gap-2 mb-8">
        <div className="h-5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div className="h-5 w-16 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }} />
      </div>
      <div className="h-px mb-8" style={{ background: "rgba(255,255,255,0.08)" }} />
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-4 rounded-full mb-3" style={{ background: "rgba(255,255,255,0.05)", width: `${80 + Math.random() * 20}%` }} />
      ))}
    </div>
  );
}
