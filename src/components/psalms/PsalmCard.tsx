import Link from "next/link";
import { ArrowUpRight, Disc3, Music2 } from "lucide-react";
import type { Psalm } from "@/types/psalm";
import { Card } from "@/components/ui/card";
import { PsalmStatusBadge } from "./PsalmStatusBadge";

export function PsalmCard({ psalm }: Readonly<{ psalm: Psalm }>) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="relative min-h-44 overflow-hidden bg-[hsl(var(--foreground))] p-5 text-white">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[hsl(var(--gold))]/55 blur-2xl" />
        <div className="absolute -bottom-14 left-6 h-36 w-36 rounded-full bg-[hsl(var(--accent))]/45 blur-3xl" />
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
          <Music2 className="h-5 w-5" />
        </div>
        <Disc3 className="absolute bottom-5 right-5 h-16 w-16 text-white/14" />
      </div>
      <div className="p-5">
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold leading-tight">
          <Link href={`/psalms/${psalm.slug}`} className="inline-flex items-center gap-2">
            {psalm.title}
            <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          </Link>
        </h2>
        <PsalmStatusBadge status={psalm.status} />
      </div>
      {psalm.subtitle ? <p className="mt-2 text-sm text-foreground/60">{psalm.subtitle}</p> : null}
      <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-foreground/60">
        <span className="rounded-full bg-[hsl(var(--surface-soft))] px-3 py-1">{psalm.mood}</span>
        <span className="rounded-full bg-[hsl(var(--surface-soft))] px-3 py-1">{psalm.tempo}</span>
      </div>
      </div>
    </Card>
  );
}
