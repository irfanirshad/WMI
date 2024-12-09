'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import type { Blog } from '@/lib/data/blogs';

interface BlogCardProps {
  post: Blog;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={post.coverImage.url}
          alt={post.coverImage.alt}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}