import type { Psalm } from "@/types/psalm";
import { formatDate } from "@/lib/utils";

export function PsalmMetadata({ psalm }: Readonly<{ psalm: Psalm }>) {
  return (
    <dl className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/40 sm:grid-cols-4">
      <div><dt className="text-xs uppercase text-foreground/50">Mood</dt><dd>{psalm.mood}</dd></div>
      <div><dt className="text-xs uppercase text-foreground/50">Tempo</dt><dd>{psalm.tempo}</dd></div>
      <div><dt className="text-xs uppercase text-foreground/50">Released</dt><dd>{formatDate(psalm.releaseDate)}</dd></div>
      <div><dt className="text-xs uppercase text-foreground/50">Instruments</dt><dd>{psalm.instruments.join(", ")}</dd></div>
    </dl>
  );
}
