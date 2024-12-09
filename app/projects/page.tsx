import { ProjectsList } from '@/components/projects/projects-list';
import { ProjectsHeader } from '@/components/projects/projects-header';

export const metadata = {
  title: 'Projects | Al Watad Medical Est.',
  description: 'Explore our successful medical and industrial projects across Saudi Arabia.',
};

export default function ProjectsPage() {
  return (
    <div className="container py-8 space-y-8">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}