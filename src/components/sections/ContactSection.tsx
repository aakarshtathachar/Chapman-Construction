import { ArrowRight, MessageSquareText, Phone } from 'lucide-react';
import InquiryForm from '@/components/forms/InquiryForm';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import { BUSINESS, DIVISIONS } from '@/data/siteContent';
import { Link } from '@/lib/router';

interface ContactSectionProps {
  /** Set false when the page hero already introduces the contact form. */
  heading?: boolean;
}

export default function ContactSection({ heading = true }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden bg-ink-900 ${heading ? 'py-24 sm:py-32' : 'pb-24 pt-12 sm:pb-32 sm:pt-16'}`}
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <div>
          {heading && (
            <Reveal>
              <SectionHeading
                tone="dark"
                align="left"
                eyebrow="Contact Us"
                title="Tell us about your project."
                description="Send us a message, or call us for more information. Use our contact form to tell us more about your project, and we will be back in touch as soon as possible."
              />
            </Reveal>
          )}

          <Reveal delay={100}>
            <a
              href={BUSINESS.phoneHref}
              className={`group flex items-center gap-5 rounded-2xl bg-white/[0.06] p-6 ring-1 ring-white/10 transition hover:bg-white/10 ${
                heading ? 'mt-12' : ''
              }`}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-500 text-ink-900">
                <Phone className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-widest text-ink-400">Call us</span>
                <span className="mt-1 block font-display text-3xl text-white sm:text-4xl">{BUSINESS.phone}</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6">
              <p className="flex items-center gap-3 font-bold text-white">
                <MessageSquareText className="h-5 w-5 text-brand-400" />
                What to include
              </p>
              <p className="mt-3 leading-relaxed text-ink-300">
                Your name, the best number to reach you, where the project is, and a few details about what you have in
                mind. Photos and plans can be shared once we connect.
              </p>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <ul className="mt-8 flex flex-col gap-1">
              {DIVISIONS.map((division) => {
                const Icon = division.icon;
                return (
                  <li key={division.to}>
                    <Link
                      to={division.to}
                      className="group flex items-center gap-4 rounded-xl px-2 py-3 text-ink-200 transition hover:bg-white/5 hover:text-white"
                    >
                      <Icon className="h-5 w-5 text-brand-400" />
                      <span className="flex-1 font-semibold">{division.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
            <h3 className="font-display text-3xl text-ink-900">Send Us a Message</h3>
            <p className="mb-8 mt-2 leading-relaxed text-ink-600">
              Share a few details and we will be back in touch as soon as possible.
            </p>
            <InquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
