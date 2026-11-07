import { ArrowRight, Phone } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import { BUSINESS } from '@/data/siteContent';
import { Link } from '@/lib/router';

interface CtaBandProps {
  title?: string;
  description?: string;
}

export default function CtaBand({
  title = 'Ready to build something great?',
  description = 'Tell us about your project and we will be back in touch as soon as possible.',
}: CtaBandProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-8 py-14 sm:px-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl font-medium leading-tight text-white sm:text-5xl">{title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-300">{description}</p>
            </div>
            <div className="relative mt-10 flex flex-wrap gap-4 lg:mt-0 lg:shrink-0 lg:flex-col">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-500 px-8 py-4 font-bold text-ink-900 transition hover:-translate-y-0.5 hover:bg-brand-400"
              >
                Contact Us
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-8 py-4 font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
