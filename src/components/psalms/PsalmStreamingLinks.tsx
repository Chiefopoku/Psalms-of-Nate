import { Youtube } from "lucide-react";
import type { Psalm } from "@/types/psalm";

export function PsalmStreamingLinks({ psalm }: Readonly<{ psalm: Psalm }>) {
  if (!psalm.streamingUrl) return null;
  return (
    <a
      href={psalm.streamingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#cc0000] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#a30000]"
    >
      <Youtube className="h-4 w-4" aria-hidden="true" /> Watch on YouTube
    </a>
  );
}
