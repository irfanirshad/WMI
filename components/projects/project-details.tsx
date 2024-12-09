'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building, Quote } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Project } from '@/lib/data/projects';

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <div className="flex flex-wrap gap-4 mt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                <span>{project.client.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{project.client.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(project.completionDate)}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={project.images[0]?.url || '/placeholder.jpg'}
              alt={project.images[0]?.alt || project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p>{project.description}</p>
          </div>

          {project.testimonial && (
            <Card className="bg-muted/50">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg mb-4">
                  {project.testimonial.content}
                </blockquote>
                <footer>
                  <div className="font-semibold">{project.testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {project.testimonial.position}
                  </div>
                </footer>
              </CardContent>
            </Card>
          )}
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-muted-foreground">Category</dt>
                <dd className="mt-1 capitalize">{project.category}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Client</dt>
                <dd className="mt-1">{project.client.name}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Location</dt>
                <dd className="mt-1">{project.client.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-muted-foreground">Completed</dt>
                <dd className="mt-1">{formatDate(project.completionDate)}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}