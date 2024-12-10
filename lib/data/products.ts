export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
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
    name: 'Liquid Oxygen Storage Tank 5000L',
    description: 'High-capacity liquid oxygen tank designed for hospitals and healthcare facilities.',
    category: 'medical',
    price: 'Please contact us',
    specifications: [
      { name: 'Capacity', value: '5000 Liters' },
      { name: 'Material', value: 'Stainless Steel' },
      { name: 'Compliance', value: 'ISO 9001, CE Marked' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1583912372139-6a46eb6eb119',
      alt: 'Liquid Oxygen Storage Tank'
    }],
    brochureUrl: '/brochures/getinge.pdf'
  },
  {
    id: '2',
    name: 'Advanced Medical Vacuum Pump',
    description: 'Efficient vacuum pump for critical medical applications.',
    category: 'industrial',
    price: 'Please contact us',
    specifications: [
      { name: 'Flow Rate', value: '50 L/min' },
      { name: 'Noise Level', value: 'Less than 60 dB' },
      { name: 'Compliance', value: 'HTM 2022 Certified' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1579684288402-e3e337bcc7af',
      alt: 'Medical Vacuum Pump'
    }],
    brochureUrl: '/brochures/getinge.pdf'
  },
  {
    id: '3',
    name: 'Donaldson Ultra Filter System',
    description: 'Advanced air filtration system for medical gas plants.',
    category: 'medical',
    price: 'Please contact us',
    specifications: [
      { name: 'Efficiency', value: '99.9% at 0.1 Micron' },
      { name: 'Capacity', value: '300 m³/h' },
      { name: 'Material', value: 'Aluminum and Polypropylene' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1583912372139-6a46eb6eb119',
      alt: 'Ultra Filter System'
    }],
    brochureUrl: '/brochures/getinge.pdf'
  },
  {
    id: '4',
    name: 'Automated Medical Gas Manifold',
    description: 'Reliable and automated manifold for oxygen and N2O distribution.',
    category: 'medical',
    price: 'Please contact us',
    specifications: [
      { name: 'Gas Types Supported', value: 'Oxygen, N2O, Medical Air' },
      { name: 'Capacity', value: '10 Cylinders' },
      { name: 'Control', value: 'Fully Automated' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'Medical Gas Manifold'
    }],
    brochureUrl: '/brochures/getinge.pdf'
  },
  {
    id: '5',
    name: 'Medical Outlet Panel with Digital Indicators',
    description: 'Wall-mounted medical gas outlet with integrated pressure indicators.',
    category: 'medical',
    price: 'Please contact us',
    specifications: [
      { name: 'Supported Gases', value: 'Oxygen, N2O, Vacuum, Air' },
      { name: 'Display', value: 'Digital Pressure Readout' },
      { name: 'Material', value: 'High-Grade Plastic' }
    ],
    images: [{
      url: 'https://plus.unsplash.com/premium_photo-1682145152082-b2a19dd292fb',
      alt: 'Medical Outlet Panel'
    }],
    brochureUrl: '/brochures/getinge.pdf'
  }
];

