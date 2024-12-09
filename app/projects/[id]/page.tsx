import { notFound } from 'next/navigation';
import { ProjectDetails } from '@/components/projects/project-details';
import { projects } from '@/lib/data/projects';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  if (!project) return {};

  return {
    title: `${project.title} | Al Watad Medical Est.`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.id);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}