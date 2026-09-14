import type { Project } from "@/types/project";

export function ProjectCover({ project }: Readonly<{ project: Project }>) {
  const images = project.coverImages ?? [];

  if (images.length > 0) {
    // ponytail: pure-CSS crossfade, no JS/deps. First image is also the wrapper
    // background so there is never a blank frame during transitions.
    return (
      <div
        className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/20"
        style={{ backgroundImage: `url(${images[0]})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden
            className="pof-cover-slide absolute inset-0 h-full w-full object-cover"
            style={{ animationDelay: `${(i * 18) / images.length}s` }}
          />
        ))}
        <style>{`
          .pof-cover-slide{opacity:0;animation:pofCoverFade 18s infinite}
          @keyframes pofCoverFade{0%{opacity:0}2%{opacity:1}30%{opacity:1}38%{opacity:0}100%{opacity:0}}
          @media(prefers-reduced-motion:reduce){.pof-cover-slide{animation:none;opacity:0}.pof-cover-slide:first-of-type{opacity:1}}
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex aspect-square items-end rounded-3xl bg-[hsl(var(--foreground))] p-5 text-white shadow-2xl shadow-slate-900/20">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">Collection</p>
        <p className="mt-3 text-2xl font-semibold leading-tight">{project.coverUrl ? project.title : "Cover art"}</p>
      </div>
    </div>
  );
}
