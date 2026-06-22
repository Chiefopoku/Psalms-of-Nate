export type UserRole = "admin" | "editor" | "viewer";

export type AppUser = {
  id: string;
  email: string;
  role: UserRole;
};
