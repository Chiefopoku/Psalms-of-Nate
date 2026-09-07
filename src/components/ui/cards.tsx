import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Adapted from the "HoverRevealCards" component. Changes for this site:
// - optional `href` renders each card as a Next.js <Link> (navigable gallery)
// - optional `badge` (e.g. release status) shown top-left
// - fixed the `text-2l` typo -> `text-2xl`
export interface CardItem {
  id: string | number;
  title: string;
  subtitle: string;
  imageUrl: string;
  href?: string;
  badge?: string;
}

export interface HoverRevealCardsProps {
  items: CardItem[];
  className?: string;
  cardClassName?: string;
}

/**
 * A grid of image cards with a hover-reveal effect: hovering (or focusing) one
 * card lifts it while the others dim, blur and shrink back.
 */
const HoverRevealCards: React.FC<HoverRevealCardsProps> = ({ items, className, cardClassName }) => {
  return (
    <div
      role="list"
      className={cn("group grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4", className)}
    >
      {items.map((item) => {
        const inner = (
          <>
            {/* Gradient overlay for text contrast over the artwork. */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            {item.badge ? (
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-black/80 backdrop-blur">
                {item.badge}
              </span>
            ) : null}
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-xs font-light uppercase tracking-widest opacity-80">{item.subtitle}</p>
              <h3 className="mt-1 translate-y-2 font-serif text-2xl font-semibold leading-tight opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-visible/card:translate-y-0 group-focus-visible/card:opacity-100">
                {item.title}
              </h3>
            </div>
          </>
        );

        const cls = cn(
          "group/card relative block h-80 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out",
          // On parent hover, de-emphasise every card…
          "group-hover:scale-[0.97] group-hover:opacity-60 group-hover:blur-[2px]",
          // …then re-emphasise the one actually hovered/focused.
          "hover:!scale-105 hover:!opacity-100 hover:!blur-none focus-visible:!scale-105 focus-visible:!opacity-100 focus-visible:!blur-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
          cardClassName
        );

        const style = { backgroundImage: `url(${item.imageUrl})` };

        return item.href ? (
          <Link
            key={item.id}
            href={item.href}
            role="listitem"
            aria-label={`${item.title}, ${item.subtitle}`}
            className={cls}
            style={style}
          >
            {inner}
          </Link>
        ) : (
          <div
            key={item.id}
            role="listitem"
            aria-label={`${item.title}, ${item.subtitle}`}
            tabIndex={0}
            className={cls}
            style={style}
          >
            {inner}
          </div>
        );
      })}
    </div>
  );
};

export default HoverRevealCards;
