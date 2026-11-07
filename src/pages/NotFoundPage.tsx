import { ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router';

export default function NotFoundPage() {
  return (
    <section id="top" className="flex min-h-[80svh] items-center bg-ink-900 pb-24 pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-300">Page not found</p>
        <h1 className="mt-6 font-display text-5xl font-medium text-white sm:text-6xl">
          We couldn't find that page.
        </h1>
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-brand-500 px-8 py-4 font-bold text-ink-900 transition hover:bg-brand-400"
        >
          Back to home
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
