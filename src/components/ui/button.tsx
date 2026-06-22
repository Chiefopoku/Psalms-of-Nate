import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("inline-flex h-11 items-center justify-center rounded-full bg-[hsl(var(--foreground))] px-5 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-[hsl(var(--primary))] disabled:translate-y-0 disabled:opacity-50", className)}
      {...props}
    />
  );
}
