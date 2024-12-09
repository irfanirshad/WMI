import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';

export const metadata = {
  title: 'Contact Us | Al Watad Medical Est.',
  description: 'Get in touch with us for any inquiries about our medical and industrial products and services.',
};

export default function ContactPage() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}