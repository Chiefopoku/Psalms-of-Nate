import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { PresentationCard } from "@/components/presentations/PresentationCard";
import { presentations } from "@/data/presentations";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Presentations",
  "Talks and teaching decks from Dr. Nathanael Adjei for choirs, churches, singing groups, and musical programs.",
  "/resources/presentations"
);

export default function PresentationsPage() {
  return (
    <>
      <PageHeader title="Presentations" description="Talks and teaching decks for choirs, churches, singing groups, and musical programs — to view or download and use." />
      <Container className="py-10">
        {presentations.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {presentations.map((p) => <PresentationCard key={p.id} presentation={p} />)}
          </div>
        ) : (
          <p className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] px-6 py-12 text-center text-foreground/70">
            Presentations are being prepared and will appear here soon.
          </p>
        )}
      </Container>
    </>
  );
}
