import { NextResponse } from 'next/server';
import { blogs } from '@/lib/data/blogs';
import { z } from 'zod';

const querySchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  page: z.string().transform(Number).optional(),
  limit: z.string().transform(Number).optional(),
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = querySchema.safeParse(Object.fromEntries(searchParams));

  if (!query.success) {
    return NextResponse.json(
      { error: 'Invalid query parameters' },
      { status: 400 }
    );
  }

  try {
    let filteredBlogs = [...blogs];
    
    if (query.data.category) {
      filteredBlogs = filteredBlogs.filter(
        blog => blog.category === query.data.category
      );
    }

    if (query.data.search) {
      const searchLower = query.data.search.toLowerCase();
      filteredBlogs = filteredBlogs.filter(
        blog =>
          blog.title.toLowerCase().includes(searchLower) ||
          blog.excerpt.toLowerCase().includes(searchLower)
      );
    }

    const page = query.data.page || 1;
    const limit = query.data.limit || 9;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);
    const total = filteredBlogs.length;

    return NextResponse.json({
      blogs: paginatedBlogs,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    });
  } catch (error) {
    console.error('Blogs API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}