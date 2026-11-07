import { Check } from 'lucide-react';
import FeatureGrid from '@/components/common/FeatureGrid';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import GallerySection from '@/components/sections/GallerySection';
import { SEPTIC_SERVICES, workByCategory, workImage } from '@/data/siteContent';

const WHY_US = [
  'Our own excavation equipment and experienced operators',
  'One team handling the dig, the install, and the restoration',
  'Clear communication and budgeting from day one',
  'A clean, organized job site and a yard put back together',
];

export default function SepticPage() {
  return (
    <>
      <PageHero
        image="septic-2"
        imagePosition="center 60%"
        eyebrow="Septic Systems"
        title={
          <>
            Septic systems, built <span className="italic text-brand-400">right</span> from the ground up.
          </>
        }
        description="New installations and full system replacements, handled by a construction company with the equipment, crew, and 40+ years of site-work experience to do the job well."
      />

      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="grid grid-cols-2 gap-4">
            <img
              src={workImage('septic-1', 800)}
              alt="Septic leach field with white distribution pipes running over crushed stone"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl shadow-ink-900/10"
            />
            <img
              src={workImage('septic-2', 800)}
              alt="Septic pressure distribution piping over a prepared sand bed"
              loading="lazy"
              className="mt-12 aspect-[3/4] w-full rounded-2xl object-cover shadow-xl shadow-ink-900/10"
            />
          </Reveal>
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Why Chapman"
                title="The job is only as good as what's underground."
              />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg leading-relaxed text-ink-600">
                A septic system is one of the most important parts of your property, and one of the least visible.
                Chapman Construction brings the same start-to-finish project management we use on custom homes to
                every septic installation, so the work is done carefully, cleanly, and right the first time.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 flex flex-col gap-4">
                {WHY_US.map((item) => (
                  <li key={item} className="flex gap-4 text-ink-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-500/20">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Septic Services"
              title="From excavation to final grade."
              description="Whether you are building new or replacing an older system, we handle every phase of the work."
            />
          </Reveal>
          <div className="mt-16">
            <FeatureGrid features={SEPTIC_SERVICES} columns={2} />
          </div>
        </div>
      </section>

      <GallerySection
        photos={workByCategory('Septic')}
        eyebrow="Septic Gallery"
        title="Recent septic installations."
      />
    </>
  );
}
