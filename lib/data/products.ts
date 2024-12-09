export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  specifications: Array<{
    name: string;
    value: string;
  }>;
  images: Array<{
    url: string;
    alt: string;
  }>;
  brochureUrl?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Advanced MRI Scanner Pro X1',
    description: 'State-of-the-art 3T MRI scanner with AI-powered imaging capabilities.',
    category: 'medical',
    price: 1200000,
    specifications: [
      { name: 'Field Strength', value: '3.0 Tesla' },
      { name: 'Bore Size', value: '70cm' },
      { name: 'AI Features', value: 'Advanced image reconstruction, Automatic positioning' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'MRI Scanner Pro X1'
    }],
    brochureUrl: '/brochures/mri-scanner-x1.pdf'
  },
  {
    id: '2',
    name: 'Digital X-Ray System DX2000',
    description: 'High-resolution digital X-ray system with wireless detector.',
    category: 'medical',
    price: 85000,
    specifications: [
      { name: 'Resolution', value: '3.6 lp/mm' },
      { name: 'Detector Size', value: '43cm x 43cm' },
      { name: 'Preview Time', value: '2 seconds' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8',
      alt: 'Digital X-Ray System'
    }]
  },
  {
    id: '3',
    name: 'Automated CSSD System',
    description: 'Fully automated central sterile supply department system.',
    category: 'medical',
    price: 150000,
    specifications: [
      { name: 'Capacity', value: '500L' },
      { name: 'Cycle Time', value: '25-45 minutes' },
      { name: 'Display', value: '10" Touch Screen' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
      alt: 'CSSD System'
    }]
  }
];