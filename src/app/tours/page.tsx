import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/page-hero";
import { ToursExplorer } from "@/components/tours-explorer";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse all Travelia tours. Filter by destination, category, budget, duration and more.",
};

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80";

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Our collection"
        title="Find your perfect tour"
        description="Every itinerary is hand-crafted, price-transparent and fully supported by travel experts. Filter to match your style, pace and budget."
        image={heroImage}
      />
      <Suspense
        fallback={
          <div className="container-site py-14 text-center text-foreground-muted">
            Loading tours…
          </div>
        }
      >
        <ToursExplorer />
      </Suspense>
    </>
  );
}