"use client";

import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { TourCard } from "@/components/tour-card";
import { useWishlist } from "@/components/providers/wishlist-context";
import { tours } from "@/lib/data";

const heroImage =
  "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1920&q=80";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const savedTours = tours.filter((t) => ids.includes(t.id));

  return (
    <>
      <PageHero
        eyebrow="Your shortlist"
        title="Saved tours"
        description="Keep your favorites here while you decide. They'll stay saved on this device until you're ready to book."
        image={heroImage}
      />

      <section className="section-pad bg-surface-muted">
        <div className="container-site">
          {savedTours.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {savedTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="card mx-auto flex max-w-lg flex-col items-center gap-5 rounded-3xl px-8 py-16 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-50 text-primary-500">
                <Heart className="h-10 w-10" strokeWidth={1.8} />
              </span>
              <h2 className="text-2xl font-bold text-foreground">
                Your wishlist is empty
              </h2>
              <p className="text-[15px] leading-relaxed text-foreground-muted">
                Tap the heart icon on any tour to keep it here. It is the easiest
                way to compare adventures side by side.
              </p>
              <Link href="/tours" className="btn btn-primary mt-2 h-12 px-8 text-base">
                <MapPin className="h-5 w-5" strokeWidth={2.2} />
                Browse tours
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}