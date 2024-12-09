'use client';

import {
  Building,
  Mail,
  MapPin,
  Phone,
  Clock,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CONTACT_INFO = {
  address: '123 King Fahd Road, Riyadh, Saudi Arabia',
  email: 'info@alwatadmedical.com',
  phone: '+966 11 234 5678',
  hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
};

const DEPARTMENTS = [
  {
    name: 'Sales Department',
    email: 'sales@alwatadmedical.com',
    phone: '+966 11 234 5679',
  },
  {
    name: 'Technical Support',
    email: 'support@alwatadmedical.com',
    phone: '+966 11 234 5680',
  },
  {
    name: 'HR Department',
    email: 'careers@alwatadmedical.com',
    phone: '+966 11 234 5681',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Main Office</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Phone</p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-muted-foreground hover:text-primary"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-muted-foreground">{CONTACT_INFO.hours}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Departments</h2>
          <div className="space-y-6">
            {DEPARTMENTS.map((dept) => (
              <div key={dept.name} className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  <h3 className="font-medium">{dept.name}</h3>
                </div>
                <div className="ml-6 space-y-1">
                  <a
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Mail className="w-4 h-4" />
                    {dept.email}
                  </a>
                  <a
                    href={`tel:${dept.phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Phone className="w-4 h-4" />
                    {dept.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}