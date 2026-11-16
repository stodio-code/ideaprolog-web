import Image from "next/image";
import type { ReactNode } from "react";
import { activities, company, contact } from "@/data/company";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">{description}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: ReactNode; description?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_0%,rgba(59,110,245,0.45),transparent_70%)]"
      />
      <Container className="relative py-20 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white text-balance sm:text-5xl">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 text-pretty">{description}</p>}
      </Container>
    </section>
  );
}

export function ExternalArrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CtaBand() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-14 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 size-72 rounded-full bg-white/10"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 right-40 size-72 rounded-full bg-white/5"
          />
          <h2 className="relative max-w-2xl text-2xl font-bold tracking-tight text-white text-balance sm:text-3xl">
            {company.cta.title} <span className="text-accent-400">{company.cta.highlight}</span>
          </h2>
          <a
            href={contact.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50 lg:mt-0"
          >
            {company.cta.label}
            <ExternalArrow />
          </a>
        </div>
      </Container>
    </section>
  );
}

export function ActivityGallery() {
  const [first, ...rest] = activities;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
      <figure className="group relative overflow-hidden rounded-2xl sm:col-span-2 lg:row-span-2">
        <Image
          src={first.src}
          alt={first.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="aspect-[4/3] lg:aspect-auto lg:h-full" />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-sm font-medium text-white">
          {first.caption}
        </figcaption>
      </figure>
      {rest.slice(0, 4).map((item) => (
        <figure key={item.src} className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
