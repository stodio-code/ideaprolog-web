import Image from "next/image";
import Link from "next/link";
import { businessUnits, company, contact, navigation } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Image
            src={company.logo.white}
            alt={company.name}
            width={264}
            height={72}
            className="h-11 w-auto"
          />
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            {company.name}. {company.tagline}.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Perusahaan</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Unit Bisnis</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {businessUnits.map((unit) => (
              <li key={unit.slug}>
                <a href={unit.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  {unit.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Kontak</h2>
          <ul className="mt-5 space-y-4 text-sm">
            {contact.address && (
              <li className="whitespace-pre-line leading-relaxed">
                {contact.mapsUrl ? (
                  <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {contact.address}
                  </a>
                ) : (
                  contact.address
                )}
              </li>
            )}
            {contact.phone && (
              <li>
                <a href={`tel:${contact.phone.replace(/\D/g, "").replace(/^0/, "+62")}`} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
            )}
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
            )}
            <li>
              <a
                href={contact.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 font-semibold text-white transition hover:bg-brand-500"
              >
                {contact.contactLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-slate-500 sm:px-6 lg:px-8">
          © {company.name} · Berdiri sejak {company.foundedYear}. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
