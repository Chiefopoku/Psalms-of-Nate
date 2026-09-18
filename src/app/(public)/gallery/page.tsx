import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContainerScroll, BentoGrid, BentoCell, ContainerScale } from "@/components/ui/hero-gallery-scroll";
import { PhotoWall, type Photo } from "@/components/ui/photo-wall";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Gallery — Dr. Nathanael Adjei",
  "Photographs of Dr. Nathanael Adjei — composer, church musician and founder of Psalms of Nate — at the piano, conducting, and in ministry.",
  "/gallery"
);

// First 5 lead the animated hero; the whole list fills the wall below.
// w/h are the real pixel sizes — they set the aspect ratio (no layout shift)
// and let PhotoWall balance the parallax columns by height.
const photos: Photo[] = [
  { src: "/images/revamp/nate-piano-white.jpg", alt: "Dr. Nathanael Adjei at the grand piano", w: 1920, h: 1080 },
  { src: "/images/revamp/nate-suit-piano.jpg", alt: "Dr. Nathanael Adjei beside a grand piano", w: 1236, h: 2048 },
  { src: "/images/revamp/nate-composer.jpg", alt: "Dr. Nathanael Adjei, composer", w: 933, h: 1400 },
  { src: "/images/revamp/nate-piano-profile.jpg", alt: "Dr. Nathanael Adjei at the keys", w: 1024, h: 756 },
  { src: "/images/revamp/nate-with-guest.jpg", alt: "Dr. Nathanael Adjei with a guest", w: 1920, h: 1080 },
  { src: "/images/revamp/nate-piano.jpg", alt: "Dr. Nathanael Adjei at the piano", w: 1600, h: 1066 },
  { src: "/images/revamp/nate-piano-lean.jpg", alt: "Dr. Nathanael Adjei resting on a piano", w: 1024, h: 682 },
  { src: "/images/revamp/nate-keyboard-kente.jpg", alt: "Dr. Nathanael Adjei playing keyboard in kente", w: 1600, h: 1066 },
  { src: "/images/revamp/nate-lego-guitar.jpg", alt: "Dr. Nathanael Adjei beside a LEGO guitar sculpture", w: 768, h: 1024 },
  { src: "/images/revamp/nate-conducting.jpg", alt: "Dr. Nathanael Adjei conducting", w: 1600, h: 1066 },
  { src: "/images/revamp/nate-ensemble.jpg", alt: "Dr. Nathanael Adjei with the ensemble", w: 1800, h: 1200 },
  { src: "/images/revamp/nate-musikteers.jpg", alt: "Dr. Nathanael Adjei with the Musikteers", w: 1600, h: 1066 },
  { src: "/images/revamp/nate-friends.jpg", alt: "Dr. Nathanael Adjei with friends", w: 1600, h: 1066 },
  { src: "/images/revamp/nate-chair.jpg", alt: "Dr. Nathanael Adjei, seated portrait", w: 1600, h: 1066 },
  { src: "/images/revamp/nate-stairs.jpg", alt: "Dr. Nathanael Adjei on the staircase", w: 1600, h: 1066 },
  { src: "/images/revamp/nate-composer-2.jpg", alt: "Dr. Nathanael Adjei, composer portrait", w: 933, h: 1400 },
  { src: "/images/revamp/nate-portrait.jpg", alt: "Dr. Nathanael Adjei, portrait", w: 2048, h: 1366 },
  { src: "/images/revamp/nate-about-hero.jpg", alt: "Dr. Nathanael Adjei", w: 1000, h: 1500 },
];

// Hand-authored desktop columns (indices into `photos`, top to bottom).
// Balanced by height; col 0 leads with the piano-profile, then the white-piano.
const wallColumns = [
  [3, 0, 4, 7, 10, 12, 15],
  [1, 6, 9, 11, 14, 17],
  [2, 5, 8, 13, 16],
];

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      {/* ── ANIMATED HERO ────────────────────────────────── */}
      <ContainerScroll className="h-[260vh]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4 sm:p-6">
          {photos.slice(0, 5).map((photo) => (
            <BentoCell key={photo.src} className="overflow-hidden rounded-xl shadow-xl">
              <img className="size-full object-cover object-center" src={photo.src} alt={photo.alt} />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale className="relative z-10 text-center px-6 top-[62%]">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-700 mb-3">In the frame</p>
          <h1 className="max-w-xl text-5xl font-bold tracking-tight text-stone-900">Gallery</h1>
          <p className="my-5 max-w-md mx-auto text-sm text-stone-600 md:text-base">
            Moments from the ministry of Dr. Nathanael Adjei — at the keys, before the choir, and among friends.
          </p>
        </ContainerScale>
      </ContainerScroll>

      {/* ── FULL GRID ────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-4 pb-24 relative z-10 bg-[var(--lb-bg,transparent)]" aria-label="All photographs">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">All photographs</h2>
          <Link href="/about" className="ab-textlink text-sm">Back to About <ArrowUpRight size={15} /></Link>
        </div>
        <PhotoWall images={photos} columns={wallColumns} />
      </section>
    </div>
  );
}
