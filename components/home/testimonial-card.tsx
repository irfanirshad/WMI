'use client';

import { Quote } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export function TestimonialCard({ quote, author, role, organization }: TestimonialCardProps) {
  return (
    <Card className="bg-background">
      <CardContent className="pt-6">
        <Quote className="w-8 h-8 text-primary mb-4" />
        <blockquote className="text-lg mb-4">{quote}</blockquote>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
        <div className="text-sm text-muted-foreground">{organization}</div>
      </CardFooter>
    </Card>
  );
}