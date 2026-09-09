import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse real moments from Travelia itineraries around the world.",
};

const heroImage =
  "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1920&q=80";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Wanderlust gallery"
        title="Every frame is somewhere you could be"
        description="Real sights, real itineraries. Wander through and let your next destination find you."
        image={heroImage}
      />

      <section className="section-pad bg-surface">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {galleryImages.map((img, i) => (
              <FadeIn key={img.src} delay={(i % 3) * 0.06}>
                <figure className="group relative overflow-hidden rounded-[20px]">
                  <ImageWithFallback
                    src={img.src}
                    alt={img.alt}
                    ratio={i % 3 === 1 ? "4/5" : "4/3"}
                    radius="none"
                    imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}