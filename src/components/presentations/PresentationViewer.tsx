import Link from "next/link";
import { Download } from "lucide-react";
import type { Presentation } from "@/types/presentation";

// Browsers can't render .pptx inline, so route Office files through Microsoft's
// public Office Online viewer; PDFs embed directly; an explicit embedUrl (e.g. a
// Google Slides "publish to web" URL) always wins.
function viewerSrc(p: Presentation): string | undefined {
  if (p.embedUrl) return p.embedUrl;
  if (!p.fileUrl) return undefined;
  if (/\.pptx?(?:\?|$)/i.test(p.fileUrl)) {
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(p.fileUrl)}`;
  }
  if (/\.pdf(?:\?|$)/i.test(p.fileUrl)) return p.fileUrl;
  return undefined;
}

export function PresentationViewer({ presentation }: Readonly<{ presentation: Presentation }>) {
  const src = viewerSrc(presentation);
  return (
    <div className="mt-8">
      {src ? (
        <div className="aspect-video overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.03] shadow-xl shadow-slate-900/10">
          <iframe
            src={src}
            title={`${presentation.title} — slides`}
            className="h-full w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        <p className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] px-5 py-8 text-center text-sm text-foreground/70">
          An in-page preview isn&rsquo;t available for this presentation yet.
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {presentation.fileUrl ? (
          <a
            href={presentation.fileUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/15 transition hover:opacity-90"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download{presentation.fileType ? ` (${presentation.fileType})` : ""}
          </a>
        ) : (
          <p className="text-sm text-foreground/75">
            The file isn&rsquo;t available yet. <Link href="/contact" className="underline underline-offset-4">Ask about this presentation</Link>.
          </p>
        )}
      </div>
    </div>
  );
}
