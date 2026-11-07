import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { ABOUT, STATS, workImage } from '@/data/siteContent';
import { Link } from '@/lib/router';

interface AboutSectionProps {
  showLink?: boolean;
}

export default function AboutSection({ showLink = true }: AboutSectionProps) {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative pb-10 sm:pb-0">
            <img
              src={workImage('home-after', 1600)}
              alt="Finished waterfront custom home built by Chapman Construction"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl shadow-ink-900/15 sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute -bottom-2 right-4 w-[58%] overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl sm:-bottom-8 sm:-right-6 lg:-right-10">
              <img
                src={workImage('pool-install', 800)}
                alt="Chapman Construction excavator setting a fiberglass pool into a backyard"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="pt-6 lg:pt-0">
            <Reveal>
              <SectionHeading align="left" eyebrow="What We Do" title="One company for the whole project." />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-ink-600">
                <p>{ABOUT.whatWeDo}</p>
              </div>
            </Reveal>
            {showLink && (
              <Reveal delay={200}>
                <Link
                  to="/about"
                  className="group mt-10 inline-flex items-center gap-2 border-b-2 border-brand-500 pb-1 font-bold text-ink-900 transition hover:border-ink-900"
                >
                  More about Chapman Construction
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </Reveal>
            )}
          </div>
        </div>

        <Reveal delay={100}>
          <dl className="mt-24 grid divide-y divide-ink-900/10 border-y border-ink-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center px-6 py-10 text-center">
                <dt className="mt-3 max-w-[16rem] text-sm font-bold uppercase tracking-widest text-ink-500">
                  {stat.label}
                </dt>
                <dd className="order-first font-display text-6xl font-medium tracking-tight text-ink-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
