export function Dropdown({ label, options }: Readonly<{ label: string; options: string[] }>) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block font-semibold text-foreground/70">{label}</span>
      <select className="h-11 w-full rounded-xl border border-border/80 bg-white/85 px-4 text-sm shadow-sm outline-none transition focus:border-[hsl(var(--primary))] focus:ring-4 focus:ring-[hsl(var(--primary))]/15">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
