"use client";

import Link from "next/link";
import { useState } from "react";
import { brand } from "@/lib/brand";
import { Wordmark } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" aria-label={brand.name}>
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {brand.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-ink/75 transition hover:text-sage"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-sage-deep"
          >
            {brand.contact.portalLabel}
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink"
          aria-label="Menu"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-cream px-5 py-3 md:hidden">
          {brand.nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-2 text-ink/80"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-sage px-5 py-3 text-center font-medium text-cream"
          >
            {brand.contact.portalLabel}
          </Link>
        </nav>
      )}
    </header>
  );
}
