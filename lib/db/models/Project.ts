import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  client: {
    name: String,
    location: String,
  },
  category: {
    type: String,
    required: true,
    enum: ['medical', 'industrial'],
  },
  images: [{
    url: String,
    alt: String,
  }],
  completionDate: Date,
  testimonial: {
    content: String,
    author: String,
    position: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);