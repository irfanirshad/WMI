import { NextResponse } from 'next/server';
import { projects } from '@/lib/data/projects';
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
    let filteredProjects = [...projects];
    
    if (query.data.category) {
      filteredProjects = filteredProjects.filter(
        project => project.category === query.data.category
      );
    }

    if (query.data.search) {
      const searchLower = query.data.search.toLowerCase();
      filteredProjects = filteredProjects.filter(
        project =>
          project.title.toLowerCase().includes(searchLower) ||
          project.description.toLowerCase().includes(searchLower) ||
          project.client.name.toLowerCase().includes(searchLower)
      );
    }

    const page = query.data.page || 1;
    const limit = query.data.limit || 9;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);
    const total = filteredProjects.length;

    return NextResponse.json({
      projects: paginatedProjects,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    });
  } catch (error) {
    console.error('Projects API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}