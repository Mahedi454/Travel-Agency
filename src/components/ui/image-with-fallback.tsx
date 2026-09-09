"use client";

import { useState } from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

const imageVariants = cva("overflow-hidden relative", {
  variants: {
    ratio: {
      "16/10": "aspect-[16/10]",
      "3/2": "aspect-[3/2]",
      "4/3": "aspect-[4/3]",
      "1/1": "aspect-square",
      "16/9": "aspect-[16/9]",
      "3/4": "aspect-[3/4]",
      "4/5": "aspect-[4/5]",
      "auto": "",
    },
    radius: {
      none: "rounded-none",
      md: "rounded-[0.75rem]",
      lg: "rounded-[1rem]",
      xl: "rounded-[1.25rem]",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    ratio: "16/10",
    radius: "lg",
  },
});

type ImageWithFallbackProps = VariantProps<typeof imageVariants> & {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

const FALLBACK_IMAGE =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="#e6eaf0"/><g fill="none" stroke="#9fb3c8" stroke-width="6"><path d="M0 420 L260 180 L420 340 L540 240 L800 480"/><circle cx="560" cy="150" r="36"/><circle cx="560" cy="150" r="44" stroke-dasharray="10 10"/></g><text x="400" y="530" font-family="sans-serif" font-size="28" fill="#5b6b7b" text-anchor="middle">Image unavailable</text></svg>`
  );

export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
  ratio = "16/10",
  radius = "lg",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${imageVariants({ ratio, radius })} ${className ?? ""} bg-surface-muted`}
    >
      {!loaded && !failed && (
        <div className="absolute inset-0 skeleton" aria-hidden="true" />
      )}
      {failed ? (
        <div
          className={`absolute inset-0 bg-surface-muted ${imgClassName ?? ""}`}
          style={{
            backgroundImage: `url("${FALLBACK_IMAGE}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label={alt}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          onError={() => setFailed(true)}
          onLoad={() => setLoaded(true)}
          className={`object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${imgClassName ?? ""}`}
        />
      )}
    </div>
  );
}