import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { blogPosts } from "@/lib/data";

export function Blog() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="From the journal"
            title="Stories, guides & travel wisdom"
            description="Destination deep-dives, packing advice and insider tips — written by the people who plan your trips."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.id} delay={(i % 4) * 0.08}>
              <Link
                href="/blog"
                className="group card flex h-full flex-col overflow-hidden rounded-[20px] transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    ratio="16/10"
                    radius="none"
                    className="absolute inset-0"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-600">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-4 text-[13px] font-medium text-foreground-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" strokeWidth={2} />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" strokeWidth={2} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary-600">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-sm leading-relaxed text-foreground-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-bold text-primary-600">
                    Read article
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2.4}
                    />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}