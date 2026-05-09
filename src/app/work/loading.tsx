import { SkeletonGrid } from "@/components/atoms/Skeleton";

export default function WorkLoading() {
  return (
    <div className="px-6 md:px-10 pt-28 pb-20">
      <div className="h-8 w-40 rounded-full mb-2 animate-pulse" style={{ background: "rgba(255,255,255,0.08)" }} />
      <div className="h-4 w-64 rounded-full mb-10 animate-pulse" style={{ background: "rgba(255,255,255,0.05)" }} />
      <SkeletonGrid count={4} />
    </div>
  );
}
