import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { TeamMemberProfile } from '@/components/team/team-member-profile';
import { teamMembers } from '@/lib/data/team';

interface TeamMemberPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    id: member.id,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const member = teamMembers.find(m => m.id === params.id);
  if (!member) return {};

  return {
    title: `${member.name} - ${member.role} | Al Watad Medical Est.`,
    description: member.shortBio,
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = teamMembers.find(m => m.id === params.id);
  if (!member) notFound();

  return <TeamMemberProfile member={member} />;
}