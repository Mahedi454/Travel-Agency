import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Clock,
  MapPin,
  Star,
  Ticket,
  Users,
} from "lucide-react";
import { TourDetailPanel } from "@/components/tour-detail-panel";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";
import { formatPrice, tours } from "@/lib/data";

type TourDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: TourDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const tour = tours.find((t) => t.id === id);
  if (!tour) return { title: "Tour not found" };
  return {
    title: tour.title,
    description: tour.description,
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === id);

  if (!tour) notFound();

  const related = tours
    .filter((t) => t.id !== tour.id && t.category === tour.category)
    .slice(0, 3);
  const fallbackRelated = related.length
    ? related
    : tours.filter((t) => t.id !== tour.id).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface-dark pt-[120px] text-white sm:pt-[140px]">
        <div className="relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[460px]">
          <ImageWithFallback
            src={tour.image}
            alt={tour.title}
            ratio="auto"
            className="absolute inset-0 h-full w-full"
            imgClassName="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dark via-surface-dark/40 to-transparent" />
        </div>

        <div className="container-site relative z-10 -mt-24 sm:-mt-28">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-500 px-4 py-2 text-sm font-bold">
              <Star className="h-4 w-4 fill-white" />
              {tour.rating} · {tour.reviews} reviews
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              {tour.category}
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              {tour.difficulty}
            </span>
          </div>
          <h1 className="font-display mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            {tour.title}
          </h1>
          <p className="mt-4 flex items-center gap-2 text-lg text-primary-50/85">
            <MapPin className="h-5 w-5 text-primary-300" />
            {tour.destination}, {tour.country}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="container-site grid grid-cols-1 gap-10 py-12 lg:grid-cols-[1fr_390px] lg:gap-14 lg:py-16">
        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: Clock, label: "Duration", value: `${tour.duration} days` },
              { icon: Users, label: "Group size", value: "Max 12" },
              { icon: MapPin, label: "Region", value: tour.country },
              { icon: Ticket, label: "Reviews", value: `${tour.reviews} total` },
            ].map((item) => (
              <div
                key={item.label}
                className="card flex flex-col gap-2 rounded-2xl p-4"
              >
                <item.icon className="h-5 w-5 text-primary-500" strokeWidth={2} />
                <span className="text-xs font-medium uppercase tracking-wide text-foreground-muted">
                  {item.label}
                </span>
                <span className="text-[15px] font-bold text-foreground">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              About this tour
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-foreground-muted">
              {tour.longDescription}
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              What is included
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {tour.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 text-[15px] font-medium text-foreground"
                >
                  <BadgeCheck className="h-5 w-5 shrink-0 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {tour.gallery.length > 1 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Tour gallery
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {tour.gallery.map((img, i) => (
                  <ImageWithFallback
                    key={i}
                    src={img}
                    alt={`${tour.title} photo ${i + 1}`}
                    ratio="4/3"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Booking panel */}
        <TourDetailPanel tour={tour} />
      </section>

      {/* Related tours */}
      <section className="section-pad bg-surface-muted">
        <div className="container-site">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            You might also love
          </h2>
          <p className="mt-2 text-[15px] text-foreground-muted">
            Similar journeys travelers enjoyed with this one.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((t) => (
              <a
                key={t.id}
                href={`/tours/${t.id}`}
                className="group card block h-full overflow-hidden rounded-[20px] transition-all hover:-translate-y-1.5"
              >
                <ImageWithFallback
                  src={t.image}
                  alt={t.title}
                  ratio="16/10"
                  radius="none"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="flex h-full flex-col p-5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary-600">
                    {t.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">
                      {t.duration} days · ★ {t.rating}
                    </span>
                    <span className="text-xl font-bold text-foreground">
                      {formatPrice(t.price)}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}