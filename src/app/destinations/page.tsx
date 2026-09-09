import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { DestinationCard } from "@/components/destination-card";
import { FadeIn } from "@/components/ui/fade-in";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Travelia's 480+ hand-picked destinations across 35 countries. Find beaches, mountains, cities and more.",
};

const heroImage =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80";

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to next?"
        title="Destinations worth wandering to"
        description="Eight regions that define our collections — every one backed by local experts, hand-vetted stays and seamless transfers."
        image={heroImage}
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((d, i) => (
              <FadeIn key={d.id} delay={(i % 4) * 0.07}>
                <DestinationCard destination={d} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}