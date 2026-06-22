import Link from "next/link";
import { BarChart3, FolderKanban, Gauge, Music2, Settings, UploadCloud } from "lucide-react";

const adminItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: Gauge },
  { href: "/admin/psalms", label: "Psalms", icon: Music2 },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/uploads", label: "Uploads", icon: UploadCloud },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings }
];

export function AdminShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[hsl(var(--foreground))] text-white">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-white/10 bg-white/[0.04] p-5 backdrop-blur lg:border-b-0 lg:border-r">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[hsl(var(--foreground))]">
              <Music2 className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold">Psalms of Nate</span>
              <span className="block text-xs text-white/50">Admin studio</span>
            </span>
          </Link>
          <nav className="mt-8 grid gap-2">
            {adminItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>
        <div className="bg-[hsl(var(--background))] text-foreground">
          <header className="border-b border-white/75 bg-white/65 px-5 py-4 shadow-sm shadow-slate-900/5 backdrop-blur-xl lg:px-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[hsl(var(--primary))]">Admin</p>
                <h1 className="text-2xl font-semibold">Publishing Studio</h1>
              </div>
              <Link href="/" className="text-sm font-semibold text-foreground/60 transition hover:text-foreground">View public site</Link>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
}
