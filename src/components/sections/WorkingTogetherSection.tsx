import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { ABOUT, WORKING_TOGETHER } from '@/data/siteContent';

export default function WorkingTogetherSection() {
  return (
    <section className="bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Working Together"
            title="An end-to-end client experience."
            description={ABOUT.workingTogether}
          />
        </Reveal>
        <ul className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {WORKING_TOGETHER.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 sm:last:col-span-2 xl:last:col-span-1"
            >
              <Reveal delay={index * 80} className="h-full p-8">
                <span className="font-display text-sm tabular-nums text-brand-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-2xl leading-snug text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-300">{item.description}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
