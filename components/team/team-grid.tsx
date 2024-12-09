'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import { teamMembers } from '@/lib/data/team';

export function TeamGrid() {
  const manager = teamMembers.find(member => member.isManager);
  const team = teamMembers.filter(member => !member.isManager);

  return (
    <div className="space-y-12">
      {manager && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Leadership</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={manager.image}
                  alt={manager.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">{manager.name}</h3>
                  <p className="text-muted-foreground">{manager.role}</p>
                </div>
                <p className="text-muted-foreground">{manager.shortBio}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${manager.contact.email}`} className="hover:text-primary">
                      {manager.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <a href={`tel:${manager.contact.phone}`} className="hover:text-primary">
                      {manager.contact.phone}
                    </a>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/team/${manager.id}`}>View Profile</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <Card key={member.id} className="overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{member.shortBio}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/team/${member.id}`}>View Profile</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}