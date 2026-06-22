export async function trackPdfView(psalmId: string) {
  return { psalmId, type: "pdf_view" as const };
}
