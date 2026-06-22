import { mockPsalms } from "@/data/mock-psalms";

export async function getPsalms() {
  return mockPsalms;
}

export async function getPsalmBySlug(slug: string) {
  return mockPsalms.find((psalm) => psalm.slug === slug) ?? null;
}
