export async function uploadMp3(file: File) {
  return { name: file.name, kind: "mp3" as const };
}
