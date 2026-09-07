import type { Project } from "@/types/project";
import type { Psalm } from "@/types/psalm";

export const mockPsalms: Psalm[] = [
  {
    id: "psalm-001",
    slug: "madesre-my-plea",
    title: "Madesrɛ (My Plea)",
    subtitle: "A heartfelt Ghanaian sacred choral prayer composed by Dr. Nathanael Adjei",
    status: "released",
    mood: "Prayerful",
    tempo: "Moderate",
    instruments: ["SATB Choir", "Piano", "Strings"],
    releaseDate: "2025-05-25",
    coverUrl: "/images/revamp/madesre.jpg",
    scoreUrl: "/scores/madesre.pdf",
    description: "An expressive cry of faith rooted in Ghanaian sacred traditions, combining rich polyphonic choir counterpoint with reverent piano accompaniment."
  },
  {
    id: "psalm-002",
    slug: "heaven-akwantuo",
    title: "Heaven Akwantuo",
    subtitle: "The Heavenly Journey. A triumphant choral meditation on eternity",
    status: "released",
    mood: "Majestic",
    tempo: "Andante Maestoso",
    instruments: ["Full Choir", "Organ", "Brass"],
    releaseDate: "2025-08-15",
    coverUrl: "/images/revamp/heaven-akwantuo.jpg",
    scoreUrl: "/scores/heaven-akwantuo.pdf",
    description: "Inspired by the pilgrim's march towards the heavenly city, blending Western classical choral forms with authentic Akan rhythmic nuances."
  },
  {
    id: "psalm-003",
    slug: "gye-me-kra",
    title: "Gye Me Kra (San Bra Awrade)",
    subtitle: "Redeem My Soul (Return, O Lord). An anthem of deliverance and hope",
    status: "released",
    mood: "Reverent",
    tempo: "Largo",
    instruments: ["Voice", "Chamber Choir", "Strings"],
    releaseDate: "2025-06-20",
    coverUrl: "/images/revamp/gye-me-kra-cover.jpg",
    scoreUrl: "/scores/gye-me-kra.pdf",
    description: "A poignant choral reflection pleading for divine grace and redemption, featuring solo tenor lines soaring above choir harmonies."
  },
  {
    id: "psalm-004",
    slug: "maseda-ni",
    title: "Maseda Ni",
    subtitle: "This Is My Thanksgiving. A vibrant song of praise and gratitude",
    status: "released",
    mood: "Celebratory",
    tempo: "Bright",
    instruments: ["Choir", "Acoustic Instruments", "Percussion"],
    releaseDate: "2025-09-01",
    coverUrl: "/images/revamp/maseda-ni.jpg",
    scoreUrl: "/scores/maseda-ni.pdf",
    description: "Joyful celebration of God's enduring faithfulness, structured for congregational and choral performance."
  },
  {
    id: "psalm-005",
    slug: "we-praise-thee",
    title: "We Praise Thee",
    subtitle: "Sacred Choral Hymn of Adoration and Worship",
    status: "released",
    mood: "Worshipful",
    tempo: "Moderato",
    instruments: ["SATB Choir", "Organ"],
    releaseDate: "2025-07-10",
    coverUrl: "/images/revamp/we-praise-thee.jpg",
    scoreUrl: "/scores/we-praise-thee.pdf",
    description: "Classical four-part sacred choral harmony lifting timeless praise to the Almighty."
  },
  {
    id: "psalm-006",
    slug: "yesu-2",
    title: "Mɛsɛ Yesu",
    subtitle: "I Would Be Like Jesus (SDAH 311). A Psalms of Nate live recording featuring Musikteers Ensemble",
    status: "released",
    mood: "Joyful",
    tempo: "Moderate",
    instruments: ["SATB Choir", "Musikteers Ensemble"],
    releaseDate: "2025-08-30",
    coverUrl: "/images/revamp/yesu.jpg",
    scoreUrl: "/scores/yesu.pdf",
    description: "A live single longing to be like Jesus, set to the hymn 'I Would Be Like Jesus' (SDAH 311) and recorded with the Musikteers Ensemble."
  },
  {
    id: "psalm-007",
    slug: "nkunimdie-nnwom",
    title: "Nkunimdie Nnwom",
    subtitle: "Songs of Victory. Highlife Medley for Choir & Orchestra",
    status: "released",
    mood: "Festive",
    tempo: "Vivace (Highlife)",
    instruments: ["Choir", "Guitar", "Brass", "Percussion"],
    releaseDate: "2025-09-12",
    coverUrl: "/images/revamp/nkunimdie-nnwom.jpg",
    scoreUrl: "/scores/nkunimdie-nnwom.pdf",
    description: "An exhilarating medley blending sacred scripture with traditional Ghanaian Highlife rhythms and choir harmonies."
  },
  {
    id: "psalm-008",
    slug: "yewo-nyame",
    title: "Yɛwɔ Nyame",
    subtitle: "We Have God. A bold declaration of faith, with Bishop Sam Asare-Bediako",
    status: "released",
    mood: "Triumphant",
    tempo: "Moderate",
    instruments: ["Choir", "Piano", "Orchestra"],
    releaseDate: "2025-08-29",
    coverUrl: "/images/revamp/yewo-nyame-cover.jpg",
    scoreUrl: "/scores/yewo-nyame.pdf",
    description: "A bold declaration of faith, composed by Bishop Sam Asare-Bediako and Dr. Nathanael Adjei, declaring the assurance and steadfast presence of the Almighty."
  },
  {
    id: "psalm-009",
    slug: "aseda-highlife-medley",
    title: "Aséda",
    subtitle: "A Highlife Medley. A Psalms of Nate live recording featuring Musikteers Ensemble",
    status: "released",
    mood: "Festive",
    tempo: "Vivace (Highlife)",
    instruments: ["Choir", "Highlife Band", "Brass", "Percussion"],
    releaseDate: "2026-02-27",
    coverUrl: "/images/revamp/aseda.jpg",
    scoreUrl: "/scores/aseda.pdf",
    description: "A jubilant highlife medley of thanksgiving, captured live with the Musikteers Ensemble — Ghanaian highlife rhythms carrying sacred praise."
  },
  {
    id: "psalm-010",
    slug: "odo-ben-ni",
    title: "Ɔdɔ Ben Ni",
    subtitle: "What Love Is This. Dr. Nathanael Adjei ft. Musikteers Ensemble GH",
    status: "released",
    mood: "Adoring",
    tempo: "Moderate",
    instruments: ["SATB Choir", "Piano", "Strings"],
    coverUrl: "/images/revamp/odo-ben-ni.jpg",
    scoreUrl: "/scores/odo-ben-ni.pdf",
    description: "A tender single marvelling at the depth of divine love, sung with the Musikteers Ensemble GH."
  },
  {
    id: "psalm-011",
    slug: "ebeye-yie",
    title: "Ɛbɛyɛ Yie",
    subtitle: "It Shall Be Well. Dr. Nathanael Adjei ft. Jane Asantewaa Appiah-Okyere (Maame Jane)",
    status: "released",
    mood: "Reassuring",
    tempo: "Moderate",
    instruments: ["SATB Choir", "Piano"],
    coverUrl: "/images/revamp/ebeye-yie.jpg",
    scoreUrl: "/scores/ebeye-yie.pdf",
    description: "A single of quiet assurance that all shall be well, featuring Jane Asantewaa Appiah-Okyere (Maame Jane)."
  }
];

export const mockProjects: Project[] = [
  {
    id: "project-001",
    slug: "ghanaian-choral-worship",
    title: "Ghanaian Choral Worship",
    description: "Original choral works and sacred hymns reimagined through Ghanaian musical language, Scripture, and worship.",
    psalmIds: ["psalm-001", "psalm-002", "psalm-003", "psalm-004", "psalm-005", "psalm-006", "psalm-007", "psalm-008", "psalm-009", "psalm-010", "psalm-011"],
    releaseDate: "2025-07-04"
  }
];
