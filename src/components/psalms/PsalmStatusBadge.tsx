import type { ReleaseStatus } from "@/types/psalm";

export function PsalmStatusBadge({ status }: Readonly<{ status: ReleaseStatus }>) {
  const className =
    status === "released"
      ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
      : "bg-[hsl(var(--accent))]/15 text-[hsl(var(--accent))]";

  return <span className={`rounded-full px-2.5 py-1 text-xs font-bold capitalize ${className}`}>{status}</span>;
}
