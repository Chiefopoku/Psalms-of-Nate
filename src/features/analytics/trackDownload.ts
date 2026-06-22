export async function trackDownload(psalmId: string, fileType: string) {
  return { psalmId, fileType, type: "download" as const };
}
