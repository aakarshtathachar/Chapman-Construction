import Logo from '@/components/common/Logo';
import { BUSINESS, DIVISIONS, NAV_LINKS } from '@/data/siteContent';
import { Link } from '@/lib/router';

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 text-ink-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <Logo tone="dark" />
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed">{BUSINESS.tagline}</p>
          <p className="mt-4 text-sm text-ink-400">Home of {BUSINESS.poolsDivision} Div.</p>
        </div>

        <nav aria-label="Services">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">What We Build</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {DIVISIONS.map((division) => (
              <li key={division.to}>
                <Link to={division.to} className="transition hover:text-brand-300">
                  {division.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer">
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">Explore</h3>
          <ul className="mt-6 flex flex-col gap-3">
            {NAV_LINKS.filter((link) => !DIVISIONS.some((d) => d.to === link.to)).map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-white">Call Us</h3>
          <a
            href={BUSINESS.phoneHref}
            className="mt-6 inline-block font-display text-2xl text-white transition hover:text-brand-300"
          >
            {BUSINESS.phone}
          </a>
          <Link to="/contact" className="mt-2 block transition hover:text-brand-300">
            Or send us a message
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Pools &middot; Septic &middot; Homes, Additions and Remodels</p>
        </div>
      </div>
    </footer>
  );
}
