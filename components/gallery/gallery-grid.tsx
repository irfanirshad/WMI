'use client';

import { useState } from 'react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { GalleryFilter } from '@/components/gallery/gallery-filter';

// This would typically come from your API/database
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Advanced MRI Machine',
    category: 'medical',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
    description: 'State-of-the-art MRI machine installation',
  },
  {
    id: 2,
    title: 'Industrial Automation System',
    category: 'industrial',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    description: 'Automated production line system',
  },
  {
    id: 3,
    title: 'Surgical Equipment',
    category: 'medical',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
    description: 'Modern surgical equipment setup',
  },
  {
    id: 4,
    title: 'Wellness Operating Theatre',
    category: 'industrial',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
    description: 'Industrial manufacturing facility',
  },
  // Add more items as needed
];

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredItems = selectedCategory
    ? GALLERY_ITEMS.filter(item => item.category === selectedCategory)
    : GALLERY_ITEMS;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <GalleryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <AspectRatio ratio={4/3}>
                <Zoom>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Zoom>
              </AspectRatio>
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}