'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/lib/data/products';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
            <p className="text-muted-foreground mt-2">{product.description}</p>
            {/* <p className="mt-4 text-2xl font-bold">{product.price.toLocaleString()}</p> */}
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={product.images[0]?.url}
              alt={product.images[0]?.alt}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex gap-4">
            {product.brochureUrl && (
              <Button asChild>
                <a href={product.brochureUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </a>
              </Button>
            )}
            <Button asChild variant="outline">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Request Quote
              </Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Specifications</h2>
            <dl className="space-y-4">
              {product.specifications.map((spec) => (
                <div key={spec.name}>
                  <dt className="font-medium text-muted-foreground">{spec.name}</dt>
                  <dd className="mt-1">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}