export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverUrl?: string;
  psalmIds: string[];
  releaseDate?: string;
};
