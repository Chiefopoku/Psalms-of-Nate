import type { Psalm } from "@/types/psalm";

export function PsalmStreamingLinks({ psalm }: Readonly<{ psalm: Psalm }>) {
  if (!psalm.streamingUrl) return null;
  return <a className="mt-4 inline-block text-sm font-medium text-primary" href={psalm.streamingUrl}>Open streaming link</a>;
}
