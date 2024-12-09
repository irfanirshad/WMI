'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogCard } from '@/components/blog/blog-card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { blogs } from '@/lib/data/blogs';
import type { Blog } from '@/lib/data/blogs';

interface PaginationData {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export function BlogList() {
  const searchParams = useSearchParams();
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    pages: 1,
    page: 1,
    limit: 9
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = Number(searchParams.get('page')) || 1;
    const limit = 9;

    let filtered = [...blogs];
    
    if (category) {
      filtered = filtered.filter(blog => blog.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchLower) ||
        blog.excerpt.toLowerCase().includes(searchLower)
      );
    }

    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    setFilteredBlogs(filtered.slice(startIndex, endIndex));
    setPagination({
      total,
      pages,
      page,
      limit
    });
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No blog posts found</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} post={blog} />
            ))}
          </div>
          {pagination.pages > 1 && (
            <div className="flex justify-center gap-2">
              {Array.from({ length: pagination.pages }, (_, i) => (
                <Button
                  key={i}
                  variant={pagination.page === i + 1 ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    const params = new URLSearchParams(searchParams.toString());
                    params.set('page', String(i + 1));
                    window.history.pushState(null, '', `?${params.toString()}`);
                  }}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}