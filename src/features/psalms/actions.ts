"use server";

export async function publishPsalm(id: string) {
  return { id, published: true };
}
