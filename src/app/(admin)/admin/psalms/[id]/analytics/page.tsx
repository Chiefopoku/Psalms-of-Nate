import { Container } from "@/components/layout/Container";
import { AnalyticsTable } from "@/components/analytics/AnalyticsTable";

export default async function PsalmAnalyticsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Track detail</p>
      <h1 className="mb-6 text-3xl font-semibold">Psalm analytics {id}</h1>
      <AnalyticsTable />
    </Container>
  );
}
