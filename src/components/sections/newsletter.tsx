"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { ImageWithFallback } from "@/components/ui/image-with-fallback";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitted");
  };

  return (
    <section className="section-pad bg-surface">
      <div className="container-site">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[32px] bg-surface-navy text-white">
            {/* Decorative image */}
            <div className="absolute inset-0" aria-hidden="true">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
                alt=""
                ratio="auto"
                className="absolute inset-0 h-full w-full"
                imgClassName="h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-surface-navy via-surface-navy/90 to-primary-600/40" />
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-16">
              <div>
                <p className="eyebrow text-primary-300">
                  <span className="inline-block h-[2px] w-8 rounded-full bg-primary-400" />
                  Travel inspiration, monthly
                </p>
                <h2 className="section-title mt-4 font-bold text-white">
                  Get travel deals before everyone else
                </h2>
                <p className="section-desc mt-4 max-w-md text-primary-50/80">
                  Join 60,000+ subscribers receiving exclusive early-access
                  offers, destination guides and seasonal itineraries. No spam,
                  unsubscribe anytime.
                </p>
              </div>

              <div>
                {status === "submitted" ? (
                  <div className="flex items-start gap-4 rounded-3xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/15">
                    <CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-primary-300" />
                    <div>
                      <p className="text-lg font-bold text-white">
                        You are on the list!
                      </p>
                      <p className="mt-1 text-[15px] text-primary-50/80">
                        Watch your inbox — your first travel deal is on its way.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 sm:flex-row"
                  >
                    <label className="sr-only" htmlFor="newsletter-email">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="h-14 w-full rounded-2xl border border-white/20 bg-white/10 px-5 text-base text-white placeholder:text-primary-50/60 backdrop-blur-sm transition-colors focus:border-primary-300 focus:outline-none focus:ring-4 focus:ring-primary-400/30"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary h-14 shrink-0 rounded-2xl px-8 text-base font-bold"
                    >
                      Subscribe
                      <Send className="h-5 w-5" strokeWidth={2.2} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}