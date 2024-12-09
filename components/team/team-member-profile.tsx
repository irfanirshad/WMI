'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Linkedin, Twitter, ArrowLeft } from 'lucide-react';
import type { TeamMember } from '@/lib/data/team';

interface TeamMemberProfileProps {
  member: TeamMember;
}

export function TeamMemberProfile({ member }: TeamMemberProfileProps) {
  return (
    <div className="container py-8">
      <Button
        variant="ghost"
        asChild
        className="mb-8"
      >
        <Link href="/team">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Team
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{member.name}</h1>
              <p className="text-xl text-muted-foreground">{member.role}</p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <h2>About</h2>
            <p>{member.fullBio}</p>

            {member.achievements && (
              <>
                <h2>Key Achievements</h2>
                <ul>
                  {member.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </>
            )}

            {member.education && (
              <>
                <h2>Education</h2>
                <ul>
                  {member.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Contact Information</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a
                    href={`mailto:${member.contact.email}`}
                    className="text-sm hover:text-primary"
                  >
                    {member.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a
                    href={`tel:${member.contact.phone}`}
                    className="text-sm hover:text-primary"
                  >
                    {member.contact.phone}
                  </a>
                </div>
              </div>

              {member.socialLinks && (
                <div className="flex gap-2">
                  {member.socialLinks.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  )}
                  {member.socialLinks.twitter && (
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Areas of Expertise</h2>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}