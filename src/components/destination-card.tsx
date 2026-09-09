import Link from "next/link";
import { MapPinned, Route } from "lucide-react";
import type { Destination } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

type DestinationCardProps = {
  destination: Destination;
};

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/destinations?q=${destination.name}`}
      className="group card block overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-1.5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageWithFallback
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          ratio="4/3"
          radius="none"
          className="absolute inset-0"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-surface-dark/20 to-transparent transition-opacity duration-300" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-primary-200">
            <MapPinned className="h-4 w-4" strokeWidth={2.2} />
            {destination.country}
          </div>
          <h3 className="mt-1 text-2xl font-bold leading-tight text-white">
            {destination.name}
          </h3>
          <div className="mt-2 flex items-center gap-3 text-sm text-primary-50/90">
            <span className="inline-flex items-center gap-1.5">
              <Route className="h-4 w-4" strokeWidth={2.2} />
              {destination.tourCount} tours
            </span>
            <span className="text-white/50" aria-hidden="true">
              •
            </span>
            <span>
              from{" "}
              <span className="font-semibold text-white">
                {formatPrice(destination.priceFrom)}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}