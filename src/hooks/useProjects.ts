"use client";

import { mockProjects } from "@/data/mock-psalms";

export function useProjects() {
  return { projects: mockProjects, isLoading: false };
}
