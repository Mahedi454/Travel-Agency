import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { DestinationCard } from "@/components/destination-card";
import { destinations } from "@/lib/data";

export function Destinations() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Top destinations"
            title="Where will your next journey take you?"
            description="From sun-drenched islands to alpine peaks, explore our most-loved destinations — each with hand-vetted tours and expert local guidance."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((d, i) => (
            <FadeIn key={d.id} delay={(i % 4) * 0.07}>
              <DestinationCard destination={d} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Link href="/destinations" className="btn btn-outline h-12 px-7 text-[15px]">
            View all destinations
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}