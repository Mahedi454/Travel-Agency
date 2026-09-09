import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/tours", label: "Our tours" },
  { href: "/destinations", label: "Destinations" },
  { href: "/blog", label: "Travel journal" },
  { href: "/gallery", label: "Gallery" },
  { href: "/wishlist", label: "Wishlist" },
];

const supportLinks = [
  { href: "/contact", label: "Contact us" },
  { href: "/faq", label: "Help center" },
  { href: "/terms", label: "Terms of service" },
  { href: "/privacy", label: "Privacy policy" },
  { href: "/refunds", label: "Cancellations & refunds" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    path: "M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm-4 12.2A3.2 3.2 0 1 1 15.2 12 3.2 3.2 0 0 1 12 15.2Zm4.9-7.2a1.1 1.1 0 1 1 1.1-1.1 1.1 1.1 0 0 1-1.1 1.1Z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2A22 22 0 0 0 14.3 4c-2.5 0-4.1 1.5-4.1 4.2v2.6H7.5V14h2.7v8Z",
  },
  {
    label: "Twitter",
    href: "#",
    path: "M22 5.9a8 8 0 0 1-2.3.6 4 4 0 0 0 1.8-2.2 8 8 0 0 1-2.5 1 4 4 0 0 0-6.9 3.7A11.4 11.4 0 0 1 4.5 5a4 4 0 0 0 1.2 5.4 4 4 0 0 1-1.8-.5v.1a4 4 0 0 0 3.2 4 4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 19a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.4-6.1 11.4-11.4v-.5A8 8 0 0 0 22 5.9Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3Z",
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/Travel Logo.png"
                alt="Travelia logo"
                width={256}
                height={256}
                className="h-11 w-11 shrink-0 object-contain"
              />
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                Trav<span className="text-primary-400">elia</span>
              </span>
            </Link>
            <p className="max-w-xs text-[15px] leading-relaxed text-primary-50/70">
              Handcrafted tours to 480+ destinations across 35 countries.
              Trusted by 120,000+ travelers since 2012.
            </p>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-primary-50/80 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Company">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-300">
              Explore
            </h3>
            <ul className="mt-5 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-[15px] text-primary-50/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Support">
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-300">
              Support
            </h3>
            <ul className="mt-5 space-y-3.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block py-1.5 text-[15px] text-primary-50/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary-300">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-[15px] text-primary-50/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" />
                48 Harbor Avenue, Suite 200
                <br />
                San Francisco, CA 94111
              </li>
              <li>
                <a
                  href="tel:+18005550199"
                  className="flex items-center gap-3 py-1.5 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary-400" />
                  +1 (800) 555-0199
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@travelia.com"
                  className="flex items-center gap-3 py-1.5 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary-400" />
                  hello@travelia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:grid sm:grid-cols-3 sm:items-center">
          <p className="text-center text-sm text-primary-50/60 sm:text-left">
            © {new Date().getFullYear()} Travelia. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-2 text-center text-sm text-primary-50/60">
            Made for travelers
            <span className="text-primary-400" aria-hidden="true">
              ✦
            </span>
            Licensed &amp; insured (ATOL 11234)
          </p>
          <a
            href="https://shei-it.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 sm:justify-end"
            aria-label="Shei IT"
          >
            <Image
              src="/Shei IT Logo.png"
              alt="Shei IT logo"
              width={128}
              height={128}
              className="h-8 w-8 object-contain"
            />
            <span className="text-base font-bold text-primary-50/80 transition-colors hover:text-white">
              Shei IT
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}