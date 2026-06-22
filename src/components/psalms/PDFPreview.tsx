export function PDFPreview({ src }: Readonly<{ src?: string }>) {
  return <div className="aspect-[8.5/11] rounded-2xl border border-white/75 bg-white/80 p-5 text-sm text-foreground/60 shadow-xl shadow-slate-900/10">{src ?? "No score uploaded"}</div>;
}
