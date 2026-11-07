import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { DIVISIONS, workImage } from '@/data/siteContent';
import { Link } from '@/lib/router';

export default function DivisionsSection() {
  return (
    <section id="services" className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What We Build"
            title="Pools, septic systems, and homes. All under one roof."
            description="The resources, skills, equipment, and knowledge to handle any project, from a custom backyard redesign to a custom home."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {DIVISIONS.map((division, index) => {
            const Icon = division.icon;
            return (
              <Reveal key={division.to} delay={index * 100} className="h-full">
                <Link
                  to={division.to}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-900/5 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-ink-900/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={workImage(division.image, 800)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-lg backdrop-blur">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-2xl font-medium text-ink-900 sm:text-3xl">{division.name}</h3>
                    <p className="mt-4 flex-1 leading-relaxed text-ink-600">{division.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {division.highlights.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-ink-900/10 bg-paper px-3 py-1 text-sm font-medium text-ink-700"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-8 inline-flex items-center gap-2 font-bold text-ink-900">
                      Explore {division.short}
                      <ArrowRight className="h-4 w-4 text-brand-600 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
