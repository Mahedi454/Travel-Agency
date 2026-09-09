import { FadeIn } from "@/components/ui/fade-in";
import { IconBadge } from "@/components/ui/icon-badge";
import { stats } from "@/lib/data";

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-surface-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="container-site relative z-10 flex flex-col items-center py-16 sm:py-20">
        <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-3">
                <IconBadge
                  name={stat.icon}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-300 ring-1 ring-white/15"
                />
                <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[44px]">
                  {stat.value}
                </p>
                <p className="text-[15px] font-medium text-primary-50/75">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}