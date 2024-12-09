'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="relative aspect-square">
        <Image
          src={product.images[0]?.url || '/placeholder.jpg'}
          alt={product.images[0]?.alt || product.name}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{product.description}</p>
        <p className="mt-4 font-semibold text-lg">
          ${product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}