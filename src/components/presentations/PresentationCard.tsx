import Link from "next/link";
import { Presentation as PresentationIcon } from "lucide-react";
import type { Presentation } from "@/types/presentation";
import { Card } from "@/components/ui/card";

export function PresentationCard({ presentation }: Readonly<{ presentation: Presentation }>) {
  return (
    <Card className="grid grid-cols-[72px_1fr] gap-4 sm:grid-cols-[88px_1fr] sm:gap-5">
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-[hsl(var(--accent))] text-white shadow-lg shadow-orange-900/15">
        <PresentationIcon className="h-8 w-8" />
      </div>
      <div>
        <h2 className="text-xl font-semibold leading-tight">
          <Link href={`/resources/presentations/${presentation.slug}`}>{presentation.title}</Link>
        </h2>
        <p className="mt-2 text-sm leading-6 text-foreground/70">{presentation.summary}</p>
        {presentation.audience ? (
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--primary))]">{presentation.audience}</p>
        ) : null}
      </div>
    </Card>
  );
}
