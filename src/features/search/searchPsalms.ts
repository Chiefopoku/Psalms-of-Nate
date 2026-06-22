import type { Psalm } from "@/types/psalm";

export function searchPsalms(psalms: Psalm[], query: string) {
  const normalized = query.toLowerCase();
  return psalms.filter((psalm) => psalm.title.toLowerCase().includes(normalized));
}
