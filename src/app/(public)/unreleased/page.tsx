import { PageHeader } from "@/components/layout/PageHeader";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Upcoming Psalms",
  "Upcoming and in-progress Ghanaian sacred choral works from Psalms of Nate.",
  "/unreleased"
);

export default function UnreleasedPage() {
  return (
    <>
      <PageHeader title="Unreleased" description="Works in progress and upcoming project material." />
      <PsalmGrid psalms={mockPsalms.filter((psalm) => psalm.status === "unreleased")} />
    </>
  );
}
