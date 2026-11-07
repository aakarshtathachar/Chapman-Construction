import { Check, Dog, X } from 'lucide-react';
import FeatureGrid from '@/components/common/FeatureGrid';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import GallerySection from '@/components/sections/GallerySection';
import { POOL_BENEFITS, POOL_COMPARISON, POOLS_INTRO, workByCategory, workImage } from '@/data/siteContent';

export default function PoolsPage() {
  return (
    <>
      <PageHero
        image="pool-1"
        eyebrow="Chapman Pools and Spas Div."
        title={
          <>
            Your backyard <span className="italic text-brand-400">paradise,</span> built to last.
          </>
        }
        description="Handcrafted fiberglass pools installed by a construction company with over 40 years of experience. Durable, low-maintenance, and designed around the way you want to relax."
      />

      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <SectionHeading align="left" eyebrow="Why Choose Us" title="Why choose Chapman Pools and Spas?" />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg leading-relaxed text-ink-600">{POOLS_INTRO}</p>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                Contact us today to bring our project management skills and extensive construction experience to your
                backyard paradise project.
              </p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <img
              src={workImage('pool-4', 1600)}
              alt="Rectangular fiberglass pool surrounded by a gray paver patio at sunset"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-ink-900/15"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The Fiberglass Advantage"
              title="Built stronger. Easier to own."
              description="Fiberglass pools are known for their strength, durability, and resistance to cracking, fading, harsh weather, and chemicals."
            />
          </Reveal>
          <div className="mt-16">
            <FeatureGrid features={POOL_BENEFITS} />
          </div>
        </div>
      </section>

      <section id="compare" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Reveal>
                <SectionHeading align="left" eyebrow="Compare" title="Fiberglass vs. the alternatives." />
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-8 text-lg leading-relaxed text-ink-600">{POOL_COMPARISON.intro}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex gap-5 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-500/20">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm">
                    <Dog className="h-6 w-6" />
                  </span>
                  <p className="leading-relaxed text-ink-700">{POOL_COMPARISON.dog}</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="overflow-hidden rounded-3xl ring-1 ring-ink-900/10">
                <div className="grid grid-cols-[1fr_1fr] bg-ink-900 text-white sm:grid-cols-[0.8fr_1fr_1fr]">
                  <span aria-hidden="true" className="hidden sm:block" />
                  <p className="p-5 font-display text-xl text-brand-300">Fiberglass</p>
                  <p className="p-5 font-display text-xl text-ink-300">Concrete &amp; liner</p>
                </div>
                <dl>
                  {POOL_COMPARISON.rows.map((row, index) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-2 sm:grid-cols-[0.8fr_1fr_1fr] ${index % 2 ? 'bg-paper' : 'bg-white'}`}
                    >
                      <dt className="col-span-2 px-5 pt-5 text-xs font-bold uppercase tracking-widest text-ink-500 sm:col-span-1 sm:py-5">
                        {row.label}
                      </dt>
                      <dd className="flex gap-3 p-5 font-semibold text-ink-900">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-success-600" />
                        {row.fiberglass}
                      </dd>
                      <dd className="flex gap-3 p-5 text-ink-600">
                        <X className="mt-0.5 h-5 w-5 shrink-0 text-ink-400" />
                        {row.other}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GallerySection
        photos={workByCategory('Pools')}
        eyebrow="Pool Gallery"
        title="Pools we have built."
        description="Free-form and classic designs, built-in spas, and the patios that tie them together."
      />
    </>
  );
}
