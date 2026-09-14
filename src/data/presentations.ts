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
export const presentations: Presentation[] = [];
