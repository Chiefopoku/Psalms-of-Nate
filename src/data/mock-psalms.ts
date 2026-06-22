import type { Project } from "@/types/project";
import type { Psalm } from "@/types/psalm";

export const mockPsalms: Psalm[] = [
  {
    id: "psalm-001",
    slug: "madesre-my-plea",
    title: "Madesre (My Plea)",
    subtitle: "A prayerful Ghanaian sacred song",
    status: "released",
    mood: "Prayerful",
    tempo: "Moderate",
    instruments: ["Choir", "Piano"],
    releaseDate: "2025-07-04",
    scoreUrl: "/scores/madesre-my-plea.pdf",
    midiUrl: "/midi/madesre-my-plea.mid",
    mp3Url: "/mp3/madesre-my-plea.mp3"
  },
  {
    id: "psalm-002",
    slug: "ebeye-yie-it-shall-be-well",
    title: "Ebeye Yie",
    subtitle: "It Shall Be Well, featuring Maame Jane",
    status: "released",
    mood: "Hopeful",
    tempo: "Bright",
    instruments: ["Voice", "Choir", "Piano"],
    releaseDate: "2025-07-25"
  },
  {
    id: "psalm-003",
    slug: "let-the-praise-rise",
    title: "Let the Praise Rise",
    subtitle: "A worship theme for hearts and voices lifted heavenward",
    status: "unreleased",
    mood: "Worshipful",
    tempo: "Moderate",
    instruments: ["Choir", "Strings", "Piano"]
  }
];

export const mockProjects: Project[] = [
  {
    id: "project-001",
    slug: "ghanaian-choral-worship",
    title: "Ghanaian Choral Worship",
    description: "Original choral works and sacred hymns reimagined through Ghanaian musical language, Scripture, and worship.",
    psalmIds: ["psalm-001", "psalm-002"],
    releaseDate: "2025-07-04"
  }
];
