import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { PROCESS } from '@/data/siteContent';

export default function ProcessSection() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title="Straightforward from start to finish."
            description="Every project follows the same simple path, so you always know what comes next."
          />
        </Reveal>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ink-900/15 to-transparent lg:block"
          />
          {PROCESS.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 100} className="relative flex flex-col items-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 font-display text-xl text-brand-400 ring-8 ring-paper">
                  {index + 1}
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink-900">{step.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-ink-600">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
