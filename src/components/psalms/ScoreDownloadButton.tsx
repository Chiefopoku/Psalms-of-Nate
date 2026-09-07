export function ScoreDownloadButton({ href }: Readonly<{ href?: string }>) {
  return <a className="rounded-full bg-[hsl(var(--foreground))] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:bg-[hsl(var(--primary))]" href={href ?? "#"} download>Score</a>;
}
