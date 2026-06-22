import { PageHeader } from "@/components/layout/PageHeader";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";

export default function LibraryPage() {
  return (
    <>
      <PageHeader title="Library" description="Browse every published and upcoming psalm." />
      <PsalmGrid psalms={mockPsalms} />
    </>
  );
}
