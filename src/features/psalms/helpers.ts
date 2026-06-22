import type { Psalm } from "@/types/psalm";

export function isReleased(psalm: Psalm) {
  return psalm.status === "released";
}
