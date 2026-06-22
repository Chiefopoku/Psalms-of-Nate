"use server";

export async function publishProject(id: string) {
  return { id, published: true };
}
