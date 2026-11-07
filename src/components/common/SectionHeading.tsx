interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  const dark = tone === 'dark';

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      <p
        className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] ${
          dark ? 'text-brand-300' : 'text-brand-700'
        }`}
      >
        <span className={`h-px w-8 ${dark ? 'bg-brand-300' : 'bg-brand-600'}`} />
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl ${
          dark ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-ink-300' : 'text-ink-600'}`}>{description}</p>
      )}
    </div>
  );
}
