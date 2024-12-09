import { ServicesSection } from '@/components/services/services-section';

export const metadata = {
  title: 'Services | Al Watad Medical Est.',
  description: 'Our comprehensive range of medical and industrial services.',
};

export default function ServicesPage() {
  return (
    <div className="container py-8">
      <ServicesSection />
    </div>
  );
}