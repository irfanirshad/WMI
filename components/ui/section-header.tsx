'use client';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
      <p className="text-muted-foreground max-w-[800px]">{description}</p>
    </div>
  );
}