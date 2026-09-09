import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Travel Journal",
  description:
    "Destination guides, insider tips and travel stories from the Travelia team.",
};

const heroImage =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80";

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Ideas for your next trip"
        description="Destination deep-dives, seasonal guides and packing wisdom — written by the people who plan your journeys."
        image={heroImage}
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          {/* Featured post */}
          <FadeIn>
            <Link
              href="/blog"
              className="group card grid grid-cols-1 gap-0 overflow-hidden rounded-[24px] lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
                <ImageWithFallback
                  src={featured.image}
                  alt={featured.title}
                  ratio="auto"
                  className="absolute inset-0 h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex h-full flex-col justify-center gap-4 p-8 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary-500 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    Featured
                  </span>
                  <span className="text-sm font-medium text-foreground-muted">
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary-600 sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="text-[17px] leading-relaxed text-foreground-muted">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-foreground-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" strokeWidth={2} />
                    {featured.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-4 w-4" strokeWidth={2} />
                    {featured.readTime}
                  </span>
                  <span>By {featured.author}</span>
                </div>
                <span className="mt-2 inline-flex w-fit items-center gap-2 text-base font-bold text-primary-600">
                  Read the full story
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    strokeWidth={2.4}
                  />
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post, i) => (
              <FadeIn key={post.id} delay={(i % 3) * 0.08}>
                <Link
                  href="/blog"
                  className="group card flex h-full flex-col overflow-hidden rounded-[20px] transition-all hover:-translate-y-1.5"
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
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-600">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-4 text-[13px] font-medium text-foreground-muted">
                      <span>{post.date}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4" strokeWidth={2} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary-600">
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
    </>
  );
}