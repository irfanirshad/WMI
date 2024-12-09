'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProjectCard } from '@/components/projects/project-card';
import { ProjectsFilter } from '@/components/projects/projects-filter';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { projects } from '@/lib/data/projects';
import type { Project } from '@/lib/data/projects';

interface PaginationData {
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export function ProjectsList() {
  const searchParams = useSearchParams();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    pages: 1,
    page: 1,
    limit: 9
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = Number(searchParams.get('page')) || 1;
    const limit = 9;

    let filtered = [...projects];
    
    if (category) {
      filtered = filtered.filter(project => project.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.client.name.toLowerCase().includes(searchLower)
      );
    }

    const total = filtered.length;
    const pages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    setFilteredProjects(filtered.slice(startIndex, endIndex));
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
      <ProjectsFilter />
      <div className="md:col-span-3 space-y-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
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