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
      title: 'King Abdul Aziz Specialist Hospital - Medical Gas System Installation',
      description: `
        Complete design and implementation of a state-of-the-art medical gas system for a 500-bed capacity hospital. 
        The project included the installation of oxygen manifolds, medical air, and vacuum systems in compliance with HTM 2022 standards.
      `,
      client: {
        name: 'King Abdul Aziz Specialist Hospital',
        location: 'Jeddah, Saudi Arabia'
      },
      category: 'medical',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1710074213379-2a9c2653046a',
          alt: 'Medical Gas System Installation'
        }
      ],
      completionDate: '2022-05-10',
      testimonial: {
        content: 'The system has been reliable and efficient, ensuring uninterrupted care for our patients.',
        author: 'Dr. Ahmed Al-Rahman',
        position: 'Hospital Director'
      }
    },
    {
      id: '2',
      title: 'Maternity & Pediatric Hospital - Medical Gas Piping Network',
      description: `
        Fabrication and installation of a comprehensive medical gas piping network for a 200-bed hospital.
        Conducted training programs for in-house medical gas personnel to ensure smooth operations.
      `,
      client: {
        name: 'Maternity & Pediatric Hospital',
        location: 'Dammam, Saudi Arabia'
      },
      category: 'medical',
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1682145152082-b2a19dd292fb',
          alt: 'Medical Gas Piping Network'
        }
      ],
      completionDate: '2023-03-12',
      testimonial: {
        content: 'The installation was flawless, and the training provided has been invaluable for our staff.',
        author: 'Eng. Layla Hassan',
        position: 'Facilities Manager'
      }
    },
    {
      id: '3',
      title: 'Prince Musad Bin Abdul Aziz Hospital - Oxygen Manifold Upgrade',
      description: `
        Replacement and upgrade of the hospital's oxygen manifold system to meet the latest DIN standards.
        The project ensured uninterrupted oxygen supply to the facility’s critical care units.
      `,
      client: {
        name: 'Prince Musad Bin Abdul Aziz Hospital',
        location: 'Hail, Saudi Arabia'
      },
      category: 'medical',
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1682145152082-b2a19dd292fb',
          alt: 'Oxygen Manifold Upgrade'
        }
      ],
      completionDate: '2023-07-18',
      testimonial: {
        content: 'The upgraded system has greatly enhanced our operational efficiency.',
        author: 'Dr. Khalid Al-Otaibi',
        position: 'Chief Medical Officer'
      }
    },
    {
      id: '4',
      title: 'SGH Riyadh - Private Sector Medical Gas System Installation',
      description: `
        Designed and implemented a medical gas system for a 300-bed private hospital. 
        The project involved the latest technologies and compliance with both HTM 2022 and German DIN standards.
      `,
      client: {
        name: 'Saudi German Hospital (SGH)',
        location: 'Riyadh, Saudi Arabia'
      },
      category: 'medical',
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1682145152082-b2a19dd292fb',
          alt: 'Medical Gas System at SGH'
        }
      ],
      completionDate: '2024-01-10',
      testimonial: {
        content: 'A fantastic project execution! The modern system meets all our needs perfectly.',
        author: 'Eng. Sara Al-Harbi',
        position: 'Technical Lead'
      }
    },
    {
      id: '5',
      title: 'Haqel General Hospital - Vacuum Plant Installation',
      description: `
        Installation and commissioning of a medical vacuum plant for a 150-bed hospital, ensuring reliable performance 
        and compliance with international safety standards.
      `,
      client: {
        name: 'Haqel General Hospital',
        location: 'Tabuk, Saudi Arabia'
      },
      category: 'medical',
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1682145152082-b2a19dd292fb',
          alt: 'Vacuum Plant Installation'
        }
      ],
      completionDate: '2023-09-25',
      testimonial: {
        content: 'The vacuum system has been highly dependable, enhancing our overall efficiency.',
        author: 'Eng. Hatem Al-Qadi',
        position: 'Project Supervisor'
      }
    },
    {
      id: '6',
      title: 'Al-Nour General Hospital - Staff Training Program',
      description: `
        Conducted on-the-job training sessions for hospital staff on the operation and maintenance of advanced medical gas systems.
        The training included practical exercises and adherence to HTM 2022 standards.
      `,
      client: {
        name: 'Al-Nour General Hospital',
        location: 'Makkah, Saudi Arabia'
      },
      category: 'training',
      images: [
        {
          url: 'https://plus.unsplash.com/premium_photo-1682145152082-b2a19dd292fb',
          alt: 'Staff Training Program'
        }
      ],
      completionDate: '2023-11-05',
      testimonial: {
        content: 'The training has empowered our team with the skills to maintain high operational standards.',
        author: 'Dr. Waleed Al-Mutairi',
        position: 'Hospital Administrator'
      }
    }
  ];
  