import Reveal from '@/components/common/Reveal';
import type { Feature } from '@/data/siteContent';

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`grid gap-6 sm:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''}`}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Reveal key={feature.title} delay={(index % 3) * 100} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-500/20">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-ink-900">{feature.title}</h3>
              <p className="mt-4 leading-relaxed text-ink-600">{feature.description}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
