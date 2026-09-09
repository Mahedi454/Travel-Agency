"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";
import { formatPrice, type Tour } from "@/lib/data";
import { WishlistButton } from "@/components/ui/wishlist-button";

export function TourDetailPanel({ tour }: { tour: Tour }) {
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState("");
  const [booked, setBooked] = useState(false);

  const total = tour.price * travelers;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    setBooked(true);
  };

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="card rounded-3xl p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-foreground-muted">
              Price per person
            </p>
            <div className="mt-1 flex items-baseline gap-2.5">
              <span className="text-4xl font-extrabold tracking-tight text-foreground">
                {formatPrice(tour.price)}
              </span>
              {tour.oldPrice && (
                <span className="text-lg text-foreground-muted line-through">
                  {formatPrice(tour.oldPrice)}
                </span>
              )}
            </div>
            <p className="mt-1.5 flex items-center gap-1.5 text-sm font-semibold text-primary-600">
              <Star className="h-4 w-4 fill-primary-400 text-primary-400" />
              {tour.rating} · {tour.reviews} verified reviews
            </p>
          </div>
          <WishlistButton tourId={tour.id} className="static" />
        </div>

        {booked ? (
          <div className="mt-8 flex items-start gap-4 rounded-2xl bg-primary-50 p-5">
            <CheckCircle2 className="mt-0.5 h-7 w-7 shrink-0 text-primary-600" />
            <div>
              <p className="text-lg font-bold text-foreground">
                Booking request received!
              </p>
              <p className="mt-1 text-[15px] leading-relaxed text-foreground-muted">
                A travel designer will confirm your itinerary within 2 hours
                and send a link to pay securely. We will hold your dates for 48
                hours.
              </p>
              <button
                type="button"
                onClick={() => setBooked(false)}
                className="mt-3 text-sm font-bold text-primary-600 hover:text-primary-700"
              >
                Make another booking
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleBook} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="travel-date"
                className="field-label text-[13px]"
              >
                Travel date
              </label>
              <input
                id="travel-date"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="field"
              />
            </div>

            <div>
              <label
                htmlFor="travelers"
                className="field-label text-[13px]"
              >
                Travelers
              </label>
              <select
                id="travelers"
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="field"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "traveler" : "travelers"}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-2xl bg-surface-muted p-5">
              <div className="flex items-center justify-between text-[15px] text-foreground-muted">
                <span>
                  {formatPrice(tour.price)} × {travelers} travelers
                </span>
                <span className="font-semibold text-foreground">
                  {formatPrice(total)}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-border pt-2 text-[15px] font-bold text-foreground">
                <span>Total</span>
                <span className="text-xl">{formatPrice(total)}</span>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary h-14 w-full text-base font-bold"
            >
              Book this tour
            </button>

            <p className="flex items-center justify-center gap-2 text-center text-[13px] text-foreground-muted">
              <ShieldCheck className="h-4 w-4 text-primary-500" />
              Free cancellation up to 30 days before departure
            </p>
          </form>
        )}
      </div>

      <div className="mt-5 rounded-3xl border border-primary-100 bg-primary-50 p-6">
        <h3 className="flex items-center gap-2 text-[15px] font-bold text-foreground">
          <Calendar className="h-5 w-5 text-primary-500" />
          Good to know
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground-muted">
          <li className="flex items-start gap-2">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
            Small groups, max {12} travelers, always with a local guide.
          </li>
          <li className="flex items-start gap-2">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
            ATOL-protected, fully bonded and 24/7 in-trip support.
          </li>
        </ul>
      </div>
    </aside>
  );
}