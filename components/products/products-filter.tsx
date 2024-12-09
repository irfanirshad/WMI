'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CATEGORIES = [
  { id: 'medical', name: 'Medical Equipment' },
  { id: 'industrial', name: 'Industrial Products' },
];

export function ProductsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryChange = (categoryId: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set('category', categoryId);
    } else {
      params.delete('category');
    }
    params.delete('page');
    router.push(`/products?${params.toString()}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          variant={!currentCategory ? 'default' : 'outline'}
          className="w-full justify-start"
          onClick={() => handleCategoryChange(null)}
        >
          All Products
        </Button>
        {CATEGORIES.map((category) => (
          <Button
            key={category.id}
            variant={currentCategory === category.id ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}