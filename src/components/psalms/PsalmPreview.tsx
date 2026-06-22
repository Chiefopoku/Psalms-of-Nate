import type { Psalm } from "@/types/psalm";
import { PsalmStatusBadge } from "./PsalmStatusBadge";

export function PsalmPreview({ psalm }: Readonly<{ psalm: Psalm }>) {
  return (
    <section className="rounded-3xl border border-white/75 bg-white/65 p-8 shadow-2xl shadow-slate-900/10 backdrop-blur">
      <PsalmStatusBadge status={psalm.status} />
      <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">{psalm.title}</h1>
      {psalm.subtitle ? <p className="mt-3 text-lg leading-8 text-foreground/70">{psalm.subtitle}</p> : null}
    </section>
  );
}
