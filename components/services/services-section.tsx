'use client';

import { SERVICES } from '@/lib/constants';
import { ServiceCard } from '@/components/home/service-card';
import { SectionHeader } from '@/components/ui/section-header';

export function ServicesSection() {
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Our Services"
        description="Comprehensive medical and industrial solutions backed by expertise and dedication"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            Icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}