export async function uploadFile(file: File, path: string) {
  return { fileName: file.name, path };
}
