'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { BlogCard } from '@/components/home/blog-card';


const LATEST_POSTS = [
  {
    title: 'Revolutionizing Medical Gas Systems',
    description: 'Exploring advancements in medical gas distribution and management systems.',
    date: '2024-12-10',
    readTime: '5 min read',
    slug: 'revolutionizing-medical-gas-systems',
  },
  {
    title: 'Modern CSSD Management',
    description: 'Best practices for modern central sterile supply departments.',
    date: '2024-12-08',
    readTime: '4 min read',
    slug: 'modern-cssd-management',
  },
  {
    title: 'Financial Management in Medical Establishments',
    description: 'Understanding financial strategies for smooth healthcare operations.',
    date: '2024-12-01',
    readTime: '4 min read',
    slug: 'financial-management-medical-establishments',
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