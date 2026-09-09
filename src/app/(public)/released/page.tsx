import { PageHeader } from "@/components/layout/PageHeader";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Released Psalms",
  "Released Ghanaian sacred choral works from Psalms of Nate, with free scores and recordings available now.",
  "/released"
);

export default function ReleasedPage() {
  return (
    <>
      <PageHeader title="Released" description="Completed psalms ready for watching and download." />
      <PsalmGrid psalms={mockPsalms.filter((psalm) => psalm.status === "released")} />
    </>
  );
}
