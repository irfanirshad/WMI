'use client';

import { TESTIMONIALS } from '@/lib/constants';
import { SectionHeader } from '@/components/ui/section-header';
import { TestimonialCard } from '@/components/home/testimonial-card';

export function TestimonialsSection() {
  return (
    <section className="container py-24 bg-secondary/50">
      <SectionHeader
        title="What Our Clients Say"
        description="Trusted by leading healthcare facilities and industrial organizations across Saudi Arabia."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.author} {...testimonial} />
        ))}
      </div>
    </section>
  );
}