export interface Project {
  id: string;
  title: string;
  description: string;
  client: {
    name: string;
    location: string;
  };
  category: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
  completionDate: string;
  testimonial?: {
    content: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'King Fahad Medical City - Imaging Department Upgrade',
    description: 'Complete overhaul of the imaging department with latest equipment.',
    client: {
      name: 'King Fahad Medical City',
      location: 'Riyadh, Saudi Arabia'
    },
    category: 'medical',
    images: [{
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'KFMC Imaging Department'
    }],
    completionDate: '2024-01-15',
    testimonial: {
      content: 'The upgrade has significantly improved our diagnostic capabilities.',
      author: 'Dr. Abdullah Al-Saud',
      position: 'Head of Radiology'
    }
  },
  {
    id: '2',
    title: 'Al-Noor Specialist Hospital - CSSD Modernization',
    description: 'Installation of automated CSSD system with staff training.',
    client: {
      name: 'Al-Noor Specialist Hospital',
      location: 'Makkah, Saudi Arabia'
    },
    category: 'medical',
    images: [{
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
      alt: 'CSSD Installation'
    }],
    completionDate: '2024-02-20',
    testimonial: {
      content: 'The new system has improved efficiency by 60%.',
      author: 'Eng. Fatima Al-Rashid',
      position: 'Operations Director'
    }
  }
];