import type { Presentation } from "@/types/presentation";

// Nate's talks/presentations for choirs, churches, singing groups and musical
// programs. Empty until the source files are supplied.
//
// To add one: host the file publicly (same Firebase Storage bucket works well —
// public/presentations/<slug>.pptx, giving a deterministic ?alt=media URL), then
// add an entry below. For in-page viewing, publish the deck to Google Slides
// ("File → Share → Publish to web → Embed") and use that iframe src as embedUrl,
// or point embedUrl at a PDF URL.
//
// Example:
//   {
//     id: "talk-001",
//     slug: "leading-a-church-choir",
//     title: "Leading a Church Choir",
//     summary: "Practical foundations for directing a worship choir.",
//     audience: "Choirs & singing groups",
//     date: "2025-11-02",
//     embedUrl: "https://docs.google.com/presentation/d/e/XXXX/embed",
//     fileUrl: "https://firebasestorage.googleapis.com/v0/b/psalms-of-nate.firebasestorage.app/o/public%2Fpresentations%2Fleading-a-church-choir.pptx?alt=media",
//     fileType: "PPTX",
//   },
// Files are self-hosted on Firebase Storage for download (durable, self-owned).
// In-browser viewing uses Google Drive's preview iframe, because rendering .pptx
// in a browser otherwise needs conversion (LibreOffice → PDF) or a public GCS
// bucket (blocked by org policy). To move viewing fully onto Firebase later,
// convert each deck to PDF, host it, and set embedUrl to that PDF URL.
const FILE_BASE = "https://firebasestorage.googleapis.com/v0/b/psalms-of-nate.firebasestorage.app/o/public%2Fpresentations%2F";
const drivePreview = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

export const presentations: Presentation[] = [
  {
    id: "talk-001",
    slug: "the-medicine-of-melody",
    title: "The Medicine of Melody",
    summary: "How music boosts health — a symphony of science, Scripture, and spiritual truth.",
    audience: "Churches & musical programs",
    embedUrl: drivePreview("1R0inQHYNmBgRScJKrXQt31SSXy_wcLCl"),
    fileUrl: `${FILE_BASE}the-medicine-of-melody.pptx?alt=media`,
    fileType: "PPTX",
  },
  {
    id: "talk-002",
    slug: "singing-with-meaning-and-purpose",
    title: "Singing with Meaning and Purpose",
    summary: "Singing with intention — bringing understanding, meaning, and purpose to worship. (A selection of slides.)",
    audience: "Choirs & singing groups",
    embedUrl: drivePreview("1TMac5EXylZVuIfVpO_6UBMXStgq6S4hW"),
    fileUrl: `${FILE_BASE}singing-with-meaning-and-purpose.pptx?alt=media`,
    fileType: "PPTX",
  },
  {
    id: "talk-003",
    slug: "sda-philosophy-of-music",
    title: "The Seventh-day Adventist Philosophy of Music",
    summary: "A study of the principles and philosophy that shape music in Seventh-day Adventist worship.",
    audience: "Churches & worship leaders",
    embedUrl: drivePreview("1nb0CjCRnaIq0hNAEuIBFc2-2PeiTQqZ4"),
    fileUrl: `${FILE_BASE}sda-philosophy-of-music.pptx?alt=media`,
    fileType: "PPTX",
  },
];
