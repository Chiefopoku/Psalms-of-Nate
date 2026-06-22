"use client";

import { mockPsalms } from "@/data/mock-psalms";

export function usePsalms() {
  return { psalms: mockPsalms, isLoading: false };
}
