import { Container } from "@/components/layout/Container";
import { PsalmGrid } from "@/components/psalms/PsalmGrid";
import { mockPsalms } from "@/data/mock-psalms";

export default function AdminPsalmsPage() {
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Catalog</p>
      <h1 className="mb-6 text-3xl font-semibold">Manage psalms</h1>
      <PsalmGrid psalms={mockPsalms} />
    </Container>
  );
}
