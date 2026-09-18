"use client";
// ponytail: adapted from the 21st.dev hero-gallery bento — repointed to framer-motion
// (already installed) and dropped the cva variants; we only ever use the 5-cell layout.
import * as React from "react";
import { HTMLMotionProps, MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const GRID = `
  relative grid gap-4 grid-cols-8 grid-rows-[1fr_0.5fr_0.5fr_1fr]
  [&>*:first-child]:origin-top-right [&>*:nth-child(3)]:origin-bottom-right [&>*:nth-child(4)]:origin-top-right
  [&>*:first-child]:col-span-8 md:[&>*:first-child]:col-span-6 [&>*:first-child]:row-span-3
  [&>*:nth-child(2)]:col-span-2 md:[&>*:nth-child(2)]:row-span-2 [&>*:nth-child(2)]:hidden md:[&>*:nth-child(2)]:block
  [&>*:nth-child(3)]:col-span-2 md:[&>*:nth-child(3)]:row-span-2 [&>*:nth-child(3)]:hidden md:[&>*:nth-child(3)]:block
  [&>*:nth-child(4)]:col-span-4 md:[&>*:nth-child(4)]:col-span-3
  [&>*:nth-child(5)]:col-span-4 md:[&>*:nth-child(5)]:col-span-3
`;

interface Ctx {
  scrollYProgress: MotionValue<number>;
}
const ScrollCtx = React.createContext<Ctx | undefined>(undefined);
function useScrollCtx() {
  const c = React.useContext(ScrollCtx);
  if (!c) throw new Error("Must be used within ContainerScroll");
  return c;
}

export function ContainerScroll({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  return (
    <ScrollCtx.Provider value={{ scrollYProgress }}>
      <div ref={ref} className={cn("relative min-h-screen w-full", className)} {...props}>
        {children}
      </div>
    </ScrollCtx.Provider>
  );
}

export function BentoGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(GRID, className)} {...props} />;
}

export function BentoCell({ className, style, ...props }: HTMLMotionProps<"div">) {
  const { scrollYProgress } = useScrollCtx();
  const translate = useTransform(scrollYProgress, [0.1, 0.9], ["-35%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.9], [0.5, 1]);
  return <motion.div className={className} style={{ translate, scale, ...style }} {...props} />;
}

export function ContainerScale({ className, style, ...props }: HTMLMotionProps<"div">) {
  const { scrollYProgress } = useScrollCtx();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const position = useTransform(scrollYProgress, (p) => (p >= 0.6 ? "absolute" : "fixed"));
  return (
    <motion.div
      className={cn("left-1/2 top-1/2 size-fit", className)}
      style={{ translate: "-50% -50%", scale, position, opacity, ...style }}
      {...props}
    />
  );
}
