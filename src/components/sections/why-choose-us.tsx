import { Headset, ShieldCheck, Wallet } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const features = [
  {
    icon: ShieldCheck,
    title: "Travel with confidence",
    description:
      "Every itinerary is hand-vetted by travel experts. ATOL and IATA protected, with 24/7 support in 6 languages while you're away.",
  },
  {
    icon: Wallet,
    title: "Best-price promise",
    description:
      "Found it cheaper elsewhere? We'll match it and add a travel voucher. Transparent pricing from the first click to the final receipt.",
  },
  {
    icon: Headset,
    title: "Real humans, real help",
    description:
      "Talk to a dedicated travel designer before, during, and after your trip. Average response time — under 5 minutes.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-surface-dark text-white">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            dark
            eyebrow="Why Travelia"
            title="Travel that feels effortless"
            description="We obsess over the details so you can focus on the moments. Here's what 120,000+ travelers trust us with."
          />
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/30 hover:bg-white/[0.09]">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300 ring-1 ring-primary-400/25 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <feature.icon className="h-7 w-7" strokeWidth={2} />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-snug text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-primary-50/75">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}