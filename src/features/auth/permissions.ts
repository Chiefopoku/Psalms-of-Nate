import type { AppUser } from "@/types/user";

export function canManageContent(user?: AppUser | null) {
  return user?.role === "admin" || user?.role === "editor";
}
