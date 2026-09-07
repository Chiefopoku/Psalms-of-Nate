import { Container } from "@/components/layout/Container";
import HoverRevealCards, { type CardItem } from "@/components/ui/cards";
import type { Psalm } from "@/types/psalm";

export function PsalmGrid({ psalms }: Readonly<{ psalms: Psalm[] }>) {
  const items: CardItem[] = psalms.map((psalm) => ({
    id: psalm.id,
    title: psalm.title,
    subtitle: psalm.mood,
    imageUrl: psalm.coverUrl ?? "",
    href: `/psalms/${psalm.slug}`,
    badge: psalm.status === "released" ? "Released" : "Upcoming",
  }));

  return (
    <Container className="py-10">
      <HoverRevealCards items={items} className="max-w-none md:grid-cols-3" />
    </Container>
  );
}
