import { Container } from "@/components/layout/Container";
import { DownloadStats } from "@/components/analytics/DownloadStats";
import { StreamingClicks } from "@/components/analytics/StreamingClicks";

export default function AdminDashboardPage() {
  return (
    <Container className="py-8">
      <div className="rounded-3xl border border-white/75 bg-white/65 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Overview</p>
        <h2 className="mt-2 text-3xl font-semibold">Dashboard</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2"><DownloadStats /><StreamingClicks /></div>
      </div>
    </Container>
  );
}
