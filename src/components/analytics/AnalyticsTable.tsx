import { Table } from "@/components/ui/table";

export function AnalyticsTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/75 bg-white/75 p-2 shadow-xl shadow-slate-900/10">
      <Table>
        <thead><tr><th className="border-b border-border/60 px-4 py-3">Metric</th><th className="border-b border-border/60 px-4 py-3">Count</th></tr></thead>
        <tbody><tr><td className="px-4 py-3">Downloads</td><td className="px-4 py-3">0</td></tr></tbody>
      </Table>
    </div>
  );
}
