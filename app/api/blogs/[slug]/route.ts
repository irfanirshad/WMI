import { NextResponse } from 'next/server';
import { blogs } from '@/lib/data/blogs';

// export const dynamic = 'force-dynamic';
export const dynamic = "auto";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const blog = blogs.find(b => b.slug === params.slug);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'Blog not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error('Blog API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}