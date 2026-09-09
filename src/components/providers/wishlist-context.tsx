"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";

type WishlistContextValue = {
  ids: string[];
  isWishlisted: (id: string) => boolean;
  toggle: (id: string) => void;
  count: number;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);

const STORAGE_KEY = "travelia-wishlist";
const EMPTY: string[] = [];

let cache: string[] = [];
let cacheValid = false;

function readStored(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    cache = stored ? (JSON.parse(stored) as string[]) : EMPTY;
  } catch {
    cache = EMPTY;
  }
  cacheValid = true;
  return cache;
}

function getSnapshot(): string[] {
  if (!cacheValid) {
    return readStored();
  }
  return cache;
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

function subscribe(callback: () => void): () => void {
  const handleStorage = (e: Event) => {
    if (e instanceof StorageEvent && e.key !== null && e.key !== STORAGE_KEY) {
      return;
    }
    readStored();
    callback();
  };
  window.addEventListener("storage", handleStorage as EventListener);
  return () =>
    window.removeEventListener("storage", handleStorage as EventListener);
}

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const value = useMemo<WishlistContextValue>(
    () => ({
      ids,
      count: ids.length,
      isWishlisted: (id: string) => ids.includes(id),
      toggle: (id: string) => {
        const next = ids.includes(id)
          ? ids.filter((x) => x !== id)
          : [...ids, id];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          // storage unavailable — ignore
        }
        cache = next;
        cacheValid = true;
        window.dispatchEvent(new Event("storage"));
      },
    }),
    [ids]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return ctx;
}