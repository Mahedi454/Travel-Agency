"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Search,
  Star,
  Users,
} from "lucide-react";
import { destinations } from "@/lib/data";

const heroImage =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(2);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("destination", destination);
    if (date) params.set("date", date);
    if (travelers > 1) params.set("travelers", String(travelers));
    router.push(`/tours?${params.toString()}`);
  };

  return (
    <section className="relative flex min-h-[92svh] flex-col items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/80 via-surface-dark/55 to-surface-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/70 to-transparent" />
      </div>

      <div className="container-site relative z-10 py-28 sm:py-32 lg:py-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm"
          >
            <Star className="h-4 w-4 fill-primary-300 text-primary-300" />
            <span className="text-sm font-medium text-white">
              Rated 4.9/5 by 120,000+ travelers
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-display text-[42px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Explore the world,
            <br />
            <span className="text-primary-300">one adventure</span>
            <br />
            at a time.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-primary-50/90 sm:text-xl"
          >
            Handcrafted tours to 480+ destinations across 35 countries.
            Thoughtful itineraries, trusted local guides, and memories that
            last a lifetime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link href="/tours" className="btn btn-primary h-14 px-8 text-base">
              Browse tours
              <Search className="h-5 w-5" strokeWidth={2.2} />
            </Link>
            <Link href="/destinations" className="btn btn-outline-light h-14 px-8 text-base">
              Explore destinations
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Search widget */}
      <div className="container-site relative z-10 -mt-2 pb-10 lg:-mt-4">
        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          className="mx-auto flex w-full flex-col gap-3 rounded-3xl border border-white/40 bg-white/15 p-4 backdrop-blur-xl shadow-2xl shadow-surface-dark/40 sm:rounded-[28px] lg:flex-row lg:items-stretch lg:gap-0 lg:rounded-full lg:border-white/20 lg:p-2.5"
        >
          <label className="group flex flex-1 flex-col justify-center gap-1 rounded-3xl px-4 py-3 transition-colors focus-within:bg-white/10 lg:py-1.5 lg:pl-6">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary-100">
              <MapPin className="h-3.5 w-3.5 text-primary-300" />
              Destination
            </span>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-base font-semibold text-white outline-none [&>option]:text-foreground"
              aria-label="Destination"
            >
              <option value="">Where to?</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.name}>
                  {d.name}, {d.country}
                </option>
              ))}
            </select>
          </label>

          <div className="hidden w-px self-stretch bg-white/20 lg:block" aria-hidden="true" />

          <label className="group flex flex-1 flex-col justify-center gap-1 rounded-3xl px-4 py-3 transition-colors focus-within:bg-white/10 lg:py-1.5 lg:pl-5">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary-100">
              <Calendar className="h-3.5 w-3.5 text-primary-300" />
              Travel date
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-base font-semibold text-white outline-none [color-scheme:dark]"
              aria-label="Travel date"
            />
          </label>

          <div className="hidden w-px self-stretch bg-white/20 lg:block" aria-hidden="true" />

          <label className="group flex flex-1 flex-col justify-center gap-1 rounded-3xl px-4 py-3 transition-colors focus-within:bg-white/10 lg:py-1.5 lg:pl-5">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-primary-100">
              <Users className="h-3.5 w-3.5 text-primary-300" />
              Travelers
            </span>
            <select
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className="w-full bg-transparent text-base font-semibold text-white outline-none [&>option]:text-foreground"
              aria-label="Number of travelers"
            >
              {[1, 2, 3, 4, 5, 6, 7, "8+"].map((n) => (
                <option key={n} value={n}>
                  {n === "8+" ? "8+ travelers" : `${n} ${n === 1 ? "traveler" : "travelers"}`}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-primary-500 px-8 text-base font-bold text-white shadow-lg shadow-primary-500/40 transition-all hover:bg-primary-600 focus-visible:ring-4 focus-visible:ring-primary-400 focus-visible:ring-opacity-40 lg:h-[62px] lg:rounded-full lg:text-[17px]"
          >
            <Search className="h-5 w-5" strokeWidth={2.5} />
            Search trips
          </button>
        </motion.form>
      </div>
    </section>
  );
}