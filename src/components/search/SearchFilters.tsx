import { InstrumentFilter } from "./InstrumentFilter";
import { MoodFilter } from "./MoodFilter";
import { ReleaseStatusFilter } from "./ReleaseStatusFilter";
import { TempoFilter } from "./TempoFilter";

export function SearchFilters() {
  return (
    <div className="mt-6 grid gap-4 rounded-3xl border border-white/75 bg-white/70 p-5 shadow-xl shadow-slate-900/10 backdrop-blur md:grid-cols-4">
      <MoodFilter />
      <TempoFilter />
      <InstrumentFilter />
      <ReleaseStatusFilter />
    </div>
  );
}
