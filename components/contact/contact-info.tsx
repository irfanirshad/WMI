'use client';

import {
  Building,
  Mail,
  MapPin,
  Phone,
  Clock,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { useForm, ValidationError } from "@formspree/react";

const CONTACT_INFO = {
  address: 'P.O. Box: 11582 Jeddah 21463, Kingdom of Saudi Arabia',
  email: 'contact@watad-sa.com',
  phone: '+966 2 697 5052',
  hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
};

const DEPARTMENTS = [
  { name: 'Technical Manager', contactPerson: 'Eng. Haroon Hamdan', email: 'haroonhamdan@watad-sa.com', phone: '+966 55 611 0034' },
  { name: 'Customer Support', contactPerson: 'Mr. Khalid Hassen', email: 'khalid@watad-sa.com', phone: '+966 5 309 68499' },
  { name: 'CSS Department Manager', contactPerson: 'Eng. M. M. Irshad', email: 'mmirshad@watad-sa.com', phone: '+966 5 046 37698' },
  { name: 'CSS Department', contactPerson: 'Eng. Jabir Sideeque', email: 'jabir@watad-sa.com', phone: '+966 55 904 1229' },
  { name: 'Industrial Department', contactPerson: 'Eng. Josh CF Jirch', email: 'josh10@watad-sa.com', phone: '+966 54 176 9118' },
  { name: 'Finance Manager', contactPerson: 'Mr. Mohammed Heiba', email: 'm.heiba@watad-sa.com', phone: '+966 50 447 9293' },
  { name: 'Secretary', contactPerson: 'Mr. Omerdein', email: 'a.omerdin@watad-sa.com', phone: '+966 55 918 3496' },
];

export function ContactInfo() {
  // const [state, handleSubmit] = useForm("mjkvdokn");

  // const handleCustomSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target as HTMLFormElement);
  //   const email = formData.get("email") as string;
  //   const phone = formData.get("phone") as string;
  //   const subject = formData.get("subject") as string;
  //   const message = formData.get("message") as string;

  //   const payload = {
  //     email,
  //     message: `Name: ${subject}\nPhone: ${phone}\nMessage: ${message}`,
  //   };

  //   try {
  //     const response = await fetch('https://formspree.io/f/mjkvdokn', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(payload),
  //     });

  //     if (response.ok) {
  //       alert('Message sent successfully!');
  //     } else {
  //       alert('Failed to send the message.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('An error occurred while sending the message.');
  //   }
  // };

  return (
    <div className="space-y-6">
      {/* Main Office Contact Info Section */}
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

      {/* Departments Contact Info Section */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Departments</h2>
          <ul className="space-y-3">
            {DEPARTMENTS.map((dept, index) => (
              <li key={index} className="space-y-1">
                <p className="font-medium">{dept.name}</p>
                <p className="text-muted-foreground">Contact Person: {dept.contactPerson}</p>
                <p className="text-muted-foreground">Email: {dept.email}</p>
                <p className="text-muted-foreground">Phone: {dept.phone}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Custom Contact Us Form Section */}
      {/* <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">Custom Contact Us Form</h2>
          <form onSubmit={handleCustomSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block font-medium text-muted-foreground">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block font-medium text-muted-foreground">Phone Number</label>
              <input
                id="phone"
                type="text"
                name="phone"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-medium text-muted-foreground">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium text-muted-foreground">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 text-white bg-primary rounded-md hover:bg-primary-dark"
            >
              Submit
            </button>
          </form>
        </CardContent>
      </Card> */}
    </div>
  );
}
