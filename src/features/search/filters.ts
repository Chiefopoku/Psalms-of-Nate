import type { Psalm } from "@/types/psalm";

export function filterPsalmsByMood(psalms: Psalm[], mood?: string) {
  if (!mood) return psalms;
  return psalms.filter((psalm) => psalm.mood === mood);
}
