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
    title: 'The Future of Medical Imaging',
    slug: 'future-of-medical-imaging',
    content: `
      The field of medical imaging is experiencing rapid advancement with the integration of artificial intelligence and machine learning technologies. These innovations are revolutionizing how healthcare professionals diagnose and treat patients.

      Modern imaging systems now offer unprecedented clarity and detail, allowing for earlier detection of various conditions. The integration of AI assists radiologists in identifying patterns and anomalies that might be missed by the human eye alone.

      Key developments include:
      - Advanced 3D visualization
      - Real-time image processing
      - AI-assisted diagnosis
      - Reduced radiation exposure
      - Faster scan times

      These improvements not only enhance diagnostic accuracy but also improve patient comfort and safety during procedures.
    `,
    excerpt: 'Exploring the latest advancements in medical imaging technology and how AI is transforming diagnostic capabilities.',
    author: {
      name: 'Dr. Sarah Ahmed',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2'
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'Medical Imaging Future'
    },
    category: 'medical',
    publishedAt: '2024-03-15'
  },
  {
    id: '2',
    title: 'Modern CSSD Practices',
    slug: 'modern-cssd-practices',
    content: `
      Central Sterile Supply Department (CSSD) practices have evolved significantly in recent years, incorporating automation and advanced sterilization techniques to ensure the highest standards of infection control.

      Modern CSSD facilities utilize state-of-the-art equipment and validated processes to maintain sterility assurance levels. The implementation of tracking systems and quality controls has greatly improved efficiency and safety.

      Key aspects of modern CSSD operations:
      - Automated washing and disinfection
      - Computer-controlled sterilization cycles
      - Real-time monitoring systems
      - Validated packaging methods
      - Electronic documentation

      These advancements ensure consistent sterilization results and enhance patient safety.
    `,
    excerpt: 'Understanding modern sterilization techniques and practices in Central Sterile Supply Departments.',
    author: {
      name: 'Eng. Mohammed Ali',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf'
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
      alt: 'CSSD Practices'
    },
    category: 'medical',
    publishedAt: '2024-03-10'
  },
  {
    id: '3',
    title: 'Industrial Automation Trends 2024',
    slug: 'industrial-automation-trends-2024',
    content: `
      The industrial automation sector is witnessing significant transformations in 2024, with new technologies reshaping manufacturing processes and operational efficiency.

      Smart factories are becoming increasingly common, leveraging IoT devices and advanced robotics to create more efficient and flexible production lines. The integration of AI and machine learning is enabling predictive maintenance and real-time optimization.

      Key trends include:
      - Advanced robotics and cobots
      - IoT-enabled equipment monitoring
      - AI-driven process optimization
      - Digital twin technology
      - Edge computing applications

      These innovations are helping manufacturers improve productivity while reducing operational costs.
    `,
    excerpt: 'Key trends shaping the future of industrial automation and manufacturing efficiency.',
    author: {
      name: 'Eng. Abdullah Al-Otaibi',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      alt: 'Industrial Automation'
    },
    category: 'industrial',
    publishedAt: '2024-03-05'
  }
];