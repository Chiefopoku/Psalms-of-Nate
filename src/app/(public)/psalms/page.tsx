import { PageHeader } from "@/components/layout/PageHeader";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";

export default function PsalmsPage() {
  return (
    <>
      <PageHeader title="Psalms" description="The full catalog of individual compositions." />
      <PsalmGrid psalms={mockPsalms} />
    </>
  );
}
