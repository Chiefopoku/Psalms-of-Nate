export async function generateSignedUrl(path: string) {
  return `/api/download?path=${encodeURIComponent(path)}`;
}
