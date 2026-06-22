export function FilePreview({ name }: Readonly<{ name: string }>) {
  return <div className="rounded-xl border border-white/75 bg-white/75 p-3 text-sm shadow-sm">{name}</div>;
}
