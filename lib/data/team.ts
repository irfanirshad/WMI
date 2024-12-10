import { LucideIcon, Briefcase, Stethoscope, Wrench, Calculator, Phone, Mail, FileSpreadsheet } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  image: string;
  isManager: boolean;
  contact: {
    email: string;
    phone: string;
  };
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "haroon-hamdan",
    name: "Eng. Haroon Hamdan",
    role: "Technical Manager",
    shortBio: "Technical Manager at Watad Medical.",
    fullBio: "Eng. Haroon Hamdan oversees technical operations and strategies at Watad Medical Establishment, focusing on medical and industrial solutions.",
    image: "/imgs/haroon.jpg",
    isManager: true,
    contact: {
      email: "haroonhamdan@watad-sa.com",
      phone: "+966 55 611 0034"
    },
    expertise: [
      "Technical Management",
      "Medical Gas",
      "Healthcare Solutions"
    ]
  },
  {
    id: "khalid-hassen",
    name: "Mr. Kalid Hassen",
    role: "Customer Support",
    shortBio: "Customer Support professional specializing in client communication.",
    fullBio: "Mr. Kalid Hassen brings a wealth of expertise to customer support, ensuring smooth client interactions for Watad Medical Establishment.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    isManager: false,
    contact: {
      email: "khalid@watad-sa.com",
      phone: "+966 5 309 68499"
    },
    expertise: [
      "Customer Service",
      "Client Communication"
    ]
  },
  {
    id: "mm-irshad",
    name: "Eng. M M Irshad",
    role: "CSS Department Manager",
    shortBio: "Manager specializing in CSS Department operations.",
    fullBio: "Eng. M M Irshad leads the CSS department, focusing on efficient delivery of services for Watad Medical Establishment.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isManager: false,
    contact: {
      email: "mmirshad@watad-sa.com",
      phone: "+966 5 04637698"
    },
    expertise: [
      "Department Management",
      "CSS Operations"
    ]
  },
  {
    id: "jabir-sideeque",
    name: "Eng. Jabir Sideeque",
    role: "CSS Department Specialist",
    shortBio: "Specialist in CSS operational processes.",
    fullBio: "Eng. Jabir Sideeque supports CSS Department projects and ensures operational efficiency at Watad Medical.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isManager: false,
    contact: {
      email: "jabir@watad-sa.com",
      phone: "+966 55 904 1229"
    },
    expertise: [
      "CSS Services",
      "Operational Management"
    ]
  },
  {
    id: "josh-jirch",
    name: "Eng. Josh CF Jirch",
    role: "Industrial Department Specialist",
    shortBio: "Specialist focused on industrial solutions.",
    fullBio: "Eng. Josh CF Jirch supports industrial solutions within Watad Medical Establishment, emphasizing strategic technical delivery.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isManager: false,
    contact: {
      email: "josh10@watad-sa.com",
      phone: "+966 54 176 9118"
    },
    expertise: [
      "Industrial Solutions",
      "Technical Strategy"
    ]
  },
  {
    id: "mohammed-heiba",
    name: "Mr. Mohammed Heiba",
    role: "Finance Manager",
    shortBio: "Finance Manager focusing on financial operations.",
    fullBio: "Mr. Mohammed Heiba leads financial operations, focusing on strategic financial planning and business growth.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    isManager: false,
    contact: {
      email: "m.heiba@watad-sa.com",
      phone: "+966 50 447 9293"
    },
    expertise: [
      "Finance Management",
      "Financial Planning"
    ]
  },
  {
    id: "omerdein-secretary",
    name: "Mr. Omerdein",
    role: "Finance Secretary",
    shortBio: "Finance Secretary ensuring smooth financial processes.",
    fullBio: "Mr. Omerdein supports financial administration and ensures day-to-day financial workflows run effectively.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    isManager: false,
    contact: {
      email: "a.omerdin@watad-sa.com",
      phone: "+966 55 918 3496"
    },
    expertise: [
      "Finance Support",
      "Administrative Coordination"
    ]
  }
];
