export type Presentation = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  /** Who it was prepared for, e.g. "Choirs & singing groups". */
  audience?: string;
  venue?: string;
  /** ISO date, e.g. "2025-11-02". */
  date?: string;
  /** Embed URL for in-page viewing (Google Slides "publish to web" embed, or a PDF URL). */
  embedUrl?: string;
  /** Direct download URL for the source file. */
  fileUrl?: string;
  /** Short label for the download button, e.g. "PPTX" or "PDF". */
  fileType?: string;
};
