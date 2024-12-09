import { notFound } from 'next/navigation';
import { ProductDetails } from '@/components/products/product-details';
import { products } from '@/lib/data/products';
import { Metadata } from 'next';

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find(p => p.id === params.id);
  if (!product) return {};

  return {
    title: `${product.name} | Al Watad Medical Est.`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id);
  if (!product) notFound();

  return <ProductDetails product={product} />;
}