import { supabase } from '@/lib/supabase';

export interface InquiryInput {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  message: string;
}

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiry(values: InquiryInput): InquiryErrors {
  const errors: InquiryErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.';
  }
  if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number so we can reach you.';
  }
  if (!values.address.trim()) {
    errors.address = 'Please enter the project address or town.';
  }
  if (!values.message.trim()) {
    errors.message = 'Please include a few details about your project.';
  }

  return errors;
}

export async function submitInquiry(values: InquiryInput): Promise<void> {
  const { error } = await supabase.from('inquiries').insert({
    kind: 'quote',
    name: values.name.trim(),
    email: values.email.trim() || null,
    phone: values.phone.trim() || null,
    address: values.address.trim() || null,
    service: values.service || null,
    message: values.message.trim() || null,
  });

  if (error) {
    throw new Error('We could not send your request. Please try again or call us directly.');
  }
}
