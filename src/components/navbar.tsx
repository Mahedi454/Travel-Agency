"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Compass,
  Heart,
  Menu,
  Search,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useWishlist } from "@/components/providers/wishlist-context";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/tours", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/wishlist", label: "Wishlist" },
];

const DESKTOP_LINKS = NAV_LINKS.filter((link) => link.href !== "/wishlist");

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useWishlist();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleSearch = () => {
    router.push("/tours");
    setMobileOpen(false);
  };

  const light = pathname === "/" && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          !light
            ? "bg-white/95 backdrop-blur-md shadow-nav"
            : "bg-gradient-to-b from-surface-dark/60 to-transparent"
        )}
      >
        <div
          className={cn(
            "container-site transition-[height] duration-300",
            scrolled ? "h-[70px]" : "h-[80px]"
          )}
        >
          <nav
            className="flex h-full items-center justify-between gap-4"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="flex shrink-0 items-center gap-2.5"
              aria-label="Travelia home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30">
                <Compass className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span
                  className={cn(
                    "font-display text-2xl font-extrabold tracking-tight",
                    light ? "text-white" : "text-foreground"
                  )}
                >
                  Trav<span className="text-primary-500">elia</span>
                </span>
                <span
                  className={cn(
                    "mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.28em] xl:block",
                    light ? "text-white/70" : "text-foreground-muted"
                  )}
                >
                  Tours &amp; Travel
                </span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden items-center gap-0.5 lg:flex">
              {DESKTOP_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-3 py-2 text-[14px] font-medium transition-colors xl:px-4 xl:text-[15px]",
                      active
                        ? light
                          ? "text-white font-semibold"
                          : "text-primary-600"
                        : light
                          ? "text-white/85 hover:text-white"
                          : "text-foreground hover:text-primary-600"
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-x-3 -bottom-[3px] h-[2px] rounded-full bg-primary-500"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop actions */}
            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={handleSearch}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                  light
                    ? "text-white hover:bg-white/15"
                    : "text-foreground hover:bg-surface-muted hover:text-primary-600"
                )}
                aria-label="Search tours"
              >
                <Search className="h-5 w-5" strokeWidth={2} />
              </button>
              <Link
                href="/wishlist"
                className={cn(
                  "relative flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                  light
                    ? "text-white hover:bg-white/15"
                    : "text-foreground hover:bg-surface-muted hover:text-primary-600"
                )}
                aria-label={`Wishlist, ${count} saved tours`}
              >
                <Heart
                  className="h-5 w-5"
                  strokeWidth={2}
                  fill={count > 0 ? "currentColor" : "none"}
                />
                {count > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary-500 px-1 text-[11px] font-bold text-white">
                    {count}
                  </span>
                )}
              </Link>
              <button
                type="button"
                className={cn(
                  "flex h-11 items-center gap-2 rounded-full px-4 text-[15px] font-medium transition-colors",
                  light
                    ? "text-white hover:bg-white/15"
                    : "text-foreground hover:bg-surface-muted"
                )}
              >
                <User className="h-5 w-5" strokeWidth={2} />
                Login
              </button>
              <Link href="/tours" className="btn btn-primary h-11">
                Book Now
              </Link>
            </div>

            {/* Mobile action bar */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={handleSearch}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full",
                  light ? "text-white" : "text-foreground"
                )}
                aria-label="Search tours"
              >
                <Search className="h-[22px] w-[22px]" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen((open) => !open)}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full",
                  light ? "text-white" : "text-foreground"
                )}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -40 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 40 }}
                    transition={{ duration: 0.18 }}
                  >
                    {mobileOpen ? (
                      <X className="h-6 w-6" strokeWidth={2.2} />
                    ) : (
                      <Menu className="h-6 w-6" strokeWidth={2.2} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-surface-dark/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-menu"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(85vw,380px)] flex-col bg-white shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 34 }
              }
            >
              <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-border px-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500 text-white">
                    <Compass className="h-5 w-5" strokeWidth={2.2} />
                  </span>
                  <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
                    Trav<span className="text-primary-500">elia</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-surface-muted"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" strokeWidth={2.2} />
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-6"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link, index) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + index * 0.05,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-semibold transition-colors",
                          active
                            ? "bg-primary-50 text-primary-600"
                            : "text-foreground hover:bg-surface-muted"
                        )}
                      >
                        {link.label}
                        {link.href === "/wishlist" && count > 0 && (
                          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary-500 px-1.5 text-xs font-bold text-white">
                            {count}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="shrink-0 border-t border-border px-5 py-5">
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    className="btn btn-outline w-full h-12 text-base"
                  >
                    <User className="h-5 w-5" strokeWidth={2} />
                    Login / Sign up
                  </button>
                  <Link
                    href="/tours"
                    onClick={() => setMobileOpen(false)}
                    className="btn btn-primary w-full h-12 text-base"
                  >
                    Book a tour
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}