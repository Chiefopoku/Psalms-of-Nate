export function UploadProgress({ progress }: Readonly<{ progress: number }>) {
  return (
    <div>
      <div className="h-3 rounded-full bg-white/70 shadow-inner">
        <div className="h-3 rounded-full bg-[hsl(var(--primary))]" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
