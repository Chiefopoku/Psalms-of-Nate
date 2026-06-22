import { Input } from "@/components/ui/input";

export function MetadataForm() {
  return (
    <div className="grid gap-3 rounded-3xl border border-white/75 bg-white/70 p-5 shadow-xl shadow-slate-900/10 backdrop-blur">
      <Input placeholder="Title" />
      <Input placeholder="Psalm reference or subtitle" />
    </div>
  );
}
