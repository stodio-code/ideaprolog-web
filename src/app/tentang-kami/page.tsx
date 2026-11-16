import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { companies, company, history } from "@/data/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Sejarah, visi, dan misi ${company.name}. ${company.vision}`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Kenal lebih dekat dengan kami"
        title="Ideaprolog lebih dari itu"
        description="Sebuah ide dan gagasan tentang dunia pengadaan yang diperjuangkan dengan keyakinan."
      />

      {/* Kutipan founder */}
      <section className="py-20 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-5">
          <div className="relative lg:col-span-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/kegiatan/kebersamaan-tim.jpg"
                alt="Tim Ideaprolog berkumpul bersama"
                fill
                preload
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <figure className="lg:col-span-3">
            <svg viewBox="0 0 32 32" className="size-10 text-brand-200" fill="currentColor" aria-hidden>
              <path d="M9.3 26C5.2 26 2 22.7 2 18.4 2 12 6.6 7 13 6l.8 2.6C9.9 9.8 8 12.2 7.7 15.2c.5-.1 1-.2 1.6-.2 3.6 0 6.3 2.6 6.3 5.6 0 3-2.7 5.4-6.3 5.4Zm16.4 0c-4.1 0-7.3-3.3-7.3-7.6C18.4 12 23 7 29.4 6l.8 2.6c-3.9 1.2-5.8 3.6-6.1 6.6.5-.1 1-.2 1.6-.2 3.6 0 6.3 2.6 6.3 5.6 0 3-2.7 5.4-6.3 5.4Z" />
            </svg>
            <blockquote className="mt-4 text-xl leading-relaxed text-slate-800 text-pretty sm:text-2xl">
              {company.founderQuote.text}
            </blockquote>
            <figcaption className="mt-6 font-semibold text-navy-950">
              {company.founderQuote.author}
              <span className="font-normal text-slate-500"> — {company.founderQuote.role}</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Sejarah */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Sejarah Ideaprolog" title="Berawal dari sebuah pengalaman" />
          <ol className="relative mt-16 space-y-16 lg:space-y-24">
            {history.map((step, i) => (
              <li key={step.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <div className={`relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`object-cover ${step.image.includes("acara") ? "object-[50%_70%]" : ""}`}
                  />
                </div>
                <div>
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-600 text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{step.title}</p>
                  <h3 className="mt-2 text-2xl font-bold text-navy-950 sm:text-3xl">{step.label}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-20 grid gap-4 sm:grid-cols-3">
            {companies.map((c) => (
              <div key={c.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-3xl font-extrabold text-brand-600">{c.year}</p>
                <p className="mt-2 font-semibold text-navy-950">{c.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid gap-6">
            <div className="rounded-3xl bg-navy-950 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Visi kami</p>
              <h3 className="mt-3 text-2xl font-bold text-white">Tim yang hebat berawal dari visi yang hebat</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{company.vision}</p>
            </div>
            <div className="rounded-3xl bg-brand-50 p-8 ring-1 ring-brand-100 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Misi kami</p>
              <h3 className="mt-3 text-2xl font-bold text-navy-950">Unik, khas, dan solutif</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-700">{company.mission}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[3/2] overflow-hidden rounded-2xl">
              <Image
                src="/images/kegiatan/tim-manajemen.png"
                alt="Jajaran tim manajemen Ideaprolog"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/kegiatan/rapat-konsultasi.jpg"
                alt="Rapat konsultasi bersama klien"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/kegiatan/visi-misi.png"
                alt="Founder dan co-founder Ideaprolog saat memberikan materi"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
