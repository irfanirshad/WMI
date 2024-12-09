'use client';

import Image from 'next/image';
import { formatDate } from '@/lib/utils';

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    publishedAt: string;
    author: {
      name: string;
      image: string;
    };
    coverImage: {
      url: string;
      alt: string;
    };
  };
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="container py-8 max-w-3xl">
      <header className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={post.author.image}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium">{post.author.name}</div>
              <time className="text-sm text-muted-foreground">
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </div>
        </div>
      </header>

      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.alt}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none">
        {post.content}
      </div>
    </article>
  );
}