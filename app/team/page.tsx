import { Metadata } from 'next';
import { TeamGrid } from '@/components/team/team-grid';
import { TeamHeader } from '@/components/team/team-header';

export const metadata: Metadata = {
  title: 'Our Team | Al Watad Medical Est.',
  description: 'Meet our dedicated team of professionals committed to excellence in medical and industrial solutions.',
};

export default function TeamPage() {
  return (
    <div className="container py-8 space-y-8">
      <TeamHeader />
      <TeamGrid />
    </div>
  );
}