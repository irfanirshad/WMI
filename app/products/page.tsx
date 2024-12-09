import { ProductsList } from '@/components/products/products-list';
import { ProductsHeader } from '@/components/products/products-header';

export const metadata = {
  title: 'Products | Al Watad Medical Est.',
  description: 'Browse our comprehensive range of medical and industrial equipment.',
};

export default function ProductsPage() {
  return (
    <div className="container py-8 space-y-8">
      <ProductsHeader />
      <ProductsList />
    </div>
  );
}