'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CATEGORIES = [
  { id: 'medical', name: 'Medical Equipment' },
  { id: 'industrial', name: 'Industrial Products' },
];

interface GalleryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function GalleryFilter({ selectedCategory, onCategoryChange }: GalleryFilterProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          variant={!selectedCategory ? 'default' : 'outline'}
          className="w-full justify-start"
          onClick={() => onCategoryChange(null)}
        >
          All Images
        </Button>
        {CATEGORIES.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}