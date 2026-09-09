import Image from "next/image";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-surface-dark pt-[120px] pb-16 text-white sm:pt-[140px] lg:pt-[160px] lg:pb-20">
      {image ? (
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/60 to-surface-dark" />
        </div>
      ) : (
        <div
          className="absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
      )}

      <div className={cn("container-site relative z-10", className)}>
        <p className="eyebrow text-primary-300">
          <span className="inline-block h-[2px] w-8 rounded-full bg-primary-400" />
          {eyebrow}
        </p>
        <h1 className="font-display mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-50/85 sm:text-xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}