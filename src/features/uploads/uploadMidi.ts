export async function uploadMidi(file: File) {
  return { name: file.name, kind: "midi" as const };
}
