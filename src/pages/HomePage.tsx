import { ArrowRight } from 'lucide-react';
import CtaBand from '@/components/common/CtaBand';
import PageHero from '@/components/common/PageHero';
import DivisionsSection from '@/components/sections/DivisionsSection';
import WorkingTogetherSection from '@/components/sections/WorkingTogetherSection';
import { DIVISIONS } from '@/data/siteContent';
import { Link } from '@/lib/router';

export default function HomePage() {
  return (
    <>
      <PageHero
        size="full"
        image="pool-2"
        eyebrow="Pools · Septic Systems · Homes & Remodels"
        title={
          <>
            Building dreams from start to finish for over <span className="italic text-brand-400">40 years.</span>
          </>
        }
        description="From custom multimillion-dollar homes to backyard pool paradises and septic systems, Chapman Construction is a one-stop shop for any construction project."
      >
        <div className="relative border-t border-white/10 bg-ink-900/60 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl px-6 sm:grid-cols-3 sm:divide-x sm:divide-white/10 lg:px-8">
            {DIVISIONS.map((division, index) => {
              const Icon = division.icon;
              return (
                <Link
                  key={division.to}
                  to={division.to}
                  className="group flex animate-fade-up items-center gap-4 py-5 sm:px-6 sm:py-7 sm:first:pl-0"
                  style={{ animationDelay: `${480 + index * 100}ms` }}
                >
                  <Icon className="h-6 w-6 shrink-0 text-brand-400" />
                  <span className="flex-1 font-display text-lg text-white">{division.name}</span>
                  <ArrowRight className="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-brand-300" />
                </Link>
              );
            })}
          </div>
        </div>
      </PageHero>
      <DivisionsSection />
      <WorkingTogetherSection />
      <CtaBand />
    </>
  );
}
