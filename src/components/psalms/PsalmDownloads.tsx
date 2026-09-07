import Link from "next/link";
import { Youtube } from "lucide-react";
import type { Psalm } from "@/types/psalm";
import { MidiDownloadButton } from "./MidiDownloadButton";
import { Mp3DownloadButton } from "./Mp3DownloadButton";
import { ScoreDownloadButton } from "./ScoreDownloadButton";

// Buttons here are magnetized site-wide by <MagneticButtons /> (mounted in the
// layout): the Score link matches a[download]; the YouTube link opts in via
// data-magnetic.
export function PsalmDownloads({ psalm }: Readonly<{ psalm: Psalm }>) {
  return <div className="mt-6 flex flex-wrap items-center gap-4">
    {psalm.scoreUrl ? <ScoreDownloadButton href={psalm.scoreUrl}/> : <p className="text-sm text-foreground/75">The PDF manuscript is not yet available. <Link href="/contact" className="underline underline-offset-4">Ask about this score</Link>.</p>}
    {psalm.midiUrl ? <MidiDownloadButton href={psalm.midiUrl}/> : null}
    {psalm.mp3Url ? <Mp3DownloadButton href={psalm.mp3Url}/> : null}
    {psalm.streamingUrl ? <a data-magnetic href={psalm.streamingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#cc0000] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#a30000]"><Youtube className="h-4 w-4" aria-hidden="true"/> Watch on YouTube</a> : null}
  </div>;
}
