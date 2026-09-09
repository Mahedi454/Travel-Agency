"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { cn } from "@/lib/cn";
import { galleryImages } from "@/lib/data";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const open = (index: number) => setActive(index);
  const close = () => setActive(null);

  const handleKey = (e: React.KeyboardEvent) => {
    if (active === null) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") setActive((active + 1) % galleryImages.length);
    if (e.key === "ArrowLeft")
      setActive((active - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="section-pad bg-surface-dark text-white">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            dark
            eyebrow="Wanderlust gallery"
            title="A glimpse of what's waiting"
            description="Every image is a real moment from a Travelia itinerary. Click one — your next adventure might be in the shot."
          />
        </FadeIn>

        <div
          className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2"
          onKeyDown={handleKey}
          role="region"
          aria-label="Photo gallery"
        >
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => open(i)}
              className={cn(
                  "group relative block w-full overflow-hidden rounded-2xl text-left focus-visible:ring-4 focus-visible:ring-primary-400",
                  (i === 0 || i === 3 || i === 4) && "h-full lg:row-span-2"
                )}
                aria-label={`View larger: ${img.alt}`}
              >
                <div
                  className={
                    i === 0 || i === 3 || i === 4
                      ? "h-full min-h-[240px]"
                      : "h-full min-h-[160px]"
                  }
                >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  ratio="auto"
                  className="absolute inset-0 h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4">
                <p className="text-sm font-semibold text-white">
                  {img.location}
                </p>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-surface-dark/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={galleryImages[active].alt}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close gallery preview"
            >
              <X className="h-6 w-6" strokeWidth={2.2} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                open((active - 1 + galleryImages.length) % galleryImages.length);
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              <span className="text-2xl" aria-hidden="true">
                ‹
              </span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                open((active + 1) % galleryImages.length);
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              <span className="text-2xl" aria-hidden="true">
                ›
              </span>
            </button>

            <motion.figure
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={galleryImages[active].src}
                  alt={galleryImages[active].alt}
                  ratio="auto"
                  className="absolute inset-0"
                  imgClassName="h-full w-full object-contain"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between px-1 text-white">
                <span className="font-semibold">
                  {galleryImages[active].location}
                </span>
                <span className="text-sm text-white/60">
                  {active + 1} / {galleryImages.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}