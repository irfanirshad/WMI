'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
}

export function BlogCard({ title, description, date, readTime, slug }: BlogCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-sm">
          <time dateTime={date}>{formatDate(date)}</time>
          • {readTime}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full">
          <Link href={`/blog/${slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}