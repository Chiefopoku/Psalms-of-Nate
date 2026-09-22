import Link from "next/link";
import { Youtube } from "lucide-react";
import type { Psalm } from "@/types/psalm";
import { APPLE_ARTIST, SPOTIFY_ARTIST } from "@/data/streaming";
import { AppleMusicIcon, SpotifyIcon } from "@/components/icons/BrandIcons";
import { MidiDownloadButton } from "./MidiDownloadButton";
import { Mp3DownloadButton } from "./Mp3DownloadButton";
import { ScoreDownloadButton } from "./ScoreDownloadButton";

const pill = "inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-4 py-2 text-sm font-semibold text-foreground/85 transition hover:border-foreground/30 hover:text-foreground";

export function PsalmDownloads({ psalm }: Readonly<{ psalm: Psalm }>) {
  return <div className="mt-6">
    <div className="flex flex-wrap items-center gap-4">
      {psalm.scoreUrl ? <ScoreDownloadButton href={psalm.scoreUrl}/> : <p className="text-sm text-foreground/75">The PDF manuscript is not yet available. <Link href="/contact" className="underline underline-offset-4">Ask about this score</Link>.</p>}
      {psalm.midiUrl ? <MidiDownloadButton href={psalm.midiUrl}/> : null}
      {psalm.mp3Url ? <Mp3DownloadButton href={psalm.mp3Url}/> : null}
      {psalm.streamingUrl ? <a href={psalm.streamingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#cc0000] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#a30000]"><Youtube className="h-4 w-4" aria-hidden="true"/> Watch on YouTube</a> : null}
      <a href={psalm.appleMusicUrl ?? APPLE_ARTIST} target="_blank" rel="noopener noreferrer" className={pill}><AppleMusicIcon className="h-4 w-4"/> Apple Music</a>
      <a href={psalm.spotifyUrl ?? SPOTIFY_ARTIST} target="_blank" rel="noopener noreferrer" className={pill}><SpotifyIcon className="h-4 w-4 text-[#1DB954]"/> Spotify</a>
    </div>
    {psalm.scoreUrl ? (
      <p className="mt-3 text-xs text-foreground/60">
        Free to perform, copy for your singers, and record — in worship or concert. Just credit the composer. <Link href="/contact#permissions" className="underline underline-offset-4">Full permissions →</Link>
      </p>
    ) : null}
  </div>;
}
