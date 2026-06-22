"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <label className="relative block max-w-2xl">
      <Search className="pointer-events-none absolute left-4 top-3 h-5 w-5 text-foreground/40" />
      <Input className="h-12 rounded-2xl pl-12 text-base" placeholder="Search psalms and projects" />
    </label>
  );
}
