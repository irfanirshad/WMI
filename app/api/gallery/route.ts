import { NextResponse } from 'next/server';
import { z } from 'zod';

const querySchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
});

// Static gallery data
const galleryItems = [
  {
    id: '1',
    title: 'Advanced MRI Machine',
    description: 'State-of-the-art MRI machine installation',
    category: 'medical',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
    alt: 'MRI Machine',
  },
  {
    id: '2',
    title: 'Industrial Automation System',
    description: 'Automated production line system',
    category: 'industrial',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    alt: 'Automation System',
  },
  {
    id: '3',
    title: 'Surgical Equipment',
    description: 'Modern surgical equipment setup',
    category: 'medical',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
    alt: 'Surgical Equipment',
  },
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = querySchema.parse(Object.fromEntries(searchParams));
    
    let items = [...galleryItems];
    
    if (query.category) {
      items = items.filter(item => item.category === query.category);
    }
    
    if (query.search) {
      const searchRegex = new RegExp(query.search, 'i');
      items = items.filter(item => 
        searchRegex.test(item.title) || 
        searchRegex.test(item.description)
      );
    }

    return NextResponse.json(items);
  } catch (error) {
    console.error('Gallery API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}