// const mongoose = require('mongoose');
// require('dotenv').config({ path: '.env.local' });

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
// }

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//     enum: ['medical', 'industrial'],
//   },
//   specifications: [{
//     name: String,
//     value: String,
//   }],
//   images: [{
//     url: String,
//     alt: String,
//   }],
//   brochureUrl: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const PRODUCTS = [
  {
    name: 'Advanced MRI Scanner',
    description: 'High-performance 3T MRI scanner with advanced imaging capabilities for detailed diagnostic imaging.',
    category: 'medical',
    specifications: [
      { name: 'Field Strength', value: '3.0 Tesla' },
      { name: 'Bore Size', value: '70cm' },
      { name: 'Scan Time', value: '10-30 minutes' },
      { name: 'Weight Capacity', value: 'Up to 250kg' },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
        alt: 'Advanced MRI Scanner',
      },
    ],
    brochureUrl: '/brochures/mri-scanner.pdf',
  },
  {
    name: 'Medical Gas Pipeline System',
    description: 'Complete medical gas distribution system for hospitals, including oxygen, nitrous oxide, and medical air.',
    category: 'medical',
    specifications: [
      { name: 'Pipe Material', value: 'Medical Grade Copper' },
      { name: 'Pressure Rating', value: '400 PSI' },
      { name: 'Compliance', value: 'ISO 7396-1' },
      { name: 'Gas Types', value: 'O2, N2O, Air, Vacuum' },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
        alt: 'Medical Gas Pipeline System',
      },
    ],
    brochureUrl: '/brochures/getinge.pdf',
  },
  {
    name: 'CSSD Sterilizer',
    description: 'Hospital-grade steam sterilizer for central sterile supply department with advanced cycle options.',
    category: 'medical',
    specifications: [
      { name: 'Chamber Size', value: '600L' },
      { name: 'Temperature Range', value: '121°C - 134°C' },
      { name: 'Cycle Time', value: '20-60 minutes' },
      { name: 'Power', value: '440V, 3-Phase' },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
        alt: 'CSSD Sterilizer',
      },
    ],
    brochureUrl: '/brochures/getinge.pdf',
  },
  {
    name: 'Patient Monitor',
    description: 'Multi-parameter patient monitor with touchscreen display and wireless connectivity.',
    category: 'medical',
    specifications: [
      { name: 'Screen Size', value: '15.6 inches' },
      { name: 'Parameters', value: 'ECG, SpO2, NIBP, Temp' },
      { name: 'Battery Life', value: '4 hours' },
      { name: 'Weight', value: '4.5kg' },
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1581091226825-c6a89f4742a5',
        alt: 'Patient Monitor',
      },
    ],
    brochureUrl: '/brochures/getinge.pdf',
  },
];

// async function seedProducts() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');
    
//     // Clear existing products
//     await Product.deleteMany({});
//     console.log('Cleared existing products');
    
//     // Insert new products
//     await Product.insertMany(PRODUCTS);
//     console.log('Successfully seeded products database');
    
//     process.exit(0);
//   } catch (error) {
//     console.error('Error seeding database:', error);
//     process.exit(1);
//   }
// }

// seedProducts();