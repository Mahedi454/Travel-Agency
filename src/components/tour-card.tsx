import Link from "next/link";
import { Clock, MapPin, Star } from "lucide-react";
import type { Tour } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { WishlistButton } from "@/components/ui/wishlist-button";

type TourCardProps = {
  tour: Tour;
  compact?: boolean;
};

export function TourCard({ tour, compact = false }: TourCardProps) {
  const discount = tour.oldPrice
    ? Math.round(((tour.oldPrice - tour.price) / tour.oldPrice) * 100)
    : null;

  return (
    <Link
      href={`/tours/${tour.id}`}
      className="group card relative flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={tour.image}
          alt={tour.title}
          ratio="4/3"
          radius="none"
          className="absolute inset-0"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />

        <div className="absolute right-3 top-3 z-10">
          <WishlistButton tourId={tour.id} />
        </div>

        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
          {discount && (
            <span className="rounded-full bg-primary-500 px-3 py-1.5 text-xs font-bold text-white shadow-md">
              -{discount}%
            </span>
          )}
          <span className="rounded-full bg-surface-dark/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
            {tour.category}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center gap-1.5 text-sm font-medium text-white">
          <MapPin className="h-4 w-4 text-primary-300" strokeWidth={2.2} />
          {tour.destination}, {tour.country}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-foreground-muted">
          <Clock className="h-4 w-4" strokeWidth={2} />
          {tour.duration} days
          <span className="mx-1 text-border" aria-hidden="true">
            •
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-foreground">
            <Star className="h-4 w-4 fill-primary-400 text-primary-400" />
            {tour.rating}
            <span className="font-medium text-foreground-muted">
              ({tour.reviews})
            </span>
          </span>
        </div>

        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary-600">
          {tour.title}
        </h3>

        {!compact && (
          <p className="line-clamp-2 text-sm leading-relaxed text-foreground-muted">
            {tour.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
              From
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                {formatPrice(tour.price)}
              </span>
              {tour.oldPrice && (
                <span className="text-sm font-medium text-foreground-muted line-through">
                  {formatPrice(tour.oldPrice)}
                </span>
              )}
            </div>
          </div>
          <span className="inline-flex h-11 items-center justify-center rounded-full bg-primary-50 px-5 text-sm font-bold text-primary-600 transition-all group-hover:bg-primary-500 group-hover:text-white">
            Details
          </span>
        </div>
      </div>
    </Link>
  );
}