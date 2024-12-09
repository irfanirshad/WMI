import { notFound } from 'next/navigation';
import { BlogPost } from '@/components/blog/blog-post';
import { blogs } from '@/lib/data/blogs';
import { Metadata } from 'next';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogs.find(blog => blog.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Al Watad Medical Est.`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogs.find(blog => blog.slug === params.slug);
  if (!post) notFound();

  return <BlogPost post={post} />;
}