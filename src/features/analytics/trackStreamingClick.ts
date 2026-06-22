export async function trackStreamingClick(psalmId: string, provider: string) {
  return { psalmId, provider, type: "streaming_click" as const };
}
