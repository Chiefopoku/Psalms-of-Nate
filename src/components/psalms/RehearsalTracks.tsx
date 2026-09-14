import type { RehearsalTrack } from "@/types/psalm";

// ponytail: native <audio> per part — no client JS, no player library.
// preload="none" so five parts don't all fetch on page load.
export function RehearsalTracks({ tracks }: Readonly<{ tracks?: RehearsalTrack[] }>) {
  if (!tracks?.length) return null;

  return (
    <section className="mt-8 rounded-3xl border border-border bg-surface p-6 shadow-xl shadow-[hsl(var(--shadow))]/10 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Learn your part</h2>
      <p className="mt-2 text-sm leading-7 text-foreground/70">
        Part-dominant rehearsal tracks — your voice mixed louder over the others. Play here, or download to practise offline.
      </p>
      <ul className="mt-5 grid gap-4">
        {tracks.map((t) => (
          <li key={t.voice} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:items-center">
            <span className="text-sm font-semibold">{t.voice}</span>
            <audio controls preload="none" className="w-full" src={t.url}>
              <a href={t.url} download>
                Download {t.voice} track
              </a>
            </audio>
          </li>
        ))}
      </ul>
    </section>
  );
}
