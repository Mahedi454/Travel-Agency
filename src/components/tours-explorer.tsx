"use client";

import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { TourCard } from "@/components/tour-card";
import { cn } from "@/lib/cn";
import { categories, destinations, tours } from "@/lib/data";

const DIFFICULTIES = ["Easy", "Moderate", "Challenging"];
const DURATIONS = [
  { label: "3–5 days", min: 3, max: 5 },
  { label: "6–7 days", min: 6, max: 7 },
  { label: "8+ days", min: 8, max: 99 },
];

type Filters = {
  destination: string;
  category: string;
  maxPrice: number;
  duration: string;
  rating: number;
  difficulty: string;
};

const DEFAULT_FILTERS: Filters = {
  destination: "",
  category: "",
  maxPrice: 2500,
  duration: "",
  rating: 0,
  difficulty: "",
};

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="border-b border-border py-5 last:border-0">
      <legend className="mb-3 text-sm font-bold uppercase tracking-wide text-foreground">
        {title}
      </legend>
      {children}
    </fieldset>
  );
}

export function ToursExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotion();

  const [filters, setFilters] = useState<Filters>(() => ({
    ...DEFAULT_FILTERS,
    destination: searchParams.get("destination") ?? "",
    category: searchParams.get("category") ?? "",
  }));
  const [sheetOpen, setSheetOpen] = useState(false);
  const [sort, setSort] = useState<"popular" | "price-asc" | "price-desc" | "rating">(
    "popular"
  );

  const set = useCallback(
    (patch: Partial<Filters>) => setFilters((f) => ({ ...f, ...patch })),
    []
  );

  const resetFilters = useCallback(() => {
    setFilters(DEFAULT_FILTERS);
    router.replace("/tours");
  }, [router]);

  const filtered = useMemo(() => {
    let list = tours.filter((t) => {
      if (filters.destination && !t.destination.includes(filters.destination)) {
        return false;
      }
      if (filters.category) {
        const cat = categories.find((c) => c.name === t.category);
        if (!cat || cat.id !== filters.category) return false;
      }
      if (t.price > filters.maxPrice) return false;
      if (filters.duration) {
        const d = DURATIONS.find((x) => x.label === filters.duration);
        if (d && (t.duration < d.min || t.duration > d.max)) return false;
      }
      if (filters.rating && t.rating < filters.rating) return false;
      if (filters.difficulty && t.difficulty !== filters.difficulty) return false;
      return true;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [filters, sort]);

  const activeCount = useMemo(
    () =>
      [filters.destination, filters.category, filters.duration, filters.difficulty].filter(
        Boolean
      ).length +
      (filters.maxPrice !== DEFAULT_FILTERS.maxPrice ? 1 : 0) +
      (filters.rating > 0 ? 1 : 0),
    [filters]
  );

  const renderFilters = () => (
    <div className="flex flex-col">
      <FilterGroup title="Destination">
        <div className="space-y-2.5">
          {destinations.map((d) => (
            <label
              key={d.id}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1.5 text-[15px] transition-colors hover:bg-surface-muted"
            >
              <input
                type="radio"
                name="destination-radio"
                checked={filters.destination === d.name}
                onChange={() => set({ destination: d.name })}
                className="h-4 w-4 accent-primary-500"
              />
              <span className="font-medium text-foreground">{d.name}</span>
              <span className="ml-auto text-sm text-foreground-muted">
                {d.tourCount}
              </span>
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Category">
        <div className="grid grid-cols-2 gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() =>
                set({ category: filters.category === c.id ? "" : c.id })
              }
              className={cn(
                "flex h-11 items-center justify-center rounded-xl border px-3 text-sm font-medium transition-colors",
                filters.category === c.id
                  ? "border-primary-500 bg-primary-50 text-primary-600"
                  : "border-border bg-surface text-foreground hover:border-foreground-muted"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Max budget">
        <div className="px-1">
          <input
            type="range"
            min={500}
            max={2500}
            step={50}
            value={filters.maxPrice}
            onChange={(e) => set({ maxPrice: Number(e.target.value) })}
            className="w-full accent-primary-500"
            aria-label="Maximum price"
          />
          <div className="mt-1 flex justify-between text-sm font-medium text-foreground-muted">
            <span>$500</span>
            <span className="rounded-full bg-primary-50 px-3 py-1 font-bold text-primary-600">
              ${filters.maxPrice.toLocaleString()}
            </span>
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Duration">
        <div className="space-y-2.5">
          {DURATIONS.map((d) => (
            <label
              key={d.label}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-1.5 text-[15px] transition-colors hover:bg-surface-muted"
            >
              <input
                type="radio"
                name="duration-radio"
                checked={filters.duration === d.label}
                onChange={() => set({ duration: d.label })}
                className="h-4 w-4 accent-primary-500"
              />
              <span className="font-medium text-foreground">{d.label}</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Minimum rating">
        <div className="flex flex-wrap gap-2">
          {[4.5, 4.8, 4.9].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => set({ rating: filters.rating === r ? 0 : r })}
              className={cn(
                "flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-semibold transition-colors",
                filters.rating === r
                  ? "border-primary-500 bg-primary-50 text-primary-600"
                  : "border-border bg-surface text-foreground hover:border-foreground-muted"
              )}
            >
              ★ {r}+
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Difficulty">
        <div className="flex flex-wrap gap-2">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() =>
                set({ difficulty: filters.difficulty === d ? "" : d })
              }
              className={cn(
                "flex h-11 items-center justify-center rounded-xl border px-4 text-sm font-medium transition-colors",
                filters.difficulty === d
                  ? "border-primary-500 bg-primary-50 text-primary-600"
                  : "border-border bg-surface text-foreground hover:border-foreground-muted"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </FilterGroup>
    </div>
  );

  return (
    <div className="container-site py-10 lg:py-14">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Desktop sidebar */}
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="card sticky top-24 rounded-2xl p-6">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <SlidersHorizontal className="h-5 w-5 text-primary-500" />
                Filters
              </h2>
              {activeCount > 0 && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  Reset
                </button>
              )}
            </div>
            {renderFilters()}
          </div>
        </aside>

        {/* Main area */}
        <div className="min-w-0 flex-1">
          {/* Toolbar */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {filtered.length}{" "}
                {filtered.length === 1 ? "tour" : "tours"} found
              </h2>
              {filters.destination && (
                <p className="mt-1 text-[15px] text-foreground-muted">
                  Showing results in{" "}
                  <span className="font-semibold text-foreground">
                    {filters.destination}
                  </span>
                </p>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile filter button */}
              <button
                type="button"
                onClick={() => setSheetOpen(true)}
                className="btn btn-outline relative h-12 px-5 text-[15px] lg:hidden"
                aria-haspopup="dialog"
                aria-expanded={sheetOpen}
              >
                <Filter className="h-5 w-5" strokeWidth={2.2} />
                Filters
                {activeCount > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 min-w-6 items-center justify-center rounded-full bg-primary-500 px-1.5 text-xs font-bold text-white">
                    {activeCount}
                  </span>
                )}
              </button>

              <div className="relative">
                <label htmlFor="sort" className="sr-only">
                  Sort tours
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as typeof sort)}
                  className="h-12 appearance-none rounded-full border border-border bg-surface pl-5 pr-11 text-[15px] font-medium text-foreground outline-none transition-colors focus:border-primary-500"
                >
                  <option value="popular">Most popular</option>
                  <option value="rating">Highest rated</option>
                  <option value="price-asc">Price: low → high</option>
                  <option value="price-desc">Price: high → low</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-muted"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Results grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((tour, i) => (
                <motion.div
                  key={tour.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                >
                  <TourCard tour={tour} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="card flex flex-col items-center gap-4 rounded-3xl px-8 py-20 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-muted text-foreground-muted">
                <Search className="h-8 w-8" strokeWidth={1.8} />
              </span>
              <h3 className="text-xl font-bold text-foreground">
                No tours match your filters
              </h3>
              <p className="max-w-sm text-[15px] text-foreground-muted">
                Try widening your budget or removing a filter to see more
                adventures.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="btn btn-primary mt-2 h-12 px-7"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter bottom sheet */}
      <AnimatePresence>
        {sheetOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-surface-dark/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSheetOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Filter tours"
              className="fixed inset-x-0 bottom-0 z-[80] flex max-h-[90svh] flex-col rounded-t-[28px] bg-surface shadow-2xl lg:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 34 }
              }
            >
              <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-surface-muted" />
              <div className="flex shrink-0 items-center justify-between px-6 py-4">
                <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                  <Filter className="h-5 w-5 text-primary-500" />
                  Filter tours
                  {activeCount > 0 && (
                    <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-bold text-primary-600">
                      {activeCount} active
                    </span>
                  )}
                </h2>
                <button
                  type="button"
                  onClick={() => setSheetOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-surface-muted"
                  aria-label="Close filters"
                >
                  <X className="h-6 w-6" strokeWidth={2.2} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 pb-6">
                {renderFilters()}
              </div>

              <div className="flex shrink-0 items-center gap-3 border-t border-border bg-surface px-6 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn btn-outline h-12 flex-1 text-base"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => setSheetOpen(false)}
                  className="btn btn-primary h-12 flex-[2] text-base"
                >
                  Show {filtered.length} tour{filtered.length === 1 ? "" : "s"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}