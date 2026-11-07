import type { ReactNode } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS, workImage } from '@/data/siteContent';
import { Link } from '@/lib/router';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imagePosition?: string;
  size?: 'full' | 'compact';
  children?: ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imagePosition = 'center',
  size = 'compact',
  children,
}: PageHeroProps) {
  const full = size === 'full';

  return (
    <section
      id="top"
      className={`relative isolate flex flex-col overflow-hidden bg-ink-900 ${full ? 'min-h-[100svh]' : 'min-h-[78svh]'}`}
    >
      <img
        src={workImage(image, 1600)}
        srcSet={`${workImage(image, 1600)} 1600w, ${workImage(image, 2400)} 2400w`}
        sizes="100vw"
        alt=""
        style={{ objectPosition: imagePosition }}
        className="absolute inset-0 -z-10 h-full w-full animate-slow-zoom object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-900/95 via-ink-900/70 to-ink-900/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-ink-900 to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-16 pt-36 lg:px-8">
        <div className="max-w-3xl">
          <p className="flex animate-fade-up items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
            <span className="h-px w-10 bg-brand-300" />
            {eyebrow}
          </p>
          <h1
            className={`mt-8 animate-fade-up font-display font-medium leading-[1.04] tracking-tight text-white ${
              full ? 'text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]' : 'text-5xl sm:text-6xl lg:text-7xl'
            }`}
            style={{ animationDelay: '120ms' }}
          >
            {title}
          </h1>
          <p
            className="mt-8 max-w-xl animate-fade-up text-lg leading-relaxed text-ink-200 sm:text-xl"
            style={{ animationDelay: '240ms' }}
          >
            {description}
          </p>

          <div className="mt-10 flex animate-fade-up flex-wrap gap-4" style={{ animationDelay: '360ms' }}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-ink-900 shadow-xl shadow-brand-500/20 transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 text-base font-bold text-white backdrop-blur transition hover:border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}
