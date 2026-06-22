export function MidiDownloadButton({ href }: Readonly<{ href?: string }>) {
  return <a className="rounded-full border border-border/70 bg-white/75 px-4 py-2 text-sm font-semibold shadow-sm transition hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]" href={href ?? "#"}>MIDI</a>;
}
