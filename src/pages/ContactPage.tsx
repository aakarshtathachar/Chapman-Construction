import ContactSection from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <>
      <section id="top" className="relative overflow-hidden bg-ink-900 pb-4 pt-40 sm:pt-48">
        <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="flex animate-fade-up items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
            <span className="h-px w-10 bg-brand-300" />
            Contact Us
          </p>
          <h1
            className="mt-8 max-w-3xl animate-fade-up font-display text-5xl font-medium leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '120ms' }}
          >
            Tell us about your <span className="italic text-brand-400">project.</span>
          </h1>
          <p
            className="mt-8 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink-200 sm:text-xl"
            style={{ animationDelay: '240ms' }}
          >
            Send us a message, or call us for more information. Use our contact form to tell us more about your project,
            and we will be back in touch as soon as possible.
          </p>
        </div>
      </section>
      <ContactSection heading={false} />
    </>
  );
}
