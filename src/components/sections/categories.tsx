import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { IconBadge } from "@/components/ui/icon-badge";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { categories } from "@/lib/data";

export function Categories() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Travel styles"
            title="Pick your kind of adventure"
            description="Whatever moves you — adrenaline, culture, family time, or pure indulgence — there's a collection designed around it."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <FadeIn key={cat.id} delay={(i % 3) * 0.08}>
              <Link
                href={`/tours?category=${cat.id}`}
                className="group card relative block h-full overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={cat.image}
                    alt={cat.name}
                    ratio="16/10"
                    radius="none"
                    className="absolute inset-0"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/30 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-4 p-5">
                  <IconBadge
                    name={cat.icon}
                    iconClassName="h-6 w-6 text-white"
                    className="inline-flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-500 shadow-lg shadow-primary-500/30"
                  />
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-tight text-white">
                      {cat.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-primary-50/80">
                      {cat.tourCount} tours
                    </p>
                  </div>
                  <ArrowRight
                    className="ml-auto h-5 w-5 shrink-0 text-white/70 transition-all group-hover:translate-x-1 group-hover:text-white"
                    strokeWidth={2.2}
                  />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}