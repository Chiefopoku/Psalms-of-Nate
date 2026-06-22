import { cn } from "@/lib/utils";

export function Card({ className, children }: Readonly<{ className?: string; children: React.ReactNode }>) {
  return <article className={cn("rounded-2xl border border-white/75 bg-white/80 p-5 shadow-xl shadow-slate-900/10 backdrop-blur transition duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/15", className)}>{children}</article>;
}
