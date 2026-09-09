import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { testimonials } from "@/lib/data";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < Math.round(rating)
              ? "h-[18px] w-[18px] fill-primary-400 text-primary-400"
              : "h-[18px] w-[18px] fill-border text-border"
          }
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-pad bg-surface-muted">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Traveler stories"
            title="Real trips, real memories"
            description="Over 26,000 verified five-star reviews. Here's what fellow travelers say about travelling with Travelia."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.id} delay={(i % 3) * 0.08}>
              <figure className="card flex h-full flex-col rounded-[20px] p-7">
                <Quote
                  className="h-8 w-8 -scale-x-100 text-primary-100"
                  strokeWidth={0}
                  fill="currentColor"
                />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={t.avatar}
                      alt={`${t.name} avatar`}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-primary-100"
                      loading="lazy"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-bold text-foreground">
                        {t.name}
                      </p>
                      <p className="truncate text-sm text-foreground-muted">
                        {t.role} · {t.location}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <Stars rating={t.rating} />
                    </div>
                  </div>
                  <p className="mt-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
                    {t.trip}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}