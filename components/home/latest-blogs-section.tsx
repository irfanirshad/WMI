'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { BlogCard } from '@/components/home/blog-card';

const LATEST_POSTS = [
  {
    title: 'Latest Advances in Medical Imaging Technology',
    description: 'Exploring the newest developments in diagnostic imaging equipment and their impact on healthcare.',
    date: '2024-03-15',
    readTime: '5 min read',
    slug: 'latest-advances-medical-imaging',
  },
  {
    title: 'Industrial Automation Trends 2024',
    description: 'Key trends shaping the future of industrial automation and manufacturing efficiency.',
    date: '2024-03-10',
    readTime: '4 min read',
    slug: 'industrial-automation-trends-2024',
  },
  {
    title: 'Healthcare Equipment Maintenance Guide',
    description: 'Best practices for maintaining medical equipment to ensure optimal performance and longevity.',
    date: '2024-03-05',
    readTime: '6 min read',
    slug: 'healthcare-equipment-maintenance',
  },
];

export function LatestBlogsSection() {
  return (
    <section className="container py-24">
      <SectionHeader
        title="Latest Insights"
        description="Stay updated with the latest news and insights from the medical and industrial sectors."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {LATEST_POSTS.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}