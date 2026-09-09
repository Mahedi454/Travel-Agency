import { CalendarCheck, Compass, Luggage } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Choose your trip",
    description:
      "Browse hand-crafted tours, filter by your style, budget and travel dates, then shortlist the ones that spark joy.",
  },
  {
    icon: CalendarCheck,
    number: "02",
    title: "Customize & book",
    description:
      "Tell your travel designer exactly what you want. Instantly confirm flights, hotels and experiences with one secure booking.",
  },
  {
    icon: Luggage,
    number: "03",
    title: "Travel & enjoy",
    description:
      "Board with everything handled — transfers, guides, check-ins. Just show up and make memories.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            eyebrow="Simple steps"
            title="Unforgettable trips, in three easy steps"
            description="No spreadsheets, no stress. From first click to final landing, here's exactly how a Travelia trip comes together."
          />
        </FadeIn>

        <div className="relative mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {/* connector line (desktop) */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[44px] hidden h-[2px] bg-gradient-to-r from-primary-100 via-primary-400 to-primary-100 lg:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <div className="relative flex h-full flex-col items-center text-center">
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-primary-500 shadow-card ring-1 ring-border">
                  <step.icon className="h-9 w-9" strokeWidth={1.8} />
                  <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-xs font-bold text-white shadow-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-foreground-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}