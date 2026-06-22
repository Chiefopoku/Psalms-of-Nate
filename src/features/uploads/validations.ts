import type { UploadKind } from "@/types/upload";

const allowedKinds: UploadKind[] = ["mp3", "midi", "pdf", "cover"];

export function validateUploadKind(kind: string): UploadKind {
  if (!allowedKinds.includes(kind as UploadKind)) throw new Error("Unsupported upload type.");
  return kind as UploadKind;
}
