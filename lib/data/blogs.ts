export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: {
    name: string;
    image: string;
  };
  coverImage: {
    url: string;
    alt: string;
  };
  category: string;
  publishedAt: string;
}

export const blogs: Blog[] = [
    {
      id: '1',
      title: 'Revolutionizing Medical Gas Systems',
      slug: 'revolutionizing-medical-gas-systems',
      content: `
        Medical gas systems are critical to modern healthcare infrastructure. Recent innovations in monitoring and safety measures ensure that hospitals can provide uninterrupted, high-quality care.
  
        The adoption of IoT and real-time analytics in medical gas management is paving the way for smarter, safer, and more efficient operations.
      `,
      excerpt: 'How innovative technologies are improving medical gas systems for better patient care.',
      author: {
        name: 'Eng. Haroon Hamdan',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
      },
      coverImage: {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        alt: 'Medical Gas Systems'
      },
      category: 'medical',
      publishedAt: '2024-03-20'
    },
    {
      id: '2',
      title: 'Modern Practices in CSSD Management',
      slug: 'modern-cssd-management',
      content: `
        Central Sterile Supply Departments (CSSD) play a pivotal role in infection control. This article explores the latest techniques and technologies transforming sterilization processes.
  
        Automation, tracking systems, and enhanced sterilization protocols ensure higher efficiency and patient safety.
      `,
      excerpt: 'Exploring advanced sterilization methods and innovations in CSSD practices.',
      author: {
        name: 'Eng. M.M. Irshad',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf'
      },
      coverImage: {
        url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
        alt: 'CSSD Innovations'
      },
      category: 'medical',
      publishedAt: '2024-03-18'
    },
    {
      id: '3',
      title: 'Customer Support Excellence in Healthcare',
      slug: 'customer-support-excellence-healthcare',
      content: `
        Effective customer support is essential for maintaining trust and satisfaction in the healthcare industry. This article highlights best practices for delivering outstanding support.
  
        From proactive communication to personalized solutions, the role of customer support is evolving to meet higher expectations.
      `,
      excerpt: 'Best practices for delivering exceptional customer support in the healthcare sector.',
      author: {
        name: 'Mr. Khalid Hassen',
        image: 'https://images.unsplash.com/photo-1679496125396-8d01c968d071'
      },
      coverImage: {
        url: 'https://images.unsplash.com/photo-1679496125396-8d01c968d071',
        alt: 'Customer Support'
      },
      category: 'customer-support',
      publishedAt: '2024-03-15'
    },
    {
      id: '4',
      title: 'Advances in Industrial Automation',
      slug: 'advances-industrial-automation',
      content: `
        Industrial automation continues to shape the manufacturing landscape. This post examines the latest technologies driving efficiency and productivity, including robotics and IoT.
  
        These advancements not only optimize production but also contribute to safer workplace environments.
      `,
      excerpt: 'Exploring how industrial automation is enhancing manufacturing efficiency and safety.',
      author: {
        name: 'Eng. Josh CF Jirch',
        image: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d'
      },
      coverImage: {
        url: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d',
        alt: 'Industrial Automation'
      },
      category: 'industrial',
      publishedAt: '2024-03-10'
    },
    {
      id: '5',
      title: 'Financial Management in Medical Establishments',
      slug: 'financial-management-medical-establishments',
      content: `
        Financial management in the medical sector requires a unique approach to balance cost-efficiency with quality care. Learn how modern tools and practices can streamline financial operations.
  
        From budgeting to compliance, financial managers face a range of challenges and opportunities in this dynamic field.
      `,
      excerpt: 'Effective financial strategies for medical establishments.',
      author: {
        name: 'Mr. Mohammed Heiba',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'
      },
      coverImage: {
          url: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d',
          alt: 'Financial Management'
      },
      category: 'finance',
      publishedAt: '2024-03-05'
    },
    {
      id: '6',
      title: 'Ensuring Sterility in Critical Healthcare Environments',
      slug: 'ensuring-sterility-critical-healthcare',
      content: `
        Maintaining sterility in healthcare environments is essential to prevent infections. This article discusses the role of CSSD managers and the importance of adherence to protocols.
  
        Modern equipment and continuous training are key to achieving excellence in sterility assurance.
      `,
      excerpt: 'The role of CSSD managers in maintaining sterile environments in healthcare facilities.',
      author: {
        name: 'Eng. Jabir Sideeque',
        image: 'https://images.unsplash.com/photo-1679496125396-8d01c968d071'
      },
      coverImage: {
        url: 'https://images.unsplash.com/photo-1679496125396-8d01c968d071',
        alt: 'Healthcare Sterility'
      },
      category: 'medical',
      publishedAt: '2024-03-03'
    }
  ];
  