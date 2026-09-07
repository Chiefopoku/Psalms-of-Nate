import type { Psalm } from "@/types/psalm";
import { PsalmStatusBadge } from "./PsalmStatusBadge";

export function PsalmPreview({ psalm }: Readonly<{ psalm: Psalm }>) {
  return (
    <section className="grid gap-7 rounded-3xl border border-border bg-surface p-6 shadow-xl shadow-[hsl(var(--shadow))]/10 sm:grid-cols-[300px_1fr] sm:items-center sm:p-8">
      <div
        role="img"
        aria-label={`${psalm.title} cover artwork`}
        className="aspect-square w-full rounded-2xl bg-foreground/5 bg-cover bg-center shadow-lg shadow-[hsl(var(--shadow))]/10"
        style={psalm.coverUrl ? { backgroundImage: `url(${psalm.coverUrl})` } : undefined}
      />

      <div>
        <PsalmStatusBadge status={psalm.status} />
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{psalm.title}</h1>
        {psalm.subtitle ? <p className="mt-3 text-lg leading-8 text-foreground/70">{psalm.subtitle}</p> : null}
        {psalm.description ? <p className="mt-4 text-sm leading-7 text-foreground/60">{psalm.description}</p> : null}
      </div>
    </section>
  );
}
