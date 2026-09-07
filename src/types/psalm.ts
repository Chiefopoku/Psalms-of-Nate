export type ReleaseStatus = "released" | "unreleased";

export type Psalm = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  status: ReleaseStatus;
  mood: string;
  tempo: string;
  instruments: string[];
  releaseDate?: string;
  scoreUrl?: string;
  midiUrl?: string;
  mp3Url?: string;
  streamingUrl?: string;
  coverUrl?: string;
  description?: string;
};
