'use client';

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <Card className="relative overflow-hidden group">
      <CardHeader>
        <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
}