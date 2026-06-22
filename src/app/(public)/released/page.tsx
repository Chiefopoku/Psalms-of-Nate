import { PageHeader } from "@/components/layout/PageHeader";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";

export default function ReleasedPage() {
  return (
    <>
      <PageHeader title="Released" description="Completed psalms ready for listening and download." />
      <PsalmGrid psalms={mockPsalms.filter((psalm) => psalm.status === "released")} />
    </>
  );
}
