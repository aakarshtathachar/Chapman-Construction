import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Logo from '@/components/common/Logo';
import { BUSINESS, NAV_LINKS } from '@/data/siteContent';
import { useScrolledPast } from '@/hooks/useScrollState';
import { Link, useRouter } from '@/lib/router';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolledPast(40);
  const { path } = useRouter();
  const solid = scrolled || menuOpen;

  useEffect(() => setMenuOpen(false), [path]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/90 shadow-[0_1px_0_rgba(18,24,35,0.08)] backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-all duration-500 lg:px-8 ${
          solid ? 'h-20' : 'h-24'
        }`}
      >
        <Link to="/" className="group flex items-center gap-3" aria-label={`${BUSINESS.name} home`}>
          <Logo tone={solid ? 'light' : 'dark'} />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = path === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={`relative whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-semibold transition-colors duration-300 ${
                  solid
                    ? isActive
                      ? 'text-ink-900'
                      : 'text-ink-500 hover:text-ink-900'
                    : isActive
                      ? 'text-white'
                      : 'text-white/75 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3.5 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-500 transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-bold text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg sm:px-5"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{BUSINESS.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={`flex h-11 w-11 items-center justify-center rounded-full transition xl:hidden ${
              solid ? 'text-ink-900 hover:bg-ink-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Mobile" className="animate-fade-in border-t border-ink-100 bg-white xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={path === link.to ? 'page' : undefined}
                className={`border-b border-ink-100 py-4 font-display text-2xl last:border-0 ${
                  path === link.to ? 'text-brand-700' : 'text-ink-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
