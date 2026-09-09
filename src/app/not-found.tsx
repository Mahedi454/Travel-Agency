import Link from "next/link";
import { Compass, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-surface">
      <div className="container-site flex flex-col items-center py-20 text-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary-50 text-primary-500">
          <Compass className="h-10 w-10" strokeWidth={1.8} />
        </span>
        <p className="eyebrow mt-8 text-primary-500">
          <span className="inline-block h-[2px] w-8 rounded-full bg-primary-500" />
          Error 404
          <span className="inline-block h-[2px] w-8 rounded-full bg-primary-500" />
        </p>
        <h1 className="font-display mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
          This path leads nowhere
        </h1>
        <p className="mt-5 max-w-md text-[17px] leading-relaxed text-foreground-muted">
          The page you are looking for has moved, or was never on the map.
          Let us get you back to the journey.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary h-12 px-7 text-[15px]">
            Back to home
          </Link>
          <Link href="/tours" className="btn btn-outline h-12 px-7 text-[15px]">
            <MapPin className="h-4 w-4" strokeWidth={2.2} />
            Browse tours
          </Link>
        </div>
      </div>
    </section>
  );
}