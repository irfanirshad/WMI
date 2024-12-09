'use client';

import { ArrowRight, ShoppingCart, Phone, FolderKanban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36 lg:py-40">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Excellence in Medical &<br />Industrial Solutions
        </h1>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
          Providing cutting-edge medical equipment and industrial products with unmatched expertise
          and support across Saudi Arabia.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/products">
              <ShoppingCart className="mr-2 h-5 w-5" />
              View Products
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Get a Quote
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/projects">
              <FolderKanban className="mr-2 h-5 w-5" />
              Explore Projects
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </div>
  );
}