"use client";

import { Heart } from "lucide-react";
import { cn } from "@/lib/cn";
import { useWishlist } from "@/components/providers/wishlist-context";

type WishlistButtonProps = {
  tourId: string;
  className?: string;
};

export function WishlistButton({ tourId, className }: WishlistButtonProps) {
  const { isWishlisted, toggle } = useWishlist();
  const active = isWishlisted(tourId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(tourId);
      }}
      aria-pressed={active}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      className={cn(
        "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-lg transition-all duration-200 active:scale-95",
        active
          ? "bg-primary-500 text-white shadow-primary-500/40"
          : "bg-white/95 text-foreground hover:bg-white",
        className
      )}
    >
      <Heart
        className={cn("h-5 w-5")}
        strokeWidth={2}
        fill={active ? "currentColor" : "none"}
      />
    </button>
  );
}