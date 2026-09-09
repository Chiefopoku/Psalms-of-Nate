import { PageHeader } from "@/components/layout/PageHeader";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Psalms",
  "Every psalm composed by Dr. Nathanael Adjei — Ghanaian sacred choral music with free scores and recordings.",
  "/psalms"
);

export default function PsalmsPage() {
  return (
    <>
      <PageHeader title="Psalms" description="The full catalog of individual compositions." />
      <PsalmGrid psalms={mockPsalms} />
    </>
  );
}
