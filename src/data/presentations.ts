import type { Presentation } from "@/types/presentation";

// Fully self-hosted on Firebase Storage: a PDF render for in-page viewing
// (embedUrl — PDFs display inline in the browser) and the original PPTX for
// download ("download and use"). PDFs are produced from the decks with
// LibreOffice: soffice --headless --convert-to pdf, then scripts/upload-public.mjs.
const FILE_BASE = "https://firebasestorage.googleapis.com/v0/b/psalms-of-nate.firebasestorage.app/o/public%2Fpresentations%2F";
const pdf = (slug: string) => `${FILE_BASE}${slug}.pdf?alt=media`;
const pptx = (slug: string) => `${FILE_BASE}${slug}.pptx?alt=media`;

export const presentations: Presentation[] = [
  {
    id: "talk-001",
    slug: "the-medicine-of-melody",
    title: "The Medicine of Melody",
    summary: "How music boosts health — a symphony of science, Scripture, and spiritual truth.",
    audience: "Churches & musical programs",
    embedUrl: pdf("the-medicine-of-melody"),
    fileUrl: pptx("the-medicine-of-melody"),
    fileType: "PPTX",
  },
  {
    id: "talk-002",
    slug: "singing-with-meaning-and-purpose",
    title: "Singing with Meaning and Purpose",
    summary: "Singing with intention — bringing understanding, meaning, and purpose to worship. (A selection of slides.)",
    audience: "Choirs & singing groups",
    embedUrl: pdf("singing-with-meaning-and-purpose"),
    fileUrl: pptx("singing-with-meaning-and-purpose"),
    fileType: "PPTX",
  },
  {
    id: "talk-003",
    slug: "sda-philosophy-of-music",
    title: "The Seventh-day Adventist Philosophy of Music",
    summary: "A study of the principles and philosophy that shape music in Seventh-day Adventist worship.",
    audience: "Churches & worship leaders",
    embedUrl: pdf("sda-philosophy-of-music"),
    fileUrl: pptx("sda-philosophy-of-music"),
    fileType: "PPTX",
  },
];
