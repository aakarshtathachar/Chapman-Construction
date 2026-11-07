import { Box } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import GallerySection from '@/components/sections/GallerySection';
import { HOME_PROJECTS, workByCategory, workImage } from '@/data/siteContent';

const STAGES = [
  { slug: 'home-framing', label: 'Framing', alt: 'Waterfront home being framed on raised pilings' },
  { slug: 'home-before', label: 'Sheathed & wrapped', alt: 'Waterfront home sheathed and wrapped in house wrap' },
  { slug: 'home-after', label: 'Finished', alt: 'Finished gray waterfront home with a wide deck facing the beach' },
];

export default function HomesPage() {
  const [dreamHome, ...projects] = HOME_PROJECTS;

  return (
    <>
      <PageHero
        image="home-after"
        imagePosition="center 40%"
        eyebrow="Custom Homes · Additions · Remodels"
        title={
          <>
            Your ideas, your needs, your <span className="italic text-brand-400">dreams.</span> Built.
          </>
        }
        description="Custom homes, additions, finished basements, garages, and decks, managed from the first design to the final walkthrough."
      />

      <section className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
          <div>
            <Reveal>
              <SectionHeading align="left" eyebrow="New Construction" title={dreamHome.title} />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg leading-relaxed text-ink-600">{dreamHome.description}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex gap-5 rounded-2xl bg-brand-50 p-6 ring-1 ring-brand-500/20">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm">
                  <Box className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-xl text-ink-900">See it in 3D before we break ground</p>
                  <p className="mt-1 leading-relaxed text-ink-600">
                    Colors, room sizes, trim, kitchen layouts, window styles, and beyond.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <img
              src={workImage('home-after', 1600)}
              alt="Finished three-story waterfront custom home by Chapman Construction"
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover shadow-2xl shadow-ink-900/15"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="From the Ground Up"
              title="Watch a custom home come together."
              description="A waterfront home built on pilings, from framing to the finished house."
            />
          </Reveal>
          <ol className="mt-16 grid gap-6 md:grid-cols-3">
            {STAGES.map((stage, index) => (
              <li key={stage.slug}>
                <Reveal delay={index * 120}>
                  <figure className="overflow-hidden rounded-2xl bg-ink-800">
                    <img
                      src={workImage(stage.slug, 800)}
                      alt={stage.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <figcaption className="flex items-center gap-4 p-5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 font-display text-ink-900">
                        {index + 1}
                      </span>
                      <span className="font-display text-xl text-white">{stage.label}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projects" className="bg-paper py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Additions & Remodels"
                title="Add the missing piece to your home."
                description="Love your home but need more from it? From a sunroom to a dream garage, we build the space you have been wishing for."
              />
            </Reveal>
          </div>

          <ol className="border-t border-ink-900/10">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <li key={project.title} className="border-b border-ink-900/10">
                  <Reveal delay={index * 60}>
                    <div className="grid gap-x-8 py-9 sm:grid-cols-[auto_1fr]">
                      <span className="hidden pt-1 font-display text-sm tabular-nums text-ink-400 sm:block">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="flex items-center gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-700 shadow-sm ring-1 ring-ink-900/5">
                            <Icon className="h-5 w-5" />
                          </span>
                          <h3 className="font-display text-2xl font-medium text-ink-900 sm:text-3xl">{project.title}</h3>
                        </div>
                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-600">{project.description}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <GallerySection photos={workByCategory('Homes')} eyebrow="Home Gallery" title="Homes we have built." />
    </>
  );
}
