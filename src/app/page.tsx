import Image from "next/image";
import Link from "next/link";
import { ActivityGallery, Container, CtaBand, ExternalArrow, SectionHeading } from "@/components/ui";
import { businessUnits, company, contact, team } from "@/data/company";

const leaders = team.filter((m) => m.isLeadership);

const stats = [
  { value: String(company.foundedYear), label: "Tahun berdiri" },
  { value: String(businessUnits.length), label: "Unit bisnis" },
  { value: `${team.length}`, label: "Tenaga ahli inti" },
  { value: "BUMN/BUMD", label: "Fokus layanan" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div
          aria-hidden
          className="absolute -right-40 -top-40 size-[36rem] rounded-full bg-brand-100/70 blur-3xl"
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
              <span className="size-2 rounded-full bg-brand-500" />
              {company.tagline}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-950 text-balance sm:text-5xl lg:text-6xl">
              {company.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-700 text-pretty">{company.hero.lead}</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 text-pretty">{company.hero.body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={contact.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
              >
                Konsultasi Sekarang
                <ExternalArrow />
              </a>
              <a
                href="#unit-bisnis"
                className="inline-flex items-center rounded-full px-7 py-3.5 font-semibold text-navy-950 ring-1 ring-slate-300 transition hover:bg-white hover:ring-slate-400"
              >
                Lihat Unit Bisnis
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20">
              <Image
                src="/images/kegiatan/pelatihan-pengadaan.jpg"
                alt="Dr. Ir. Nandang Sutisna memaparkan materi pengadaan barang/jasa"
                fill
                preload
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:left-8">
              <Image src={company.logo.icon} alt="" width={48} height={48} className="size-12" />
              <div>
                <p className="text-sm font-bold text-navy-950">Spesialis pengadaan</p>
                <p className="text-xs text-slate-500">Regulasi, SOP &amp; e-Procurement</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-white">
        <Container className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-brand-600 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Unit bisnis */}
      <section id="unit-bisnis" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Unit Bisnis"
            title="Satu ekosistem untuk seluruh kebutuhan pengadaan Anda"
            description="Dari pelatihan, konsultasi, e-procurement, hingga layanan hukum dan sertifikasi profesi."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {businessUnits.map((unit) => (
              <article
                key={unit.slug}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
              >
                <div className="flex h-16 items-center">
                  <Image
                    src={unit.logo}
                    alt={`Logo ${unit.name}`}
                    width={unit.slug === "lsp-ideaprolog" ? 150 : 64}
                    height={unit.slug === "lsp-ideaprolog" ? 50 : 64}
                    className={unit.slug === "lsp-ideaprolog" ? "h-12 w-auto" : "size-16"}
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-950">{unit.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{unit.description}</p>
                <a
                  href={unit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700"
                >
                  Kunjungi {unit.urlLabel}
                  <ExternalArrow />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Solusi */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-300">Solusi Kami</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
                Kontribusi nyata untuk tata nilai pengadaan yang baik
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Cepat, sederhana, bersih dan aman. Pilih solusi yang paling sesuai dengan kebutuhan organisasi Anda.
              </p>
            </div>
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:col-span-2">
              {businessUnits.map((unit, i) => (
                <li key={unit.slug} className="bg-navy-950">
                  <a
                    href={unit.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col p-7 transition hover:bg-white/5"
                  >
                    <span className="text-sm font-semibold text-brand-300">0{i + 1}</span>
                    <h3 className="mt-3 text-lg font-bold text-white">{unit.solutionTitle}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{unit.solutionDescription}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                      {unit.name}
                      <ExternalArrow className="size-4 text-brand-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Founder */}
      <section className="py-20 sm:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-2 gap-4">
              {leaders.map((m, i) => (
                <div
                  key={m.slug}
                  className={`overflow-hidden rounded-2xl bg-gradient-to-b from-brand-50 to-brand-100 ${i === 1 ? "mt-10" : ""}`}
                >
                  <Image src={m.photo} alt={m.name} width={520} height={570} className="h-auto w-full" />
                  <div className="bg-white p-4">
                    <p className="text-sm font-bold text-navy-950">{m.name.split(",")[0]}</p>
                    <p className="text-xs text-slate-500">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Tentang Kami" title="Ideaprolog lebih dari itu" />
            <figure className="mt-8 border-l-4 border-brand-500 pl-6">
              <blockquote className="text-lg leading-relaxed text-slate-700 italic text-pretty">
                “{company.founderQuote.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-navy-950">
                {company.founderQuote.author} <span className="font-normal text-slate-500">— {company.founderQuote.role}</span>
              </figcaption>
            </figure>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/tentang-kami"
                className="rounded-full bg-navy-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-900"
              >
                Sejarah &amp; Visi Kami
              </Link>
              <Link
                href="/tim-kami"
                className="rounded-full px-6 py-3 text-sm font-semibold text-navy-950 ring-1 ring-slate-300 transition hover:ring-slate-400"
              >
                Kenali Tim Kami
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Dokumentasi */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Dokumentasi Kegiatan"
            title="Hadir langsung bersama klien dan mitra"
            description="Pelatihan, konsultasi, dan pendampingan pengadaan di berbagai BUMN, BUMD, dan instansi pemerintah."
          />
          <div className="mt-12">
            <ActivityGallery />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
