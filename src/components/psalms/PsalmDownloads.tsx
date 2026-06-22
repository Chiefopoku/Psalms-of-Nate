import type { Psalm } from "@/types/psalm";
import { MidiDownloadButton } from "./MidiDownloadButton";
import { Mp3DownloadButton } from "./Mp3DownloadButton";
import { ScoreDownloadButton } from "./ScoreDownloadButton";

export function PsalmDownloads({ psalm }: Readonly<{ psalm: Psalm }>) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <ScoreDownloadButton href={psalm.scoreUrl} />
      <MidiDownloadButton href={psalm.midiUrl} />
      <Mp3DownloadButton href={psalm.mp3Url} />
    </div>
  );
}
