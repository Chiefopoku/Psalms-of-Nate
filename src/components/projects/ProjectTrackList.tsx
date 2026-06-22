import type { Psalm } from "@/types/psalm";
import { PsalmCard } from "@/components/psalms/PsalmCard";

export function ProjectTrackList({ psalms }: Readonly<{ psalms: Psalm[] }>) {
  return (
    <section className="mt-10 grid gap-5 md:grid-cols-2">
      {psalms.map((psalm) => <PsalmCard key={psalm.id} psalm={psalm} />)}
    </section>
  );
}
