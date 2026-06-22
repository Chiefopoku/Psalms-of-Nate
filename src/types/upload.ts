export type UploadKind = "mp3" | "midi" | "pdf" | "cover";

export type UploadFile = {
  id: string;
  name: string;
  kind: UploadKind;
  size: number;
  url?: string;
};
