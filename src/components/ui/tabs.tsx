export function Tabs({ items }: Readonly<{ items: string[] }>) {
  return (
    <div className="inline-flex rounded-full border border-white/80 bg-white/70 p-1 shadow-sm">
      {items.map((item) => (
        <button key={item} className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-[hsl(var(--surface-soft))] hover:text-foreground">{item}</button>
      ))}
    </div>
  );
}
