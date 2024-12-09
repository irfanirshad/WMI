'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import type { Project } from '@/lib/data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={project.images[0]?.url || '/placeholder.jpg'}
          alt={project.images[0]?.alt || project.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{project.title}</CardTitle>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{project.client.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(project.completionDate)}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/projects/${project.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}