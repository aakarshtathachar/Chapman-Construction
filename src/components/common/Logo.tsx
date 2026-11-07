import { BUSINESS } from '@/data/siteContent';

interface LogoProps {
  tone?: 'light' | 'dark';
}

/** Wordmark: "C" monogram tile plus the company name. `tone` is the background it sits on. */
export default function Logo({ tone = 'light' }: LogoProps) {
  const onDark = tone === 'dark';
  return (
    <>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg font-display text-2xl font-semibold transition-colors duration-500 ${
          onDark ? 'bg-white/10 text-brand-300 ring-1 ring-white/25 backdrop-blur' : 'bg-ink-900 text-brand-400'
        }`}
      >
        C
      </span>
      <span className="flex flex-col">
        <span
          className={`whitespace-nowrap font-display text-lg font-semibold leading-none tracking-tight transition-colors duration-500 sm:text-xl ${
            onDark ? 'text-white' : 'text-ink-900'
          }`}
        >
          {BUSINESS.name}
        </span>
        <span
          className={`mt-1 text-[0.65rem] font-bold uppercase tracking-[0.25em] transition-colors duration-500 ${
            onDark ? 'text-white/70' : 'text-ink-500'
          }`}
        >
          {BUSINESS.title}
        </span>
      </span>
    </>
  );
}
