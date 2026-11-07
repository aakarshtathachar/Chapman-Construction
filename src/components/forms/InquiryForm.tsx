import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { PROJECT_TYPES } from '@/data/siteContent';
import { submitInquiry, validateInquiry, type InquiryErrors, type InquiryInput } from '@/lib/inquiries';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const EMPTY_VALUES: InquiryInput = { name: '', email: '', phone: '', address: '', service: '', message: '' };

const inputBase =
  'w-full rounded-xl border bg-paper/60 px-4 py-3.5 text-ink-900 placeholder:text-ink-400 transition focus:bg-white focus:outline-none focus:ring-4';
const inputClass = `${inputBase} border-ink-900/10 focus:border-brand-500 focus:ring-brand-500/20`;
const inputErrorClass = `${inputBase} border-error-600 focus:border-error-600 focus:ring-error-600/20`;

interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}

function Field({ id, label, optional, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-semibold text-ink-800">
        {label}
        {optional && <span className="text-xs font-medium text-ink-400">Optional</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-error-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function InquiryForm() {
  const [values, setValues] = useState<InquiryInput>(EMPTY_VALUES);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [serverError, setServerError] = useState('');

  const updateField =
    (field: keyof InquiryInput) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((previous) => ({ ...previous, [field]: event.target.value }));
      setErrors((previous) => ({ ...previous, [field]: undefined }));
    };

  const fieldProps = (field: keyof InquiryInput) => ({
    id: `quote-${field}`,
    value: values[field],
    onChange: updateField(field),
    className: errors[field] ? inputErrorClass : inputClass,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `quote-${field}-error` : undefined,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const found = validateInquiry(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('submitting');
    setServerError('');
    try {
      await submitInquiry(values);
      setValues(EMPTY_VALUES);
      setStatus('success');
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex animate-fade-up flex-col items-start gap-4 rounded-2xl bg-success-50 p-8">
        <CheckCircle2 className="h-10 w-10 text-success-700" />
        <h4 className="font-display text-2xl text-ink-900">Thank you for reaching out!</h4>
        <p className="leading-relaxed text-ink-700">
          We received your message and will be back in touch as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-ink-900 underline decoration-brand-500 decoration-2 underline-offset-4 hover:text-brand-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="quote-name" label="Full name" error={errors.name}>
          <input type="text" autoComplete="name" maxLength={120} placeholder="Your name" {...fieldProps('name')} />
        </Field>
        <Field id="quote-phone" label="Phone" error={errors.phone}>
          <input type="tel" autoComplete="tel" maxLength={40} placeholder="508-000-0000" {...fieldProps('phone')} />
        </Field>
      </div>

      <Field id="quote-address" label="Project address" error={errors.address}>
        <input
          type="text"
          autoComplete="street-address"
          maxLength={200}
          placeholder="Street, town"
          {...fieldProps('address')}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="quote-email" label="Email" optional error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
            {...fieldProps('email')}
          />
        </Field>
        <Field id="quote-service" label="Type of project" optional>
          <select {...fieldProps('service')}>
            <option value="">Select a project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="quote-message" label="Tell us about your project" error={errors.message}>
        <textarea
          rows={4}
          maxLength={2000}
          placeholder="What are you looking to build? Pool, septic, addition, new home..."
          {...fieldProps('message')}
          className={`${fieldProps('message').className} resize-y`}
        />
      </Field>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-xl bg-error-50 p-4 text-sm text-error-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-ink-900 px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? 'Sending...' : 'Send Message'}
        {submitting ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <ArrowRight className="h-5 w-5 text-brand-400 transition group-hover:translate-x-1" />
        )}
      </button>
    </form>
  );
}
