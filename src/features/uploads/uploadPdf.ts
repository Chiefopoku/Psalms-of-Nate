export async function uploadPdf(file: File) {
  return { name: file.name, kind: "pdf" as const };
}
