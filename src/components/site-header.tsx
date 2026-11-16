"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company, contact, navigation } from "@/data/company";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src={company.logo.color}
            alt={company.name}
            width={264}
            height={72}
            className="h-10 w-auto lg:h-12"
            preload
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Utama">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 transition hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            Hubungi Kami
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-4 pb-6 pt-2 md:hidden" aria-label="Utama (seluler)">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-full bg-brand-600 px-5 py-3 text-center text-base font-semibold text-white"
          >
            Hubungi Kami
          </a>
        </nav>
      )}
    </header>
  );
}
