'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/products/product-card';
import { ProductsFilter } from '@/components/products/products-filter';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { products } from '@/lib/data/products';
import type { Product } from '@/lib/data/products';

interface PaginationData {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export function ProductsList() {
  const searchParams = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    pages: 1,
    page: 1,
    limit: 12
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = Number(searchParams.get('page')) || 1;
    const limit = 12;

    let filtered = [...products];
    
    if (category) {
      filtered = filtered.filter(product => product.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }

    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    setFilteredProducts(filtered.slice(startIndex, endIndex));
    setPagination({
      total,
      pages,
      page,
      limit
    });
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <ProductsFilter />
      <div className="md:col-span-3 space-y-6">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {pagination.pages > 1 && (
              <div className="flex justify-center gap-2">
                {Array.from({ length: pagination.pages }, (_, i) => (
                  <Button
                    key={i}
                    variant={pagination.page === i + 1 ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      const params = new URLSearchParams(searchParams.toString());
                      params.set('page', String(i + 1));
                      window.history.pushState(null, '', `?${params.toString()}`);
                    }}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}