import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { workImage, type WorkCategory, type WorkPhoto } from '@/data/siteContent';

type Filter = 'All' | WorkCategory;

interface LightboxProps {
  photos: WorkPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[index];
  const count = photos.length;

  const step = useCallback((delta: number) => onNavigate((index + delta + count) % count), [index, count, onNavigate]);

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, step]);

  const navButton =
    'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-ink-900/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between px-6 py-5 text-white"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="text-sm font-semibold tabular-nums text-ink-300">
          {index + 1} / {count}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close gallery" className={navButton}>
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
        <img
          key={photo.slug}
          src={workImage(photo.slug, 1600)}
          alt={photo.alt}
          className="max-h-full max-w-full animate-fade-in rounded-lg object-contain shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        />
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className={`${navButton} absolute left-4 top-1/2 -translate-y-1/2 sm:left-6`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className={`${navButton} absolute right-4 top-1/2 -translate-y-1/2 sm:right-6`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>

      <div className="px-6 py-6 text-center" onClick={(event) => event.stopPropagation()}>
        <p className="text-xs font-bold uppercase tracking-widest text-brand-300">{photo.category}</p>
        <p className="mt-2 font-display text-xl text-white">{photo.title}</p>
      </div>
    </div>
  );
}

interface GallerySectionProps {
  photos: WorkPhoto[];
  eyebrow?: string;
  title?: string;
  description?: string;
  showFilters?: boolean;
  id?: string;
}

export default function GallerySection({
  photos: allPhotos,
  eyebrow = 'Our Work',
  title = 'Craftsmanship you can see.',
  description,
  showFilters = false,
  id = 'work',
}: GallerySectionProps) {
  const [filter, setFilter] = useState<Filter>('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = Array.from(new Set(allPhotos.map((photo) => photo.category)));
  const filters: Filter[] = ['All', ...categories];
  const photos = filter === 'All' ? allPhotos : allPhotos.filter((photo) => photo.category === filter);
  const closeLightbox = useCallback(() => setOpenIndex(null), []);

  return (
    <section id={id} className="bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading tone="dark" align="left" eyebrow={eyebrow} title={title} description={description} />
          </Reveal>

          {showFilters && categories.length > 1 && (
            <Reveal delay={100}>
              <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
                {filters.map((option) => {
                  const isActive = option === filter;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setFilter(option)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 ${
                        isActive
                          ? 'bg-brand-500 text-ink-900'
                          : 'border border-white/15 text-ink-200 hover:border-white/40 hover:text-white'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </Reveal>
          )}
        </div>

        <div
          key={filter}
          className="mt-14 grid grid-flow-dense auto-rows-[260px] gap-5 sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-3"
        >
          {photos.map((photo, index) => {
            const spans =
              filter === 'All' && photos.length > 3
                ? `${photo.featured ? 'sm:col-span-2' : ''} ${photo.orientation === 'portrait' ? 'row-span-2' : ''}`
                : '';
            return (
              <button
                key={photo.slug}
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`View larger: ${photo.title}`}
                className={`group relative block h-full w-full animate-fade-up overflow-hidden rounded-2xl ${spans} bg-ink-800 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/60`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <img
                  src={workImage(photo.slug, photo.featured ? 1600 : 800)}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block text-xs font-bold uppercase tracking-widest text-brand-300">
                    {photo.category}
                  </span>
                  <span className="mt-1.5 block font-display text-xl leading-snug text-white">{photo.title}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox photos={photos} index={openIndex} onClose={closeLightbox} onNavigate={setOpenIndex} />
      )}
    </section>
  );
}
