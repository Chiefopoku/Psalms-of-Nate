// ponytail: pure-CSS crossfade slideshow, no JS/deps. First image is also the
// wrapper background so there is never a blank frame during transitions.
export function CoverSlides({ images, className }: Readonly<{ images: string[]; className?: string }>) {
  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
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
