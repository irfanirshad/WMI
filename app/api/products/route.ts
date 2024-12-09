import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';
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
    let filteredProducts = [...products];
    
    if (query.data.category) {
      filteredProducts = filteredProducts.filter(
        product => product.category === query.data.category
      );
    }

    if (query.data.search) {
      const searchLower = query.data.search.toLowerCase();
      filteredProducts = filteredProducts.filter(
        product =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower)
      );
    }

    const page = query.data.page || 1;
    const limit = query.data.limit || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    const total = filteredProducts.length;

    return NextResponse.json({
      products: paginatedProducts,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        page,
        limit,
      },
    });
  } catch (error) {
    console.error('Products API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}