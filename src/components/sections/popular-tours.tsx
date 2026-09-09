import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/data";

export function PopularTours() {
  const featured = tours.slice(0, 8);

  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Popular tours"
            title="Tours travelers are loving right now"
            description="Hand-picked itineraries with the highest ratings, best value, and the reviews to prove it. Your next favorite trip is here."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((tour, i) => (
            <FadeIn key={tour.id} delay={(i % 4) * 0.07}>
              <TourCard tour={tour} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link href="/tours" className="btn btn-primary h-12 px-8 text-[15px]">
            Explore all tours
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}