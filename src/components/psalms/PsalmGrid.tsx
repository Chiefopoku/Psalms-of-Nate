import { Container } from "@/components/layout/Container";
import type { Psalm } from "@/types/psalm";
import { PsalmCard } from "./PsalmCard";

export function PsalmGrid({ psalms }: Readonly<{ psalms: Psalm[] }>) {
  return (
    <Container className="grid gap-6 py-10 md:grid-cols-3">
      {psalms.map((psalm) => <PsalmCard key={psalm.id} psalm={psalm} />)}
    </Container>
  );
}
