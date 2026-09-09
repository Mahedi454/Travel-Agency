import { BadgePercent, Clock } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { formatPrice, offers } from "@/lib/data";

export function Offers() {
  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Limited-time deals"
            title="Unmissable offers, this week only"
            description="Save up to 31% on hand-picked journeys. Prices locked for 48 hours — once the window closes, these rates are gone."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <FadeIn key={offer.id} delay={i * 0.1}>
              <article className="group card relative h-full overflow-hidden rounded-[24px]">
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[3/4]">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    ratio="auto"
                    className="absolute inset-0"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-surface-dark/45 to-surface-dark/10" />

                  <div className="absolute left-5 top-5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-primary-500/40">
                      <BadgePercent className="h-4 w-4" strokeWidth={2.4} />
                      Save {offer.discount}%
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary-200">
                      <Clock className="h-4 w-4" strokeWidth={2.2} />
                      {offer.deadline}
                    </div>
                    <h3 className="text-2xl font-bold leading-snug text-white">
                      {offer.title}
                    </h3>
                    <p className="text-[15px] text-primary-50/85">
                      {offer.destination}
                    </p>

                    <div className="mt-1 flex items-end gap-3">
                      <div>
                        <p className="text-xs font-medium text-primary-50/70">
                          Was{" "}
                          <span className="ml-1 line-through">
                            {formatPrice(offer.oldPrice)}
                          </span>
                        </p>
                        <p className="text-3xl font-extrabold tracking-tight text-white">
                          {formatPrice(offer.price)}
                        </p>
                      </div>
                      <Link
                        href="/tours"
                        className="btn btn-white ml-auto h-11 px-6 text-sm font-bold"
                      >
                        Book deal
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}