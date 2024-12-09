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
  achievements?: string[];
  education?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "ahmad-al-sayed",
    name: "Ahmad Al-Sayed",
    role: "General Manager",
    shortBio: "Leading Al Watad Medical with over 20 years of healthcare industry experience.",
    fullBio: "Ahmad Al-Sayed has been at the forefront of medical equipment distribution in Saudi Arabia for over two decades. Under his leadership, Al Watad Medical has grown to become one of the region's most trusted providers of medical and industrial solutions. His vision for excellence and commitment to innovation has transformed healthcare delivery across numerous facilities.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    isManager: true,
    contact: {
      email: "ahmad.alsayed@alwatadmedical.com",
      phone: "+966 11 234 5678"
    },
    expertise: [
      "Healthcare Management",
      "Strategic Planning",
      "Medical Equipment",
      "Business Development"
    ],
    achievements: [
      "Led company growth by 300% over 5 years",
      "Established partnerships with leading global manufacturers",
      "Pioneered advanced medical gas systems in Saudi hospitals"
    ],
    education: [
      "MBA, King Saud University",
      "B.Eng. Biomedical Engineering, King Fahd University"
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/ahmad-al-sayed",
      twitter: "https://twitter.com/ahmad_alsayed"
    }
  },
  {
    id: "sarah-al-qahtani",
    name: "Sarah Al-Qahtani",
    role: "Technical Director",
    shortBio: "Expert in medical equipment installation and maintenance.",
    fullBio: "Sarah brings extensive technical expertise in medical equipment installation, maintenance, and staff training. Her dedication to technical excellence ensures our clients receive the highest quality support.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    isManager: false,
    contact: {
      email: "sarah.qahtani@alwatadmedical.com",
      phone: "+966 11 234 5679"
    },
    expertise: [
      "Medical Equipment Installation",
      "Technical Training",
      "Quality Assurance"
    ]
  },
  {
    id: "mohammed-al-rashid",
    name: "Mohammed Al-Rashid",
    role: "Sales Manager",
    shortBio: "Driving business growth through strategic partnerships.",
    fullBio: "Mohammed leads our sales team with a focus on building lasting relationships with healthcare facilities across the Kingdom. His understanding of client needs has been instrumental in our expansion.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    isManager: false,
    contact: {
      email: "mohammed.rashid@alwatadmedical.com",
      phone: "+966 11 234 5680"
    },
    expertise: [
      "Sales Strategy",
      "Client Relations",
      "Market Analysis"
    ]
  },
  {
    id: "fatima-al-harbi",
    name: "Fatima Al-Harbi",
    role: "Quality Assurance Manager",
    shortBio: "Ensuring the highest standards in medical equipment.",
    fullBio: "Fatima oversees our quality assurance processes, ensuring all products and services meet international standards and regulatory requirements.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    isManager: false,
    contact: {
      email: "fatima.harbi@alwatadmedical.com",
      phone: "+966 11 234 5681"
    },
    expertise: [
      "Quality Control",
      "Regulatory Compliance",
      "Process Optimization"
    ]
  },
  {
    id: "abdullah-al-otaibi",
    name: "Abdullah Al-Otaibi",
    role: "Service Engineer",
    shortBio: "Specialized in medical imaging equipment maintenance.",
    fullBio: "Abdullah specializes in the installation and maintenance of advanced medical imaging equipment. His technical expertise ensures optimal performance of critical healthcare systems.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    isManager: false,
    contact: {
      email: "abdullah.otaibi@alwatadmedical.com",
      phone: "+966 11 234 5682"
    },
    expertise: [
      "Medical Imaging Systems",
      "Equipment Maintenance",
      "Technical Support"
    ]
  },
  {
    id: "nora-al-salem",
    name: "Nora Al-Salem",
    role: "Customer Relations Manager",
    shortBio: "Dedicated to exceptional customer service and support.",
    fullBio: "Nora leads our customer relations team, ensuring client satisfaction through responsive support and proactive communication.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909",
    isManager: false,
    contact: {
      email: "nora.salem@alwatadmedical.com",
      phone: "+966 11 234 5683"
    },
    expertise: [
      "Customer Service",
      "Communication",
      "Problem Resolution"
    ]
  },
  {
    id: "khalid-al-zahrani",
    name: "Khalid Al-Zahrani",
    role: "Logistics Manager",
    shortBio: "Optimizing supply chain and delivery operations.",
    fullBio: "Khalid manages our logistics operations, ensuring timely delivery and efficient inventory management of medical equipment across Saudi Arabia.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    isManager: false,
    contact: {
      email: "khalid.zahrani@alwatadmedical.com",
      phone: "+966 11 234 5684"
    },
    expertise: [
      "Supply Chain Management",
      "Inventory Control",
      "Logistics Operations"
    ]
  }
];