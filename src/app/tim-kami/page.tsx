import type { Metadata } from "next";
import Image from "next/image";
import { Container, CtaBand, PageHero } from "@/components/ui";
import { company, team, type TeamMember } from "@/data/company";

export const metadata: Metadata = {
  title: "Tim Kami",
  description: `Temui para sosok hebat di balik ${company.shortName}. ${company.teamPhilosophy}`,
};

const leaders = team.filter((m) => m.isLeadership);
const managers = team.filter((m) => !m.isLeadership);

function ContactLinks({ member, dark = false }: { member: TeamMember; dark?: boolean }) {
  const base = dark
    ? "bg-white/10 text-white hover:bg-white/20"
    : "bg-slate-100 text-slate-700 hover:bg-brand-50 hover:text-brand-700";
  return (
    <div className="flex flex-wrap gap-2">
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${base}`}>
          LinkedIn
        </a>
      )}
      {member.profileUrl && (
        <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${base}`}>
          Profil Pengajar
        </a>
      )}
      {member.email && (
        <a href={`mailto:${member.email}`} className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${base}`}>
          Email
        </a>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Tim Kami"
        title={<>Temui para sosok hebat di balik Ideaprolog</>}
        description={company.teamPhilosophy}
      />

      {/* Pimpinan */}
      <section className="py-20 sm:py-24">
        <Container className="space-y-10">
          {leaders.map((m, i) => (
            <article
              id={m.slug}
              key={m.slug}
              className="grid scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-5"
            >
              <div className={`relative bg-gradient-to-b from-brand-50 to-brand-100 lg:col-span-2 ${i % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={m.photo}
                  alt={m.name}
                  width={520}
                  height={570}
                  preload={i === 0}
                  className="mx-auto h-auto w-full max-w-sm lg:max-w-none"
                />
              </div>
              <div className="p-8 sm:p-10 lg:col-span-3">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{m.role}</p>
                <h2 className="mt-2 text-2xl font-bold text-navy-950 sm:text-3xl">{m.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{m.location}</p>
                <div className="mt-6 space-y-4 leading-relaxed text-slate-600">
                  {m.bio.slice(0, 2).map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
                {m.bio.length > 2 && (
                  <details className="group mt-4">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-brand-600 hover:text-brand-700">
                      <span className="group-open:hidden">Baca profil lengkap ↓</span>
                      <span className="hidden group-open:inline">Tutup ↑</span>
                    </summary>
                    <div className="mt-4 space-y-4 leading-relaxed text-slate-600">
                      {m.bio.slice(2).map((p) => (
                        <p key={p.slice(0, 32)}>{p}</p>
                      ))}
                    </div>
                  </details>
                )}
                <div className="mt-8">
                  <ContactLinks member={m} />
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      {/* Manajer */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">Jajaran Manajer</h2>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Para profesional di bidang pengadaan, hukum, teknologi, dan pelatihan yang mendampingi klien kami.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {managers.map((m) => (
              <article
                id={m.slug}
                key={m.slug}
                className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <div className="bg-gradient-to-b from-brand-50 to-brand-100">
                  <Image src={m.photo} alt={m.name} width={520} height={570} className="h-auto w-full" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-navy-950">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-600">{m.role}</p>
                  <p className="mt-1 text-xs text-slate-500">{m.location}</p>
                  {m.bio.length > 0 && (
                    <details className="group mt-4 flex-1">
                      <summary className="cursor-pointer list-none text-sm font-semibold text-slate-700 hover:text-brand-600">
                        <span className="group-open:hidden">Profil selengkapnya ↓</span>
                        <span className="hidden group-open:inline">Tutup ↑</span>
                      </summary>
                      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
                        {m.bio.map((p) => (
                          <p key={p.slice(0, 32)}>{p}</p>
                        ))}
                      </div>
                    </details>
                  )}
                  <div className="mt-5">
                    <ContactLinks member={m} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
