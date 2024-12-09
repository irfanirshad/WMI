'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export function ProjectsHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }
    router.push(`/projects?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Explore our successful medical and industrial projects across Saudi Arabia
          </p>
        </div>
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[300px]"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
      </div>
    </div>
  );
}