// const mongoose = require('mongoose');
// require('dotenv').config({ path: '.env.local' });

// // Product Schema
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   category: { type: String, required: true, enum: ['medical', 'industrial'] },
//   specifications: [{ name: String, value: String }],
//   images: [{ url: String, alt: String }],
//   brochureUrl: String,
//   price: { type: Number, required: true },
//   inStock: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now }
// });

// // Blog Schema
// const blogSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   slug: { type: String, required: true, unique: true },
//   content: { type: String, required: true },
//   excerpt: { type: String, required: true },
//   author: { name: String, image: String },
//   coverImage: { url: String, alt: String },
//   category: { type: String, required: true },
//   publishedAt: { type: Date, default: Date.now },
//   createdAt: { type: Date, default: Date.now }
// });

// // Project Schema
// const projectSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   client: { name: String, location: String },
//   category: { type: String, required: true, enum: ['medical', 'industrial'] },
//   images: [{ url: String, alt: String }],
//   completionDate: Date,
//   testimonial: {
//     content: String,
//     author: String,
//     position: String
//   }
// });

// const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
// const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
// const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

// Sample Data
const PRODUCTS = [
  {
    name: 'Advanced MRI Scanner Pro X1',
    description: 'State-of-the-art 3T MRI scanner with AI-powered imaging capabilities.',
    category: 'medical',
    price: "Please contact us",
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
    name: 'Digital X-Ray System DX2000',
    description: 'High-resolution digital X-ray system with wireless detector.',
    category: 'medical',
    price: "Please contact us",
    specifications: [
      { name: 'Resolution', value: '3.6 lp/mm' },
      { name: 'Detector Size', value: '43cm x 43cm' },
      { name: 'Preview Time', value: '2 seconds' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8',
      alt: 'Digital X-Ray System'
    }],
    brochureUrl: '/brochures/mri-scanner-x1.pdf'
  },
  {
    name: 'Automated CSSD System',
    description: 'Fully automated central sterile supply department system.',
    category: 'medical',
    price: "Please contact us",
    specifications: [
      { name: 'Capacity', value: '500L' },
      { name: 'Cycle Time', value: '25-45 minutes' },
      { name: 'Display', value: '10" Touch Screen' }
    ],
    images: [{
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
      alt: 'CSSD System'
    }],
    brochureUrl: '/brochures/getinge-2.pdf'
  }
];

// const BLOGS = [
//   {
//     title: 'The Future of Medical Imaging',
//     slug: 'future-of-medical-imaging',
//     content: 'Detailed analysis of upcoming medical imaging technologies...',
//     excerpt: 'Exploring the latest advancements in medical imaging technology.',
//     author: {
//       name: 'Dr. Sarah Ahmed',
//       image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2'
//     },
//     coverImage: {
//       url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
//       alt: 'Medical Imaging Future'
//     },
//     category: 'medical'
//   },
//   {
//     title: 'Modern CSSD Practices',
//     slug: 'modern-cssd-practices',
//     content: 'Best practices for modern central sterile supply departments...',
//     excerpt: 'Understanding modern sterilization techniques and practices.',
//     author: {
//       name: 'Eng. Mohammed Ali',
//       image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf'
//     },
//     coverImage: {
//       url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
//       alt: 'CSSD Practices'
//     },
//     category: 'medical'
//   }
// ];

const BLOGS = [
  {
    title: 'Revolutionizing Medical Gas Systems',
    slug: 'revolutionizing-medical-gas-systems',
    content: 'Exploring advancements in medical gas distribution and management systems.',
    excerpt: 'How innovation is changing the landscape of medical gas solutions.',
    author: {
      name: 'Eng. Haroon Hamdan',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'Medical Gas Systems',
    },
    category: 'medical',
  },
  {
    title: 'Modern CSSD Management',
    slug: 'modern-cssd-management',
    content: 'Best practices for modern central sterile supply departments...',
    excerpt: 'Understanding modern sterilization techniques and practices.',
    author: {
      name: 'Eng. M M Irshad',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
      alt: 'CSSD Practices',
    },
    category: 'medical',
  },
  {
    title: 'Customer Support Excellence in Healthcare',
    slug: 'customer-support-excellence-healthcare',
    content: 'Strategies for enhancing customer support in healthcare settings.',
    excerpt: 'Improving client-patient interaction with innovative support models.',
    author: {
      name: 'Mr. Kalid Hassen',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'Customer Support',
    },
    category: 'support',
  },
  {
    title: 'Advances in Industrial Automation',
    slug: 'advances-industrial-automation',
    content: 'Key trends and technologies shaping manufacturing and logistics.',
    excerpt: 'Explore how new industrial automation techniques are improving efficiency.',
    author: {
      name: 'Eng. Jabirsideeque',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'Industrial Trends',
    },
    category: 'industry',
  },
  {
    title: 'Financial Management in Medical Establishments',
    slug: 'financial-management-medical-establishments',
    content: 'Understanding financial models for efficient healthcare management.',
    excerpt: 'How financial strategies impact healthcare delivery.',
    author: {
      name: 'Mr. Mohammed Heiba',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1579154204601-01588f351e67',
      alt: 'Financial Strategies',
    },
    category: 'finance',
  },
  {
    title: 'Ensuring Sterility in Critical Healthcare Operations',
    slug: 'ensuring-sterility-critical-healthcare',
    content: 'A detailed guide on maintaining optimal sterility standards.',
    excerpt: 'The role of hygiene and preparation in critical operations.',
    author: {
      name: 'Mr. Omerdein',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',
    },
    coverImage: {
      url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514',
      alt: 'Sterility in Operations',
    },
    category: 'medical',
  },
];



const PROJECTS = [
  {
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
    completionDate: new Date('2024-01-15'),
    testimonial: {
      content: 'The upgrade has significantly improved our diagnostic capabilities.',
      author: 'Dr. Abdullah Al-Saud',
      position: 'Head of Radiology'
    }
  },
  {
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
    completionDate: new Date('2024-02-20'),
    testimonial: {
      content: 'The new system has improved efficiency by 60%.',
      author: 'Eng. Fatima Al-Rashid',
      position: 'Operations Director'
    }
  }
];

// async function seedDatabase() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');

//     // Clear existing data
//     await Promise.all([
//       Product.deleteMany({}),
//       Blog.deleteMany({}),
//       Project.deleteMany({})
//     ]);
//     console.log('Cleared existing data');

//     // Insert new data
//     await Promise.all([
//       Product.insertMany(PRODUCTS),
//       Blog.insertMany(BLOGS),
//       Project.insertMany(PROJECTS)
//     ]);
//     console.log('Successfully seeded database');

//     process.exit(0);
//   } catch (error) {
//     console.error('Error seeding database:', error);
//     process.exit(1);
//   }
// }

// seedDatabase();