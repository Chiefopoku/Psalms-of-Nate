import { Container } from "@/components/layout/Container";
import { AnalyticsTable } from "@/components/analytics/AnalyticsTable";

export default function AnalyticsPage() {
  return (
    <Container className="py-8">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Performance</p>
      <h1 className="mb-6 text-3xl font-semibold">Analytics</h1>
      <AnalyticsTable />
    </Container>
  );
}
