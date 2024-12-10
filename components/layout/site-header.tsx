'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MoonIcon, SunIcon, Stethoscope } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { COMPANY_NAME, NAVIGATION_ITEMS } from '@/lib/constants';

export function SiteHeader() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
      <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo/watad_logo.jpg" // Path to your logo in the public folder
            alt="Company Logo"
            width={120} // Set the desired width
            height={120} // Set the desired height
            // className="h-12 w-12"
          />
          <span className="font-bold">{COMPANY_NAME}</span>
        </Link>
        <nav className="ml-6 hidden gap-6 md:flex">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}