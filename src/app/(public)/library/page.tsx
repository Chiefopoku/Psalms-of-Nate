import { PageHeader } from "@/components/layout/PageHeader";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Library",
  "Browse the full Psalms of Nate library — Ghanaian sacred choral works with free scores, MIDI, and MP3 downloads.",
  "/library"
);

export default function LibraryPage() {
  return (
    <>
      <PageHeader title="Library" description="Browse every published and upcoming psalm." />
      <PsalmGrid psalms={mockPsalms} />
    </>
  );
}
